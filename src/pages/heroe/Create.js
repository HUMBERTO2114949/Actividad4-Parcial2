import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase'

const Create = () => {
  const [ heroe, setHeroe ] = useState('')
  const [ nombre, setNombre ] = useState('')
  const [ edad, setEdad ] = useState(0)
  const [ poderes, setPoderes ] = useState('')
  const [ descripcion, setDescripcion ] = useState('')
  const [ enemigos, setEnemigos ] = useState('')
  const navigate = useNavigate()

  const HeroesCollection = collection(db, "heroe")

  const supers = async (e) => {
    e.preventDefault()
    await addDoc( HeroesCollection, { heroe: heroe, nombre: nombre, edad: edad, poderes: poderes, descripcion: descripcion, enemigos: enemigos } )
    navigate('/heroes')
  }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col'>
                <h1>Heroe</h1>
                 <form onSubmit={supers}>
                    <div className='mb-3'>
                        <label className='form-label'>Heroe</label>
                        <input
                            value={heroe}
                            onChange={ (e)=> setHeroe(e.target.value)} 
                            type="text"
                            className='form-control'
                            required
                        />                 
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Nombre</label>
                        <input
                            value={nombre}
                            onChange={ (e)=> setNombre(e.target.value)} 
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
                        <label className='form-label'>Poderes</label>
                        <input
                            value={poderes}
                            onChange={ (e)=> setPoderes(e.target.value)} 
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
                    <div className='mb-3'>
                        <label className='form-label'>Enemigos</label>
                        <input
                            value={enemigos}
                            onChange={ (e)=> setEnemigos(e.target.value)} 
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