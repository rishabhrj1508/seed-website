import React from 'react'
import ProfileCard from './ProfileComponent/profilecard'
import ProfileCard2 from './ProfileComponent/profilecard2'
import ProfileCard3 from './ProfileComponent/profilecard3'
import ProfileCard4 from './ProfileComponent/profilecard4'


export const profilefolder = () => {
  return (
    <div className='pc'>
        <ProfileCard/>
        <ProfileCard2/>
        <ProfileCard3/>
        <ProfileCard4/>
      </div>
  )
}
export default profilefolder;