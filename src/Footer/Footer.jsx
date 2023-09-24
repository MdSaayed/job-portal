import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-[#1A1919]">
            <div className="py-8 max-w-5xl mx-auto">
                <div className="grid grid-cols-6 gap-4 py-8 text-white">
                    <div className="col-span-2 mt-2">
                        <h1 className="text-3xl font-extrabold mb-2">CareerHub</h1>
                        <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">Company</h2>
                        <div className="flex flex-col mt-2">
                            <NavLink>Home</NavLink>
                            <NavLink>Contact</NavLink>
                            <NavLink>Services</NavLink>
                            <NavLink>About Us</NavLink>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">Product</h2>
                        <div className="flex flex-col mt-2">
                            <NavLink>Prototype</NavLink>
                            <NavLink>Plans & Pricing</NavLink>
                            <NavLink>Customers</NavLink>
                            <NavLink>Integrations</NavLink>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">Support</h2>
                        <div className="flex flex-col mt-2">
                            <NavLink>Help Desk</NavLink>
                            <NavLink>Sales</NavLink>
                            <NavLink>Become a Partner</NavLink>
                            <NavLink>Developers</NavLink>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">Contact</h2>
                        <div className="flex flex-col mt-2">
                            <NavLink>524 Broadway , NYC</NavLink>
                            <NavLink>+1 777 - 978 - 5570</NavLink>
                        </div>
                    </div>
                </div>
                <dir className="border-t flex justify-between text-white py-8 pl-0">
                    <div><p>@2023 CareerHub. All Rights Reserved</p></div>
                    <div><p>Powered by CareerHub</p></div>
                </dir>
            </div>
        </div>
    );
};

export default Footer;