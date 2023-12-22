import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";


const AddTask = () => {
    const {user} = useContext(AuthContext)
    const { register, handleSubmit } = useForm()
    const onSubmit = async (data) => {
        console.log(data)

        const task = {
            name: data.name,
            priority: data.priority,
            date: data.date,
            category: data.category,
            description: data.description,
            email: user.email
        }
        console.log(task);
        const res2 = await axios.post('https://scic-job-task-server-gamma.vercel.app/tasks', task);
            
            if(res2.data.insertedId){
                //show alert 
                toast.success('New task created Successfully!')
            }
    };
    return (
        <div>
            <h1 className="text-4xl font-semibold text-teal-600 text-center my-4">Create New Task</h1>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Task Name*</span>
                        </label>
                        <input {...register("name", { required: true })} type="text" placeholder="Task Name" className="input input-bordered w-full " />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Priority*</span>
                            </label>
                            <input {...register("priority", { required: true })} type="text" placeholder="Priority" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Deadline*</span>
                            </label>
                            <input {...register("date", { required: true })} type="date" placeholder="Deadline" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <input defaultValue="ToDo"  {...register("category", { required: true })} type="text" placeholder="ToDo" className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>

                        </label>
                        <textarea {...register("description", { required: true })} className="textarea textarea-bordered h-24" placeholder="Description"></textarea>

                    </div>

                    <div className="my-5 text-center">
                        <button className="btn w-1/3 bg-teal-500 text-white">
                            Create Task
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTask;