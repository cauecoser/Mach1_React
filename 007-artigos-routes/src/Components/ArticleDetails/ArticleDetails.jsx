import './ArticleDetails.css'
import { useParams, Link, useLocation } from 'react-router-dom'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs'

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

    const art = useParams() //Aqui poderiausar const { id } = useParams() para usar apenas id ao invés de art.id

    const actualArticle = db.find((artigo) => artigo.id == art.id)

    return (
        <>
            <div className='ArticleContainerDet'>
                <img src={actualArticle.imagee} />
                <h5>{actualArticle.type}</h5>
                <h2>{actualArticle.title}</h2>
                <hr />
                <p>{actualArticle.contentt}</p>
                <div className='control'>
                    <Link to="/">← Retornar à lista</Link>
                    <BreadCrumbs />
                </div>
            </div>
        </>
    )
}