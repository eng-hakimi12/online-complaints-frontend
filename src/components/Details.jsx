import SideNav from "./SideNav";
import { useState , useEffect } from "react";
import {  useParams } from "react-router-dom"       
import axios from "axios";
import {toast , Toaster} from "react-hot-toast";
// import { useNavigate } from "react-router-dom";


function  Details(){

        const [single,setSingle]= useState([]);
        
        const params= useParams();
        // const navigate = useNavigate();

        const HandleSingleData= ()=>{
            axios.get(`http://localhost:3000/courses/single/${params._id}`).then((response)=>{
                    setSingle(response.data);
                    setSingle(response.data);

            }).catch((error)=>{
                
                console.log(error)
            })
        }

        useEffect(()=>{
            HandleSingleData()
        })

        const HandleDeleteData = (_id)=>{
            axios.delete(`http://localhost:3000/courses/delete/${params._id}`).then(()=>{
                toast.success("Deleted Successfully");
                
                // navigate(-1)
            }).catch((err)=>{
                console.log(err)
            })
        }

    return <div className="">
        <SideNav/>
        <div className="ml-[21%] pt-10">
            <button onClick={ ()=>HandleDeleteData(single._id)} className="bg-red-300 py-2 px-3 rounded ">Delete</button>
            <h1 className="font-semibold text-2xl">{single.title}</h1>
            <p className="text-2xl">{single.description}</p>
       
            
           
        </div>
        <Toaster position="top-center" />
        
    </div>
}
export default Details;