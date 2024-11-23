import './Newproduct.css';
import estoque from '../services/config';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Newproduct = () => {
    const navigate = useNavigate();

    const [produto, setProduto] = useState('');
    const [condicao, setCondicao] = useState('');
    const [cor, setCor] = useState('');
    const [marca, setMarca] = useState('');
    const [observacoes, setObservacoes] = useState('');
    const [peso, setPeso] = useState('');
    const [preco, setPreco] = useState('');
    const [quantidade, setQuantidade] = useState(1);
    const [codigo, setCodigo] = useState('');

    const createProduct = async (e) => {
        e.preventDefault();

        if (!produto || !codigo || !preco || !quantidade) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }


        const product = {
            codigo: Number(codigo),
            condicao,
            cor,
            marca,
            observacoes,
            peso: peso ? parseFloat(peso) : null, 
            preco: parseFloat(preco),
            quantidade: Number(quantidade),
            produto,
        };

        try {
            await estoque.post(
                'http://ec2-34-224-23-65.compute-1.amazonaws.com:5000/estoque/cadastrar',
                product
            );
            navigate('/'); 
        } catch (error) {
            if (error.response) {
                console.error('Erro no servidor:', error.response.data, 'Status:', error.response.status);
            } else if (error.request) {
                console.error('Nenhuma resposta da API:', error.request);
            } else {
                console.error('Erro na configuração da requisição:', error.message);
            }
        }
        
    };

    return (
        <div className="new-post">
            <h2>Criar novo produto:</h2>

            <form onSubmit={createProduct}>
                <div className="form-control">
                    <label htmlFor="codigo">Código</label>
                    <input
                        type="number"
                        name="codigo"
                        id="codigo"
                        placeholder="Digite o código do produto"
                        onChange={(e) => setCodigo(e.target.value)}
                        required
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="condicao">Condição</label>
                    <textarea
                        name="condicao"
                        id="condicao"
                        placeholder="Digite a condição do produto"
                        onChange={(e) => setCondicao(e.target.value)}
                    ></textarea>
                </div>
                <div className="form-control">
                    <label htmlFor="cor">Cor</label>
                    <input
                        type="text"
                        name="cor"
                        id="cor"
                        placeholder="Digite a cor do produto"
                        onChange={(e) => setCor(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="marca">Marca</label>
                    <input
                        type="text"
                        name="marca"
                        id="marca"
                        placeholder="Digite a marca do produto"
                        onChange={(e) => setMarca(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="observacoes">Observações</label>
                    <textarea
                        name="observacoes"
                        id="observacoes"
                        placeholder="Digite as observações sobre o produto"
                        onChange={(e) => setObservacoes(e.target.value)}
                    ></textarea>
                </div>
                <div className="form-control">
                    <label htmlFor="peso">Peso</label>
                    <input
                        type="text"
                        name="peso"
                        id="peso"
                        placeholder="Digite o peso do produto (em kg)"
                        onChange={(e) => setPeso(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="preco">Preço</label>
                    <input
                        type="number"
                        step="0.01"
                        name="preco"
                        id="preco"
                        placeholder="Digite o preço do produto"
                        onChange={(e) => setPreco(e.target.value)}
                        required
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="produto">Produto</label>
                    <input
                        type="text"
                        name="produto"
                        id="produto"
                        placeholder="Digite o nome do produto"
                        onChange={(e) => setProduto(e.target.value)}
                        required
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="quantidade">Quantidade</label>
                    <input
                        type="number"
                        name="quantidade"
                        id="quantidade"
                        value={quantidade}
                        onChange={(e) => setQuantidade(e.target.value)}
                        required
                    />
                </div>

                <input type="submit" value="Criar produto" className="new-btn" />
            </form>
        </div>
    );
};

export default Newproduct;