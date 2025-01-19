import { Link } from "react-router";

const Navber = () => {
    const NavberStyle = {
        marginRight: '20px',
        
    }
    return (
        <div>
            {/* <span><h2>Navber</h2></span> */}
            <nav  >
                {/* <Link style={NavberStyle} to='/' >Home</Link> */}
                <Link style={NavberStyle} to='/posts'>Posts</Link>
                <Link style={NavberStyle} to='/users'>Users</Link>
            </nav>
        </div>
    );
};

export default Navber;