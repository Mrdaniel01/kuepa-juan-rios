import React from 'react'
import { useParams } from "react-router-dom"
import { ProfileWithClient } from './ProfileWithClient'
import { MessageProfile } from './MessageProfile'

export const Profile = () => {

  const { account_id } = useParams();

  return (
    <section className="animate__animated animate__fadeIn">
    {
      (!account_id) ? <MessageProfile /> :

      <ProfileWithClient />
    }
    </section>
  )
}
