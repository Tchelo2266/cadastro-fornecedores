import { useEffect, useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import './Formulario.css'

const Formulario = ({aoCadastrar, aoEditar, fornecedor, aoLimpar}) => {
    const [id, setId] = useState(0)
    const [nome, setNome] = useState('')
    const [razaoSocial, setRazaoSocial] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [numero, setNumero] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [cep, setCep] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [observacao, setObservacao] = useState('')

    useEffect(() => {
        if(fornecedor !== null){
            console.log("entrou", fornecedor);
            setId(fornecedor.id  || 0);
            setNome(fornecedor.nome || '');
            setRazaoSocial(fornecedor.razaoSocial || '');
            setLogradouro(fornecedor.logradouro || '');
            setNumero(fornecedor.numero || '');
            setBairro(fornecedor.bairro || '');
            setCidade(fornecedor.cidade || '');
            setEstado(fornecedor.estado || '');
            setCep(fornecedor.cep || '');
            setTelefone(fornecedor.telefone || '');
            setEmail(fornecedor.email || '');
            setObservacao(fornecedor.observacao || '');
        }
    }, [fornecedor])

    const limpaCampos = () => {
        aoLimpar('');
    }

    const aoSubmeter = (evento) => {
        evento.preventDefault();
        if(id === 0){
            aoCadastrar({
                nome,
                razaoSocial,
                logradouro,
                numero,
                bairro,
                cidade,
                estado,
                cep,
                telefone,
                email,
                observacao
            })
        }else{
            aoEditar({
                id,
                nome,
                razaoSocial,
                logradouro,
                numero,
                bairro,
                cidade,
                estado,
                cep,
                telefone,
                email,
                observacao
            })
        }
    };

    return(
        <form className='formulario' onSubmit={aoSubmeter}>
            <div className='linha'>
                <div className='coluna-4 coluna-s-12'>
                    <CampoTexto
                        obrigatorio={true}
                        label="Nome"
                        placeholder=""
                        valor={nome}
                        aoAlterado={valor => setNome(valor)}
                    />
                </div>
                <div className='coluna-4 coluna-s-12'>
                    <CampoTexto
                        obrigatorio={true}
                        label="Razao social"
                        placeholder=""
                        valor={razaoSocial}
                        aoAlterado={valor => setRazaoSocial(valor)}
                    />
                </div>
                <div className='coluna-4 coluna-s-8'>
                    <CampoTexto
                        obrigatorio={false}
                        label="Logradouro"
                        placeholder=""
                        valor={logradouro}
                        aoAlterado={valor => setLogradouro(valor)}
                    />
                </div>
                <div className='coluna-2 coluna-s-4'>
                    <CampoTexto
                        obrigatorio={false}
                        label="Número"
                        placeholder=""
                        valor={numero}
                        aoAlterado={valor => setNumero(valor)}
                    />
                </div>
                <div className='coluna-4 coluna-s-12'>
                    <CampoTexto
                        obrigatorio={false}
                        label="Bairro"
                        placeholder=""
                        valor={bairro}
                        aoAlterado={valor => setBairro(valor)}
                    />
                </div>
                <div className='coluna-4 coluna-s-8'>
                    <CampoTexto
                        obrigatorio={false}
                        label="Cidade"
                        placeholder=""
                        valor={cidade}
                        aoAlterado={valor => setCidade(valor)}
                    />
                </div>
                <div className='coluna-2 coluna-s-4'>
                    <CampoTexto
                        obrigatorio={false}
                        label="Estado"
                        placeholder=""
                        valor={estado}
                        aoAlterado={valor => setEstado(valor)}
                    />
                </div>
                <div className='coluna-4 coluna-s-6'>
                    <CampoTexto
                        obrigatorio={false}
                        label="Cep"
                        placeholder=""
                        valor={cep}
                        aoAlterado={valor => setCep(valor)}
                    />
                </div>
                <div className='coluna-4 coluna-s-6'>
                    <CampoTexto
                        obrigatorio={true}
                        label="Telefone"
                        placeholder=""
                        valor={telefone}
                        aoAlterado={valor => setTelefone(valor)}
                    />
                </div>
                <div className='coluna-4 coluna-s-12'>
                    <CampoTexto
                        obrigatorio={false}
                        label="Email"
                        placeholder=""
                        valor={email}
                        aoAlterado={valor => setEmail(valor)}
                    />
                </div>
                <div className='coluna-8 coluna-s-12'>
                    <CampoTexto
                        obrigatorio={false}
                        label="Observacao"
                        placeholder=""
                        valor={observacao}
                        aoAlterado={valor => setObservacao(valor)}
                    />
                </div>
                <div className='coluna-auto coluna-btn'>
                {id === 0 ? 
                    <Botao name="Salva" tipo="submit" texto="Salvar" bg="#198754" corTxt="#fff" />
                :
                    <Botao name="Alterar" tipo="submit" texto="Alterar" bg="#ffc107" corTxt="#000" />
                }
                </div>
                <div className='coluna-auto coluna-btn'>
                    <Botao name="Limpa" aoClicar={limpaCampos} tipo="button" texto="Limpar" bg="#f8f9fa" corTxt="#000" />
                </div>
            </div>
        </form>
    )
}

export default Formulario;