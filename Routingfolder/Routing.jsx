import { Route, Routes } from "react-router-dom"
import Mainhome from "../loginsignuppage/Mainhome"
import Home from "../Insidewebsite/Home.jsx"

import EnrolledCourses from "../Insidewebsite/EnrolledCourses.jsx"
import AdminHome from "../AdminPage/AdminHome.jsx"
import ManageUsers from "../AdminPage/ManageUsers.jsx"
import Course1 from "../Insidewebsite/allcourses/Course1.jsx"
import Quiz from "../Insidewebsite/allcourses/Quiz.jsx"



const Routing=()=>{
    return(
        <div>
            <Routes>
               <Route path='/' element={<Mainhome/>}></Route>
              <Route path='/Home'  element={<Home/>}></Route>
            
             <Route path="/enrolled-courses" element={<EnrolledCourses/>}></Route>
             <Route path="/adminhome" element={<AdminHome/>}></Route>
             <Route path='/manageusers' element={<ManageUsers/>}></Route>
            <Route path="/courses/1" element={<Course1/>}></Route>
            <Route path="/quiz" element={<Quiz/>}></Route>
            </Routes>

        </div>
    )
}
export default Routing;