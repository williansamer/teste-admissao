import React, { useEffect, useState } from 'react';
import axios from 'axios';

type GetOperations = {
  id: string;
  name_operation: string;
  value: number;
  preference: number;
  qtt_notes: number;
  qtt_packages: number;
}

const useCustom = () => {

  const [isLoged, setIsLoged] = useState(false);
  const [user, setUser] = useState<string>('');
  const [getOperations, setGetOperations] = useState<GetOperations[]>([]);

  useEffect(() => {
    if(localStorage.getItem('token')){
      setIsLoged(true)
    }
  }, []);

  useEffect(() => {
  
    if(localStorage.getItem('token')){
      setIsLoged(true)
      axios.get('http://localhost:3001/showOperations', {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(response => {
        setGetOperations(response.data.result);
      }).catch(err => {
        alert("Erro ao carregar operações")
      })
    } else{
      setIsLoged(false)
    }
  }, [localStorage.getItem('token')]);

  // console.log(getOperations)

  return {isLoged, setIsLoged, getOperations, setGetOperations, user, setUser};
};

export { useCustom };