import { useEffect, useState } from 'react'
import './App.css'
import useFecth from './hooks/useFecth'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'

function App() {

  const [updateInfo, setUpdateInfo] = useState()

  const [closeForm, setCloseForm] = useState(true)

  const baseUrl = 'https://users-crud.academlo.tech'

  const [ users, getAllUsers, createNewUser, deleteUserById, updateUserById ] = useFecth(baseUrl, setCloseForm)

  useEffect(() => {
    getAllUsers('/users')
  }, [])

  const handleOpenForm = () => {
    setCloseForm(false)
  }
  

  return (
    <div className='user-container'>
      <div className='header'>
      <h1 className='title'>Users</h1>
      <button className='formuser__btnn' onClick={handleOpenForm}>+ Open Form</button>
      </div>
      <FormUser 
      createNewUser={createNewUser}
      updateInfo={updateInfo}
      updateUserById={updateUserById}
      setUpdateInfo={setUpdateInfo}
      closeForm={closeForm}
      setCloseForm={setCloseForm}
      />
      <div className='user__container'>
        {
          users?.map(user => (
            <UserCard 
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
            handleOpenForm={handleOpenForm}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
