import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const ManageTask = () => {
    const { user } = useContext(AuthContext);
    const [toDo, setToDo] = useState([]);
    const navigate = useNavigate();
    //const [ongoing, setOngoing] = useState([]);
    //const [completed, setCompleted] = useState([]);
    const { data: tasks = [], refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await axios.get(`https://scic-job-task-server-gamma.vercel.app/tasks/${user.email}`);
            return res.data;
        }
    })
    useEffect(()=>{
        const toDoTask = tasks.filter(one => one.category.toLowerCase() === "todo");
        setToDo(toDoTask);
        // const onGoingTask = tasks.filter(one => one.category.toLowerCase() === "ongoing");
        // setOngoing(onGoingTask);
        // const completedTask = tasks.filter(one => one.category.toLowerCase() === "completed");
        // setCompleted(completedTask);
    },[tasks])

    const handleMakeOnGoing = (item) => {
        axios.patch(`https://scic-job-task-server-gamma.vercel.app/tasks/ongoing/${item._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch()
                    toast.success('This task is now Ongoing')
                }
            })
    }

    const handleDeleteTask =(item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async(result) => {
            if (result.isConfirmed) {
                const res = await axios.delete(`https://scic-job-task-server-gamma.vercel.app/tasks/${item._id}`);
                console.log(res.data)
                if(res.data.deletedCount){
                    refetch();
                Swal.fire({
                    title: "Deleted!",
                    text: "Task deleted Successfully.",
                    icon: "success"
                });
            }
            }
        });

    }

    const handleUpdate = (item) => {
        navigate(`/dashboard/updateTask/${item._id}`)
        console.log("clicked")
    }
    return (
        <div>
            <h1 className="text-4xl font-semibold text-teal-600 text-center my-4">ToDo Task List{tasks.length}</h1>
            <div className=" mt-10">
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>
                                        #
                                    </th>
                                    <th>Task</th>
                                    <th>Priority</th>
                                    <th>Category</th>
                                    <th>Make Ongoing</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    toDo.map((item, idx) => <tr key={item._id}>
                                        <th>
                                            {idx + 1}
                                        </th>
                                        <td>
                                            {item.name}

                                        </td>
                                        <td>{item.priority}</td>
                                        <td>{item.category}</td>

                                        <td>
                                            <button onClick={()=>handleMakeOnGoing(item)} className="btn btn-accent btn-outline">Ongoing</button>
                                        </td>
                                        <td>
                                            <button onClick={()=> handleUpdate(item)} className="btn btn-success btn-outline">
                                                Edit
                                            </button>
                                        </td>
                                        <td>
                                            <button onClick={()=>handleDeleteTask(item)} className="btn btn-warning btn-outline">Delete</button>
                                        </td>

                                    </tr>)
                                }


                            </tbody>
                        </table>
                    </div>

                </div>

                {/* <div className="my-5">
                    <h2 className="text-lg border-b-2 text-center font-medium text-teal-600">Ongoing</h2>

                </div>

                <div>
                    <h2 className="text-lg border-b-2 text-center font-medium text-teal-600">Completed</h2>
                </div> */}
            </div>
        </div>
    );
};

export default ManageTask;