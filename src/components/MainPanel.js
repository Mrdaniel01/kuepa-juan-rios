import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clientsStartLoading } from '../actions/actions'
import { AgendaPanel } from './panel/AgendaPanel'
import { CallsPanel } from './panel/CallsPanel'
import { GoalTeamPanel } from './panel/GoalTeamPanel'
import { PlanPanel } from './panel/PlanPanel'
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
        (name) ? <h1 className="main-panel__title">¡Hola, <span className="capitalize">{name}</span> !</h1>
          : <h1 className="main-panel__title">¡Hola!</h1>
      }

      <div className="main-panel__top">
        <section>
          <CallsPanel />
        </section>
        <section>
          <GoalTeamPanel />
        </section>
      </div>
      <div className="main-panel__bottom">
        <section className="agenda-panel--container">
          <AgendaPanel />
        </section>
        <section>
          <PlanPanel />
          <PlanPanel />
          <PlanPanel />
        </section>
      </div>


      </main>
      <SideClientsNotification />
    </article>
  )
}
