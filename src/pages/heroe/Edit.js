import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getDoc, updateDoc, doc } from "firebase/firestore"
import { db } from "../firebaseConfig/firebase"

const Edit = () => {
    const [ heroe, setHeroe ] = useState('')
    const [ nombre, setNombre ] = useState('')
    const [ edad, setEdad ] = useState(0)
    const [ poderes, setPoderes ] = useState('')
    const [ descripcion, setDescripcion ] = useState('')
    const [ enemigos, setEnemigos ] = useState('')

    const navigate = useNavigate()    
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        const supers = doc(db, "heroe", id)
        const data = { heroe: heroe, nombre: nombre, edad: edad, poderes: poderes, descripcion: descripcion, enemigos: enemigos }
        await updateDoc(supers, data)
        navigate('/heroes')
    }

    const getProductById = async (id) => {
        const supers = await getDoc( doc(db, "heroe", id) )
        if(supers.exists()) {
            //console.log(product.data())
            setHeroe(supers.data().heroe)   
            setNombre(supers.data().nombre)   
            setEdad(supers.data().edad)
            setPoderes(supers.data().poderes)
            setDescripcion(supers.data().descripcion)
            setEnemigos(supers.data().enemigos)
        }else{
            console.log('El heroe no existe')
        }
    }

    useEffect( () => {
        getProductById(id)
        // eslint-disable-next-line
    }, [])

    return (
        <div className='container'>
        <div className='row'>
            <div className='col'>
                <h1>Editar datos de Heroe</h1>
                 <form onSubmit={update}>
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
                            type="tezt"
                            className='form-control'
                            required
                        />                 
                    </div> 
                    <div className='mb-3'>
                        <label className='form-label'>Enemigos</label>
                        <input
                            value={enemigos}
                            onChange={ (e)=> setEnemigos(e.target.value)} 
                            type="tezt"
                            className='form-control'
                            required
                        />                 
                    </div>  
                    <button type='submit' className='btn btn-primary'>Actualizar</button>
                 </form>   
            </div>
        </div>
    </div> 
    )
}

export default Edit