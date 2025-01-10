import React from 'react'
import GetStudentComponent from './Components/GetStudentComponent'
import { Route, Routes } from 'react-router-dom'
import NavBarComponent from './Components/NavBarComponent'
import PostStudentComponent from './Components/PostStudentComponent'
import GetCourseComponent from './Components/GetCourseComponent'
import PostCourseComponent from './Components/PostCourseComponent'
import PostEnrollmentComponent from './Components/PostEnrollmentComponent'

const App = () => {
  return (
    <div>
      <NavBarComponent />
      <Routes>
        <Route path='/getstudent' element={<GetStudentComponent />}></Route>
        <Route path='/poststudent' element={<PostStudentComponent />}></Route>
        <Route path='/getcourse' element={<GetCourseComponent />}></Route>
        <Route path='/postcourse' element={<PostCourseComponent />}></Route>
        <Route path='/postenrollment' element={<PostEnrollmentComponent />}></Route>
      </Routes>
    </div>
  )
}

export default App
