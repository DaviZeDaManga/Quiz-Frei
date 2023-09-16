import './index.scss'

import Header from '../../components/header'
import { useState, useEffect } from 'react'


export default function Perguntas() {
    const [respum, setRespum] = useState("respondendo")
    const [respdois, setRespdois] = useState("")
    const [resptres, setResptres] = useState("")
    const [respquatro, setRespquatro] = useState("")
    const [respcinco, setRespcinco] = useState("")

    const[pontos, setPontos] = useState(0)
    const[acertos, setAcertos] = useState(0)
    const[pergunta, setPergunta] = useState(1)
    const[mostrardick, setMostrardick] = useState(false)
    const[semdica, setSemdica] = useState(false)
    const[dica, setDica] = useState(true)

    const[contarp, setContarp] = useState(0)
    const[tempo, setTempo] = useState(45)

    function espera (ms) {          
        return new Promise ( resolve => {              
            setTimeout(() => {resolve('')}, ms);          
        })        
    } 
    
    async function Timer (){         
        for (let i = 45; i >= 0; i--){           
            await espera(1000);         
            setTempo(i);     

            if(i == 0) {    
                // if(pergunta == 1) {
                //     setPergunta(2)
                //     setRespum("errou")
                //     setRespdois("respondendo")
                //     Timer()
                // }
                // else if(pergunta == 2) {
                //     setPergunta(3)
                //     setRespdois("errou")
                //     setResptres("respondendo")
                //     Timer()
                // }
                // else if(pergunta == 3) {
                //     setResptres("errou")
                //     setRespquatro("respondendo")
                // }
                // else if(pergunta == 4) {
                //     setRespquatro("errou")
                //     setResptres("respondendo")
                // }
            }
        }     
    }  

    const carregamento = {
        width:  {tempo} + '%'
    }

    useEffect (() => {
        Timer()
    }, [])

    function ContarPontos() {
        let interval = setInterval(contarp, 1000)
        if(contarp == pontos) {
            clearInterval(interval)
        }
    }

    function Pergunta() {
        setPergunta(pergunta + 1)
    }

    function MostrarDica() {
        setMostrardick(!mostrardick)
        setDica(false)
    }

    function Semdicas() {
        setSemdica(!semdica)
    }

    function RecarregarPage() {
        window.location.reload()
    }

    return(
        <div id="Perguntas">
            <Header/>
            <section className='Perguntas'>
                <div className='Progresso'>
                    <div className='linha'></div>
                    <nav className='titulo'>
                        <h1>Progresso</h1>
                    </nav>
                    <section className='Respostas'>

                        <div className='card'>
                            <div className='resultado'>

                                {respum == "acertou" &&
                                <div className='acertou'>
                                    <img src="/assets/images/Respostas/Acertou.png" />
                                </div>}
                                {respum == "errou" &&
                                <div className='errou'>
                                    <img src="/assets/images/Respostas/Errou.png" />
                                </div>}
                                {respum == "respondendo" &&
                                <div className='respondendo'></div>}

                            </div>
                            <div className='Pergunta'>
                                <h1>Pergunta 1</h1>
                                {respum == "" &&
                                <h2>Bloqueada</h2>}
                                {respum == "respondendo" &&
                                <h2>Respondendo</h2>}
                                {respum == "acertou" &&
                                <h2>Desde 1979, quantas pessoas mudaram de vida a partir dos cursos fornecidos pelos Frei?</h2>
                                }
                                {respum == "errou" &&
                                <h2>Desde 1979, quantas pessoas mudaram de vida a partir dos cursos fornecidos pelos Frei?</h2>
                                }
                            </div>
                        </div>

                        <div className='card'>
                            <div className='resultado'>

                                {respdois == "acertou" &&
                                <div className='acertou'>
                                    <img src="/assets/images/Respostas/Acertou.png" />    
                                </div>}
                                {respdois == "errou" &&
                                <div className='errou'>
                                    <img src="/assets/images/Respostas/Errou.png" />    
                                </div>}
                                {respdois == "respondendo" &&
                                <div className='respondendo'></div>}

                            </div>
                            <div className='Pergunta'>
                                <h1>Pergunta 2</h1>
                                {respdois == "" &&
                                <h2>Bloqueada</h2>}
                                {respdois == "respondendo" &&
                                <h2>Respondendo</h2>}
                                {respdois == "acertou" &&
                                <h2>Segundo oque foi dito pelo Bruno, o que é CSS?</h2>
                                }
                                {respdois == "errou" &&
                                <h2>Segundo oque foi dito pelo Bruno, o que é CSS?</h2>
                                }
                            </div>
                        </div>

                        <div className='card'>
                            <div className='resultado'>

                                {resptres == "acertou" &&
                                <div className='acertou'>
                                    <img src="/assets/images/Respostas/Acertou.png" />
                                </div>}
                                {resptres == "errou" &&
                                <div className='errou'>
                                    <img src="/assets/images/Respostas/Errou.png" />    
                                </div>}
                                {resptres == "respondendo" &&
                                <div className='respondendo'></div>}

                            </div>
                            <div className='Pergunta'>
                                <h1>Pergunta 3</h1>
                                {resptres == "" &&
                                <h2>Bloqueada</h2>}
                                {resptres == "respondendo" &&
                                <h2>Respondendo</h2>}
                                {resptres == "acertou" &&
                                <h2>Qual foi a profissão abordada nessa sala? perante a feira de profissões</h2>
                                }
                                {resptres == "errou" &&
                                <h2>Qual foi a profissão abordada nessa sala? perante a feira de profissões</h2>
                                }
                            </div>
                        </div>

                        <div className='card'>
                            <div className='resultado'>

                                {respquatro == "acertou" &&
                                <div className='acertou'>
                                    <img src="/assets/images/Respostas/Acertou.png" />    
                                </div>}
                                {respquatro == "errou" &&
                                <div className='errou'>
                                    <img src="/assets/images/Respostas/Errou.png" />    
                                </div>}
                                {respquatro == "respondendo" &&
                                <div className='respondendo'></div>}

                            </div>
                            <div className='Pergunta'>
                                <h1>Pergunta 4</h1>
                                {respquatro == "" &&
                                <h2>Bloqueada</h2>}
                                {respquatro == "respondendo" &&
                                <h2>Respondendo</h2>}
                                {respquatro == "acertou" &&
                                <h2>Quantos anos tem o Frei Chavier?</h2>
                                }
                                {respquatro == "errou" &&
                                <h2>Quantos anos tem o Frei Chavier?</h2>
                                }
                            </div>
                        </div>

                        <div className='card'>
                            <div className='resultado'>

                                {respcinco == "acertou" &&
                                <div className='acertou'>
                                    <img src="/assets/images/Respostas/Acertou.png" />    
                                </div>}
                                {respcinco == "errou" &&
                                <div className='errou'>
                                    <img src="/assets/images/Respostas/Errou.png" />    
                                </div>}
                                {respcinco == "respondendo" &&
                                <div className='respondendo'></div>}

                            </div>
                            <div className='Pergunta'>
                                <h1>Pergunta 5</h1>
                                {respcinco == "" &&
                                <h2>Bloqueada</h2>}
                                {respcinco == "respondendo" &&
                                <h2>Respondendo</h2>}
                                {respcinco == "acertou" &&
                                <h2>Quantas parcerias o Frei obteve na Feira de Profissões?</h2>
                                }
                                {respcinco == "errou" &&
                                <h2>Quantas parcerias o Frei obteve na Feira de Profissões?</h2>
                                }
                            </div>
                        </div>

                    </section>
                    <div className='linha'></div>
                </div>

                <div className='Pergunta'>
                    <section className='card'>

                        <div className='QuizFrei'>
                            <nav className='Logo'>
                                <div className='Frei'>
                                    <h1>Quiz Frei</h1>
                                </div>
                                <div className='imagem'>
                                    <img src="/assets/images/FreiLogoWhite.png" />
                                </div>
                            </nav>
                            <div className='Pontos'>
                                <h1>{pontos} Pontos</h1>
                            </div>
                        </div>

                        <div id="Pergunta">

                            {pergunta == 1 &&
                            <h1>Desde 1979, quantas pessoas mudaram de vida a partir dos cursos fornecidos pelos Frei?</h1>}

                            {pergunta == 2 &&
                            <h1>Segundo oque foi dito pelo Bruno, o que é CSS?</h1>}

                            {pergunta == 3 &&
                            <h1>Qual foi a proffissão abordada nessa sala? perante a feira de profissões</h1>}

                            {pergunta == 4 &&
                            <h1>Quantos anos tem o Frei Chavier?</h1>}

                            {pergunta == 5 &&
                            <h1>Quantas parcerias o Frei obteve na Feira de Profissões?</h1>}

                        </div>

                        <section id="Respostas">
                            <div className='grupoResp'>

                                {pergunta == 1 &&
                                <>
                                <div onClick={()=> (setRespum("acertou"), setPergunta(2), setRespdois("respondendo"), setPontos(10), setAcertos(acertos + 1))} className='Resposta'>
                                    <div className='Letra'>
                                        <h1>A</h1>
                                    </div>

                                    <h1>100.000 pessoas</h1>

                                </div>

                                <div onClick={()=> (setRespum("errou"), setPergunta(2), setRespdois("respondendo"))}  className='Resposta'>
                                    <div className='Letra'>
                                        <h1>B</h1>
                                    </div>

                                    <h1>1.000 pessoas</h1>

                                </div>
                                </>
                                }

                                {pergunta == 2 &&
                                <>
                                <div onClick={()=> (setRespdois("errou"), setPergunta(3), setResptres("respondendo"))} className='Resposta'>
                                    <div className='Letra'>
                                        <h1>A</h1>
                                    </div>

                                    <h1>Redes</h1>

                                </div>

                                <div onClick={()=> (setRespdois("acertou"), setPergunta(3), setResptres("respondendo"), setPontos(pontos + 20), setAcertos(acertos + 1))}  className='Resposta'>
                                    <div className='Letra'>
                                        <h1>B</h1>
                                    </div>

                                    <h1>Linguagem de Formatação</h1>

                                </div>
                                </>
                                }

                                {pergunta == 3 &&
                                <>
                                <div onClick={()=> (setResptres("errou"), setPergunta(4), setRespquatro("respondendo"))} className='Resposta'>
                                    <div className='Letra'>
                                        <h1>A</h1>
                                    </div>

                                    <h1>Gastronomia</h1>

                                </div>

                                <div onClick={()=> (setResptres("acertou"), setPergunta(4), setRespquatro("respondendo"), setPontos(pontos + 30), setAcertos(acertos + 1))}  className='Resposta'>
                                    <div className='Letra'>
                                        <h1>B</h1>
                                    </div>

                                    <h1>T.I. Informatica</h1>

                                </div>
                                </>
                                }

                                {pergunta == 4 &&
                                <>
                                <div onClick={()=> (setRespquatro("errou"), setPergunta(5), setRespcinco("respondendo"))} className='Resposta'>
                                    <div className='Letra'>
                                        <h1>A</h1>
                                    </div>

                                    <h1>50 anos</h1>

                                </div>

                                <div onClick={()=> (setRespquatro("errou"), setPergunta(5), setRespcinco("respondendo"))} className='Resposta'>
                                    <div className='Letra'>
                                        <h1>B</h1>
                                    </div>

                                    <h1>62 anos</h1>

                                </div>
                                </>
                                }

                                {pergunta == 5 &&
                                <>
                                <div onClick={()=> (setRespcinco("errou"), setPergunta(6))} className='Resposta'>
                                    <div className='Letra'>
                                        <h1>A</h1>
                                    </div>

                                    <h1>2</h1>

                                </div>

                                <div onClick={()=> (setRespcinco("errou"), setPergunta(6))} className='Resposta'>
                                    <div className='Letra'>
                                        <h1>B</h1>
                                    </div>

                                    <h1>4</h1>

                                </div>
                                </>
                                }
                                
                            </div>
                            <div className='grupoResp'>
                                
                                {pergunta == 1 &&
                                <>
                                <div onClick={()=> (setRespum("errou"), setPergunta(2), setRespdois("respondendo"))}  className='Resposta'>
                                    <div className='Letra'>
                                        <h1>C</h1>
                                    </div>

                                    <h1>80.000 pessoas</h1>

                                </div>

                                <div onClick={()=> (setRespum("errou"), setPergunta(2), setRespdois("respondendo"))}  className='Resposta'>
                                    <div className='Letra'>
                                        <h1>D</h1>
                                    </div>

                                    <h1>Apenas 10 pessoas</h1>

                                </div>
                                </>
                                }

                                {pergunta == 2 &&
                                <>
                                <div onClick={()=> (setRespdois("errou"), setPergunta(3), setResptres("respondendo"))}  className='Resposta'>
                                    <div className='Letra'>
                                        <h1>C</h1>
                                    </div>

                                    <h1>Uma linguagem humana</h1>

                                </div>

                                <div onClick={()=> (setRespdois("errou"), setPergunta(3), setResptres("respondendo"))}  className='Resposta'>
                                    <div className='Letra'>
                                        <h1>D</h1>
                                    </div>

                                    <h1>Cleber Super Speed</h1>

                                </div>
                                </>
                                }

                                {pergunta == 3 &&
                                <>
                                <div onClick={()=> (setResptres("errou"), setPergunta(4), setRespquatro("respondendo"))}  className='Resposta'>
                                    <div className='Letra'>
                                        <h1>C</h1>
                                    </div>

                                    <h1>Mecanism</h1>

                                </div>

                                <div onClick={()=> (setResptres("errou"), setPergunta(4), setRespquatro("respondendo"))}  className='Resposta'>
                                    <div className='Letra'>
                                        <h1>D</h1>
                                    </div>

                                    <h1>Metaleiro</h1>

                                </div>
                                </>
                                }

                                {pergunta == 4 &&
                                <>
                                <div onClick={()=> (setRespquatro("errou"), setPergunta(5), setRespcinco("respondendo"))} className='Resposta'>
                                    <div className='Letra'>
                                        <h1>C</h1>
                                    </div>

                                    <h1>34 anos</h1>

                                </div>

                                <div onClick={()=> (setRespquatro("acertou"), setPergunta(5), setRespcinco("respondendo"), setPontos(pontos + 40), setAcertos(acertos + 1))} className='Resposta'>
                                    <div className='Letra'>
                                        <h1>D</h1>
                                    </div>

                                    <h1>92 anos</h1>

                                </div>
                                </>
                                }

                                {pergunta == 5 &&
                                <>
                                <div onClick={()=> (setRespcinco("acertou"), setPontos(pontos + 50), setAcertos(acertos + 1), setPergunta(6))} className='Resposta'>
                                    <div className='Letra'>
                                        <h1>C</h1>
                                    </div>

                                    <h1>10</h1>

                                </div>

                                <div onClick={()=> (setRespcinco("errou"), setPergunta(6))} className='Resposta'>
                                    <div className='Letra'>
                                        <h1>D</h1>
                                    </div>

                                    <h1>22</h1>

                                </div>
                                </>
                                }

                            </div>
                        </section>

                        <div className='Ajuda'>
                            {dica == true &&
                            <button onClick={MostrarDica}>Dica</button>}
                            {dica == false &&
                            <button onClick={Semdicas}>Ja era amigao</button>}
                            <button>Eliminar uma</button>
                        </div>

                    </section>
                    <section className='timer'>
                        <div className='contagem'>
                            <h1>Tempo</h1>
                            <h2>{tempo} segundos restantes</h2>
                        </div>
                        <div className='barra'>
                            <div className='tamanho'>
                                <div className='carregamento' style={carregamento}></div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            {mostrardick == true &&
            <section className='cardFixo'>
                <div className='card'>
                    <h1>A dica da pergunta {pergunta} é</h1>
                    {pergunta == 1 &&
                    <p>Foi mostrado na ladding page da feira</p>}
                    {pergunta == 2 &&
                    <p>Quando seu computador esta ruim, oque voce faz?</p>}
                    {pergunta == 3 &&
                    <p>Olhe para porta dessa sala</p>}
                    {pergunta == 4 &&
                    <p>Foi informado no começo da sala</p>}
                    {pergunta == 5 &&
                    <p>Esta no site do instituto</p>}
                    <button onClick={MostrarDica}>Obrigado</button>
                </div>
            </section>}

            {semdica == true &&
            <section className='cardFixo'>
                <div className='card'>
                    <div></div>
                    <h1>Opa, infelizmente voce ta sem dicas</h1>
                    <button onClick={Semdicas}>Obrigado</button>
                </div>
            </section>}

            {pergunta == 6 &&
            <section className='cardFixo'>
                <div className='card'>
                    
                    {acertos == 0 &&
                    <h1>MANO TU É MUITO BURRO</h1>}
                    {acertos == 1 &&
                    <h1>puts,só um</h1>}
                    {acertos == 2 &&
                    <h1>bem mé</h1>}
                    {acertos == 3 &&
                    <h1>mais ou menos</h1>}
                    {acertos == 4 &&
                    <h1>boa meninim</h1>}
                    {acertos == 5 &&
                    <h1>CARALHO AMASSOU MULEKE</h1>}
                    <p>Você acertou {acertos} perguntas e fez {pontos} pontos</p>
                    <div className='botoes'>
                        <button><a href='http://localhost:3000/respostas'>Ver respostas</a></button>
                        <button><a href='http://localhost:3000/'>Ver resultado</a></button>
                    </div>
                    
                </div>
            </section>}

            {tempo == 0 &&
            <section className='cardFixo'>
                <div className='card'>
                    
                    <h1>O tempo acabou</h1>
                    <p>Você acertou {acertos} perguntas e fez {pontos} pontos</p>
                    <div className='botoes'>
                        <button><a href='http://localhost:3000/respostas'>Ver respostas</a></button>
                        <button><a href='http://localhost:3000/'>Ver resultado</a></button>
                    </div>
                    
                </div>
            </section>}

            <nav className='vinhetafds'></nav>
        </div>
    )
}