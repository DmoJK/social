import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css'
import { useState } from 'react';
import DescriptionImg from './ProfileInfoDescription/DescriptionImg';
import DescriptionForm from './ProfileInfoDescription/DescriptionForm';
import DescriptionText from './ProfileInfoDescription/DescriptionText';

const ProfileInfo = (props) => {
  const [editMode, setEditMode] = useState(false)

  const activateMode = () => { setEditMode(true) }
  const deactivateMode = () => {
    setEditMode(false)
  }

  if (!props.profile) {
    return <Preloader />
  }
  const onNewPhoto = (e) => {
    if (e.target.files.length) {
      props.updatePhoto(e.target.files[0])
    }
  }

  return (
    <div className={s.descriptionBlock}>
      <DescriptionImg avaLarge={props.profile.photos.large}
        isOwner={props.isOwner}
        onNewPhoto={onNewPhoto}
        activateMode={activateMode}
        deactivateMode={deactivateMode}
        editMode={editMode} />
      {editMode ?
        <DescriptionForm fullName={props.profile.fullName}
          status={props.status}
          updateStatus={props.updateStatus}
          aboutMe={props.profile.aboutMe}
          lookingForAJob={props.profile.lookingForAJob}
          lookingForAJobDescription={props.profile.lookingForAJobDescription}
          contacts={props.profile.contacts}
          updateProfile={props.updateProfile} /> :
        <DescriptionText fullName={props.profile.fullName}
          isOwner={props.isOwner}
          status={props.status}
          updateStatus={props.updateStatus}
          aboutMe={props.profile.aboutMe}
          lookingForAJob={props.profile.lookingForAJob}
          lookingForAJobDescription={props.profile.lookingForAJobDescription}
          contacts={props.profile.contacts} />
      }
    </div>
  );
}

export default ProfileInfo;