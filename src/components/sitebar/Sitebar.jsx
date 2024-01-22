import { NavLink } from 'react-router-dom';
import style from "../sitebar/Sitebar.module.css";
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AddchartIcon from '@mui/icons-material/Addchart';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import CachedIcon from '@mui/icons-material/Cached';


function Sitebar() {
  return (
    <div className="sitebar_menu col-2">
        <h4 class="robocontest">Contest Dev</h4>
        <ul className="">
          <li className="site_bar_list">
            <NavLink className="sidebar_link" to="/">
            <HomeIcon/>
              Bosh sahifa
            </NavLink>
          </li>
          <li className="site_bar_list">
            <NavLink className="sidebar_link" to="/login">
            <LibraryBooksIcon/>
              Masalalar ro'yxati
            </NavLink>
          </li>
          <li className="site_bar_list">
            <NavLink className="sidebar_link" to="/view">
            <AddchartIcon/>
              Urinishlar
            </NavLink>
          </li>
          <li className="site_bar_list">
            <NavLink className="sidebar_link" to="/example">
              <AppRegistrationIcon/>                    
              Masala ko'rinishi
            </NavLink>
          </li>
          <li className="site_bar_list">
            <NavLink className="sidebar_link" to="/klep">
            <CachedIcon/>
              Urinish haqida
            </NavLink>
          </li>
        </ul>
      </div>
  )
}

export default Sitebar