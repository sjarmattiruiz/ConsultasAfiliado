/*import {useEffect, useState} from 'react';
import axios from "axios";
import axiosFetch from '../config/axios';



useEffect( () => {
    const getSol = async () => {
      const result = await axiosFetch("/sol_entrantes");
      console.log("result :>>", result);
    };
    getSol();
  }, []);
  
*/

import React, { useState, useEffect } from 'react';

export default function Solicitudes({entrantes}) {

  
  // // useEffect(()=>{
  //   fetch('http://siscon.info/api/sol_entrantes', {
  //     method: "GET",
  //     headers: {"Authorization": `Bearer 1CPukIAUxSqNxPMt`}
  //   })
  //   .then(res => res.json())
  //   .then(json => setResult(json));
  //   console.log(result);
  // },[]);

  console.log(entrantes);
  return (
    <>
      
        .
    </>
  );
};

export async function getServerSideProps({params,req,res,query,preview,previewData,resolvedUrl,locale,locales,defaultLocale}) {
  console.log('Logging : '+res);
  const data = await fetch('http://siscon.info/api/entrantes', {
    method: "GET",
    headers: {"Authorization": `Bearer VDZRClreh6KpM1Ti`}
  });
  const entrantes = await data.json();
  return { props: { entrantes } }
}