import './styles/UserCard.css'

const UserCard = ({user, deleteUserById, setUpdateInfo, handleOpenForm, setUserDeleted}) => {

  const handleDelete = ( ) => {
    deleteUserById('/users', user.id)
    const nameDeleted = `${user.first_name} ${user.last_name}`
    setUserDeleted(nameDeleted)
  }

  const handleUpdate = () => {
    setUpdateInfo(user)
    handleOpenForm()
  }
  return (
    <article className='user'>
      <h2 className='user__name'>{`${user.first_name} ${user.last_name}`}</h2>
      <hr className='user__line'/>
      <ul className='user__list'>
        <li className='user__item'>
            <span className='user__label'>Email </span>
            <span>{user.email}</span>
        </li>
        <li className='user__item'>
            <span className='user__label'>Birthday </span>
            <span> <i className='bx bx-gift'></i> {user.birthday}</span>
        </li>
      </ul>
      <hr className='user__line'/>
      <footer className='button'>
       <button className='button__delete' onClick={handleDelete} ><i className='bx bx-trash bx-sm'></i></button>
       <button className='button__update' onClick={handleUpdate}><i className='bx bx-edit-alt bx-sm' ></i></button>
      </footer>
    </article>
  )
}

export default UserCard
