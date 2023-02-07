import React, { FC, useState } from 'react';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { Button, TextInput, Notification, Checkbox } from '../../atoms';
import { useLoginMutation } from '../../../graphql';

type Props = {};

export const LoginForm: FC<Props> = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const router = useRouter();
  const { mutate: login } = useLoginMutation({
    onSuccess: (data) => {
      if (data.login.access_token && data.login.refresh_token) {
        localStorage.setItem('access_token', data.login.access_token);
        localStorage.setItem('refresh_token', data.login.refresh_token);
        router.push('/home');
      }
    },
    onError: () => setLoginError(true),
  });
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (loginData) => login({ loginData }),
  });
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <div className="space-y-6">
          <TextInput
            label="Email address"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <TextInput
            label="Password"
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            onChange={formik.handleChange}
            value={formik.values.password}
          />

          <div className="flex items-center justify-between">
            <Checkbox
              label="Remember me"
              defaultChecked={rememberMe}
              onChange={(current) =>
                setRememberMe(Boolean(current.target.value))
              }
              data-testid="remember-me-checkbox"
            />

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <Button onClick={() => formik.handleSubmit()}>Sign in</Button>
          </div>
          {loginError && (
            <Notification
              setShow={setLoginError}
              error={true}
              headerText="Incorrect username or password"
            />
          )}
        </div>
      </div>
    </div>
  );
};
