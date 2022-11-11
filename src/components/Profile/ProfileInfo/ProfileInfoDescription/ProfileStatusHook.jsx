import React, { useEffect, useState } from 'react'
import s from '../ProfileInfo.module.css'

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false)
    const activateMode = () => { setEditMode(true) }
    const deactivateMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    let [status, setStatus] = useState(props.status)
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    if (!props.isOwner) {
        return <div className={s.status}>
            <span>{props.status || 'no status'}</span>
        </div>
    }

    return (
        <div>
            {!editMode &&
                <div className={s.statusOwner}>
                    <span onDoubleClick={activateMode} >{props.status || 'no status'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus={true} onBlur={deactivateMode} onChange={onStatusChange} value={status} />
                </div>
            }
        </div>
    )
}


export default ProfileStatusWithHooks