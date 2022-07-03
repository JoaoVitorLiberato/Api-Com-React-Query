import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Repo } from './pages/Repo';
import { Repos } from './pages/Repos';


export function RoutesComponent() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Repo/>} />
                <Route path='/repos/*' element={<Repos/>} />
            </Routes>
        </BrowserRouter>
    );
}