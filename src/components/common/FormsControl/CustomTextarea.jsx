import { useField } from "formik"

const CustomTextarea = ({ ...props }) => {
    const [field, meta] = useField(props)

    return (
        <div>
            <textarea
                {...field}
                {...props}
                className={meta.touched && meta.error ? 'input-error' : 'input-form'}
            />
            {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
        </div>
    )
}
export default CustomTextarea