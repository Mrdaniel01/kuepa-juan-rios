import React from 'react'
import { useSelector } from 'react-redux'
import { SideClientCard } from './SideClientCard'

export const SideClientsNotification = () => {

  const { clients } = useSelector(state => state.client)
  const { loading, clientsArray} = clients;
  console.log(clientsArray)
  return (
    <div className="side-clients__container">
      {
        (!loading) &&
        clientsArray.map( (client) => {
          return <SideClientCard key={client.account_id} {...client} />
        })
      }
    </div>
  )
}
