import styles from './QuantidadeLetraA.modules.css'

import {useState} from 'react'

const QuantidadeLetraA = () => {
    const [palavra, setPalavra] = useState("")
    const [quantidade, setQuantidade] = useState("")

    const handlePalavra = (form) => {
        setPalavra(form.target.value)
        const Quantidade = contarLetra(palavra, 'a')
        setQuantidade(Quantidade)
    }

    const contarLetra = (texto, letra) => {
        return texto.split(letra).length
    }

  return (
    <div className={styles.div}>
        <form>
            <label>
                <span>Digite a palavra:</span><br /><br />
                <input type="text" onChange={handlePalavra} />
            </label><br />
            <br />
            <div>A quantidade de letras a na palavra {palavra} é: {quantidade} </div>
        </form>
    </div>
  )
}

export default QuantidadeLetraA