import React from 'react'
import styles from './userselfcard.module.css'

const UserSelfCard = ({ user, secondary }) => {
  console.log(user)
  return (
    <div className={styles.conContainer}>
      <div className={secondary ? styles.container + ' ' + styles.containerPlus : styles.container}>
        <img src={user.image} alt='' />

        <div className={styles.nameContainer}>
          <p style={{ fontWeight: 'bold' }}>{user.name}</p>
          <p style={{ fontWeight: 'bold' }}>{user.surName}</p>
        </div>
        <div className={styles.footer}>
          <span>{user.gender} </span>
          <span
            style={{
              display: 'inline-block',
              width: '5px',
              backgroundColor: 'rgba(0, 0, 0, .9)',
              borderRadius: '50%',
              height: '5px',
              verticalAlign: 'middle'
            }}
          />
          <span> {user.age}</span>
        </div>
      </div>
    </div>
  )
}
export default UserSelfCard
