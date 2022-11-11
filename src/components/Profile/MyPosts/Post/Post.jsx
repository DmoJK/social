import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item} key={'key'}>
            <img src="https://i.pinimg.com/originals/e1/56/e0/e156e0e6aada7374c783aab65f280026.jpg" />
            {props.message}
            <div>
                <span>{'like ' + props.likesCount}</span>
            </div>
        </div>
    );
}

export default Post;