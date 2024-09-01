import { NavLink } from "react-router-dom"
function SideNav(){
    return <div className="bg-primaryColor fixed h-screen w-[20%] pt-[90px] text-secondaryColor text-3xl">
        <i class="fa-solid fa-x absolute top-0 left-[200px] pt-4"></i>
        <ul className="text-3xl flex flex-col gap-10  px-3">
           <NavLink to="/dashboard"> <li> <i class="fa-brands fa-windows"></i> Dashboard</li></NavLink>
           <NavLink to="/complaints"> <li> <i class="fa-solid fa-book"></i> Complaints</li></NavLink>
            <li> <i class="fa-solid fa-right-from-bracket"></i> logout</li>
        </ul>
    </div>
}
export default SideNav