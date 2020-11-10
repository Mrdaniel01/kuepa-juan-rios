import React, { useEffect } from 'react'
import { useParams } from "react-router-dom"
import { useDispatch, useSelector  } from 'react-redux'
import { clientStartLoadingById } from '../actions/actions'

export const ProfileWithClient = () => {
  const dispatch = useDispatch()
  const { account_id } = useParams();
  useEffect(() => {
    dispatch(clientStartLoadingById(account_id))
  }, [dispatch, account_id])

  const { clientDetail } = useSelector(state => state.client)
  const { loading, clientData } = clientDetail;
  console.log(loading)

  return (
    <>
    {
      (loading) ? <p>Por favor espere...</p> :
      <div className="profile__container">
        <header className="profile__container--header">
          <img className="profile__photo" src={clientData.profile.avatarfull} alt={clientData.profile.name} />
          <h1 className="profile__title">{clientData.profile.name}</h1>
        </header>
      </div>
    }
    </>
  )
}
