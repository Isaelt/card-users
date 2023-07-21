import { useState } from "react"
import axios from "axios"

const useFecth = (baseUrl, callback, setCloseModal) => {

    const [infoApi, setInfoApi] = useState()

    

    //GET
    const getApi = (path) => {
        const url = `${baseUrl}${path}/`
        axios.get(url)
          .then(res => setInfoApi(res.data))
          .catch(err => console.log(err))
    }

    //POST
    const postApi = (path, data) => {
        const url = `${baseUrl}${path}/`
        axios.post(url, data)
          .then(res => { 
            setInfoApi([...infoApi, res.data ])
            callback(true)
        })
          .catch(err => console.log(err))
    }

    //DELETE
    const deleteApi = (path, id) => {
        const url = `${baseUrl}${path}/${id}/`
        axios.delete(url)
          .then(res => { 
            const infoApiFiltered = infoApi.filter(e => e.id !== id)
            setInfoApi(infoApiFiltered)
            setCloseModal(false)
        })
          .catch(err => console.log(err))
    }

    //UPDATE
    const updateApi = (path, id, data) => {
        const url = `${baseUrl}${path}/${id}/`
        axios.patch(url, data)
          .then(res => { 
            const infoApiMapped = infoApi.map(e => e.id === id ? res.data : e)
            setInfoApi(infoApiMapped)
            callback(true)
        })
          .catch(err => console.log(err))
    }


    return [ infoApi, getApi, postApi, deleteApi, updateApi ]
}

export default useFecth
