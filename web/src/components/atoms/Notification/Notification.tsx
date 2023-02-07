import React, { Dispatch, FC, SetStateAction } from 'react';
import { XIcon } from '@heroicons/react/solid';

type Props = {
  setShow: Dispatch<SetStateAction<boolean>>;
  error: boolean;
  headerText: string;
  subheaderText?: string;
};

export const Notification: FC<Props> = (props) => (
  <div
    aria-live="assertive"
    className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start z-50"
  >
    <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
      <div
        className={`max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden ${
          props.error ? 'border-solid border-red-600 border-4' : ''
        }`}
      >
        <div className="p-4">
          <div className="flex items-start">
            <div className="ml-3 w-0 flex-1 pt-0.5">
              <p className="text-sm font-medium text-gray-900">
                {props.headerText}
              </p>
              {props.subheaderText && (
                <p className="mt-1 text-sm text-gray-500">
                  {props.subheaderText}
                </p>
              )}
            </div>
            <div className="ml-4 flex-shrink-0 flex">
              <button
                type="button"
                className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => {
                  props.setShow(false);
                }}
              >
                <span className="sr-only">Close</span>
                <XIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
