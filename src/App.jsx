import { useEffect, useState } from 'react'
import './App.css'
import Splash from './components/splash'
import Login from './components/login';
import Principal from './components/dashboard';

function App() {

  // Criando uma varíavel para mostrar a tela de splash:

  const [showSplash, setShowSplash] = useState(1);

  // Criando um timer com um useEffect para desativar o componente após 3 segundos:

  useEffect(() => {
    const temporizador = setTimeout(() => {
      setShowSplash(0);
    }, 1000);

    // Desativando o timer:

    return () => {
      
      clearTimeout(temporizador);
    };

  }, []);

  //Estado para gravar username = nome no componente Login:

  const [username, setUserName] = useState(undefined);

  //Estado para a aplicação saber se o usuário respondeu seu nome:
  
  const [loggedIn, setLoggedIn] = useState(false);
  
    // Função para alternar entre as telas de login e próximo componente

    const toggleLogin = (nome) => {
      setUserName(nome);
      setLoggedIn(!loggedIn);
    };

// Função deslogar:

function handleLogout() {

  setLoggedIn(!loggedIn);
  
}
  

  return (
    
    <>

      { showSplash ? <Splash/> 
       : (!loggedIn ? (
        <Login onLogin={toggleLogin}/> /* Passar a função onLogin como propriedade */
          
        ) : (
          <>
          
          
          <Principal userName={username} />
          </>
          
        ) 
        
       ) 
    
    }
      
    </>
  )
}

export default App
