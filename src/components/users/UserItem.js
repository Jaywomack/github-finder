import React from 'react'
import PropTypes from 'prop-types'

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
	////////////////////destructuring state

	return (
		<div className='card text-center'>
			<div>
				<img
					src={avatar_url}
					alt=''
					className='rounded-circle'
					style={{ width: '60px' }}
				/>
				<h3>{login}</h3>
			</div>
			<div>
				<button href={html_url} className='btn-dark btn-sm my-1'>
					More
				</button>
			</div>
		</div>
	)
}

UserItem.propTypes = {
	user: PropTypes.object.isRequired
}
export default UserItem
