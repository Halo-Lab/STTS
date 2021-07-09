import React from "react";
import s from './User.module.scss';
import IconLocation from "../assets/IconLocation/IconLocation";
import IconLink from "../assets/IconLink/IconLink";
import IconEmail from "../assets/IconEmail/IconEmail";


const User = ({data}) => {

  const {avatar_url = '/', name = '', bio = '', location = '', blog = '', email = ''} = data;
  return (
    <div className={s.content}>

      <div className={s.image}>
        <img src={avatar_url}/>
      </div>

      <div className={s.userInfo}>
        <h2>{name}</h2>
        <p className={s.bio}>{bio}</p>
      </div>

      <div className={s.contacts}>
        {location && <div className={s.icon}>
          <IconLocation/>
          <p>{location}</p>
        </div>}
        {blog && <div className={s.icon}>
          <IconLink/>
          <p>{blog}</p>
        </div>}
        {email && <div className={s.icon}>
          <IconEmail/>
          <p>{email}</p>
        </div>}
      </div>

    </div>
  )
}


export default User