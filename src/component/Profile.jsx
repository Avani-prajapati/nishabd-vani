import React from 'react'
import ProfilePage from './ProfilePage'
import SignIn from './SingIn'

export default function Profile({logout}) {
  return (
    <div className='px-14'>
    <ProfilePage logout={logout}></ProfilePage>
    </div>
  )
}