import { useEffect, useState } from 'react'
import './App.css'
import useFecth from './hooks/useFecth'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'
import ModalConfirm from './components/ModalConfirm'

function App() {

  const [updateInfo, setUpdateInfo] = useState()

  const [closeForm, setCloseForm] = useState(true)

  const [closeModalConfirm, setcloseModalConfirm] = useState(true)

  const [userDeleted, setUserDeleted] = useState()

  const [userCreated, setUserCreated] = useState()

  const baseUrl = 'https://users-crud.academlo.tech'

  const [ users, getAllUsers, createNewUser, deleteUserById, updateUserById ] = useFecth(baseUrl, setCloseForm, setcloseModalConfirm)

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
      setUserCreated={setUserCreated}
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
            setUserDeleted={setUserDeleted}
            />
          ))
        }
      </div>
      <ModalConfirm
      closeModalConfirm={closeModalConfirm}
      setcloseModalConfirm={setcloseModalConfirm}
      userDeleted={userDeleted}
      closeForm={closeForm}
      setUserDeleted={setUserDeleted}
      userCreated={userCreated}
      />
    </div>
  )
}

export default App
