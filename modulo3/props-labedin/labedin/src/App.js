import React from 'react'
import './App.css'
import CardPequeno from './components/CardPequeno/CardPequeno'
import CardGrande from './components/image/FotoPerfil'
import ImagemButton from './components/ImagemButton/ImagemButton'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://baranweb.com.br/wp-content/uploads/2022/03/Gato-de-oculos-meme.jpg"
          nome="Pablo"
          descricao="Oi, Eu sou o Pablo, sou aluno da labenu e estou aprendendo react."
        />

        <ImagemButton
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png"
          texto="Ver mais"
        />
      </div>
      <CardPequeno >
           
      </CardPequeno>
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Labenu"
          descricao="Formando desenvolvedores para o mercado de trabalho!"
        />

        <CardGrande
          imagem="https://logodownload.org/wp-content/uploads/2019/03/nasa-logo-0-768x768.png"
          nome="NASA"
          descricao="Apontando defeitos."
        />
      </div>
      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  )
}

export default App
