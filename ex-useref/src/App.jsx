import { useState } from 'react'

import './App.css'


function App() {
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [specialization, setSpecialization] = useState("")
  const [experience, setExperience] = useState("")
  const [description, setDescription] = useState("")



  const handleSubmit = (e) => {
    e.preventDefault()
    if (name != "" && name.length > 6 && username != "" && username.length > 6 && password != "" && password.length > 6 && specialization != "" && experience > 0 && description != "" && description.length > 6) {
      console.log({
        name,
        username,
        password,
        specialization,
        experience,
        description
      })
      setName("");
      setDescription("");
      setExperience("")
      setPassword("")
      setSpecialization("")
      setUsername("")
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
            value={name}
            onChange={(e) => setName(e.target.value)}
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

          <label>Password</label>
          <input type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label>Specializzazione</label>
          <select
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}>
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
        <button type='submit' >Submit</button>
      </form>
    </>
  )
}

export default App
