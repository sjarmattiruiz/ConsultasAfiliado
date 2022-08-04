import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useEffect, useState} from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function App() {

  const [usuarios, setUsuarios]= useState([]);
  const [tablaUsuarios, setTablaUsuarios]= useState([]);
  const [busqueda, setBusqueda]= useState("");

const peticionGet=async()=>{
  await axios.get("https://raw.githubusercontent.com/cerkvenihaxel/jsongit/master/db.json")
  .then(response=>{
    setUsuarios(response.data);
    setTablaUsuarios(response.data);
  }).catch(error=>{
    console.log(error);
  })
}

const handleChange=e=>{
  setBusqueda(e.target.value);
  filtrar(e.target.value);
}

const filtrar=(terminoBusqueda)=>{
  var resultadosBusqueda=tablaUsuarios.filter((elemento)=>{
    if(elemento.afiliado.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    || elemento.medico.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
    ){
      return elemento;
    }
  });
  setUsuarios(resultadosBusqueda);
}

useEffect(()=>{
peticionGet();
},[])

  return (
 <div><Head>
 <title>SISCON</title>
 <meta name="description" content="Generado por Heap LR" />
 <link rel="icon" href="/SISCON.png" />
</Head>

<main className={styles.main}>
   <Image  src="/SISCON.png" width="360" height="80.7" />
   <h1 className={styles.title}>
     Seguimiento de solicitud de prótesis
   </h1>
   </main>

<div className=".mr-md-3"> 

    <div className='col'> 
    <div className="App">
      <div className="containerInput">
        <input
          className="form-control inputBuscar"
          value={busqueda}
          placeholder="Búsqueda por nombre de afiliado"
          onChange={handleChange}
        />

    </div>
    </div>


<div className={styles.table}> 
    <div className="table-responsive">
      <table className="table table-sm table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre de afiliado</th>
            <th>Médico</th>
            <th>Clínica</th>
            <th>Estado Solicitud</th>
            <th>Estado Paciente</th>
          </tr>
        </thead>

        <tbody>
          {usuarios && 
          usuarios.map((usuario)=>(
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.afiliado}</td>
              <td>{usuario.medico}</td>
              <td>{usuario.clinica}</td>
              <td>{usuario.estado_paciente}</td>
              <td>{usuario.estado_solicitud}</td>
              
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
