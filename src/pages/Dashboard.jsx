import SideNav from "../components/SideNav"
function Dashboard(){
    return <div className="flex gap-10">      
        <SideNav/>
        <div className="ml-[21%]">
        <h1>this is Dashboard page</h1>
        </div>
    </div>
}
export default Dashboard