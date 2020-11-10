import React from 'react'

export const GoalTeamPanel = () => {
  return (
    <div>
      <h3>Meta grupal</h3>

      <div className="goal-team__label">
        <small> Leads Obtenidos</small>
        <p>200/400</p>
      </div>
      <progress min='0' max='400' value='200'></progress>

      <div className="goal-team__label">
        <small> Matriculas realizadas </small>
        <p>50/100</p>
      </div>
      <progress min='0' max='400' value='200'></progress>

    </div>
  )
}
