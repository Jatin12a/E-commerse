import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Category from './components/Category/Category';
import SingleProduct from './components/SingleProduct/SingleProduct';
import Newsletter from './components/Footer/Newsletter/Newsletter';
import AppContext from './utils/context';
import Signup from './components/loginsighup/LoginSignup'
import Login from './components/loginsighup/LoginSignin'
function App() {
    return (
        <BrowserRouter>
        <AppContext>
            <Routes>
                <Route path="/" element={<><Header/><Home /><Newsletter/><Footer/></>}/>
                <Route path="/signup" element={<Signup />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/Category/:id" element={<><Header/><Category /><Newsletter/><Footer/></>}/>
                <Route path="/product/:id" element={<><Header/><SingleProduct /><Newsletter/><Footer/></>}/>
            </Routes>
            
        </AppContext>
        </BrowserRouter>
    )
}

export default App;
