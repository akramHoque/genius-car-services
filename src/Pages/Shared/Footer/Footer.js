import React from 'react';

const Footer = () => {
      const date = new Date()
      const year = date.getFullYear() ;
     
      return (
           <footer className='text-center mt-5'>
          <p>copyright <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> {year} </p>
           </footer>
                 
      
      );
};

export default Footer;