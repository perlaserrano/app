import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home/index';
import Page2 from '../pages/Page2/index';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route>
                <Route path="/" element={<Home/>} />
                <Route path="/page2" element={<Page2/>} />
                <Route path="*" element={<div>404</div> } />
            </Route>
        </Routes>
    </BrowserRouter>
);

export default Router;