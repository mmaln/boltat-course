import React from 'react'
import families from '../../data.json'
import UserSelfCard from './UserSelfCard'
import styles from './userselfcard.module.css'

const UserCard = ({ user }) => {
  return (
    <div className={styles.userCardContainer}>
      <UserSelfCard user={user} />
      <div className={styles.marriedInfo}>
        Married To
        {user.marriedTo.map(el => {
          return <UserSelfCard user={families.find(person => person.id === el)} secondary />
        })}
      </div>
      <div className={styles.childrenInfo}>
        Children
        {user.children.map(el => {
          return <UserSelfCard user={families.find(person => person.id === el)} secondary />
        })}
      </div>
    </div>
  )
}

export default UserCard
