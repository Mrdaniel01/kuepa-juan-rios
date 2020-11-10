import React from 'react'

export const GoalTeamPanel = () => {
  return (
    <div>
      <h3>Meta grupal</h3>

      <div>
        Leads Obtenidos
        200/400
      </div>
      <progress min='0' max='400' value='200'></progress>
      <div>
        Matriculas realizadas
        50/100
      </div>
      <progress min='0' max='400' value='200'></progress>
    </div>
  )
}
