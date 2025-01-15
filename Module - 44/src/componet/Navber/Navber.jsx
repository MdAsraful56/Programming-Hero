import { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";

const Navber = () => {

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/faq", name: "FAQ" }
    ];
    
    const [open, setOpen] = useState(false);


    return (
        <nav className="text-black bg-yellow-300 p-3">
            <div onClick={() => setOpen(!open)} className="text-3xl md:hidden">
                {
                    open === true ? <MdClose /> : <RiMenu2Line/>
                }
            </div>
            <ul className={`md:flex absolute md:static ${open ? 'top-14' : '-top-60'} bg-yellow-300 p-5 rounded-lg`}>
                {
                    routes.map(route => <li className="mr-10" key={route.id}>
                        <a href={route.path}>{route.name}</a>
                    </li>)
                }
            </ul>
        </nav>
    );
};

export default Navber;