import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba';
import './Equipo.css'


const Equipo = (props) => {

  //Destructuracion
  const { colorPrimario, colorSecundario, titulo, id } = props.datos
  const { colaboradores, eliminarColaborador, actualizarColor, like } = props

  const obj = {
    backgroundColor: hexToRgba(colorPrimario, 0.6)
  }

  const estiloTitulo = {
    borderColor: colorPrimario
  }



  return (
    <>
      {colaboradores.length > 0 &&
        < section className="equipo" style={obj} >
          <h3 style={estiloTitulo}> {titulo} </h3>

          <input
            type='color'
            value={colorPrimario}
            className='input-color'
            onChange={(e) =>{
              actualizarColor(e.target.value, id)
            }}
          />

          <div className="colaboradores">

            {
              colaboradores.map((colaborador, index) => <Colaborador
                datos={colaborador}
                key={index}
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}
                like={like}
              />)
            }
            
          </div>
        </ section>
      }
    </>
  )
}

export default Equipo;