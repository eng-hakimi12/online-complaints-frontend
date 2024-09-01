import { NavLink } from "react-router-dom"
function Header(){
    
    return <div className="bg- font-primaryFont text-primaryColor px-[60px] py-[20px] flex  justify-between items-center">
        <h1 className="text-4xl font-bold">hakimi<span className="text-black">Complaint</span></h1>
        <ul className="flex gap-5 text-3xl">
           <NavLink to="/"> <li>Home</li></NavLink> 
           <NavLink to="/about"> <li>About</li></NavLink>
           <NavLink to="/contact"> <li>Contact</li></NavLink>
           
        </ul>
        <NavLink to="/dashboard"> <button  className="border-[2px]  px-6 py-2 rounded-[10px] text-[20px] hover:bg-primaryColor hover:text-secondaryColor ">Admin</button></NavLink> 
    </div>
}
export default Header