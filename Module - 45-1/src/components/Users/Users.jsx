import { useLoaderData } from "react-router";


const Users = () => {
    const usersData = useLoaderData();
    console.log(usersData)
    return (
        <div>
            <h3>All Users : </h3>
            <div>
                {
                    usersData.map()
                }
            </div>
        </div>
    );
};

export default Users;