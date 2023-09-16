import './index.scss'

import Header from '../../components/header'
import { useState } from 'react'

export default function Cardinfo() {
    const [infoum, setInfoum] = useState (true)
    const [infodois, setInfodois] = useState (false)
    const [infotres, setInfotres] = useState (false)
    const [info, setInfo] = useState (1)

    function InfoMais () {
        setInfo(info + 1)
    }

    function InfoMenos () {
        setInfo(info - 1)
    }

    return(
        <div id='CardInfo'>
            <Header/>

            <section className='CardInfo'>
                <div className='TituloInfo'>
                    {info == 1 &&
                    <h1>Primeira Info</h1>}
                    {info == 2 &&
                    <h1>Segunda Info</h1>}
                    {info == 3 &&
                    <h1>Terceira Info</h1>}
                </div>
                <div className='Info'>

                    {info == 1 &&
                    <>
                    <h1>Tempo Limite</h1>
                    <p>A Regra do Tempo Limite de Resposta estipula que os participantes têm 1 minuto para responder a uma pergunta ou concluir uma tarefa. Se não o fizerem a tempo, não ganharão pontos. Essa regra visa promover decisões rápidas e justiça nas competições, incentivando a agilidade mental e a adaptação a pressões de tempo. A comunicação clara dessa regra é fundamental antes do início do jogo ou competição.</p>
                    </>
                    }

                    {info == 2 &&
                    <>
                    <h1>Dica e Eliminar</h1>
                    <p>No quiz do Frei, os jogadores têm a opção de ganhar uma dica ou eliminar uma pergunta, mas cada ação só pode ser usada uma vez. Isso adiciona uma dimensão estratégica ao jogo, pois os jogadores precisam escolher sabiamente quando usar essas vantagens.</p>
                    </>
                    }

                    {info == 3 &&
                    <>
                    <h1>Voce ganha pontos!</h1>
                    <p>Foi estabelecido um sistema de pontuação progressiva. Quando os participantes respondem às perguntas corretamente, eles ganham uma quantidade crescente de pontos: <br></br> <br></br>
                    Primeira pergunta correta: 10 pontos<br></br>
                    Segunda pergunta correta: 20 pontos adicionais<br></br>
                    Terceira pergunta correta: 30 pontos adicionais<br></br>
                    Quarta pergunta correta: 40 pontos adicionais<br></br>
                    Quinta pergunta correta: 50 pontos adicionais</p>
                    </>
                    }

                </div>
                <div className='PInfo'>
                    {info == 1 &&
                    <>
                    <div></div>
                    <button onClick={InfoMais}>Próxima Info</button>
                    </>
                    }

                    {info == 2 &&
                    <>
                    <button onClick={InfoMenos}>Voltar</button>
                    <button onClick={InfoMais}>Próxima Info</button>
                    </>
                    }
                    
                    {info == 3 &&
                    <>
                    <button onClick={InfoMenos}>Voltar</button>
                    <button ><a href='http://localhost:3000/perguntas'>Começar</a></button>
                    </>
                    }
                </div>
            </section>
            <nav className='vinhetafds'></nav>
        </div>
    )
}