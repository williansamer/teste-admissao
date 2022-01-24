import React from 'react';
import "../styles/pages/getOperations.css"

const GetOperations:React.FC = () => {
  return (
    <section className='getoperation-container-section'>
      <ul className='section-lists'>
        <li className='section-lisitem'><span>Comprar Moto - R$7600</span> / Valor: R$7600 / Nota: R$100,00 / Qtdd Notas: 76 / Qtdd Pacotes: 2</li>
        <li className='section-lisitem'><span>Reformar Casa - R$5000</span> / Valor: R$5000 / Nota: R$100,00 / Qtdd Notas: 50 / Qtdd Pacotes: 1</li>
        <li className='section-lisitem'><span>Emprestar - R$1200</span> / Valor: R$1200 / Nota: R$50,00 / Qtdd Notas: 24 / Qtdd Pacotes: 1</li>
      </ul>
    </section>
  )
};

export default GetOperations;
