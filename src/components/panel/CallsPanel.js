import React from 'react'

export const CallsPanel = () => {
  return (
    <>
      <div className='call-panel__indicator--container'  >
        <div className='call-panel__indicator'>
          50%
        </div>
      </div>

      <section className='inline-block calls-panel__goals'>
        <div>
          <small> Leads Obtenidos </small>
          <p> 50/100 </p>
        </div>

        <div>
          <small> Matriculas Finalizadas </small>
          <p> 50/100 </p>
        </div>

        <div>
          <small> Cola de llamados </small>
          <p> 50/100 </p>
        </div>
      </section>
    </>
  )
}
