import * as Yup from 'yup'

export const loginValidation = Yup.object().shape({
    identifier: Yup.string().required('required').nullable().min(8, 'must be longer than 8 characters'),
    password: Yup.string().required('required').nullable().min(8, 'must be longer than 8 characters'),
})