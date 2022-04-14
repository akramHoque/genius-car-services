import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css' ;

const Service = ({service}) => {
      const {id, name, img, description, price} = service ;
      const navigate = useNavigate() ;

      const handleServiceDetail = id => {
            navigate(`/service/${id}`) ;
      }
      return (
            <div className='service'>
                  <img className='w-100' src={img} alt="" />
                  <h2>{name}</h2>
                  <p>price: ${price}</p>
                  <p>{description}</p>
                  <button onClick={() => handleServiceDetail(id)} className=' btn btn-primary'>Book: {name}</button>
            </div>
      );
};

export default Service;