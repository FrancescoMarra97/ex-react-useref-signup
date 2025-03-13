import { useMemo, useRef, useState } from 'react'

import './App.css'

const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789"
const symbols = "!@#$%^&*()-_=+[]{}|;:'\\\",.<>?/~";

function App() {
  /* const [name, setName] = useState("") */
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  /*  const [specialization, setSpecialization] = useState("")  */
  const [experience, setExperience] = useState(0)
  const [description, setDescription] = useState("")

  const specialzationRef = useRef(null)
  const nameRef = useRef(null)


  const isUsernameValid = useMemo(() => {
    const charsValid = username.split("").every((char) =>
      letters.includes(char.toLowerCase()) ||
      numbers.includes(char)
    )
    return charsValid && username.length >= 6

  }, [username])

  const isPasswordValid = useMemo(() => {
    return (
      password.length >= 8 &&
      password.split("").some((char) => letters.includes(char)) &&
      password.split("").some((char) => numbers.includes(char)) &&
      password.split("").some((char) => symbols.includes(char))
    )
  }, [password])

  const isDescriptionValid = useMemo(() => {
    return description.trim().length < 1000 && description.trim().length > 100
  }, [description])
  const handleSubmit = (e) => {
    e.preventDefault()
    const specialization = specialzationRef.current.value;
    const name = nameRef.current.value;

    if (name != "" &&
      name.length > 6 &&
      isUsernameValid &&
      isPasswordValid &&
      specialization != "" &&
      experience > 0 &&
      isDescriptionValid) {
      console.log({
        name,
        username,
        password,
        specialization,
        experience,
        description
      })
      setDescription("");
      setExperience("")
      setPassword("")
      setUsername("")
      nameRef.current.value = "";
      specialzationRef.current.value = "";
    } else {
      alert("Errore: Compilare il form correttamemnte")
    }
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label >Nome Completo:</label>
          <input
            type="text"
            className='name'
            ref={nameRef}

          />
        </div>

        <div>

          <label>Username</label>
          <input
            type="text"
            className='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {username.trim() && (
            <p style={{ color: isUsernameValid ? 'green' : 'red' }}>{isUsernameValid ? "Username Valido" : "Username Non Valido"}</p>
          )}

          <label>Password</label>
          <input type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {password.trim() && (
            <p style={{ color: isPasswordValid ? 'green' : 'red' }}>{isPasswordValid ? "Password Valida" : "Password Non Valida"}</p>
          )}
        </div>

        <div>
          <label>Specializzazione</label>
          <select
            ref={specialzationRef}
          >
            <option value="">Seleziona una specializzazione</option>
            <option value="Full Stack">Full Stack</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
          <label>Anni di esperienza</label>
          <input type="number"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />

        </div>
        <label>Descriviti</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {description.trim() && (
          <p style={{ color: isDescriptionValid ? 'green' : 'red' }}>{isDescriptionValid ? "Descrizione Valida" : "Descriozione Non Valida"}</p>
        )}
        <button type='submit' >Submit</button>
      </form>
    </>
  )
}

export default App
