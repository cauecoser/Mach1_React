import './ArticleDetails.css'
import { useParams, Link } from 'react-router-dom'


const db = [
    {
        id: 20,
        imagee: '../src/assets/images/img1.jpg',
        type: 'Type abc from xyz.',
        title: 'Title1',
        contentt: 'Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 1.',
    },
    {
        id: 18,
        imagee: '../src/assets/images/img2.jpg',
        type: 'Type abc from xyz.',
        title: 'Title2',
        contentt: 'Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla  bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla blabla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 2.',
    },
    {
        id: 35,
        imagee: '../src/assets/images/img3.jpg',
        type: 'Type abc from xyz.',
        title: 'Title3',
        contentt: 'Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla 3.',
    }
]

export default function ArticleDetails() {

    const art = useParams()
    
    const actualArticle = db.find( (artigo) => artigo.id == art.id )
    
    return (
        <>
            <div className='ArticleContainerDet'>
                <img src={actualArticle.imagee} />
                <h5>{actualArticle.type}</h5>
                <h2>{actualArticle.title}</h2>
                <hr />
                <p>{actualArticle.contentt}</p>
                <Link to="/">Retornar à lista ←</Link>
            </div>
        </>
    )
}