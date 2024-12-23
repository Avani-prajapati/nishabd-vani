import React from 'react'
import ProfilePage from './ProfilePage'
import SignIn from './SingIn'

export default function Profile({logout}) {
  return (
    <div className='sm:px-14 px-3'>
    <ProfilePage logout={logout}></ProfilePage>
    </div>
  )
}