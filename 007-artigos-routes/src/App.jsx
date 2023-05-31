import './App.css'
// import Router from './assets/components/Router/Router'
import Article from './assets/components/Article/Article'


function App() {

  const articles = [
    {
      image: './src/assets/images/img1.jpg',
      type: 'Type abc from xyz.',
      title: 'Title 1',
      content: 'Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 1.',
    },
    {
      image: './src/assets/images/img2.jpg',
      type: 'Type abc from xyz.',
      title: 'Title 2',
      content: 'Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 2.',
    },
    {
      image: './src/assets/images/img3.jpg',
      type: 'Type abc from xyz.',
      title: 'Title 3',
      content: 'Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 3.',
    }
  ]

  return (
    <>
      <h1>ARTICLES PREVIEW</h1>
      <div className='preview'>
        {
          articles.map((article, index) => (
            <Article
              key={index}
              title={article.title}
              type={article.type}
              content={article.content}
              image={article.image}
            />
          ))
        }
      </div>
      {/* <Router/> */}
    </>
  )
}

export default App
