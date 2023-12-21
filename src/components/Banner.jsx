

const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i0.wp.com/getflowdotcom.wpcomstaging.com/wp-content/uploads/2020/06/task-management-workflow.jpg?fit=2000%2C1500&ssl=1" className="md:w-1/2 lg:2/3 rounded-lg " />
                    <div className="md:w-1/2 lg:1/3">
                        <h1 className="text-5xl font-bold">Elevate Your Productivity!</h1>
                        <p className="py-6"> Seamlessly organize, prioritize, and collaborate on tasks, empowering your team to achieve new heights of efficiency. Elevate your workflow and unlock a world of streamlined success with us.</p>
                        <button className="btn bg-cyan-400 font-medium">Let’s Explore</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;