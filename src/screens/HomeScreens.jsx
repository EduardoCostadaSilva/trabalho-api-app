import React, { useState, useEffect } from "react";
import api from './api';

const App = () => {
  const [produtos, setProdutos] = useState([]);
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const fetchProdutos = async (query) => {
    try {
      const resposta = await api.search(query);
      console.log(resposta);
      setProdutos(resposta.data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    fetchProdutos(query);
  };

  useEffect(() => {
    fetchProdutos(query);
  }, [query]);

  return (
    <div>
      <h1>Informações de produtos</h1>
      <form onSubmit={handleSubmit}>
        <label>Pesquisar por Produto:</label>
        <input type="text" value={query} onChange={handleInputChange} />
        <button type="submit">Pesquisar</button>
      </form>
      <ul>
        {produtos.map(produto => (
          <li key={produto.data.products}>
            <h2>Nome: <strong>{produto.data.product_title}</strong></h2>
            <img src={produto.data.product_photo} height={500} width={500} alt="Product"></img>
            <h4>Preço: R$ <strong>{produto.data.product_price}</strong></h4>
            <button><a href={produto.data.product_url}>Comprar</a></button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
