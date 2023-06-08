import {Routes, Route} from 'react-router-dom'
import UserDetail from './pages/UserDetail/UserDetail'
import UserList from './pages/UserList/UserList'

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<UserList />} />
            <Route path='/userlist' element={<UserList />} />
            <Route path='/userlist/:id' element={<UserDetail />} />
        </Routes>
    )
}