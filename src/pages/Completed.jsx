import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";


const Completed = () => {


    const { user } = useContext(AuthContext);
    
    const [completed, setCompleted] = useState([])
    
    const { data: tasks = [], refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await axios.get(`https://scic-job-task-server-gamma.vercel.app/tasks/${user.email}`);
            return res.data;
        }
    })
    useEffect(()=>{
        
        const completedTask = tasks.filter(one => one.category.toLowerCase() === "completed");
        setCompleted(completedTask);
    },[tasks])

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


    return (
        <div>
            <h1 className="text-4xl font-semibold text-teal-600 text-center my-4">Completed Task List</h1>
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
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    completed.map((item, idx) => <tr key={item._id}>
                                        <th>
                                            {idx + 1}
                                        </th>
                                        <td>
                                            {item.name}

                                        </td>
                                        <td>{item.priority}</td>
                                        <td>{item.category}</td>
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

export default Completed;