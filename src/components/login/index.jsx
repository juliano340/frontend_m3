import React, { useState } from 'react'
import './login.css'

const Login = ({onLogin}) => {

    let valorDigitado

    const [nome, setNome] = useState(undefined);

  

    //Salva o valor da input na variavel:

    const validaNome = (event) => {

        valorDigitado = event.target.value;


    }

    const handleLoginClick = () => {
         
        // Quando o botão for clicado, chama a função onLogin com o nome como argumento
        onLogin(nome);
      };

    return (

       
        <div className="containerLogin">
            
            {nome === '' || nome === undefined ? (
                <>
                <h1>Seu nome?</h1>
                <input value={nome} type="text" name="nome" id="nome" placeholder='Seu nome...' onChange={validaNome} />
                <button onClick={() => setNome(valorDigitado)}>Enviar!</button>
             </>
            ) : (
                <>
                <h1>Olá, {nome}! </h1>
                <h2>😺</h2>
                     <p>Vamos começar?</p>
                     <button onClick={handleLoginClick}>Bora!</button>
                     </>
            )}
        </div>




    )
}

export default Login