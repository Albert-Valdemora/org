import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Formulario from './componentes/Formulario/Formulario';
import Header from './componentes/Header/Header';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';




function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{
    id : uuid(),
    equipo: "Front End",
    foto : "https://github.com/harlandlohora.png",
    nombre : "Harland Lohora",
    puesto : "Instructor",
    fav : true
  },
  {
    id : uuid(),
    equipo : "Programación",
    foto : "https://avatars.githubusercontent.com/u/157394313?v=4",
    nombre : "Genesys Rondón",
    puesto : "Desarrolladora de software e instructora",
    fav : false
  },
  {
    id : uuid(),
    equipo : "UX y Diseño",
    foto : "https://github.com/JeanmarieAluraLatam.png",
    nombre : "Jeanmarie Quijada",
    puesto : "Instructora en Alura Latam",
    fav : false
  },
  {
    id : uuid(),
    equipo : "Programación",
    foto : "https://github.com/christianpva.png",
    nombre : "Christian Velasco",
    puesto : "Head de Alura e Instructor",
    fav : false
  },
  {
    id : uuid(),
    equipo : "Innovación y Gestión",
    foto : "https://github.com/JoseDarioGonzalezCha.png",
    nombre : "Jose Gonzalez",
    puesto : "Dev FullStack",
    fav : false
  },])
  const [equipos, actualizarEquipo] = useState([
    {
      id : uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id : uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id : uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id : uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id : uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id : uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id : uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ])


//mostrar formulario
  const cambiarMostar = () => {
    actualizarMostrar(!mostrarFormulario)
  }


  //Eliminar colaborador
  const eliminarColaborador = (id) =>{
    console.log("Colaborador eliminado", id);
    const nuevoColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevoColaboradores);
  }


  //Actualizar color del equipo
  const actualizarColor = (color, id) =>{
    console.log("Color actualizado: ", color, id);

    const equipoActualizado = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })

    actualizarEquipo(equipoActualizado)
  }


  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador);
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }


  //Selecciona el favorito
  const like = (id) => {
    console.log("Colaborador favorito", id);
    const colaboradoresActualizado = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }

      return colaborador
    })

    actualizarColaboradores(colaboradoresActualizado)
  }

  //agregar equipo
  const agregarEquipo = (nuevoEquipo) =>{
    console.log(nuevoEquipo);
    actualizarEquipo([...equipos, {...nuevoEquipo, id : uuid()}])
  }


  return (
    <div>

      <Header />

      {/* { mostrarFormulario? <Formulario /> : <></> } */}
      {
        mostrarFormulario && <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          agregarEquipo={agregarEquipo}
        />}

      <MiOrg cambiarMostar={cambiarMostar} />

      {
        equipos.map((equipo) => {
          return <Equipo
            datos={equipo}
            key={equipo.titulo}
            colaboradores={colaboradores.filter( colaboradores => colaboradores.equipo === equipo.titulo)}
            eliminarColaborador={eliminarColaborador}
            actualizarColor={actualizarColor}
            like={like}
          />
        })
      }

      <Footer />

    </div>
  );
}

export default App;


//Trenario --> condicion ? seMuestra : noSeMuestra