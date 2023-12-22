import { FaBookOpen } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { HiArrowUpRight } from "react-icons/hi2";
const Section = () => {
    return (
        <div>
            <div className='grid my-9 gap-3 md:grid-cols-2 text-center lg:text-left'>
                <div><h3 className='text-3xl'>See how Micronet can help you improve your systems & productivity</h3></div>
                <div><p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </p></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-2 gap-4">
                <div className="bg-lime-300 px-2 rounded py-4">
                    <h3 className="text-4xl my-4"><FaBookOpen /></h3>
                    <h3 className="text-2xl my-2">Task Management</h3>
                    <p>It is a long established fact that a reader will be distracted.</p>
                </div>
                <div className="bg-zinc-500 px-2 rounded py-4">
                    <h3 className="text-4xl my-4"><TiMessages /></h3>
                    <h3 className="text-2xl my-2">Team Collaboration</h3>
                    <p>It is a long established fact that a reader will be distracted.</p>
                </div>
                <div className="bg-red-200 px-2 rounded py-4">
                    <h3 className="text-4xl my-4"><HiArrowUpRight /></h3>
                    <h3 className="text-2xl my-2">Project Planning</h3>
                    <p>It is a long established fact that a reader will be distracted.</p>
                </div>
            
            </div>
        </div>
    );
};

export default Section;