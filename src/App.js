import { useState } from 'react';
import Banner from './componentes/Banner';
import Footer from './componentes/Footer';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Front-end',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Data-science',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#D86EBF'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29'
    }
  ]);

  const inicial = [
          {
        id: uuidv4(),
        favorito: false,
        nome: "Juliana Amoasei",
        cargo: "Desenvolvedora de software e instrutora",
        imagem: "imagens/juliana.jpg",
        time: times[0].nome
      },
      {
        id: uuidv4(),
        favorito: false,
        nome: "Daniel Artine",
        cargo: "Engenheiro de Software na Ston Age",
        imagem: "imagens/daniel.jpg",
        time: times[0].nome
      },
      {
        id: uuidv4(),
        favorito: false,
        nome: "Guilherme Lima",
        cargo: "Desenvolvedor Python e Javascript na Alura",
        imagem: "https://github.com/guilhermeonrails.png",
        time: times[0].nome
      },
      {
        id: uuidv4(),
        favorito: false,
        nome: "Paulo Silveira",
        cargo: "Hipster e CEO da Alura",
        imagem: "https://github.com/peas.png",
        time: times[0].nome
      },
      {
        id: uuidv4(),
        favorito: false,
        nome: "Juliana Amoasei",
        cargo: "Desenvolvedora de software e instrutora",
        imagem: "imagens/juliana.jpg",
        time: times[1].nome
      },
      {
        id: uuidv4(),
        favorito: false,
        nome: "Daniel Artine",
        cargo: "Engenheiro de Software na Ston Age",
        imagem: "imagens/daniel.jpg",
        time: times[1].nome
      },
      {
        id: uuidv4(),
        favorito: false,
        nome: "Guilherme Lima",
        cargo: "Desenvolvedor Python e Javascript na Alura",
        imagem: "https://github.com/guilhermeonrails.png",
        time: times[1].nome
      },
      {
        id: uuidv4(),
        favorito: false,
        nome: "Paulo Silveira",
        cargo: "Hipster e CEO da Alura",
        imagem: "https://github.com/peas.png",
        time: times[1].nome
      },
      {
        id: uuidv4(),
        favorito: false,
        nome: "Juliana Amoasei",
        cargo: "Desenvolvedora de software e instrutora",
        imagem: "imagens/juliana.jpg",
        time: times[2].nome
      },
      {
        id: uuidv4(),
        favorito: false,
        nome: "Daniel Artine",
        cargo: "Engenheiro de Software na Ston Age",
        imagem: "imagens/daniel.jpg",
        time: times[2].nome
      },
      {
        id: uuidv4(),
        favorito: false,
        nome: "Guilherme Lima",
        cargo: "Desenvolvedor Python e Javascript na Alura",
        imagem: "https://github.com/guilhermeonrails.png",
        time: times[2].nome
      },
      {
        id: uuidv4(),
        favorito: false,
        nome: "Paulo Silveira",
        cargo: "Hipster e CEO da Alura",
        imagem: "https://github.com/peas.png",
        time: times[2].nome
      },
      {
        id: uuidv4(),
        favorito: false,
        nome: "Juliana Amoasei",
        cargo: "Desenvolvedora de software e instrutora",
        imagem: "imagens/juliana.jpg",
        time: times[3].nome
      },
      {
        id: uuidv4(),
        favorito: false,
        nome: "Daniel Artine",
        cargo: "Engenheiro de Software na Ston Age",
        imagem: "imagens/daniel.jpg",
        time: times[3].nome
      },
      {
        id: uuidv4(),
        favorito: false,
        nome: "Guilherme Lima",
        cargo: "Desenvolvedor Python e Javascript na Alura",
        imagem: "https://github.com/guilhermeonrails.png",
        time: times[3].nome
      },
      {
        id: uuidv4(),
        favorito: false,
        nome: "Paulo Silveira",
        cargo: "Hipster e CEO da Alura",
        imagem: "https://github.com/peas.png",
        time: times[3].nome
      },
      {
        id: uuidv4(),
        favorito: false,
        nome: "Juliana Amoasei",
        cargo: "Desenvolvedora de software e instrutora",
        imagem: "imagens/juliana.jpg",
        time: times[4].nome
      },
      {
        id: uuidv4(),
        favorito: false,
        nome: "Daniel Artine",
        cargo: "Engenheiro de Software na Ston Age",
        imagem: "imagens/daniel.jpg",
        time: times[4].nome
      },
      {
        id: uuidv4(),
        favorito: false,
        nome: "Guilherme Lima",
        cargo: "Desenvolvedor Python e Javascript na Alura",
        imagem: "https://github.com/guilhermeonrails.png",
        time: times[4].nome
      },
      {
        id: uuidv4(),
        favorito: false,
        nome: "Paulo Silveira",
        cargo: "Hipster e CEO da Alura",
        imagem: "https://github.com/peas.png",
        time: times[4].nome
      },
      {
        id: uuidv4(),
        favorito: false,
        nome: "Juliana Amoasei",
        cargo: "Desenvolvedora de software e instrutora",
        imagem: "imagens/juliana.jpg",
        time: times[5].nome
      },
      {
        id: uuidv4(),
        favorito: false,
        nome: "Daniel Artine",
        cargo: "Engenheiro de Software na Ston Age",
        imagem: "imagens/daniel.jpg",
        time: times[5].nome
      },
      {
        id: uuidv4(),
        favorito: false,
        nome: "Guilherme Lima",
        cargo: "Desenvolvedor Python e Javascript na Alura",
        imagem: "https://github.com/guilhermeonrails.png",
        time: times[5].nome
      },
      {
        id: uuidv4(),
        favorito: false,
        nome: "Paulo Silveira",
        cargo: "Hipster e CEO da Alura",
        imagem: "https://github.com/peas.png",
        time: times[5].nome
      },
      {
        id: uuidv4(),
        favorito: false,
        nome: "Juliana Amoasei",
        cargo: "Desenvolvedora de software e instrutora",
        imagem: "imagens/juliana.jpg",
        time: times[6].nome
      },
      {
        id: uuidv4(),
        favorito: false,
        nome: "Daniel Artine",
        cargo: "Engenheiro de Software na Ston Age",
        imagem: "imagens/daniel.jpg",
        time: times[6].nome
      },
      {
        id: uuidv4(),
        favorito: false,
        nome: "Guilherme Lima",
        cargo: "Desenvolvedor Python e Javascript na Alura",
        imagem: "https://github.com/guilhermeonrails.png",
        time: times[6].nome
      },
      {
        id: uuidv4(),
        favorito: false,
        nome: "Paulo Silveira",
        cargo: "Hipster e CEO da Alura",
        imagem: "https://github.com/peas.png",
        time: times[6].nome
      },
    ]

  const [colaboradores, setColaboradores] = useState(inicial)

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador(id) {
      setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor;
      }
      return time;
    }))
  }

  function cadastrarTime({nome, cor}){
    setTimes([...times, { nome, cor, id: uuidv4() } ]);
  }

  function resolverFavorito(id){
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito
      return colaborador
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoCriarTime={cadastrarTime} 
      times={times.map(time => time.nome)} 
      aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {times.map((time, indice) =>
        <Time
          aoFavoritar={resolverFavorito}
          key={indice}
          time={time}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          mudarCor={mudarCorDoTime}
          aoDeletar={deletarColaborador}
        />)}
      <Footer />
    </div>
  );
}

export default App;
