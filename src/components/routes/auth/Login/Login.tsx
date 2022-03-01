import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import {
  Formik,
  Field,
  Form,
} from 'formik';
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import * as types from '../core/types';
import { logIn } from '../core/action_creator';
import { RootState } from '../../../../redux/store';

function Login(): ReactElement {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const authState = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const initialValues: types.LogInFormValues = {
    email: '',
    password: '',
  };
  const validationSchema = Yup.object().shape({
    email: Yup
      .string()
      .email(t('auth:invalidEmail'))
      .required(t('globals:required')),
    password: Yup
      .string()
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[?!@#$%^&*])[0-9a-zA-Z?!@#$%^&*]{6,}$/,
        (t('auth:invalidPassword')),
      )
      .required(t('globals:required')),
  });

  const onSubmit = async (values: types.LogInFormValues): Promise<void> => {
    dispatch(logIn({
      email: values.email,
      password: values.password,
    }));
	navigate('/app/authors');
  };

  return (
    <div className="container">
      Log In Page
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ errors }) => (
          <Form>
            <label htmlFor="email">{t('auth:email')}</label>
            <Field
              id="email"
              name="email"
              placeholder="john@acme.com"
              type="email"
            />
            <div>{errors.email}</div>
            <label htmlFor="password">{t('auth:password')}</label>
            <Field
              id="password"
              name="password"
              placeholder={t('auth:passwordPlaceholder')}
              type="password"
            />
            <div>{errors.password}</div>
            <Button
              htmlType="submit"
              type="default"
              loading={authState.isLoggingIn}
            />
            <div>{authState.error}</div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
