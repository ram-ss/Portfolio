import React from 'react'
import { useState,useEffect } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Particle from '../Components/Common/Particle';
import Navbar from '../Components/Common/Navbar';
import Footer from '../Components/Common/Footer';
import pdf from "../Assets/Ram_Swaroop_Sahani_PSIT.pdf";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import {FiDownload} from "react-icons/fi"
import 'react-pdf/dist/Page/TextLayer.css';
import { Button } from '@mui/material';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


function Resume() {
    const [width, setWidth] = useState(1200);
    useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <div className=''>
        <Navbar/>
        <Particle/>
        <div className='w-full text-center text-white'>
            <Button variant='contained'
            target='_blank'
            href={pdf}
            startIcon={<FiDownload/>}>
                Downlaod
            </Button>
        </div>
        <Document file={pdf} className={"flex justify-center items-center my-10"}>
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6}/>
        </Document>
        <Footer/>
    </div>
  )
}

export default Resume