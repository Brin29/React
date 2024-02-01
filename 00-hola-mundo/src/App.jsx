// import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App (){
  // Se pueden pasar funciones como props
  const formatUser = (user) => {
    return `@${user}`
  }

  // React.Fragment para que haga la insercion sin mas codigo HTML
  return (
    // <React.Fragment> = <>
    // Pasar valores boleanos isFollowing={true} o isFollowing son valores verdaderos

  <div className='App'>
    {/* funcion dentro de otra funcion  */}
    <TwitterFollowCard formatUserName={formatUser} userName={"midudev"} name={"Miguel Angel"} isFollowing/>

    <TwitterFollowCard formatUserName={formatUser} userName={"Brin29"} name={"Breiner Parra"} isFollowing/>

    <TwitterFollowCard formatUserName={formatUser} userName={"goncy"} name={"Gonzalo Diaz"} isFollowing/>

    <TwitterFollowCard formatUserName={formatUser} userName={"jonmircha"} name={"Jon Mircha"} isFollowing/>
  </div>
  )
}