import React from 'react'

export default function LoginReg() {
    
    const login =(e) =>{
        e.preventDefault()
        localStorage.setItem('login', true)
        alert("you are logged Inn!")
    }
    const Logout =(e) =>{
        e.preventDefault()
        localStorage.removeItem('login')
        alert('Loggout')

             
    }


  return (
    <div>

        <form action="">
            <input type="text" />
            <input type="text" />
            <button type="submit" onClick={login}>Send</button>
            <button type="submit" onClick={Logout}>Logout</button>
        </form>

    </div>
  )
}
