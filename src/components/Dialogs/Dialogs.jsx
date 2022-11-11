import s from './Dialogs.module.css';
import MessageForm from './MessageForm/MessageForm';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {

    let messagesElements = props.messagesData
        .map(m => <div key={m.id} className={s.message}>{m.message}</div>)

    let dialogsElements = props.dialogsData
        .map(d => <div className={s.dialog} key={d.id}>
            <img src={d.img}></img>
            <NavLink to={'/dialogs/' + d.id} className={navData => navData.isActive ? s.active : s.name}>{d.name}</NavLink>
        </div>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <MessageForm addMessage={props.sendMessage} />
            </div>
        </div>
    );
}

export default Dialogs;