import { Form, Formik } from "formik";
import React from "react";
import { dialogsValidation } from "../../../utilities/validators";
import CustomTextarea from "../../common/FormsControl/CustomTextarea";
import s from './../Dialogs.module.css';

const MessageForm = React.memo(props => {
    return <div className={s.messageInput}>
        <Formik
            initialValues={{
                message: ''
            }}
            validationSchema={dialogsValidation}
            onSubmit={(values, actions) => { props.addMessage(values.message); actions.resetForm() }}
        >
            {({ isValid, dirty }) => (
                <Form className={s.postArea}>
                    <CustomTextarea placeholder='Enter your message' name='message' type='text' />
                    <button disabled={!isValid || !dirty} type={'submit'}>Send</button>
                </Form>
            )}
        </Formik>
    </div>
})

export default MessageForm


