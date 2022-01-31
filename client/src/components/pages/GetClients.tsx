import React, {useState} from 'react';
import "../styles/pages/getClients.css"
import axios from 'axios';

type ShowClients = {
  id: string,
  name: string,
  username: string,
  birthday?: string,
  address?: string,
  cpf?: string,
  created_at: Date,
}

const GetClients: React.FC = ()=>{

  const [clients, setClients] = useState<ShowClients[]>([]);

  axios.get('http://localhost:3001/showAllClients').then(res => {
    setClients(res.data);
  });

  return (
    <div className='all-clients'>
      {clients.map(client => (
        <div className='each-client' key={client.id}>
          <h3>{client.id}</h3>
          <h1>{client.name}</h1>
          <h2>{client.username}</h2>
          <h3>{client.address}</h3>
          <h2>{client.birthday}</h2>
          <h2>{client.cpf}</h2>
          <h2>{client.created_at}</h2>
        </div>
      ))}
    </div>
  )
}

export default GetClients;