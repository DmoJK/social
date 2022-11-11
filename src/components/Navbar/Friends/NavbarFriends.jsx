import s from '../Navbar.module.css'

const Friends = (props) => {
    let image = props.state
        .map(f => <img src={f.img} key={f.id}/>);
    let name = props.state
        .map(f => <a className={s.friend} key={f.id}>{f.name}</a>)
    return (
        <div className={s.item}>
            <div className={s.friends}>
                Friends
                <div>
                    {image}
                    <div className={s.friend}>
                        {name}
                    </div>
                </div>
            </div>
        </div>
    )
    
};

export default Friends;