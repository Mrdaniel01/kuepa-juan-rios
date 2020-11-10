import React from 'react'
import { Link } from 'react-router-dom'
import linkLogo from '../assets/linkLogo.svg'

export const MessageProfile = () => {
  return (
    <>
      <h2 className='message__profile'>Recuerda que debes ir al <Link to="/panel">Panel Principal</Link> para seleccionar un cliente</h2>
      <img className='message__profile--img' src={linkLogo} alt="Link a panel principal" />
    </>
  )
}
