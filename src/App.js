import { useState } from 'react';
import Banner from './componentes/Banner';
import Footer from './componentes/Footer';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome:'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome:'Front-end',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome:'Data-science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome:'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome:'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome:'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome:'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const [colaboradores, setColaboradores] = useState([
    {
      nome: "Juliana Amoasei",
      cargo: "Desenvolvedora de software e instrutora",
      imagem: "imagens/juliana.jpg",
      ceo: "instrutor"
    },
    {
      nome: "Daniel Artine",
      cargo: "Engenheiro de Software na Ston Age",
      imagem: "imagens/daniel.jpg",
      ceo: "instrutor"
    },
    {
      nome: "Guilherme Lima",
      cargo: "Desenvolvedor Python e Javascript na Alura",
      imagem: "https://github.com/guilhermeonrails.png",
      ceo: "instrutor"
    },
    {
      nome: "Paulo Silveira",
      cargo: "Hipster e CEO da Alura",
      imagem: "https://github.com/peas.png",
      ceo: "instrutor"
    },
  ])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)}  aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {times.map(time => 
      <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria} 
      colaboradores={colaboradores.filter(colaborador => colaborador.ceo === "instrutor" || colaborador.time === time.nome)}
      />)}
      <Footer />
    </div>
  );
}

export default App;
