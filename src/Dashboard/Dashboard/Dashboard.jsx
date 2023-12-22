import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useContext } from "react";
import { Avatar } from "keep-react";
import { AuthContext } from "../../Proveider/Proveider";

const Dashboard = () => {
    const {user}=useContext(AuthContext);
    return (
        <div className="flex">
            <div className="w-64 bg-red-500 h-screen">
                {
                    user ?  <div className="text-center flex items-center gap-4">
                    <h3 className="text-center">Your Name: {user.displayName}</h3>
                      <Avatar
                        shape="circle"
                        size="md"
                        stacked={true}
                        img={user.photoURL}
                      />
                    </div>:<><h3>Login</h3></>
                }             
                <ul className="menu p-3  ">

                    <li className="my-4">
                        <NavLink to="alltask" className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? "bg-gray-500 text-white py-2 px-4 rounded" : "text-black"
                        }
                        >
                            See All Task
                        </NavLink>
                    </li>
                    <li className="my-4">
                        <NavLink to="addtask" className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? "bg-gray-500 text-white py-2 px-4 rounded" : "text-black"
                        }
                        >
                            Add Task
                        </NavLink>
                    </li>
                    <div className="">
                       
                    </div>
                    <li className="flex"><NavLink to='/'><FaHome />Home</NavLink></li>
                </ul>
            </div>
            <div className="w-full mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;