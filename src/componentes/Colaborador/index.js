import { IoIosCloseCircle } from "react-icons/io";
import {AiOutlineHeart, AiFillHeart} from "react-icons/ai";
import './Colaborador.css'


const Colaborador = (props) => {

  const { nombre, puesto, foto, id, fav } = props.datos
  const { colorPrimario, eliminarColaborador, like } = props

  return <div className='colaborador'>
    <IoIosCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)} />
    <div className='encabezado' style={{ backgroundColor: colorPrimario }}>
      <img src={foto} alt={nombre} />
    </div>
    <div className='info'>
      <h4>{nombre}</h4>
      <h5>{puesto}</h5>

      {
        (fav) ? <AiFillHeart color="red" onClick={() => like(id)}/> : <AiOutlineHeart onClick={() => like(id)} />
      }

      {/* <AiFillHeart color="red"/>
      <AiOutlineHeart /> */}
    </div>
  </div>
}


export default Colaborador;