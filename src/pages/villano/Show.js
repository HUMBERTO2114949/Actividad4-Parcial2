import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {collection, getDocs, getDoc, deleteDoc, doc, addDoc} from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { async } from '@firebase/util'
import Create from './Create'


import { useNavigate } from 'react-router-dom'

const MySwal = withReactContent(Swal)

const Show1 = () => {

  const [ nombrer, setNombreR ] = useState('')
  const [ nombrev, setNombreV ] = useState('')
  const [ edad, setEdad ] = useState(0)
  const [ afiliacion, setAfi ] = useState('')
  const [ descripcion, setDescripcion ] = useState('')

  const VillanosCollection = collection(db, "villano")

  const supers = async (e) => {
    e.preventDefault()
    await addDoc( VillanosCollection, { nombrer: nombrer, nombrev: nombrev, edad: edad, afiliacion: afiliacion, descripcion: descripcion } )
    window.location.href = window.location.href;
    window.location.replace('');
  }
  //1 - configuramos los hooks
  const [villanos, setVillanos] = useState( [] )

  //2 - referenciamos a la DB firestore
 
  //3 - Funcion para mostrar TODOS los docs
  const getVillanos = async ()   => {
   const data = await getDocs(VillanosCollection)
   //console.log(data.docs)
   setVillanos(
       data.docs.map( (doc) => ( {...doc.data(),id:doc.id}))
   )
   //console.log(products)
  }
  //4 - Funcion para eliminar un doc
  const deleteVillano = async (id) => {
   const villanoDoc = doc(db, "villano", id)
   await deleteDoc(villanoDoc)
   getVillanos()
  }
  //5 - Funcion de confirmacion para Sweet Alert 2
  const confirmDelete = (id) => {
    MySwal.fire({
      title: '¿Elimina a el Villano?',
      text: "Boton rojo para eliminar",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Si! Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) { 
        //llamamos a la fcion para eliminar   
        deleteVillano(id)               
        Swal.fire(
          'Listo!',
          'Se elimino!',
          'success'
        )
      }
    })    
  }
  //6 - usamos useEffect
  useEffect( () => {
    getVillanos()
    // eslint-disable-next-line
  }, [] )
  //7 - devolvemos vista de nuestro componente
  return (

    <>
    <div class="container">
  <div class="row">
    <div class="col">
    <h1>Villano</h1>
                 <form onSubmit={supers}>
                    <div className='mb-3'>
                        <label className='form-label'>Nombre Real</label>
                        <input
                            value={nombrer}
                            onChange={ (e)=> setNombreR(e.target.value)} 
                            type="text"
                            className='form-control'
                        />                 
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Nombre Villano</label>
                        <input
                            value={nombrev}
                            onChange={ (e)=> setNombreV(e.target.value)} 
                            type="text"
                            className='form-control'
                        />                 
                    </div>  
                    <div className='mb-3'>
                        <label className='form-label'>Edad</label>
                        <input
                            value={edad}
                            onChange={ (e)=> setEdad(e.target.value)} 
                            type="number"
                            className='form-control'
                        />                 
                    </div>  
                    <div className='mb-3'>
                        <label className='form-label'>Afiliación</label>
                        <input
                            value={afiliacion}
                            onChange={ (e)=> setAfi(e.target.value)} 
                            type="text"
                            className='form-control'
                        />                 
                    </div>  
                    <div className='mb-3'>
                        <label className='form-label'>Descripcion</label>
                        <input
                            value={descripcion}
                            onChange={ (e)=> setDescripcion(e.target.value)} 
                            type="text"
                            className='form-control'
                        />                 
                    </div>  

                    <button type='submit' className='btn btn-warning'>Añadir</button>
                 </form>   
    </div>
    <div class="col">
    <table className='table table-dark table-hover'>
            <thead>
              <tr>
                <th>Nombre Real</th>
                <th>Nombre Villano</th>
                <th>Edad</th>
                <th>Afiliación</th>
                <th>Description</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              { villanos.map( (villano) => (
                <tr key={villano.id}>
                  <td>{villano.nombrer}</td>
                  <td>{villano.nombrev}</td>
                  <td>{villano.edad}</td>
                  <td>{villano.afiliacion}</td>
                  <td>{villano.descripcion}</td>
                  <td>
                    <Link to={`/editv/${villano.id}`} className="btn btn-light"><i className="fa-solid fa-pencil"></i></Link>
                    <button onClick={ () => { confirmDelete(villano.id) } } className="btn btn-warning"><i className="fa-solid fa-trash"></i></button>
                  </td>
                </tr>                
              )) }
            </tbody>
          </table>
    </div>
    </div>
  </div>

    
    </>
  )
}
export default Show1