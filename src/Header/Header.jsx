import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-[#1A1919]">
            <nav className="max-w-5xl mx-auto">
                <div className="flex gap-6 text-white py-4">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/jobs">Jobs</NavLink>
                    <NavLink to="/applied">Applied Jobs</NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Header;