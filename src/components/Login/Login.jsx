import { connect } from 'react-redux'
import { login } from "../../redux/auth-reducer"
import { Navigate } from "react-router-dom"
import CustomInput from "../common/FormsControl/CustomInput"
import CustomCheckbox from "../common/FormsControl/CustomInput"
import { loginValidation } from '../../utilities/validators'
import { Form, Formik } from 'formik'


const LoginForm = (props) => {
    if (props.isAuth) {
        return <Navigate to={`/profile/${props.userId}`} />
    }
    return <div>
        <h1>Login</h1>
        <Formik
            initialValues={{
                email: '',
                password: '',
                rememberMe: false,
                captcha: ''
            }}
            onSubmit={(values) => { props.login(values.email, values.password, values.rememberMe, values.captcha) }}
            validationSchema={loginValidation}
        >
            {({ isValid, dirty }) => (
                <Form>
                    <CustomInput label='Email ' name='email' type='text' />
                    <CustomInput label='Password: ' name='password' type='text' />
                    <CustomCheckbox label='rememberMe ' name='rememberMe' type='checkbox' />
                    {props.captcha &&
                        <div>
                            <img src={props.captcha} />
                            <CustomInput label='Captcha:' name='captcha' type='text' />
                        </div>
                    }
                    <button disabled={!isValid || !dirty } type={'submit'}>Save changes</button>
                </Form>
            )}
        </Formik>
    </div>
}

let mapStateToProps = (state) => {
    return {
        userId: state.auth.id,
        isAuth: state.auth.isAuth,
        captcha: state.auth.captcha
    }
}
export default connect(mapStateToProps, { login })(LoginForm)

//{props.captcha && <img src={props.captcha} /> && <CustomInput label='Captcha:' name='captcha' type='text' /> }