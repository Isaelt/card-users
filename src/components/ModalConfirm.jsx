import './styles/ModalConfirm.css'

const ModalConfirm = ({closeModalConfirm, setcloseModalConfirm, userDeleted, closeForm, setUserDeleted, userCreated}) => {

  const handleCloseModal = () => {
    setcloseModalConfirm(true)
    setUserDeleted()
    
  }

  // condicion1 ? SiCondicion1SeCumple : condicion2 ? SiCondicon2SeCumple : SiNoSeCumplioNingunaCondicion

  return (
    <div className={`modal-container ${closeModalConfirm && 'close-modal'}`}>
      <div className='modal__confirm'>
        {userDeleted ? <h3>Delete User</h3> : closeForm ? <h3>Add User</h3> : <p>no se ha completado mimguma accion</p>}
        
        <div className='modal__x' onClick={handleCloseModal}>x</div>
         {userDeleted ? <p>The user <strong >{userDeleted}</strong>  has been deleted successfully </p> : closeForm ? <p>The user <strong >{userCreated}</strong> has been added successfully </p> : <p>no se ha completado mimguma accion</p>}
        <button onClick={handleCloseModal} className='modal__btn'>Accept</button>
      </div>
    </div>
  )
}

export default ModalConfirm
