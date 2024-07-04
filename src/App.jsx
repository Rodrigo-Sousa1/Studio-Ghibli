import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styled, { createGlobalStyle } from "styled-components"
import Logo from './assets/imagens/logo.png'
import Castelonoceu from './assets/imagens/castelonoceu.webp'
import Nausica from './assets/imagens/nausica.webp'
import Totoro from './assets/imagens/Totoro.webp'
import Vagalume from './assets/imagens/vagalumes.webp'
import Kiki from './assets/imagens/kiki.webp'
import Memorias from './assets/imagens/memorias.webp'
import Porco from './assets/imagens/porco.webp'
import Oceano from './assets/imagens/oceano.webp'
import PomPoko from "./assets/imagens/Pom-Poko.webp"
import Sussurro from "./assets/imagens/sussurro.webp"
import Monooke from "./assets/imagens/Mononoke.webp"
import Vizinhos from "./assets/imagens/vizinhos.webp"
import Animado from "./assets/imagens/animado.webp"
import Chihiro from "./assets/imagens/viagem.webp"
import Gatos from "./assets/imagens/gatos.webp"
import Ponyo from "./assets/imagens/Ponyo.webp"
import Terramar from "./assets/imagens/terramar.webp"
import Pequeninos from "./assets/imagens/pequeninos.webp"
import Kokuriko from "./assets/imagens/kokuriko.webp"
import Vento from "./assets/imagens/Vento.webp"
import Marnie from "./assets/imagens/marnie.webp"
import Kaguya from "./assets/imagens/kaguya.webp"
import Garça from "./assets/imagens/garça.webp"
import Bruxa from "./assets/imagens/bruxa.webp"
import './App.css'


const EstiloGlobal = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;   
}
`
const Navbar = styled.nav`
 background-color:#1CA0D1;

`

const Corpo = styled.main`
 display:flex;
 align-items:center;
 justify-content:center;
 flex-direction:column-reverse;
 background: rgb(138,211,219);
background: linear-gradient(0deg, rgba(138,211,219,1) 72%, rgba(3,169,207,1) 100%);


`
const Container = styled.section`
  width:100%;
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;
`
const Figuras = styled.figure`
width:75vw;
display:flex;
justify-content:center;
justify-content:space-evenly;

img{ 
  border:solid;
  width:150px;
  height:250px;
  cursor: pointer;
  &:hover{
      box-shadow: rgba(0, 255, 149, 0.548) 5px 19px 15px, rgba(0, 37, 138, 0.454) 0px 10px 19px;
      transition: 0.3s;  }}

  @media(max-width: 360px){
    width:100%;
    height:67vh;
    flex-wrap:wrap;
    img{
      width:130px;
      height:230px;  }}
  @media(max-width: 390px){
    width:100%;
    height:67vh;
    flex-wrap:wrap;}
  `

const Secao = styled.section`
 display:flex;
 margin-top:1%;
`

const Display = styled.section`
  width:30%;
  height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;

  img{
    border:solid;
    width:250px;
    height:350px;
    margin:1%;
    box-shadow: black 5px 5px 4px;
  }

  h1{
    color:white;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-style: normal;
  }

  p{ 
    color:white;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-style: normal;
  }

  @media(max-width: 360px){
    width:100%;
  }
  @media(max-width: 390px){
    width:100%;
  }
  @media(max-width: 834px){
    width:100%;

  img{
    width:350px;
    height:450px;
  }
  h1{
    font-size:45px;
  }
  p{
    font-size: 30px;
    color:black;
  }
  }
`

function App() {
  const [filme, setFilme] = useState(Nausica)

  const filmesInfor = [
    {
      nome: "Nausicaä do Vale do Vento (1984)",
      imagem: Nausica,
      sobre: "Mil se passaram após a Terra ser varrida pela Guerra dos Sete Dias de Fogo. O planeta se tornou hostil, cheio de florestas tóxicas e insetos gigantes. Enquanto tenta navegar nesse mundo de perigos, a princesa Nausicaä, a soberana de um pequeno reino, tenta de todas as formas salvar o seu povo e impedir que duas nações entrem em guerra e se destruam em um planeta agonizante."
    },
    {
      nome: "O Castelo no Céu (1986)",
      imagem: Castelonoceu,
      sobre: "Sheeta, uma jovem órfã que possui um colar misterioso se une ao mineiro Pazu para procurar uma lendária cidade flutuante. Mas a dupla é perseguida por gananciosos piratas aéreos."
    },
    {
      nome: "Meu Amigo Totoro (1988)",
      imagem: Totoro,
      sobre: "As irmãs Satsuki e Mei se mudam para o campo para ficar mais perto do hospital onde sua mãe está internada. Lá conhecem os Totoros, adoráveis criaturas místicas e alegres, que só podem ser vistas pelas crianças. Com eles, as duas irmãs viverão mágicas aventuras no campo."
    },

    {
      nome: " Túmulo dos Vagalumes (1988)",
      imagem: Vagalume,
      sobre: "Os irmão Setsuko e Seita vivem no Japão em meio a Segunda Guerra Mundial. Após a morte da mãe em um bombardeio e a convocação do pai para a Guerra, eles vão morar com alguns parentes. Insatisfeitos, saem da cidade e acabam em um abrigo na floresta.",
    }
  ]
  const filmesInfor2 = [
    {
      nome: "O Serviço de Entregas da Kiki (1989)",
      imagem: Kiki,
      sobre: "Por ordem de sua mãe, Kiki parte para um aprendizado de um ano, acompanhada por seu gato preto. A um comando de sua vassoura mágica, ela vai parar na charmosa cidadezinha de Moreoastal. Infelizmente, os hotéis locais não aceitam bruxas e a polícia a flagra fazendo algumas travessuras.",
    },

    {
      nome: "Memórias de Ontem (1991)",
      imagem: Memorias,
      sobre: "Taeko é uma mulher solteira que se dedica apenas ao trabalho. Ela sai de sua nativa Tóquio pela primeira vez e viaja a Yamagata para visitar a família da irmã durante a colheita anual de açafrão-bastardo. Ao longo da viagem, ela começa a questionar se sua vida estressante é o que desejava quando jovem.",
    },
    {
      nome: "Porco Rosso: O Último Herói Romântico (1992)",
      imagem: Porco,
      sobre: "Transformado em uma espécie de porco humano, um piloto tenta salvar vítimas de piratas.",
    },
    {
      nome: "Eu Posso Ouvir o Oceano (1993)",
      imagem: Oceano,
      sobre: "A chegada de uma bela estudante de Tóquio provoca uma problema na relação entre dois melhores amigos.",
    }
  ]
  const filmesInfor3 = [
    {
      nome: "PomPoko: A Grande Batalha dos Guaxinins (1994)",
      imagem: PomPoko,
      sobre: "Os humanos estão expulsando os guaxinins de seu lar, mas eles estão prontos para lutar e revidar.",
    },
    {
      nome: "Sussurros do Coração (1995)",
      imagem: Sussurro,
      sobre: "Shizuku, uma estudante que sonha ser uma escritora e decide, durante o verão, ler vinte livros. Mas, curiosamente, todas as edições que Shizuki pegou na biblioteca já haviam sido lidas por um tal de Seiji Amasawa.",
    },
    {
      nome: "Princesa Mononoke (1997)",
      imagem: Monooke,
      sobre: "Um príncipe, em busca de uma cura, luta em uma guerra entre a mata e uma colônia mineira. Nesta aventura ele conhece Mononoke.",
    },
    {
      nome: "Meus Vizinhos os Yamadas (1999)",
      imagem: Vizinhos,
      sobre: "A família Yamada é uma família como todas as outras, com os mesmos dilemas, alegrias e descobertas. Os pais lidam com cada situação com humor, tentando demonstrar todo o amor que sentem pelos filhos.",
    }

  ]
  const filmesInfor4 = [
    {
      nome: "A Viagem de Chihiro(2001)",
      imagem: Chihiro,
      sobre: "Chihiro e seus pais estão se mudando para uma cidade diferente. A caminho da nova casa, o pai decide pegar um atalho. Eles se deparam com uma mesa repleta de comida, embora ninguém esteja por perto. Chihiro sente o perigo, mas seus pais começam a comer. Quando anoitece, eles se transformam em porcos. Agora, apenas Chihiro pode salvá-los."
    },
    {
      nome: " O Reino dos Gatos. (2002)",
      imagem: Gatos,
      sobre: "Haru salva um gato que estava prestes a ser atropelado por um caminhão e descobre que ele é, na verdade, um príncipe. Por gratidão o Rei dos Gatos a pede em casamento, e a menina é levada para o Reino dos Gatos. Agora, ela quer sua liberdade."
    },
    {
      nome: "O Castelo Animado (2004)",
      imagem: Animado,
      sobre: "Uma bruxa lança uma terrível maldição sobre a jovem Sophie transformando-a em uma velha. Desesperada, ela embarca em uma odisseia em busca do mago Howl, um misterioso feiticeiro que pode ajudá-la a reverter o feitiço."
    },
    {
      nome: "Contos de Terramar(2006)",
      imagem: Terramar,
      sobre: "O mago Ged observa que o mundo está em desequilíbrio e conhece Arren, um jovem príncipe que diz estar sendo perseguido por uma sombra. Os dois se unem para descobrir o que está causando a instabilidade e encontram a bruxa Kumo."
    }
  ]
  const filmesInfor5 = [
    {
      nome: "Ponyo: Uma Amizade Que Veio do Mar (2008)",
      imagem: Ponyo,
      sobre: "O garoto Sousuke encontra um peixinho dourado preso em uma garrafa e decide libertá-lo, sem saber que se trata da deusa do mar Ponyo. Filha de um poderoso mago, ela se comove com a atitude do menino e usa a magia do pai para se transformar em humana. Dessa forma, acredita poder fortalecer a amizade com Sousuke. Porém, a substância de sua poção mágica pode colocar em risco o vilarejo onde mora o menino."
    },
    {
      nome: "O Mundo dos Pequeninos (2010)",
      imagem: Pequeninos,
      sobre: "Arrietty e sua família são seres pequenos, moram sob uma casa antiga e sobrevivem roubando itens da casa dos humanos e colocando a culpa em gatos e ratos. Quando o jovem Shawn se hospeda na casa, fica amigo de Arrietty, colocando o segredo em risco."
    },
    {
      nome: "Da Colina Kokuriko (2011)",
      imagem: Kokuriko,
      sobre: "Os adolescentes Umi e Shun lutam para preservar um velho edifício que vai ser demolido por causa das Olimpíadas de Tóquio."
    },
    {
      nome: "Vidas ao Vento (2013)",
      imagem: Vento,
      sobre: "Jiro Horikoshi é um jovem que vive em uma cidade no interior do Japão. Ele tem o sonho de voar em um avião com formato de pássaro. A partir desse sonho, Jiro decide que construir um avião como deseja e colocá-lo no ar é a meta de sua vida. Durante a busca pela realização deste objetivo, ele conhece Naoko, uma jovem encantadora por quem se apaixona. No entanto, Naoko fica profundamente doente, sem saber se sobreviverá, e os planos de Jiro podem estar prestes a mudar."
    },
  ]
  const filmesInfor6 = [
    {
      nome: "O Conto da Princesa Kaguya (2013)",
      imagem: Kaguya,
      sobre: "Kaguya era uma bebê que foi encontrada dentro de um tronco de bambu brilhante. Passado o tempo, ela se transforma em uma bela jovem que passa a ser cobiçada por cinco nobres, dentre eles, o próprio imperador"
    },
    {
      nome: "As Memórias de Marnie (2014)",
      imagem: Marnie,
      sobre: "Anna, uma menina solitária e curiosa, decide explorar uma velha mansão abandonada e conhece uma garota loira misteriosa que somente ela consegue ver."
    },
    {
      nome: "Aya e a Bruxa (2020)",
      imagem: Bruxa,
      sobre: "Uma órfã teimosa e corajosa é adotada por uma bruxa e se torna sua aprendiz nas artes mágicas."
    },
    {
      nome: "O Menino e a Garça (2023)",
      imagem: Garça,
      sobre: "Kimitachi wa Dō Ikiru ka é um filme de animação japonês de 2023 escrito e dirigido por Hayao Miyazaki e produzido pelo Studio Ghibli. O título japonês faz referência ao romance de 1937 de mesmo nome de Genzaburō Yoshino, que aparece no filme, apesar de não estar conectada ao romance"
    },
  ]
  return (
    <>
      <EstiloGlobal />
      <Navbar>
        <img src={Logo} alt="Logo studio ghibli" />
      </Navbar>

      <Corpo>
        <Container>
          <Secao>
            <Figuras>
              {filmesInfor.map((item) => (
                //cada imagem vai ser utilizada como botão 
                <img
                  src={item.imagem}
                  alt={item.nome}
                  onClick={() => setFilme(item.imagem)}
                />))}
            </Figuras>

          </Secao>

          <Secao>
            <Figuras>
              {filmesInfor2.map((item) => (
                //cada imagem vai ser utilizada como botão 
                <img
                  src={item.imagem}
                  alt={item.nome}
                  onClick={() => setFilme(item.imagem)}
                />))}
            </Figuras>

          </Secao>
          <Secao>
            <Figuras>
              {filmesInfor3.map((item) => (
                //cada imagem vai ser utilizada como botão s
                <img
                  src={item.imagem}
                  alt={item.nome}
                  onClick={() => setFilme(item.imagem)}
                />))}
            </Figuras>

          </Secao>

          <Secao>

            <Figuras>
              {filmesInfor4.map((item) => (
                //cada imagem vai ser utilizada como botão 
                <img
                  src={item.imagem}
                  alt={item.nome}
                  onClick={() => setFilme(item.imagem)}
                />))}
            </Figuras>
          </Secao>

          <Secao>

            <Figuras>
              {filmesInfor5.map((item) => (
                //cada imagem vai ser utilizada como botão selecionada  aqui.
                <img
                  src={item.imagem}
                  alt={item.nome}
                  onClick={() => setFilme(item.imagem)}
                />))}
            </Figuras>
          </Secao>

          <Secao>
            <Figuras>
              {filmesInfor6.map((item) => (
                //cada imagem vai ser utilizada como botão selecionada  aqui.
                <img
                  src={item.imagem}
                  alt={item.nome}
                  onClick={() => setFilme(item.imagem)}
                />))}
            </Figuras>
          </Secao>

        </Container>

        <Display>
          {/* onde vai aparecer as imagens selecionadas */}

          <img src={filme} alt="filme selecionado" />
          {filmesInfor.map((item) => (
            // Verifica se o filme atual é o selecionado
            filme === item.imagem && (
              // Se for, exibe um bloco de informações sobre o filme
              <div>
                <h1>{item.nome}</h1>
                <p>{item.sobre}</p>
              </div>
            )
          ))}

          {filmesInfor2.map((item) => (
            // Verifica se o filme atual é o selecionado
            filme === item.imagem && (
              // Se for, exibe um bloco de informações sobre o filme
              <div>
                <h1>{item.nome}</h1>
                <p>{item.sobre}</p>
              </div>
            )
          ))}

          {filmesInfor3.map((item) => (
            // Verifica se o filme atual é o selecionado
            filme === item.imagem && (
              // Se for, exibe um bloco de informações sobre o filme
              <div>
                <h1>{item.nome}</h1>
                <p>{item.sobre}</p>
              </div>
            )
          ))}

          {filmesInfor4.map((item) => (
            // Verifica se o filme atual é o selecionado
            filme === item.imagem && (
              // Se for, exibe um bloco de informações sobre o filme
              <div>
                <h1>{item.nome}</h1>
                <p>{item.sobre}</p>
              </div>
            )
          ))}

          {filmesInfor5.map((item) => (
            // Verifica se o filme atual é o selecionado
            filme === item.imagem && (
              // Se for, exibe um bloco de informações sobre o filme
              <div>
                <h1>{item.nome}</h1>
                <p>{item.sobre}</p>
              </div>
            )
          ))}

          {filmesInfor6.map((item) => (
            // Verifica se o filme atual é o selecionado
            filme === item.imagem && (
              // Se for, exibe um bloco de informações sobre o filme
              <div>
                <h1>{item.nome}</h1>
                <p>{item.sobre}</p>
              </div>
            )
          ))}


        </Display>
      </Corpo>

    </>
  )
}

export default App
