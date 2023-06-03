import { Routes, Route } from 'react-router-dom'
import ArticlesPreview from './Components/ArticlesPreview/ArticlesPreview'
import ArticleDetails from './Components/ArticleDetails/ArticleDetails'


export default function Router() {
    return (
        <Routes>
            <Route path='/' exact element={<ArticlesPreview />} />
            <Route path='articles' element={<ArticlesPreview />} />
            <Route path='articles/:id' element={<ArticleDetails />} />
        </Routes>
    )
}