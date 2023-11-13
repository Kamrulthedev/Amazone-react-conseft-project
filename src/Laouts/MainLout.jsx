
import { Outlet } from 'react-router-dom';
import Nav from "../Pages/Navber/Nav";
import Footer from '../Pages/Footer/Footer';

const MainLout = () => {
    return (
        <div>
            <Nav></Nav>
         <Outlet></Outlet>
         <Footer></Footer>

   </div>

    );
};

export default MainLout;