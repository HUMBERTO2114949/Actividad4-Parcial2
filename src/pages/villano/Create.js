import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase'

const Create = () => {
  const [ nombrer, setNombreR ] = useState('')
  const [ nombrev, setNombreV ] = useState('')
  const [ edad, setEdad ] = useState(0)
  const [ afiliacion, setAfi ] = useState('')
  const [ descripcion, setDescripcion ] = useState('')
  const navigate = useNavigate()

  const VillanosCollection = collection(db, "villano")

  const supers = async (e) => {
    e.preventDefault()
    await addDoc( VillanosCollection, {  nombrer: nombrer, nombrev: nombrev, edad: edad, poderes: afiliacion, descripcion: descripcion} )
    navigate('/Villano')
  }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col'>
                <h1>Villano</h1>
                 <form onSubmit={supers}>
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
                    
                    <button type='submit' className='btn btn-warning'>Añadir</button>
                 </form>   
            </div>
        </div>
    </div> 
  )
}

export default Create