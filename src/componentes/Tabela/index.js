import './Tabela.css'

/* 

    dados: 
    {
        "head": [{}],
        "body": [[]]
    }

*/

const Tabela = ({head, body, aoSelecionar}) => {
    return (
        <div className='tabela'>
            <table>
                <thead>
                    <tr>
                        {head.map((item, index) => {
                            return <th key={index}> {item.text} </th>    
                        })}
                    </tr>
                </thead>
                <tbody>
                    {body.length > 0 ? 
                        body.map((item, index) => {
                            return (
                                <tr onClick={evento => aoSelecionar(index)}>
                                    {item.map((coluna, index)=>{
                                        return <td key={index}>{coluna}</td>
                                    })}
                                </tr>
                            )
                        })
                        : 
                        <tr>
                            <td colSpan={head.length}>Nenhum fornecedor encontrado!</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Tabela;