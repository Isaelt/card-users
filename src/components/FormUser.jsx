import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import './styles/FormUser.css'

const FormUser = ({createNewUser, updateInfo, updateUserById, setUpdateInfo, closeForm, setCloseForm, setUserCreated}) => {

    const { register, reset, handleSubmit } = useForm()


    useEffect(() => {
      reset(updateInfo)
    }, [updateInfo])
    
    const submit = (data) => {
        if (updateInfo) {
          updateUserById('/users', updateInfo.id, data)
          setUpdateInfo()
        } else {
          
        }
        createNewUser('/users', data)
        setUserCreated(data.first_name)
        reset({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birthday: ''
        })
    }

    const handleCloseForm = () => {
      setCloseForm(true)
    }

    const handleClearForm = () => {
      reset({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        birthday: ''
    })
    setUpdateInfo()
    }

  return (
   <div onClick={handleCloseForm} className={`formuser-container ${closeForm && 'close-form'}`}>
    <form onClick={e => e.stopPropagation()} className="formuser" onSubmit={handleSubmit(submit)}>
      <h2 className="formuser__tittle">{updateInfo ? 'Update' : 'New User'}</h2>
      <div onClick={handleCloseForm} className="formuser__close">x</div>
      <div  className="formuser__group">
        <label className="formuser__label" htmlFor="first_name">First Name </label>
        <input className="formuser__input" {...register('first_name')} type="text" id="first_name" />
      </div>
      <div className="formuser__group">
        <label className="formuser__label" htmlFor="last_name">Last Name </label>
        <input className="formuser__input" {...register('last_name')} type="text" id="last_name" />
      </div>
      <div className="formuser__group">
        <label className="formuser__label" htmlFor="email">Email </label>
        <input className="formuser__input" {...register('email')} type="email" id="email" />
      </div>
      <div className="formuser__group">
        <label className="formuser__label" htmlFor="password">Password </label>
        <input className="formuser__input" {...register('password')} type="password" id="password" />
      </div>
      <div className="formuser__group">
        <label className="formuser__label" htmlFor="birthday">Birthday </label>
        <input className="formuser__input" {...register('birthday')} type="date" id="birthday" />
      </div>
      <button className="formuser__btn">{updateInfo ? 'update user' : 'add new user'}</button>
      <div onClick={handleClearForm} className="formuser__btn2">clear this form</div>
    </form>
    
   </div>
  );
};

export default FormUser;
