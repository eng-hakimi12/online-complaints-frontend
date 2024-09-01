import SideNav from "../components/SideNav";
import { useState , useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom"

function Complaints(){
    const [read ,setRead]= useState([]);

    // handle Read data
    const HandleGetDate= ()=>{
        axios.get("http://localhost:3000/courses").then((response)=>{
            setRead(response.data)
        }).catch((error)=>{
            console.log(error)
        });
    }

    useEffect(()=>{
        HandleGetDate()
    },[]);


    return <div className="">
        <SideNav/>
     <div className="ml-[21%]">
        <h1 className="text-3xl font-bold">All Complaints</h1>
        <table className="w-full text-center mt-5">
            <tr>
              <th>SN</th>
              <th>Title</th>
              <th>Description</th>
              <th>Issue Date</th>
              <th>Action</th>
            </tr>
            {
                read.map((data , index)=>{
                    return <tr key={data.id} >
                        <td className="border-t-2 border-b-2 p-1">{index+1}</td>
                        <td className="border-2 p-1">{data.title}</td>
                        <td className="border-2 p-1">{data.description.substring(0,10)+("..")}</td>
                        <td className="border-2 p-1">{new Date().toLocaleString() }</td>
                        {/* <td className="border-2 p-1">{data.createdAt.substring(0,21)+("..")}</td> */}
                        <td className="border-2 p-1"> <Link to={`/details/${data._id}`}> <button className="bg-blue-500 p-1 text-secondaryColor">Details</button></Link> </td>
                    </tr>
                })
            }
           
        </table>
       </div>
    </div>
}

export default Complaints;