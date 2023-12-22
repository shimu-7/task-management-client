import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { Toaster } from "react-hot-toast";


const Dashboard = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <div className="h-[2px] w-full bg-teal-500"></div>
            <div className="flex">
                <div className="min-h-screen flex ">
                    <ul className="menu text-lg">

                        <li>
                             <NavLink to="/dashboard/manageTask">ToDo Task</NavLink>
                        </li>
                        <div className="h-[1px] w-full bg-teal-600"></div>
                        <li>
                            <NavLink to="/dashboard/onGoingTask">OnGoing Task</NavLink>
                        </li>
                        <div className="h-[1px] w-full bg-teal-600"></div>
                        <li>
                            <NavLink to="/dashboard/CompletedTask">Completed Task</NavLink>
                        </li>
                        <div className="h-[1px] w-full bg-teal-600"></div>
                        <li>

                            <NavLink to="/dashboard/addTask">Create Task</NavLink>
                        </li>

                    </ul>
                    <div className="divider divider-horizontal divider-accent "></div>
                </div>



                <div className="flex-1 md:p-8">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default Dashboard;