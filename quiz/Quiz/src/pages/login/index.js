import './index.scss'
import { useState, useEffect } from 'react'

import Header from '../../components/header'

export default function Login() {
    const [login, setLogin] = useState ("feito")

    function FazerLogin () {
        setLogin("feito")
    }

    return (
        <div id="login">
            <Header/>
            <section className='vinhetafoda'></section>
            <section className='acao'>
                <h1>Fazer Login</h1>
            </section>

            <main className='login'>
                <div className='title'>
                    <h1>Faça seu Cadastro!</h1>
                </div>

                <section className='inserir'>
                    <h1>Insira seus dados</h1>
                    <p>Dessa forma, após você terminar o quiz terá como ver resultado e competir com os demais</p>
                    <input type='text' placeholder='Digite seu nome'/>
                    <input type='email' placeholder='Digite seu email'/>
                </section>

                {login == "nao" &&
                <button className='fazerlogin'>Informe os dados</button>}
                {login == "feito" &&
                <button className='loginfeito' onClick={FazerLogin}><a href='http://localhost:3000/info'>Ir!</a></button>}

            </main>
        </div>
    )
}