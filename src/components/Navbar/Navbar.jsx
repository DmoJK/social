import { NavLink } from 'react-router-dom';
import Friends from './Friends/NavbarFriends';
import s from './Navbar.module.css'

const Navbar = (props) => {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink to={`/profile/${props.myProfile}`} className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
      </div>
      <div>
        <NavLink to='/dialogs' className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink>
      </div>
      <div>
        <NavLink to='/news' className={navData => navData.isActive ? s.active : s.item}>News</NavLink>
      </div>
      <div>
        <NavLink to='/music' className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
      </div>
      <div>
        <NavLink to='/settings' className={navData => navData.isActive ? s.active : s.item}>Settings</NavLink>
      </div>
      <div>
        <NavLink to='/users' className={navData => navData.isActive ? s.active : s.item}>Users</NavLink>
      </div>
      <Friends state={props.state.friendsData} />
    </nav>
  );
}

export default Navbar;