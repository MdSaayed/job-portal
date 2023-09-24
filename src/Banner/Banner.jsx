
const Banner = () => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-4 max-w-5xl mx-auto">
                <div className="flex flex-col justify-center">
                    <h1 className="font-bold text-4xl">One Step<br></br> Closer To Your<br></br> Dream Job</h1>
                    <p className="py-3">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <div>
                        <button className="bg-blue-800 py-2 px-3 rounded text-white">Get Started</button>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/DbbXzq3/user.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;