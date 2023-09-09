import React from 'react'

function Principal ({ userName, onLogout }){

    console.log(userName)
  return (
    <div className="containerPrincipal">
        <p>Olá {userName}</p>
        <button onClick={onLogout}>Deslogar</button>
    </div>
    
  )
}

export default Principal