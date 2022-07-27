import React, { useState } from 'react'
import Post from './components/Post/Post'
import './style.css'
import styled from 'styled-components'
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  label {
    //screen reader only
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
  input {
    padding: 10px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 10px;
    width: 220px;
  }
  button {
    border: none;
    border-radius: 10px;
    padding: 10px;
  }
  button:hover {
    cursor: pointer;
    color: #dd2a7b;
  }
`

function App() {
  // estados:
  const [inputNomeUsuario, setInputNomeUsuario] = useState('')
  const [inputFotoUsuario, setInpuFotoUsuario] = useState('')
  const [inputFotoPost, setInpuFotoPost] = useState('')

  const [arrayPost, setArrayPost] = useState([
    {
      nomeUsuario: 'Harvey',
      fotoUsuario:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoK642MRdol08WJVym3L9HISjXk3O38j5HRA&usqp=CAU',
      fotoPost:
        'https://images.stylight.net/image/upload/t_web_post_975x488/q_auto,f_auto/post-9fccdb4f68dc4cf1b3a53485ff6702514476eaf117e28b1e3eec2220.jpg'
    },
    {
      nomeUsuario: 'jon snow',
      fotoUsuario:
        'https://vejasp.abril.com.br/wp-content/uploads/2016/12/jon-snow-game-thrones.jpg',
      fotoPost:
        'https://cache.desktopnexus.com/thumbseg/2539/2539655-bigthumbnail.jpg'
    },
    {
      nomeUsuario: 'Max',
      fotoUsuario:
        'https://i.pinimg.com/originals/84/4f/da/844fdac483543425f56f82ba2b70864f.jpg',
      fotoPost:
        'https://64.media.tumblr.com/1cfadd53b247a8229813b7f76ec02d34/7371505a3c5bb075-cd/s540x810/883010188d8b8effa94054c126bc30522dc9ecab.jpg'
    }
  ])
  // eventos
  const handleInputNomeUsuario = e => {
    setInputNomeUsuario(e.target.value)
  }

  const handleInputFotoUsuario = e => {
    setInpuFotoUsuario(e.target.value)
  }

  const handleInputFotoPost = e => {
    setInpuFotoPost(e.target.value)
  }

  // adicionar item
  const addPost = e => {
    e.preventDefault()

    const novoPost = {
      nomeUsuario: inputNomeUsuario,
      fotoUsuario: inputFotoUsuario,
      fotoPost: inputFotoPost
    }
    const novaListaDePosts = [...arrayPost, novoPost]
    setArrayPost(novaListaDePosts)
  }

  const listaPost = arrayPost.map((elemento, index) => {
    return (
      <Post
        nomeUsuario={elemento.nomeUsuario}
        fotoUsuario={elemento.fotoUsuario}
        fotoPost={elemento.fotoPost}
        key={index}
      />
    )
  })
  console.log(listaPost)

  return (
    <div className="MainContainer">
      <Form>
        <label>Nome de Usuário:</label>
        <input
          placeholder="Insira o nome de Usuário"
          value={inputNomeUsuario}
          onChange={handleInputNomeUsuario}
        />

        <label>foto de Usuario</label>
        <input
          placeholder="Insira o link de uma foto de Usuário"
          value={inputFotoUsuario}
          onChange={handleInputFotoUsuario}
        />

        <label>foto para Postar</label>
        <input
          placeholder="Insira o link de uma foto para Postar"
          value={inputFotoPost}
          onChange={handleInputFotoPost}
        />

        <button onClick={addPost}>Adicionar</button>
      </Form>
      {listaPost}
    </div>
  )
}

export default App
