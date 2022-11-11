import { NavLink } from 'react-router-dom';
import s from '../Dialogs.module.css';

const Dialog = ({ img, id, name }) => {
    return <div className={s.dialog}>
        <img src={img}></img>
        <NavLink to={'/dialogs/' + id} className={navData => navData.isActive ? s.active : s.name}>{name}</NavLink>
    </div>
}

export default Dialog