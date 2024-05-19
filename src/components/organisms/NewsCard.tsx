import React, { useState } from 'react';
import Image from '../atoms/Image';
import MediaContent from '../molecules/MediaContent';

interface NewsCardProps {
  image: string;
  title: string;
  subtitle: string;
  author: string;
  content: string;
  comments: number;
}

const NewsCard: React.FC<NewsCardProps> = ({
  image,
  title,
  subtitle,
  author,
  content,
  comments,
}) => {
  return (
    <div className='overflow-hidden rounded-lg bg-white'>
      <Image src={image} alt={title} />
      <MediaContent
        title={title}
        subtitle={subtitle}
        author={author}
        content={content}
        comments={comments}
      />
    </div>
  );
};

export default NewsCard;
