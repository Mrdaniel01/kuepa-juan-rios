import React from 'react'
import { Link } from 'react-router-dom'

export const SideClientCard = ({ name, team_tag, account_id }) => {
  return (
    <Link to={`profile/${account_id}`}>
      <article className="sideClientCard__container">
        <header className="sideClientCard__social">
          {team_tag}
        </header>
        <section className="sideClientCard__name">
          {name}
        </section>
      </article>
    </Link>
  )
}
