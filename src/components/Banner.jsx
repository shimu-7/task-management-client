

const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="hero ">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <img src="https://img.freepik.com/free-vector/time-management-concept-illustration_114360-1098.jpg?size=626&ext=jpg&ga=GA1.1.450165047.1695670968&semt=ais" className="md:w-1/2 lg:2/3 rounded-lg " />
                    <div className="md:w-1/2 lg:1/3">
                        <h1 className="text-5xl font-bold">Elevate Your Productivity!</h1>
                        <p className="py-6"> Seamlessly organize, prioritize, and collaborate on tasks, empowering your team to achieve new heights of efficiency. Elevate your workflow and unlock a world of streamlined success with us.</p>
                        <button className="btn btn-accent font-medium">Let’s Explore</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;