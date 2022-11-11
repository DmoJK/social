import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src='https://i.pinimg.com/originals/0c/ef/e6/0cefe62b622ed7886232b3b56f8ce72c.jpg' />
      <div className={s.loginBlock}>
        {props.isAuth ?
          <div>
          <div>{props.login}</div>
          <button onClick={props.logout}>logout</button>
          </div>
          :
          <NavLink to={'/login'} className={navData => navData.isActive ? s.active : s.item}>Login</NavLink>}
      </div>
    </header>
  );
}

export default Header;