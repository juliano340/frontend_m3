import React, { useState } from 'react'
import './login.css'

const Login = ({onLogin, isLogged}) => {

    let valorEmail;
    let valorSenha;

    const user = {
        nome: 'Juliano',
        email: 'juliano340@gmail.com',
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

        if (email === user.email && senha === user.senha ) {
            
            onLogin(user.nome);
        } else {
            alert('usuário inválido!')
            setEmail('');
            setSenha('');
        }

    }
   

    const handleLoginClick = () => {
         
        // Quando o botão for clicado, chama a função onLogin com o nome como argumento
        onLogin(nome);
      };

    return (

       
        <div className="containerLogin">
            
            { !isLogged && (
                <>
                <h3>LOGIN</h3>
                <form action=''></form>
                <input value={email} required type="text" name="email" id="email" placeholder='E-mail' onChange={guardaEmail} />
                <input value={senha} required type="password" name="senha" id="senha" placeholder='Senha' onChange={guardaSenha} />
                <button onClick={handleLogin}>Entrar</button>
             </>
              ) }
        </div>




    )
}

export default Login