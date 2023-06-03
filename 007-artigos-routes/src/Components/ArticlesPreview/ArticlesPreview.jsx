import './ArticlesPreview.css'
import Article from "../Article/Article"

function App() {

    const articles = [
        {
            id: 20,
            imagee: '../src/assets/images/img1.jpg',
            type: 'Type abc from xyz.',
            title: 'Title1',
            contentt: 'Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 1.',
        },
        {
            id: 18,
            imagee: '../src/assets/images/img2.jpg',
            type: 'Type abc from xyz.',
            title: 'Title2',
            contentt: 'Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 2.',
        },
        {
            id: 35,
            imagee: '../src/assets/images/img3.jpg',
            type: 'Type abc from xyz.',
            title: 'Title3',
            contentt: 'Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 3.',
        }
    ]

    return (

        <>
            <div>
                <h1>ARTICLES PREVIEW</h1>
                <div className='preview'>
                    {
                        articles.map((article, index) => (
                            <Article
                                key={index}
                                id={article.id}
                                title={article.title}
                                type={article.type}
                                contentt={article.contentt}
                                imagee={article.imagee}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default App
