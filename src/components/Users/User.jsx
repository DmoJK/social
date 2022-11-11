import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/images/avaDefault.jpeg';
import s from './Users.module.css';

let User = ({ user, followingInProgress, unfollowThunkCreator, followThunkCreator }) => {
    return (
        <div>
            <span>
                <div className={s.ava}>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} />
                    </NavLink>
                </div>
                <div>
                    {user.followed ?
                        <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                unfollowThunkCreator(user.id)
                            }}>Unfollow</button> :
                        <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                followThunkCreator(user.id)
                            }}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <br />
            </span>
        </div>
    )
}

export default User;