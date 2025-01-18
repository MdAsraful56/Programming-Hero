import { Link, Outlet } from "react-router";


const Home = () => {
    return (
        <div>
            <div>
                <span>Navber</span>
                <nav> 
                    <Link to='/'>Home </Link>
                    <Link to='/about'>About </Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/userrr' > User</Link>
                </nav>
            </div>
            <h2>Hello</h2>
            <Outlet>

            </Outlet>
        </div>
    );
};

export default Home;