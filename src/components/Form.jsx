import { useState } from "react"
import axios from "axios";
import {toast , Toaster} from "react-hot-toast"
function Form(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    // Handle Submit Button
    const HandlePostData= (event)=>{
        event.preventDefault();
        axios.post(`http://localhost:3000/create` ,{
            "title": title,
            "description": description
        }).then(()=>{           
                //  alert("complaint has been saved successfully")
                 toast.success("Complaint has been saved successfully");
            
                 setTitle("")
                 setDescription("")


        }).catch((error)=>{
            console.log(error)
        });
    }

    const [isOpen, setIsOpen] = useState(false);
     // Handle Close Button
     const HandleCloseBtn = ()=>{
        setIsOpen(false)
    }
    return <div className=" " >
           <div className="flex justify-center  absolute top-5 left-[500px] pt-20 " >
        <form  className="bg-white p-3 w-[280px] h-[460px] rounded text-center pt-[10%]  ">
            <input value={title}  onChange={(event)=>setTitle(event.target.value)} className="  w-[250px]   h-[40px] my-3 border-2 border-black  " type="text"  placeholder="Enter title"/>
            <textarea value={description}  onChange={(event)=>setDescription(event.target.value)}  className="border-2 border-black w-[250px]  h-[200px]" ></textarea>
            <button onClick={HandleCloseBtn}  className="bg-blue-500 px-6 py-2 rounded text-2xl ml-2">Close</button>
            <button onClick={HandlePostData}  className="bg-blue-500 px-6 py-2 rounded text-2xl ml-3">Save</button>
            {
                isOpen== true? <div></div> : <div></div>
            }
           
        </form>
    
        </div>
        <Toaster position="top-center" />
    </div>
}
export default Form