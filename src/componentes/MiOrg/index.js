import './MiOrg.css'
import { useState } from 'react';


const MiOrg = (props) => {

  // const [mostrar, actualizarMostrar] = useState(true)

  // const manejarClick = () =>{
  //   actualizarMostrar(!mostrar)
  // }

  return (
    <section className='orgSection'>
      <h3 className='title'>Mi organización</h3>
      <img src='/img/add.png' alt='add' onClick={props.cambiarMostar}/>
    </section>
  )
}


export default MiOrg;





  //Estado = Hooks
  //useState
  //useState()
  //forma para utilizar el useState()
  /*cosnt [nombreVariable, functionActualizar ] = useState(valorInicial) */