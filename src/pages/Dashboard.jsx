import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";


const Dashboard = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <div className="h-[2px] w-full bg-teal-500"></div>
            <div className="flex">
                <div className="min-h-screen flex ">
                    <ul className="menu text-lg">

                        <li>

                            <NavLink to="/allTask">All Task</NavLink>
                        </li>

                        <li >

                            <NavLink to="/toDo">To Do</NavLink>
                        </li>
                        <li >

                            <NavLink to="/Ongoing">On going</NavLink>
                        </li>
                        <li>

                            <NavLink to="/Completed">Completed</NavLink>
                        </li>
                    </ul>
                    <div className="divider divider-horizontal divider-accent "></div>
                </div>
               
                    
                
                <div className="flex-1 md:p-8">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;