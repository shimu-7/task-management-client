import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";


const Navbar = () => {
    const user = ""
    const links = <>
        <li className="mx-2"><NavLink
            to="/"
            style={({ isActive, isPending, isTransitioning }) => {
                return {
                    textDecoration: isActive? "underline" : "",
                    textDecorationColor: isActive? "decoration-sky-500":"",
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                };
            }}
        >
            Home
        </NavLink>
        </li>
        <li className="mx-2"><NavLink
            to="/dashboard"
            style={({ isActive, isPending, isTransitioning }) => {
                return {
                    textDecoration: isActive? "underline" : "",
                    textDecorationColor: isActive? "decoration-sky-500":"",
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                };
            }}
        >
            Dashboard
        </NavLink>
        </li>
        {/* <li><NavLink tag={Link} className="" exact activeClassName="underline" to="/">PEOPLE PROFILES</NavLink></li> */}

    </>
    return (
        <div className="max-w-7xl mx-auto">
            <div className="navbar  rounded-md ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="px-3 py-1 rounded-xl bg-cyan-400 font-semibold normal-case text-xl">TaskMaster</a>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex mx-2">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="hidden md:flex mr-[3px] ">
                        {
                            user?.displayName ? <p className="font-medium">{user.displayName}</p> : " "
                        }
                    </div>

                    <div className="w-10 rounded-full mx-[4px]">
                        {
                            user?.photoURL ? <Link to="/userProfile">
                                <img className="h-10 w-10 rounded-full" src={`${user.photoURL}`} referrerPolicy="no-referrer" ></img>
                            </Link> : <CgProfile className="text-3xl"></CgProfile>
                        }
                    </div>
                    {
                        user ?
                            <Link to="/"><button  className="underline">Sign Out</button></Link>
                            :
                            <Link to="/login">
                                <button className="underline">Sign in</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;