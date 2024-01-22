import { Routes, Route } from "react-router-dom";
import Sitebar from "../sitebar/Sitebar";
import Home from "../pages/home_page/Home";
import Login from "../pages/login_page/Login";
import View from "../pages/view_page/View";
import Example from "../pages/example_page/Example";
import Klep from "../pages/loop_page/Klep";


function Section() {
  return (
    <section>
    <div className="global_body d-flex col-12">
      <Sitebar/>
      <div className="main_section">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/view" element={<View />} />
          <Route path="/example" element={<Example />} />
          <Route path="/klep" element={<Klep />} />
        </Routes>
      </div>
    </div>
  </section>
    )
}

export default Section