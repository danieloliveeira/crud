import { useState, useEffect } from "react"

import estoque from "../services/config"



import './Home.css'
const Home = () => {

    const [produtos, setProdutos] = useState([])

    const getProdutos = async() => {

        
       try {
            const response = await estoque.get('http://ec2-34-224-23-65.compute-1.amazonaws.com:5000/estoque/listar');

            console.log(response)
            
           const data = response.data
           console.log(data)

           setProdutos(data);

       } catch(error) {
            console.log(error)
       }
    }
    
    useEffect(() => {
        getProdutos()
    }, [])

  return (
    <div>
        <h1>Ultimos produtos</h1>
        {produtos.length === 0 ? (
            <p>Carregando...</p>
        ) : (
            produtos.map((produtos) => (
                <ul className='post' key={produtos.id}>
                   <li><strong>Código:</strong> {produtos.codigo}</li>
                    <li><strong>Condição:</strong> {produtos.condicao}</li>
                    <li><strong>Cor:</strong> {produtos.cor}</li>
                    <li><strong>Marca:</strong> {produtos.marca}</li>
                    <li><strong>Observações:</strong> {produtos.observacoes}</li>
                    <li><strong>Peso:</strong> {produtos.peso}</li>
                    <li><strong>Preço:</strong> {produtos.preco}</li>
                    <li><strong>produto:</strong> {produtos.produto}</li>
                    <li><strong>Quantidade:</strong> {produtos.quantidade}</li>
                </ul>
            ))
        )}
    </div>
  )
}

export default Home