import { Link } from "react-router";

const Navber = () => {
    return (
        <div style={{
            backgroundColor: 'gray'
        }}>
            <nav style={{
                display: 'flex',
                alignItems: 'center'
            }}>
                <h2>Navber</h2>
                <ul  className="">
                    <Link style={{marginRight: '20px'}} to='/'>Home</Link>
                    <Link to='/users'>Users</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Navber;