import React from 'react';
import classNames from 'classnames';

interface LoadingProps {
  size?: string;
  color?: string;
  className?: string;
}

const Loading: React.FC<LoadingProps> = ({
  size = 'h-8 w-8',
  color = 'text-blue-500',
  className,
}) => {
  const classes = classNames('animate-spin', size, color, className);

  return (
    <svg
      className={classes}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
    >
      <circle
        className='opacity-25'
        cx='12'
        cy='12'
        r='10'
        stroke='currentColor'
        strokeWidth='4'
      ></circle>
      <path
        className='opacity-75'
        fill='currentColor'
        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.963 7.963 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
      ></path>
    </svg>
  );
};

export default Loading;
