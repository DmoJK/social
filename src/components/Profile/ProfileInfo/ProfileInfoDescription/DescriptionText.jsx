import s from '../ProfileInfo.module.css'
import ProfileStatusWithHooks from './ProfileStatusHook';

const DescriptionText = (props) => {
  return (
    <div className={s.descriptionText}>
      <div className={s.main}>
        <div className={s.fullName}>{props.fullName}</div>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner} />
      </div>
      <div className={s.about}>About Me
        <div>Me: {props.aboutMe}</div>
        <div>About Job: {props.lookingForAJob ? "Looking for a job: " : "Not looking for a job"}</div>
        <div>Job Description: {props.lookingForAJobDescription}</div>
        <div>Contacts</div>
        <div className={s.contacts}>
          {Object.keys(props.contacts).map(key => {
            return <div key={key}>{key}: {props.contacts[key]}</div>
          })}
        </div>
      </div>
    </div>
  )
}

export default DescriptionText;