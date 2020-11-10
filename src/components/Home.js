import React from 'react'
import { useForm } from '../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { userNameSaved } from '../actions/actions'
import { Link } from 'react-router-dom'

export const Home = () => {
  
  const {name: employee} = useSelector(state => state.user)
  const dispatch = useDispatch()

const [userName, setUserName] = useForm({
  name:''
})
const { name } = userName;

const handleSubmit = (e) => {
  e.preventDefault()

  dispatch(userNameSaved(name))
}


console.log(name)
  return (
    <div className="home__container animate__animated animate__fadeIn" >

      <h1 className="home__title text-center"> Bienvenido a Kuepa CMR </h1>
      <h3 className="home__subtitle text-center"> Te deseamos un excelente dia </h3>

      <form className='home__input--container' onSubmit={handleSubmit}>
        <label>
          ¿Cual es tu nombre?
        </label>
        <input
          value={name}
          name="name"
          className="home__input-name"
          type="text"
          placeholder="Camila..."
          autoComplete="off"
          onChange={setUserName}
        />
      </form>

      {
        (employee !== '') && 
        <h4 className='home__message text-center'>
          Gracias, {employee}. Ya puedes ingresar a tu 
          <Link to='/panel'> panel</Link>
        </h4 >
      }
    </div>
  )
}
