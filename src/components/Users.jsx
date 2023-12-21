

const Users = () => {
    return (
        <div className="max-w-7xl mx-auto mt-5">
            <div className="text-center ">

                <h4 className="text-3xl font-bold py-2 border-b-4 border-teal-500 w-60 mx-auto">
                    Who Benefits?
                </h4>

                <p className="md:w-2/3 mx-auto mt-2">
                    Discover how our task management platform caters to various individuals, teams, and businesses seeking enhanced organization and efficiency. Whether you're a solo entrepreneur, project manager, or part of a large enterprise, our tools are designed to elevate your task management experience.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 my-5">
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img className="h-40 w-full" src="https://online.stanford.edu/sites/default/files/inline-images/entrepreneur-african-woman.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Entrepreneur</h2>
                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img className="h-40 w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8gn2ylZwr8fBs3qWISR9wRiJN4cL5R6dfTw&usqp=CAU" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Doctor</h2>
                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img className="h-40 w-full" src="https://www.app-garden.com/hubfs/Imported_Blog_Media/teacher.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Teacher</h2>
                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img className="h-40 w-full" src="https://www.pngkit.com/png/detail/364-3649614_view-more-indian-school-student-png.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Student</h2>
                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img className="h-40 w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUTI9uTrxtpYXAhKKZgKCeuns_NnYXUxni8g&usqp=CAU" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Project Manager</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;