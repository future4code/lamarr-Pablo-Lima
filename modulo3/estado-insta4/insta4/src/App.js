import React from 'react'
import Post from './components/Post/Post'
import './style.css'

function App() {
  const arrayPost = [
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
  ]
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
      <Post
        nomeUsuario={'Harvey'}
        fotoUsuario={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoK642MRdol08WJVym3L9HISjXk3O38j5HRA&usqp=CAU'
        }
        fotoPost={
          'https://images.stylight.net/image/upload/t_web_post_975x488/q_auto,f_auto/post-9fccdb4f68dc4cf1b3a53485ff6702514476eaf117e28b1e3eec2220.jpg'
        }
      />
      <Post
        nomeUsuario={'jon snow'}
        fotoUsuario={
          'https://vejasp.abril.com.br/wp-content/uploads/2016/12/jon-snow-game-thrones.jpg'
        }
        fotoPost={
          'https://cache.desktopnexus.com/thumbseg/2539/2539655-bigthumbnail.jpg'
        }
      />
      <Post
        nomeUsuario={'Max'}
        fotoUsuario={
          'https://i.pinimg.com/originals/84/4f/da/844fdac483543425f56f82ba2b70864f.jpg'
        }
        fotoPost={
          'https://64.media.tumblr.com/1cfadd53b247a8229813b7f76ec02d34/7371505a3c5bb075-cd/s540x810/883010188d8b8effa94054c126bc30522dc9ecab.jpg'
        }
      />
    </div>
  )
}

export default App
