
import './Dbmain.css'
import Navbar from './Nav'
import Dashboard from './Dashboard'
import "./Nav.css"
import { Route, Routes } from 'react-router-dom'
import Addandmanage from './Addandmanage'
import Addandmanage2 from './Addandmanage2'
import Userslist from './Userslist'
import Twobook from './Twobook'
import Fourbook from './Fourbook'
import Logout from './Logout'
import Edittwowheel from './Edittwowheel'
import Editfourwheel from './Editfourwheel'
import Allbooking from './Allbooking'
import Userlogin from './Userlogin'
import Addtwowheel from './Addtwowheel'
import Addfourwheel from './Addfourwheel'
import Newbooking from './Newbooking'
import BookForm from '../Userpanel/Bookfrom'
import Bookings from '../Userpanel/Fourbook'
import Userslist2 from './Userlist2'
import Rentlanding from './Rentlanding'

export default function Dbmain() {
  

  return (
   <>

 
      <div className="db-main">
        <Navbar /> 
        <Routes>
        <Route path={"/"} element={<Rentlanding/>} />
        <Route path={"/dash"} element={<Dashboard />} />
        <Route path={"/two"} element={<Addandmanage />} />
        <Route path={"/managetwo"} element={<Edittwowheel />} />
        <Route path={"/managefour"} element={<Editfourwheel />} />
        <Route path={"/four"} element={<Addandmanage2 />} />
        <Route path={"/bookform/:id"} element={<BookForm />} />
        <Route path={"/fourbook/:id"} element={<Bookings />} />
        <Route path={"/addtwo"} element={<Addtwowheel/>} />
        <Route path={"/addfour"} element={<Addfourwheel />} />
        <Route path={"/user"} element={<Userslist />} />
        <Route path={"/users"} element={<Userslist2 />} />
        <Route path={"/twobook"} element={<Twobook />} />
        <Route path={"/twobook"} element={<Fourbook />} />
        <Route path={"/allbook1"} element={<Allbooking />} />
        <Route path={"/newbook"} element={<Newbooking />} />
        <Route path={"/logout"} element={<Logout />} />
       
        </Routes>
         
    </div>
      

       
   </>
  )
}
