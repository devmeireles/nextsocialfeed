import React, { useState } from 'react';
import Text from '@/components/atoms/Text';

interface MediaContentProps {
  title: string;
  subtitle: string;
  author: string;
  content: string;
  comments: number;
}

const MediaContent: React.FC<MediaContentProps> = ({
  title,
  subtitle,
  author,
  content,
  comments,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className='p-4'>
      <div className='flex flex-col'>
        <div className='flex items-center justify-between'>
          <Text
            size='text-2xl'
            color='text-brand-primary'
            weight='font-bold'
            className='my-2'
          >
            {title}
          </Text>
          <Text size='text-sm' color='text-gray-500'>
            {author}
          </Text>
        </div>

        <div>
          <Text size='text-xl' color='text-brand-primary' className='my-1'>
            {subtitle}
          </Text>
        </div>

        <div>
          <Text
            size='text-base'
            className={`my-4 break-words ${expanded ? '' : 'line-clamp-3'}`}
          >
            {content}
          </Text>

          <a
            href='#'
            className='mb-4 text-blue-500'
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Show Less' : 'Read More'}
          </a>
        </div>
      </div>

      <div className='mt-6'>
        <Text size='text-base'>{comments}</Text>
      </div>
    </div>
  );
};

export default MediaContent;
