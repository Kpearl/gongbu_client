import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { changeField, initializeForm, register } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';

const RegisterForm = () => {
    const dispatch = useDispatch();
    const { form, auth, authError } = useSelector(({ auth }) => ({
        form: auth.register,
        auth: auth.auth,
        authError: auth.authError,
        id: auth.id,
        birth: auth.birth,
        phone: auth.phone,
    }));

    const onChange = e => {
        
    };

    const onSubmit = e =>{
        e.preventDefault();
        const {username, password, passwordConfirm} = form;
        if(password !== passwordConfirm) {
            return;
        }
        dispatch(register({username, password}));
    };

    useEffect(() => {
        if(authError) {
            console.log('오류 발생');
            console.log(authError);
            return;
        }
        if(auth) {
            console.log('회원가입 성공');
            console.log(auth);
        }
    },[auth, authError]);

    return (
        <AuthForm
            type="register"
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );
};

export default RegisterForm;