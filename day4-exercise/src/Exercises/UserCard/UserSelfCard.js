import React from 'react';
import styles from './userselfcard.module.css';

const UserSelfCard = ({ user }) => {
	console.log(user);
	return (
		<div className={styles.conContainer}>
			<div className={styles.container}>
				<img src={user.image} alt="" />

				<div className={styles.nameContainer}>
					<p>{user.name}</p>
					<p>{user.surName}</p>
				</div>
				<div className={styles.footer}>
					<span>{user.gender} </span>
					<span>*</span>
					<span> {user.age}</span>
				</div>
			</div>
		</div>
	);
};
export default UserSelfCard;
