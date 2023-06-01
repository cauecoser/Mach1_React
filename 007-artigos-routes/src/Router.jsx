import { Routes, Route } from 'react-router-dom'
import ArticlesPreview from './Components/ArticlesPreview/ArticlesPreview'
import ArticleDetails from './Components/ArticleDetails/ArticleDetails'


export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<ArticlesPreview />} />
            <Route path='/articles' element={<ArticlesPreview />} />
            <Route path='/article/:title' element={<ArticleDetails />} />
        </Routes>
    )
}