import Swal from "sweetalert2";
import { useForm } from "react-hook-form"
import { useContext } from "react";
import { AuthContext } from "../../../Proveider/Proveider";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Login = () => {
    const { register, handleSubmit } = useForm();
    const { loginuser, googlesignup } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();



    const handleLogin = (data) => {
        loginuser(data.email, data.password)
            .then(res => {
                console.log(res)
                Swal.fire({
                    icon: "success",
                    title: "Success Register",
                    text: "Thanks For Register",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
                navigate(from, { replace: true })
            })
            .catch(
                console.error())
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
    };
    const from = location.state?.from?.pathname || '/dashboard';



    const googlesubmit = () => {
        googlesignup()
        .then(res=>{
            navigate(from, { replace: true })
            console.log(res)}
            )
        .catch(error=>console.log(error))
    };
    return (

        <div className=' w-full h-[80vh] flex justify-center items-center mx-auto '>
            <div className='bg-white px-14 rounded py-10 drop-shadow-md hover:drop-shadow-xl'>
                <form className='' onSubmit={handleSubmit(handleLogin)}>
                    <div className=''>
                        <div className="w-full">
                            <label className='block'>
                                <span>Email</span>
                            </label>
                            <input type="email" {...register('email')} className="md:w-72 bg-white px-4 py-2 text-lg outline-none border-2 rounded hover:border-gray-600 border-gray-400 duration-200 bg-inherit" placeholder='Inter Your Email' required />
                        </div>

                        <div className="w-full">
                            <label className='block'>
                                <span>Password</span>
                            </label>
                            <input type="password" {...register('password')} className="md:w-72 bg-white px-4 py-2 text-lg outline-none border-2 rounded hover:border-gray-600 border-gray-400 duration-200 bg-inherit" placeholder='Inter Your Email' required />
                        </div>
                    </div>
                    <button className="py-3 bg-red-400 hover:bg-primary-600 text-white px-5 rounded my-2 w-full">SignUp</button>
                </form>
                <button onClick={googlesubmit} className="py-3 bg-red-400 hover:bg-primary-600 text-center text-2xl items-center px-5 rounded my-2 w-full"><FcGoogle></FcGoogle></button>
            </div>
        </div>
    );
};

export default Login;