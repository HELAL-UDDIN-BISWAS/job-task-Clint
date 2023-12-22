
import { useForm } from "react-hook-form"
import Swal from "sweetalert2";
import axios from "axios";

const AddTask = () => {
    const { register, handleSubmit } = useForm();
    const handleAddCamp = async (data) => {
        const imageFile = new FormData();
        imageFile.append('image', data.photo[0]);
        const { data: imagedata } = await axios.post('https://api.imgbb.com/1/upload?key=b425eed4264500ee966fabfc8c973be7', imageFile);

        const userInfo = {
            task_name: data.task,
            description: data.description,
            image_url: imagedata.data?.display_url,
            priority: data.priority,
            status:data.status
        }
        console.log(userInfo)
        axios.post('https://jobs-task-server.vercel.app/addtask', userInfo)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Success Register",
                        text: "Thanks For Register",
                        footer: '<a href="#">Why do I have this issue?</a>'
                    });
                }
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
                console.error(error)
            });
    }
    return (
        <div className=' w-full h-[80vh] flex justify-center items-center mx-auto '>
            <div className='bg-white px-14 rounded py-10 drop-shadow-md hover:drop-shadow-xl'>
                <form className=''onSubmit={handleSubmit(handleAddCamp)}>
                    <div className=''>
                        <div className="w-full">
                            <label className='block'>
                                <span>Task</span>
                            </label>
                            <input type="text" {...register('task')} className="md:w-72 bg-white px-4 py-2 text-lg outline-none border-2 rounded hover:border-gray-600 border-gray-400 duration-200 bg-inherit" placeholder='Inter Your task' required />
                        </div>

                        <div className="w-full">
                            <label className='block'>
                                <span>description</span>
                            </label>
                            <input type="text" {...register('description')} className="md:w-72 bg-white px-4 py-2 text-lg outline-none border-2 rounded hover:border-gray-600 border-gray-400 duration-200 bg-inherit" placeholder='Inter Your description' required />
                        </div>
                        <div className="w-full">
                            <label className='block'>
                                <span>priority</span>
                            </label>
                            <input type="text" {...register('priority')} className="md:w-72 bg-white px-4 py-2 text-lg outline-none border-2 rounded hover:border-gray-600 border-gray-400 duration-200 bg-inherit" placeholder='Inter Your priority' required />
                        </div>
                        <div className="w-full">
                            <label className='block'>
                                <span>status</span>
                            </label>
                            <input type="text" {...register('status')} className="md:w-72 bg-white px-4 py-2 text-lg outline-none border-2 rounded hover:border-gray-600 border-gray-400 duration-200 bg-inherit" placeholder='Inter Your status' required />
                        </div>
                        <div className="w-full">
                            <label className='block'>
                                <span>Email</span>
                            </label>
                            <input type="file" {...register('photo')} required />
                        </div>
                    </div>
                    <button className="py-3 bg-red-400 hover:bg-primary-600 text-white px-5 rounded my-2 w-full">SignUp</button>
                </form>
                
            </div>
        </div>
    );
};

export default AddTask;