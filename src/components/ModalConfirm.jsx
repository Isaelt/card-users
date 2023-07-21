import './styles/ModalConfirm.css'

const ModalConfirm = ({closeModalConfirm, setcloseModalConfirm}) => {

  const handleCloseModal = () => {
    setcloseModalConfirm(true)
  }

  return (
    <div className={`modal-container ${closeModalConfirm && 'close-modal'}`}>
      <div className='modal__confirm'>
        <h3>Eliminar usuario</h3>
        <div className='modal__x' onClick={handleCloseModal}>x</div>
        <p>El usuario se ha eliminado correctamente</p>
        <button onClick={handleCloseModal} className='modal__btn'>Aceptar</button>
      </div>
    </div>
  )
}

export default ModalConfirm
