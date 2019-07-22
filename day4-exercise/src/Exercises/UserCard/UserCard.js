import React from 'react';
import families from '../../data.json';
import UserSelfCard from './UserSelfCard';
import styles from './userselfcard.module.css';

const UserCard = ({ user }) => {
	return (
		<div className={styles.userCardContainer}>
			<UserSelfCard user={user} />
			<div className={styles.marriedInfo} style={{ padding: '15px', margin: '20px auto' }}>
				Married To:
				{user.marriedTo.map(el => {
					return <UserSelfCard user={families.find(person => person.id === el)} />;
				})}
			</div>
			<div className={styles.childrenInfo} style={{}}>
				Children:
				{user.children.map(el => {
					return (
						<div style={{ border: '1px solid midnightblue', borderRadius: '15px', margin: '4px' }}>
							<UserSelfCard user={families.find(person => person.id === el)} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default UserCard;
