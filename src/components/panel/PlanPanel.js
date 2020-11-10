import React from 'react'

export const PlanPanel = () => {
  return (
    <div className="plan-panel__card">
      <span className="plan-panel__card--total">
        30
      </span>
      <span className="plan-panel__card--details">
        <h5 className="inline-block">Leads de Contacto</h5>
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
