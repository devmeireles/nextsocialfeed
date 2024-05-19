import React from 'react';
import NextImage from 'next/image';

interface ImageProps {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt }) => (
  // <img className="h-auto w-full rounded-t-lg" src={src} alt={alt} />
  <NextImage
    width={500}
    height={500}
    className='h-auto w-full rounded-t-lg'
    src={src}
    alt={alt}
  />
);

export default Image;
