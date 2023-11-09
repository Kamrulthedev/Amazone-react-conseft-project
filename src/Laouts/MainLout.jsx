
import { Outlet } from 'react-router-dom';
import Nav from "../Pages/Navber/Nav";

const MainLout = () => {
    return (
        <div>
            <Nav></Nav>
         <Outlet></Outlet>

   </div>

    );
};

export default MainLout;