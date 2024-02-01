// import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: "midudev",
    name: "Miguel Angel Duran",
    isFollowing: true,
  },  
  {
    userName: "pheraln",
    name: "Pablo H.",
    isFollowing: false,
  },  
  {
    userName: "PacoHdez",
    name: "Paco Hdez",
    isFollowing: true,
  }, 
  {
    userName: "TMChein",
    name: "Tomas",
    isFollowing: true,
  },
]

export function App (){
  // Pasar props como objetos
  const midudev = {initialIsFollowing: true, userName: "midudev"}


  // Se pueden pasar funciones como parametros

  // const formatUser = user => `@${user}`
  // formatUserName={formatUser} 

  // Tambien se pueden pasar elementos
  // const formattedUserName = <span>@breiner</span>
  // formattedUserName={formattedUserName} 
  /* 
    Diferencia entre elemento y componente
    Componente = funcion que al ejecutarla te devuelve un elemento
    Elemento = Renderiza componentes
  */
  // React.Fragment para que haga la insercion sin mas codigo HTML
  return (
    // <React.Fragment> = <>
    // Pasar valores boleanos isFollowing={true} o isFollowing son valores verdaderos

  <div className='App'>

    {/* funcion dentro de otra funcion  */}
    {/* formatUserName es igual a la funcion formatUser que toma como parametro el userName para añadirle el @ */}
  {
    users.map(user => {
      const {userName, name, isFollowing} = user
      return (
        // La key es un identificador unico para ese elemento
        <TwitterFollowCard key={userName} userName={userName} initialIsFollowing={isFollowing}>
          {name}
        </TwitterFollowCard>
      )

    })
  }

    <TwitterFollowCard {...midudev}>
       {/* Renderizado de hijo*/}
       {/* Se pueden poner elementos en los children */}
      <strong> Miguel Ángel Duran </strong>
    </TwitterFollowCard>

    <TwitterFollowCard userName={"Brin29"} initialIsFollowing={false}>
     <strong> Breiner Stiven Parra </strong>
    </TwitterFollowCard>

    <TwitterFollowCard userName={"goncy"} initialIsFollowing>
      <strong>  Gonzalo Diaz </strong>
    </TwitterFollowCard>

    <TwitterFollowCard userName={"jonmircha"} initialIsFollowing>
     <strong> Jon Mircha </strong>
    </TwitterFollowCard>
  </div>
  )
}