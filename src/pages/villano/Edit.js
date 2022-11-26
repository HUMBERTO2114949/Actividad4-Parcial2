import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getDoc, updateDoc, doc } from "firebase/firestore"
import { db } from "../firebaseConfig/firebase"

const EditV = () => {
    const [ nombrer, setNombreR ] = useState('')
    const [ nombrev, setNombreV ] = useState('')
    const [ edad, setEdad ] = useState(0)
    const [ afiliacion, setAfi ] = useState('')
    const [ descripcion, setDescripcion ] = useState('')

    const navigate = useNavigate()    
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        const supers = doc(db, "villano", id)
        const data = { nombrer: nombrer, nombrev: nombrev, edad: edad, afiliacion: afiliacion, descripcion: descripcion}
        await updateDoc(supers, data)
        navigate('/Villano')
    }

    const getProductById = async (id) => {
        const supers = await getDoc( doc(db, "villano", id) )
        if(supers.exists()) {
            setNombreR(supers.data().nombrer)   
            setNombreV(supers.data().nombrev)   
            setEdad(supers.data().edad)
            setAfi(supers.data().afiliacion)
            setDescripcion(supers.data().descripcion)
        }else{
            console.log('El villano no existe')
        }
    }

    useEffect( () => {
        getProductById(id)
        // eslint-disable-next-line
    }, [])

    return (

        <div class="container">
        <div class="row">
          <div class="col">
          <form onSubmit={update}>
                 <div className='mb-3'>
                        <label className='form-label'>Nombre Real</label>
                        <input
                            value={nombrer}
                            onChange={ (e)=> setNombreR(e.target.value)} 
                            type="text"
                            className='form-control'
                            required
                        />                 
                    </div> 
                    <div className='mb-3'>
                        <label className='form-label'>Nombre Villano</label>
                        <input
                            value={nombrev}
                            onChange={ (e)=> setNombreV(e.target.value)} 
                            type="text"
                            className='form-control'
                            required
                        />                 
                    </div> 
                    <div className='mb-3'>
                        <label className='form-label'>Edad</label>
                        <input
                            value={edad}
                            onChange={ (e)=> setEdad(e.target.value)} 
                            type="number"
                            className='form-control'
                            required
                        />                 
                    </div> 
                    <div className='mb-3'>
                        <label className='form-label'>Afiliación</label>
                        <input
                            value={afiliacion}
                            onChange={ (e)=> setAfi(e.target.value)} 
                            type="text"
                            className='form-control'
                            required
                        />                 
                    </div> 
                    <div className='mb-3'>
                        <label className='form-label'>Descripcion</label>
                        <input
                            value={descripcion}
                            onChange={ (e)=> setDescripcion(e.target.value)} 
                            type="text"
                            className='form-control'
                            required
                        />                 
                    </div> 
                    
                    <button type='submit' className='btn btn-primary'>Actualizar</button>
                 </form>   
          </div>
          <div class="col">
           
          </div>
        </div>
        </div>
    )
}

export default EditV