import React, {useState} from 'react';
import { Link, Outlet } from 'react-router-dom';
import "../styles/pages/getOperations.css"

const GetOperations:React.FC = () => {

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
        <Link onClick={handleListingPackages} to={listingPackages ? "/in/getoperations/getpackages" : "/in/getoperations"}><li className='section-listitem'><span>Comprar Moto - R$7600</span> / Valor: R$7600 / Nota: R$100,00 / Qtdd Notas: 76 / Qtdd Pacotes: 2</li></Link>
        <Outlet />
        <li className='section-listitem'><span>Reformar Casa - R$5000</span> / Valor: R$5000 / Nota: R$100,00 / Qtdd Notas: 50 / Qtdd Pacotes: 1</li>
        <li className='section-listitem'><span>Emprestar - R$1200</span> / Valor: R$1200 / Nota: R$50,00 / Qtdd Notas: 24 / Qtdd Pacotes: 1</li>
        <li className='section-listitem'><span>Comprar Moto - R$7600</span> / Valor: R$7600 / Nota: R$100,00 / Qtdd Notas: 76 / Qtdd Pacotes: 2</li>
        <li className='section-listitem'><span>Reformar Casa - R$5000</span> / Valor: R$5000 / Nota: R$100,00 / Qtdd Notas: 50 / Qtdd Pacotes: 1</li>
        <li className='section-listitem'><span>Emprestar - R$1200</span> / Valor: R$1200 / Nota: R$50,00 / Qtdd Notas: 24 / Qtdd Pacotes: 1</li>
        <li className='section-listitem'><span>Comprar Moto - R$7600</span> / Valor: R$7600 / Nota: R$100,00 / Qtdd Notas: 76 / Qtdd Pacotes: 2</li>
        <li className='section-listitem'><span>Reformar Casa - R$5000</span> / Valor: R$5000 / Nota: R$100,00 / Qtdd Notas: 50 / Qtdd Pacotes: 1</li>
        <li className='section-listitem'><span>Emprestar - R$1200</span> / Valor: R$1200 / Nota: R$50,00 / Qtdd Notas: 24 / Qtdd Pacotes: 1</li>
        <li className='section-listitem'><span>Comprar Moto - R$7600</span> / Valor: R$7600 / Nota: R$100,00 / Qtdd Notas: 76 / Qtdd Pacotes: 2</li>
        <li className='section-listitem'><span>Reformar Casa - R$5000</span> / Valor: R$5000 / Nota: R$100,00 / Qtdd Notas: 50 / Qtdd Pacotes: 1</li>
        <li className='section-listitem'><span>Emprestar - R$1200</span> / Valor: R$1200 / Nota: R$50,00 / Qtdd Notas: 24 / Qtdd Pacotes: 1</li>
        <li className='section-listitem'><span>Comprar Moto - R$7600</span> / Valor: R$7600 / Nota: R$100,00 / Qtdd Notas: 76 / Qtdd Pacotes: 2</li>
        <li className='section-listitem'><span>Reformar Casa - R$5000</span> / Valor: R$5000 / Nota: R$100,00 / Qtdd Notas: 50 / Qtdd Pacotes: 1</li>
        <li className='section-listitem'><span>Emprestar - R$1200</span> / Valor: R$1200 / Nota: R$50,00 / Qtdd Notas: 24 / Qtdd Pacotes: 1</li>
      </ul>
    </section>
  )
};

export default GetOperations;
