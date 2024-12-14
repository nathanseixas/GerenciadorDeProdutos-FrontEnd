import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from '../../api'

const FornecedorList = () => {

    const [fornecedores, setFornecedores] = useState([])

    useEffect(() => {
        axios.get("/fornecedores")
        .then(response => setFornecedores(response.data))
        .catch(error => console.log("Error ao carregar fornecedores: ", error))


    }, []) 


  return (
    <div>FornecedorList</div>
  )
}

export default FornecedorList