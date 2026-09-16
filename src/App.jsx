import { Routes, Route } from "react-router-dom";

//sistema
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Home from "./screens/home/Dashboard";

// registros
import ApprenticeRegister from "./screens/apprentice/ApprenticeRegister";
import AreaRegister from "./screens/area/AreaRegister";
import ComputerRegister from "./screens/computer/ComputerRegister";
import TrainingCenterRegister from "./screens/trainingcenter/TrainingCenterRegister";
import TeacherRegister from "./screens/teacher/teacheregister";
import CourseRegister from "./screens/course/CourseRegister";
import CourseTeacherRegister from "./screens/course_teacher/CourseTeacherRegister"

//listas
import Login from "./screens/login/login";
import Carnet from "./screens/cartnet/carnet";
import ApprenticeList from "./screens/apprentice/ApprenticeList";
import AreaList from "./screens/area/AreaList";
import ComputerList from "./screens/computer/ComputerList";
import TrainingCenterList from "./screens/trainingcenter/TrainingCenterList";
import TeacherList from "./screens/teacher/teacherlist";
import CourseList from "./screens/course/CourseList"
import CourseTeacherList from "./screens/course_teacher/CourseTeacherList"
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* registros */}
        <Route path="/ApprenticeRegister" element={<ApprenticeRegister />} />
        <Route path="/AreaRegister" element={<AreaRegister />} />
        <Route path="/ComputerRegister" element={<ComputerRegister />} />
        <Route path="/TrainingCenterRegister" element={<TrainingCenterRegister />}/>
        <Route path="/TeacherRegister" element={<TeacherRegister />} />
        <Route path="/CourseRegister" element={<CourseRegister />} />
        <Route path="/CourseTeacherRegister" element={<CourseTeacherRegister />} />

        {/* lista */}
        <Route path="/ApprenticeList" element={<ApprenticeList />} />
        <Route path="/AreaList" element={<AreaList />} />
        <Route path="/ComputerList" element={<ComputerList />} />
        <Route path="/TrainingCenterList" element={<TrainingCenterList />} />
        <Route path="/TeacherList" element={<TeacherList />} />
        <Route path="/CourseList" element={<CourseList />} />
        <Route path="/CourseTeacherList" element={<CourseTeacherList />} />

        {/* sistema */}
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Carnet" element={<Carnet />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
