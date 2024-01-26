'use client';

import React, { useEffect } from 'react';

interface IErrorProps {
  error: Error;
  reset: () => void;
}

const Error: React.FC<IErrorProps> = (props) => {
  const { error, reset } = props;

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-deepgray-500">
      <div className="bg-tile dark:bg-dark-500 p-10 mx-2 max-w-lg rounded shadow-lg text-center border-t-4 border-orange-400 dark:border-orange-300">
        <h2 className="font-serif font-bold text-lg text-orange-400 dark:text-orange-300">There was an error</h2>
        <p className="text-sm">
          If this continues, please report it to us on
          <a href="https://discord.gg/JXeUnR9stP" target="_blank" rel="noreferrer">Discord</a>
          .
        </p>
        <div className="mt-4">
          <button
            type="button"
            className="btn"
            onClick={
              () => reset()
            }
          >
            Try again
          </button>
        </div>
        <p className="mt-4 text-xs text-gray-400">{error.message}</p>
      </div>
    </div>
  );
};

export default Error;
