import React from 'react';
import './Modalimg.scss';
import {motion} from 'framer-motion';

function Modalimg({modal, setModal}){

   const  CloseModal =(e)=>{
       setModal(null)
   }
    return(
       
        <motion.div className='backdrop'
        initial={{opacity: 0}}
        animate={{opacity:1}}
        onClick={CloseModal}
        
        >
            <div className='modal_content'>
            
       <img src={modal} alt='modal'/>
       <p style={{color: 'white', fontSize:'20px'}}> Casa de verano de los angeles, contruida con mano de obra y materiales reciclabes, el enfoque fue en la comodidad del cliente</p>
       
       
            </div>
        
           
        </motion.div>
  
    )
}
export default Modalimg;