import s from '../ProfileInfo.module.css'
import { Form, Formik } from 'formik'
import CustomInput from '../../../common/FormsControl/CustomInput'
import CustomCheckbox from '../../../common/FormsControl/CustomInput'
import { profileValidation } from '../../../../utilities/validators'

const DescriptionForm = (props) => {
    return <div>
        <Formik
            initialValues={{
                fullName: props.fullName,
                aboutMe: props.aboutMe ? props.aboutMe : '',
                lookingForAJob: props.lookingForAJob ? props.lookingForAJob : '',
                lookingForAJobDescription: props.lookingForAJobDescription ? props.lookingForAJobDescription : '',
                contacts: props.contacts
            }}
            onSubmit={(values) => { props.updateProfile(values) }}
            validationSchema={profileValidation}
        >
            {({ isValid, dirty, isSubmitting }) => (
                <Form className={s.descriptionText}>
                    <CustomInput label='Name: ' name='fullName' type='text' />
                    <CustomInput label='AboutMe: ' name='aboutMe' type='text' />
                    <CustomCheckbox label='lookingForAJob: ' name='lookingForAJob' type='checkbox' />
                    <CustomInput label='lookingForAJobDescription: ' name='lookingForAJobDescription' type='text' />
                    <div>Contacts</div>
                    <div className={s.contacts}>
                        {Object.keys(props.contacts).map(key => {
                            return <CustomInput label={`${key}: `} name={"contacts." + key} type='text' key={key} />
                        })}
                    </div>
                    <button disabled={!isValid || !dirty || isSubmitting } type={'submit'} >Save changes</button>
                </Form>
            )}
        </Formik>
    </div>
}

export default DescriptionForm;