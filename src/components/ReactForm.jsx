import React, { useState } from 'react'

export const ReactForm = () => {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const handleClick=(e)=>{
    e.preventDefault();
    alert(`${name} ${email}`)
  }
  return (
    <div>
      <h3>ReactForm</h3>
      <form>
        <div>
          <label>Username</label>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div>
          <label>Useremail</label>
          <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  )
}
