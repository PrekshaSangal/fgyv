import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import Condition from './Condition'
import { App } from './App'
import { MyForm } from './MyForm'

export function MyRoutes(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<App />} />
                    <Route path="condition" element={<Condition />} />
                    <Route path="form" element={<MyForm />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default function Layout(props) {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='condition'>
                            Condition
                        </Link>
                    </li>
                    <li>
                        <Link to='form'>
                            Form
                        </Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}