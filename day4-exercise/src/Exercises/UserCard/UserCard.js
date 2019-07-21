import React from 'react'
import families from '../../data.json'
import UserSelfCard from './UserSelfCard'
import styles from './userselfcard.module.css'

const UserCard = ({ user }) => {
  return (
    <div className={styles.userCardContainer}>
      <UserSelfCard user={user} />
      <div className={styles.marriedInfo} style={{ padding: '15px' }}>
        <p>
          Married To:
          {user.marriedTo.map(el => {
            return (
              <div style={{ margin: '7px 7px 7px 0px' }}>
                <a href=''>{el}</a>
              </div>
            )
          })}
        </p>
      </div>
      <div className={styles.childrenInfo} style={{ padding: '15px' }}>
        <p>
          Children:
          {user.children.map(el => {
            return (
              <div style={{ margin: '7px 7px 7px 0px' }}>
                <a href=''>{el}</a>
              </div>
            )
          })}
        </p>
      </div>
    </div>
  )
}

export default UserCard
