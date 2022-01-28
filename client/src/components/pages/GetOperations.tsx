import React, {useState} from 'react';
import { Link, Outlet } from 'react-router-dom';
import "../styles/pages/getOperations.css"

import { useCustom } from '../context/hooks/useCustom';

const GetOperations:React.FC = () => {

  const {getOperations} = useCustom();
  const [listingPackages, setListingPackages] = useState(true);

  function handleListingPackages(){
    if(listingPackages){
      setListingPackages(false);
    }else{
      setListingPackages(true);
    }
  }

  return (
    <section className='getoperation-container-section'>
      <ul className='section-lists'>
        {getOperations.map((operation, index) =>{ 
          return (
              <Link key={index} onClick={handleListingPackages} to={listingPackages ? "/in/getoperations/getpackages" : "/in/getoperations"}>
                <li className='section-listitem'>
                  <span>{operation.name_operation} - R$ {operation.value}</span> / Valor: R$ {operation.value} / Nota: R$ {operation.preference} / Qtdd Notas: {operation.qtt_notes} / Qtdd Pacotes: {operation.qtt_packages}
                  < Outlet key={operation.id} />
                </li>
              </Link>
          )
        })}
      </ul>
    </section>
  )
};

export default GetOperations;
