import Image from 'next/image';
import React, { FC } from 'react';
import { LoginForm } from '../../molecules';

type Props = {};

export const Login: FC<Props> = () => (
  <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <div className="flex justify-center">
        <Image width="283" height="64" src="/vercel.svg" alt="Logo" />
      </div>
      <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">
        Sign in to your account
      </h2>
    </div>

    <LoginForm />
  </div>
);
