import s from '../ProfileInfo.module.css'
import img from '../../../../assets/images/avaDefault.jpeg'

const DescriptionImg = (props) => {
  return (
    <div className={s.descriptionImg}>
      <div>
        <img src={props.avaLarge || img} />
      </div>
      <div>
        {props.isOwner && <input type='file' onChange={props.onNewPhoto} />}
      </div>
      <div>
        {props.isOwner ?
          props.editMode ?
            <button onClick={props.deactivateMode} >Go to profile</button> :
            <button onClick={props.activateMode} >Go to edit</button>
          : ''

        }
      </div>

    </div>
  )
}

export default DescriptionImg;