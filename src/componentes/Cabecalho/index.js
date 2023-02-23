import './Cabecalho.css'

const Cabecalho = ({texto}) => {
    return (
        <div className='cabecalho'>
            <h1>{texto}</h1>
        </div>
    )
}

export default Cabecalho;