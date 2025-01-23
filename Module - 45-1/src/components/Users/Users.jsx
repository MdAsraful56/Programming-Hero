import { useLoaderData } from "react-router";


const Users = () => {
    const usersData = useLoaderData();
    console.log(usersData)
    return (
        <div>
            <h3>All Users : </h3>
            <div>
                {
                    usersData
                }
            </div>
        </div>
    );
};

export default Users;