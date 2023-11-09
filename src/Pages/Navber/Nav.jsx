import { Link } from "react-router-dom";

const Nav = () => {



    const Navber = <>


        <Link className="border-2 border-emerald-300 rounded-lg bg-green-500" to={'/'}>Home</Link>
        <Link className="border-2 border-emerald-300 rounded-lg bg-green-500" to={'/Prodects'}>Prodect</Link>
        <Link className="border-2 border-emerald-300 rounded-lg bg-green-500" to={'/deshbord'}>Deshbord</Link>

    </>
    return (
        <div className="navbar bg-zinc-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                        {Navber}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl text-black">Amazone</a>
            </div>

            <div className="navbar-center hidden lg:flex gap-8 text-black">
                {Navber}
            </div>
            <div className="navbar-end">
                <a className="btn">sign up</a>
            </div>
        </div>
    );
};

export default Nav;