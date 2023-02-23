import './Botao.css'

const Botao = ({texto, bg, corTxt, tipo, aoClicar}) => {
    return (
        <button
            onClick={aoClicar}
            type={tipo}
            className='botao' 
            style={{backgroundColor: bg, color: corTxt}}>
                {texto}
        </button>
    )
}

export default Botao