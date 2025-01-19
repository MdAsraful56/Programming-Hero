import { Outlet } from "react-router";
import Navber from "../Navber/Navber";

const Home = () => {
    return (
        <div>
            <Navber />
            <h1>This is a Home</h1>
            <Outlet>

            </Outlet>
        </div>
    );
};

export default Home;