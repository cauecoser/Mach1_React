import './BreadCrumbs.css'
import { useLocation } from "react-router-dom"
import { Link } from 'react-router-dom'

export default function BreadCrumbs() {

    const loc = useLocation()

    const crumb = loc.pathname.split("/")

    return (
        <>
        <p className="bread-crumbs">
            <Link to='/'>{crumb[1]}</Link>
                <p>-</p>
            <Link to='/'>{crumb[2]}</Link>
        </p>
        </>
    )
}