import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useEffect, useState} from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
//Probemos
function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [resultadosFiltrados, setResultadosFiltrados] = useState([]);
  

  //Consume datos de js
const peticionGet=async()=>{
  await axios.get("https://raw.githubusercontent.com/sjarmattiruiz/jsondb/main/db.json")
  .then(response=>{
    setUsuarios(response.data);
    setTablaUsuarios(response.data);
  }).catch(error=>{
    console.log(error);
  })
}
const handleSearch = (data)=>{
  //console.log(data);
  setBusqueda(data);
};

const handleChange=e=>{
 setBusqueda(e.target.value);
 filtrar(e.target.value);
}
const handleSubmit = (e) => {
  e.preventDefault();
  console.log("clickeaste en buscar");

  if (!busqueda) {
    alert("¡Datos incompletos!");
    return;
  }

  handleSearch(busqueda);
};

setResultadosFiltrados(
  usuarios.filter(
    (usuario) =>
      usuario.dni.includes(busqueda) || usuario.name.includes(busqueda)
  )
);
};
useEffect(()=>{
peticionGet();
},[])

  return (
 <div><Head>
 <title>Asistencia</title>
 <meta name="description" content="Generado por Inescio LR" />
 <link rel="icon" href="/inescio logo.png" />
</Head>

<main className={styles.main}>
   <h1 className={styles.title}>
     Listado General
   </h1>
   </main>

<div className=".mr-md-3"> 

    <div className="App"> 
    <div className="w-auto p-3">
      <div className="center-block">
    <form onSubmit={handleSubmit} className="form-inline" role="form">
        <div className="form-group mx-sm-3 mb-2 w-auto p-3">
        <input
            className="form-control"
            type="text"
            name="solicitud"
            autoComplete="on"
            placeholder="Búsqueda por número de documento"
            value={busqueda}
            onChange={handleChange}
        />
        <div className="input-group-append">
        <span className="input-group-btn">
        <button type="submit" className="btn btn-default">Buscar</button>
        </span>
        </div>
        </div>
    </form>
    
    </div>
    </div>


<div className={styles.table}> 
    <div className="table-responsive">
      <table className="table table-sm table-bordered ">
        <thead>
          <tr>
            <th>Número</th>
            <th>Nombre Completo</th>
            <th>DNI</th>
            <th>Coordinador</th>

          </tr>
        </thead>

        <tbody>
  {busqueda
    ? resultadosFiltrados.map((usuario) => (
        <tr key={usuario.id}>
          <td>{usuario.id}</td>
          <td>{usuario.name}</td>
          <td>{usuario.dni}</td>
          <td>{usuario.coordi}</td>
        </tr>
      ))
    : usuarios.map((usuario) => (
        <tr key={usuario.id}>
          <td>{usuario.id}</td>
          <td>{usuario.name}</td>
          <td>{usuario.dni}</td>
          <td>{usuario.coordi}</td>
        </tr>
      ))}
</tbody>
      </table>
     </div>
</div>
</div>
</div>
    </div> 
  );
}

export default App;


// import {useEffect, useState} from 'react';
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import Solicitudes from '../components/Solicitudes'


// export default function Home(entrantes) {
//   const [busqueda, setBusqueda]= useState("");
//   const [usuarios, setUsuarios]= useState([]);
//   const [tablaUsuarios, setTablaUsuarios]= useState([]);


//   //console.log(entrantes);

//   const peticionGet=async()=>{
//     await axios.get("https://api.jsonbin.io/v3/b/62eb10b65c146d63ca5d54c2")
//     .then(response=>{
//       setUsuarios(response.data);
//       setTablaUsuarios(response.data);
//     }).catch(error=>{
//       console.log(error);
//     })
//   }

//   const handleChange=e=>{
//     setBusqueda(e.target.value);
//     filtrar(e.target.value);
//   }
  
//   const filtrar=(terminoBusqueda)=>{
//     var resultadosBusqueda=obj.entrantes.filter((elemento)=>{
//       if(elemento.afiliado.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
//       || elemento.medico.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
//       ){
//         return elemento;
//       }
//     });
//     setUsuarios(resultadosBusqueda);
//   }

//   useEffect(()=>{
//     peticionGet();
//     },[])

//   return (


// <div className={styles.search}>
//       <div className="App">
//         <div className="containerInput">
//           <input
//             className="form-control inputBuscar"
//             value={busqueda}
//             placeholder="Búsqueda por Nombre, DNI o Número de afiliado"
//           onChange={handleChange}
//           />
//           <button className="btn btn-primary">
//           BUSCAR
//         </button>
//         </div>

// </div>
// </div>
// <div>
// <div className="table-responsive">
//           <table className="table table-sm table-bordered">
//             <thead>
//               <tr>
//                 <th>Nombre y Apellido</th>
//                 <th>Medico</th>
//                 <th>Clinica</th>
//                 <th>Estado de paciente</th>
//                 <th>Estado de solicitud</th>
//                 </tr>
//             </thead>
//          <tbody>
//           {obj.entrantes.map(solicitud => (
//             <tr key={solicitud.id}>
//               <td>{solicitud.afiliado}</td>
//               <td>{solicitud.medico}</td>
//             <td>{solicitud.clinica}</td>
//             <td>{solicitud.estado_paciente}</td>
//             <td>{solicitud.estado_solicitud}</td>
              
//             </tr>
//           ))} 
     

//           {/*entrantes.data[].map((entrante, index) => (
//           <tr>
//             <td>{entrante.afiliados_id}</td>
//             <td>{entrante.clinicas_id}</td>
//             <td>{entrante.edad}</td>
//             <td>{entrante.estado_paciente_id}</td>
//             <td>{entrante.estado_solicitud_id}</td>
//           </tr>
//           ))*/}
//          </tbody>
//           </table>  
//         </div>
//     </div>
//       </div>
//   )
// }



// export async function getServerSideProps({params,req,res,query,preview,previewData,resolvedUrl,locale,locales,defaultLocale}) {
//   console.log('Logging : '+res);
//   const data = await fetch('http://siscon.info/api/entrantes', {
//     method: "GET",
//     headers: {"Authorization": `Bearer nx2huUirCKDcieb6`}
//   });
//   const entrantes = await data.json();
//   return { props: { entrantes } }
// }

