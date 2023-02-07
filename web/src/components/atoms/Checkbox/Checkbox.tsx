import React, { FC } from 'react';

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label: string;
  'data-testid'?: string;
};

export const Checkbox: FC<Props> = ({ label, ...props }) => (
  <div className="flex items-center">
    <input
      id="remember-me"
      name="remember-me"
      type="checkbox"
      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
      {...props}
    />
    <label
      htmlFor="remember-me"
      className="ml-2 block text-sm text-gray-900"
      data-testid={`${props['data-testid']}-label`}
    >
      {label}
    </label>
  </div>
);
