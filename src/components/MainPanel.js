import React from 'react'
import { SideClientsNotification } from './SideClientsNotification'

export const MainPanel = () => {
  return (
    <article className="main-panel__container">
      <main className="main-panel__main">
      <header className="main-panel__header">
        <input type="search" className="main-panel__header--input" placeholder="Search..." />
        <p>Wed, 20 May</p>
      </header>
      <h1 className="main-panel__title">
        Hola, Jorge
      </h1>

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
