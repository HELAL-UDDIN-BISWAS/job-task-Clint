import { useContext } from 'react';
import './../../../App.css'
import { AuthContext } from '../../../Proveider/Proveider';
import { useNavigate } from 'react-router-dom';
const Banner = () => {
    const navigate = useNavigate()

    const {user}=useContext(AuthContext);
    const handleclick=()=>{
if(user){
    navigate('/dashboard')
}else{
    navigate('/login')
}
    }
    return (
        <div className='h-[80vh] '>
            <div className='Setimage h-[80vh] rounded flex items-center justify-center text-center'>
                <div className='w-2/4'>
                    <h2 className='text-3xl'>Streamlining Your Workflow</h2>
                    <p>In today's fast-paced business environment, effective task management is crucial for success. Introducing TaskHub your all-in-one solution for efficient and organized task management. <button onClick={handleclick} className='bg-slate-600 text-white py-1 px-3 rounded'>Let’s Explore</button></p>
                </div>
            </div>
        </div>
    );
};

export default Banner;