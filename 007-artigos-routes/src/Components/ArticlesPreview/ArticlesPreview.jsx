import './ArticlesPreview.css'
import Article from "../Article/Article"

function App() {

    const articles = [
        {
            imagee: '../src/assets/images/img1.jpg',
            type: 'Type abc from xyz.',
            title: 'Title 1',
            contentt: 'Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 1.',
        },
        {
            imagee: '../src/assets/images/img2.jpg',
            type: 'Type abc from xyz.',
            title: 'Title 2',
            contentt: 'Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 2.',
        },
        {
            imagee: '../src/assets/images/img3.jpg',
            type: 'Type abc from xyz.',
            title: 'Title 3',
            contentt: 'Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 3.',
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