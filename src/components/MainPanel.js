import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clientsStartLoading } from '../actions/actions'
import { SideClientsNotification } from './SideClientsNotification'

export const MainPanel = () => {

  const {name} = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(clientsStartLoading())
  }, [dispatch])

  return (
    <article className="main-panel__container animate__animated animate__fadeIn">
      <main className="main-panel__main">
      <header className="main-panel__header">
        <label htmlFor="search">
          Busca por Id
        </label>
        <input id="search" type="search" className="main-panel__header--input" placeholder="Busca..." />
      </header>
      {
        (name) ? <h1 className="main-panel__title">¡Hola, {name}!</h1>
          : <h1 className="main-panel__title">¡Hola!</h1>
      }

      <div className="main-panel__top">
        <section>
          Cola de llamadas
        </section>
        <section>
          Meta grupal
        </section>
      </div>
      <div className="main-panel__bottom">
        <section>
          Conexiones de agenda
        </section>
        <section>
          Tu plan de hoy
        </section>
      </div>


      </main>
      <SideClientsNotification />
    </article>
  )
}
