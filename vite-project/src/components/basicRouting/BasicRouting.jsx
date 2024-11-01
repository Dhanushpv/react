import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './Routing.css'
import Home from './home';
import About from './about';

function  BasicRouting (){

    return (
        <>
        <Router>
        <nav>
            <ul>
                <li><Link to={'/Home'} style={{color : "white", textDecoration :"none"}}>Home</Link></li>
                <li><Link to={'/About'} style={{color : "white", textDecoration :"none"}}>About</Link></li>
            </ul>
        </nav>
        <section>
        <Routes>
        <Route path={'/Home'} exact element ={<Home/>} />
        <Route path={'/About'} exact element ={<About/>}/>
        </Routes>
        </section>
        </Router>
        </>
    )
}

export default  BasicRouting;