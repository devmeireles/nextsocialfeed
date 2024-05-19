import React from 'react';
import classNames from 'classnames';

interface TextProps {
  children: React.ReactNode;
  size?: string;
  color?: string;
  weight?: string;
  lineHeight?: string;
  className?: string;
}

const Text: React.FC<TextProps> = ({
  children,
  size = 'text-base',
  color = 'text-gray-900',
  weight = 'font-normal',
  lineHeight = 'leading-normal',
  className,
}) => {
  const classes = classNames(size, color, weight, lineHeight, className);

  return <p className={classes}>{children}</p>;
};

export default Text;
