import { Outlet } from "react-router";
import Navber from "../Navber/Navber";


const Home = () => {
    return (
        <div>
            <Navber />

            <h2>Home Section </h2>

            <Outlet>

            </Outlet>
        </div>
    );
};

export default Home;