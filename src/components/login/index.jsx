import React, { useState } from 'react'
import './login.css'

const Login = ({onLogin, isLogged}) => {

    let valorEmail;
    let valorSenha;

    const user = {
        nome: 'Juliano',
        email: 'juliano',
        senha: '123'
    }

    const [email, setEmail] = useState(undefined);
    const [senha, setSenha] = useState(undefined);

  //Salva o valor da input email na variavel valorEmail:

    const guardaEmail = (event) => {

      setEmail(event.target.value);
    }

     //Salva o valor da input senha na variavel valorSenha:

     const guardaSenha = (event) => {

        setSenha(event.target.value);
    }

    const handleLogin = () => {
        

        if(email === '' || senha === '' || senha === undefined || email === undefined) {

            
            var aviso = document.querySelector('.dadosInvalidos');
            aviso.innerHTML = "Preencha os campos de e-mail e senha!"
            aviso.style.display = 'block';
            setTimeout(() => {
                
                aviso.style.display = 'none';
              }, 1500);
            return;
        }

        if (email === user.email && senha === user.senha ) {
            
            onLogin(user.nome);

        } else {
            
            var aviso = document.querySelector('.dadosInvalidos');
            aviso.innerHTML = "Usuário ou senha inválidos!"
            aviso.style.display = 'block';
            setEmail('');
            setSenha('');
            setTimeout(() => {
                
                aviso.style.display = 'none';
              }, 1500);
        }

    }
   

    const handleEnterKeyPress = (e) => {
        if (e.key === 'Enter') {
          // Se a tecla Enter for pressionada, clique no botão "Enviar"
          handleLogin();
        }
      };


    return (

       
        <div className="containerLogin">
            
            
            { !isLogged && (
                <>
                <div className="container">

                <h3>LOGIN</h3>
                <form action=''></form>
                <input value={email} required type="text" name="email" id="email" placeholder='E-mail' onChange={guardaEmail} />
                <input value={senha} required type="password" name="senha" id="senha" placeholder='Senha' onChange={guardaSenha} onKeyPress={handleEnterKeyPress} />
                <div className="dadosInvalidos">Usuário ou senha inválidos!</div>
                
                <button onClick={handleLogin}>Entrar</button>
                </div>
             </>
              ) }
        </div>




    )
}

export default Login