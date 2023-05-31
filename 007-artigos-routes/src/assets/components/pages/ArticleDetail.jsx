import 'Articles.css'
import Article from '../Article/Article'
import { useParams } from "react-router-dom"


export default function ArticleDetail() {

    const data = useParams()

    return (
        <>
            <Article
                title={data.article} //???????????????????????
            />
        </>
    )
}