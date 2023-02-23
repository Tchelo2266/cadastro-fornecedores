import { useState } from 'react';
import './App.css';
import Cabecalho from './componentes/Cabecalho';
import Formulario from './componentes/Formulario';
import Tabela from './componentes/Tabela';

function App() {

  const cabecalhoTabela = [
    {
      "text": "Cód.",
    },
    {
        "text": "Nome",
    },
    {
        "text": "Razão social",
    },
    {
        "text": "Telefone",
    },
  ];

  const inicial = [
    {"id": 1, "nome": "Paulo", "razaoSocial": "Gerdau Aço Minas", "telefone": "(31) 3749-2749"},
    {"id": 2, "nome": "César", "razaoSocial": "Arcelormittal", "telefone": "(31) 3379-1400"},
    {"id": 3, "nome": "Marcos", "razaoSocial": "Usiminas", "telefone": "NA"}
  ];

  const [fornecedores, setFornecedores] = useState(inicial);
  const [fornecedorSelecionado, setFornecedor] = useState(null);

  const dados = fornecedores.map((fornecedor) => {
    return [fornecedor.id, fornecedor.nome, fornecedor.razaoSocial, fornecedor.telefone]
  })

  function cadastraFornecedor(fornecedor){
    let id = fornecedores.length + 1;
    fornecedor.id = id;
    setFornecedores([...fornecedores, fornecedor])
  }

  function editaFornecedor(fornecedorEdit){
    console.log("fornecedor edita :>> ", fornecedorEdit);
    let index = fornecedores.findIndex( fornecedor => fornecedor.id === fornecedorEdit.id);
    console.log("index fornecedor edita :>> ", index);
    let alteraFornecedores = fornecedores;
    alteraFornecedores[index] = fornecedorEdit;
    setFornecedor(fornecedorEdit);
    setFornecedores(alteraFornecedores);
    console.log(fornecedores);
  }

  function selecionaFornecedor(indexFornecedor){
    let forn = indexFornecedor !== '' ? fornecedores[indexFornecedor] : {}
    setFornecedor(forn);
  }

  return (
    <div className="App">
      <Cabecalho texto="Fornecedores" />
      <Formulario aoCadastrar={cadastraFornecedor} aoEditar={editaFornecedor} fornecedor={fornecedorSelecionado} aoLimpar={selecionaFornecedor}/>
      <Tabela head={cabecalhoTabela} body={dados} aoSelecionar={selecionaFornecedor}/>
    </div>
  );
}

export default App;
