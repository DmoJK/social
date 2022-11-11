import s from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'
import { Form, Formik } from 'formik'
import CustomTextarea from '../../common/FormsControl/CustomTextarea'
import { myPostsValidation } from '../../../utilities/validators'

const MyPostsForm = React.memo(props => {
  let postsElements = props.postsData
    .map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} />)

  if(!props.isOwner) {
    return  <div className={s.postBlock}>
    <h3>Posts</h3>
    <div className={s.posts}>
      {postsElements}
    </div>
  </div>
  }
  return <div>
    <Formik
      initialValues={{
        addPost: ''
      }}
      validationSchema={myPostsValidation}
      onSubmit={(values, actions) => { props.addPost(values.addPost); actions.resetForm() }}
    >
      {({ isValid, dirty }) => (
        <div className={s.postBlock}>
          <h3>My posts</h3>
          <Form className={s.postArea}>
            <CustomTextarea placeholder="What's new" name='addPost' type='text' />
            <button disabled={!isValid || !dirty} type={'submit'}>Add post</button>
          </Form>
          <div className={s.posts}>
            {postsElements}
          </div>
        </div>
      )}
    </Formik>
  </div>
})

export default MyPostsForm