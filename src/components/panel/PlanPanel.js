import React from 'react'

export const PlanPanel = () => {
  return (
    <div className="plan-panel__card">
      <span className="plan-panel__card--total">
        30
      </span>
      <span className="plan-panel__card--details">
        <small className="inline-block">Leads de Contacto</small>
        <div className="flex">
          <span>&#x2706;</span>
          <p>15</p>
        </div>
        <div className="flex">
          <span>&#x2709;</span>
          <p>15</p>
        </div>
      </span>
    </div>
  )
}
