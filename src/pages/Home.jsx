import Header from '../components/Header'
import Form from '../components/Form';
import { useState } from 'react';
function Home(){
    const [isOpen , setIsOpen] = useState(false)

    //Handle open Button
    const HandleOpenBtn = ()=>{
        setIsOpen(true)
    }
   

    return <div>
            <Header/>
        <div className="text-center pt-[13%] bg-primaryColor h-[500px] ">

          <h1 id="h1" className="text-[50px] font-semibold ">Make your complaint way easier ever</h1>
          <p className="text-1xl">We are committed to solve your complaint.Make any complaint you could have</p>
          <button onClick={HandleOpenBtn}  className="px-8 py-2 bg-secondaryColor rounded-[10px] text-3xl mt-6 ">Make Complaint</button>
          {
            
           isOpen == true ? <Form /> :""
          }
          
       </div>
  
    </div>
}
export default Home;