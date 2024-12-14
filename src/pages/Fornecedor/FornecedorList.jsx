import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from '../../api'
import { FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const FornecedorList = () => {

    const [fornecedores, setFornecedores] = useState([])

    useEffect(() => {
        axios.get("/fornecedores")
        .then(response => setFornecedores(response.data))
        .catch(error => console.log("Error ao carregar fornecedores: ", error))


    }, []) 


  return (
    <div className="container mt-5">
        <h2 className="mb-4" style={{ position: 'relative' }}>Lista de Fornecedores</h2>

        <Link to="/add-fornecedores" className="btn btn-primary mb-2">
        <FaPlus className="icon"/> Adicionar Fornecedor</Link>

    </div>
  )
}

export default FornecedorList