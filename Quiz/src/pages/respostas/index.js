import './index.scss'

import Header from '../../components/header'
import { useState } from 'react'

export default function Respostas() {
    const[resposta, setResposta] = useState(1)
    
    function Verresposta() {
        setResposta(resposta + 1)
    }

    return(
        <div id="Respostas">
            <Header/>

            {resposta == 1 &&
            <div className='Respostas'>
                <div className='Imagem'>
                    <div className='sombra'>
                        
                        <img src="/assets/images/Frei/PessoasFrei.png" />
                    </div>
                </div>
                <section className='Resposta'>
                    <h1>Ja ajudou mais de 100mil alunos</h1>
                    <p>Ao longo de sua história, o Instituto Nossa Senhora de Fátima tem contribuído para o crescimento e a transformação de inúmeras vidas. Milhares de alunos passaram por suas portas, buscando conhecimento e orientação, e encontraram muito mais do que apenas educação. Encontraram uma comunidade acolhedora, educadores dedicados e oportunidades para crescer como indivíduos.</p>
                </section>
                <section className='ProxPergu'>
                    <div className='PerguntaTitulo'>
                        <h1>Pergunta {resposta}</h1>
                    </div>
                    <button onClick={Verresposta}>Próxima Resposta</button>
                </section>
            </div>}

            {resposta == 2 &&
            <div className='Respostas'>
                <div className='Imagem'>
                    <div className='sombra'>
                        
                        <img src="/assets/images/Frei/css.png" />
                    </div>
                </div>
                <section className='Resposta'>
                    <h1>O que é CSS?</h1>
                    <p>CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem de marcação como HTML. O CSS separa o conteúdo da representação visual do site. Pense  na decoração da sua página. Utilizando o CSS é possível alterar a cor do texto e do fundo, fonte e espaçamento entre parágrafos. Também pode criar tabelas, usar variações de layouts, ajustar imagens para suas respectivas telas e assim por diante.</p>
                </section>
                <section className='ProxPergu'>
                    <div className='PerguntaTitulo'>
                        <h1>Pergunta {resposta}</h1>
                    </div>
                    <button onClick={Verresposta}>Próxima Resposta</button>
                </section>
            </div>}

            {resposta == 3 &&
            <div className='Respostas'>
                <div className='Imagem'>
                    <div className='sombra'>
                        
                        <img src="/assets/images/Frei/informatica.jpg" />
                    </div>
                </div>
                <section className='Resposta'>
                    <h1>Informatica T.I.</h1>
                    <p>A Tecnologia da Informação (TI) pode ser definida como o conjunto de todas as atividades e soluções providas por recursos computacionais que visam permitir a obtenção, o armazenamento, o acesso, o gerenciamento e o uso das informações.</p>
                </section>
                <section className='ProxPergu'>
                    <div className='PerguntaTitulo'>
                        <h1>Pergunta {resposta}</h1>
                    </div>
                    <button onClick={Verresposta}>Próxima Resposta</button>
                </section>
            </div>}

            {resposta == 4 &&
            <div className='Respostas'>
                <div className='Imagem'>
                    <div className='sombra'>
                        
                        <img src="/assets/images/Frei/PessoasFrei.png" />
                    </div>
                </div>
                <section className='Resposta'>
                    <h1>92 anos de idade!</h1>
                    <p>O Frei no momento tem 92 anos de idade, e perante sua vida teve muitos feitos que seram lembrados por muito tempo, como por exemplo a criação de dois Institutos, o instituto Nossa Senhora de Fatima e o CEDESP, que são lugares que com o intuito de formar pessoas com cursos profissionalizantes, de forma prossional e mais acessivel.</p>
                </section>
                <section className='ProxPergu'>
                    <div className='PerguntaTitulo'>
                        <h1>Pergunta {resposta}</h1>
                    </div>
                    <button onClick={Verresposta}>Próxima Resposta</button>
                </section>
            </div>}

            {resposta == 5 &&
            <div className='Respostas'>
                <div className='Imagem'>
                    <div className='sombra'>
                        
                        <img src="/assets/images/Frei/PessoasFrei.png" />
                    </div>
                </div>
                <section className='Resposta'>
                    <h1>Almejado</h1>
                    <p>O Instituto Nossa Senhora de Fatima, por ser altamente profissional e completo, obteve muitas parcerias para a Feira de Profissões, que são empresas que apoiam o Instituto financeiramente.</p>
                </section>
                <section className='ProxPergu'>
                    <div className='PerguntaTitulo'>
                        <h1>Pergunta {resposta}</h1>
                    </div>
                    <button><a href='http://localhost:3000/'>Reininciar</a></button>
                </section>
            </div>}

            <nav className='vinhetafds'></nav>
        </div>
    )
}