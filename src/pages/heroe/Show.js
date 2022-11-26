import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {collection, getDocs, getDoc, deleteDoc, doc} from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { async } from '@firebase/util'
import Create from './Create'
const MySwal = withReactContent(Swal)

const Show = () => {
  //1 - configuramos los hooks
  const [heroes, setHeroes] = useState( [] )

  //2 - referenciamos a la DB firestore
  const HeroesCollection = collection(db, "heroe")

  //3 - Funcion para mostrar TODOS los docs
  const getHeroes = async ()   => {
   const data = await getDocs(HeroesCollection)
   //console.log(data.docs)
   setHeroes(
       data.docs.map( (doc) => ( {...doc.data(),id:doc.id}))
   )
   //console.log(products)
  }
  //4 - Funcion para eliminar un doc
  const deleteHeroe = async (id) => {
   const heroeDoc = doc(db, "heroe", id)
   await deleteDoc(heroeDoc)
   getHeroes()
  }
  //5 - Funcion de confirmacion para Sweet Alert 2
  const confirmDelete = (id) => {
    MySwal.fire({
      title: '¿Elimina el Heroe?',
      text: "Boton rojo para eliminar!",
      icon: 'warning', 
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Si! Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) { 
        //llamamos a la fcion para eliminar   
        deleteHeroe(id)               
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
    getHeroes()
    // eslint-disable-next-line
  }, [] )
  //7 - devolvemos vista de nuestro componente
  return (
    <>
  
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className='row'>
          <div className='col'>
              <Create/>
            </div>

            <div className='col'>
            <table className='table table-dark table-hover'>
            
            <thead>
              <tr>
                <th>Heroe</th>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Poderes</th>
                <th>Description</th>
                <th>Enemigos</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              { heroes.map( (heroe) => (
                <tr key={heroe.id}>
                  <td>{heroe.heroe}</td>
                  <td>{heroe.nombre}</td>
                  <td>{heroe.edad}</td>
                  <td>{heroe.poderes}</td>
                  <td>{heroe.descripcion}</td>
                  <td>{heroe.enemigos}</td>
                  <td>
                    <Link to={`/edit/${heroe.id}`} className="btn btn-light"><i className="fa-solid fa-pencil"></i></Link>
                    <button onClick={ () => { confirmDelete(heroe.id) } } className="btn btn-warning"><i className="fa-solid fa-trash"></i></button>
                  </td>
                </tr>                
              )) }
            </tbody>
          </table>

            </div>


          </div>
          
          
        </div>
      </div>
    </div>
    </>
  )
}

export default Show