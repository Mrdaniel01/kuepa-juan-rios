import React from 'react'
import { useForm } from '../hooks/useForm'

export const Home = () => {

const [userName, setUserName] = useForm({
  name:''
})
const { name } = userName;

console.log(name)
  return (
    <div className="home__container animate__animated animate__fadeIn" >

      <h1 className="home__title text-center"> Bienvenido a Kuepa CMR </h1>
      <h3 className="home__subtitle text-center"> Te deseamos un excelente dia </h3>

      <form className='home__input--container'>
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
    </div>
  )
}
