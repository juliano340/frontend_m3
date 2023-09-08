import React from 'react'

function Principal ({ userName }){

    console.log(userName)
  return (
    <div className="containerPrincipal">
        <p>Olá {userName}</p>
    </div>
    
  )
}

export default Principal