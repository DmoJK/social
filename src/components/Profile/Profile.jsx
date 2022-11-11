import MyPostsForm from './MyPosts/MyPosts';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner} updatePhoto={props.updatePhoto} updateProfile={props.updateProfile} />
      <MyPostsForm isOwner={props.isOwner} addPost={props.addPost} postsData={props.postsData} />
    </div>
  );
}

export default Profile;