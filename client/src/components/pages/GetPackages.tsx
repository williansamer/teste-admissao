import React from 'react';
import "../styles/pages/getPackages.css"

const GetPackages:React.FC = () => {
  return (
    <section className="getpackages-container-section">
      <div className='section-package'>
        <div className='package-default package-name'>Pacote 1 - Comprar Moto - R$7600</div>
        <div className='package-default package-value'>Valor: R$5000</div>
        <div className='package-default package-preference'>Notas no valor de: R$100</div>
        <div className='package-default package-data'>Data: 25/01/2022</div>
      </div>
      <div className='section-package'>
        <div className='package-default package-name'>Pacote 2 - Comprar Moto - R$7600</div>
        <div className='package-default package-value'>Valor: R$2600</div>
        <div className='package-default package-preference'>Preferência da Nota: R$100</div>
        <div className='package-default package-data'>Data: 25/01/2022</div>
      </div>
    </section>
  )
};

export default GetPackages;
