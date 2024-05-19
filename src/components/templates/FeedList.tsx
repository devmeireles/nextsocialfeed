import INews from '@/types/INews';
import React from 'react';
import NewsCard from '@/components/organisms/NewsCard';

interface IFeedListProps {
  news: INews[];
}

export const FeedList: React.FC<IFeedListProps> = ({ news }) => {
  return (
    <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
      {news.map((item, index) => (
        <NewsCard
          key={index}
          image={item.image}
          title={item.title}
          subtitle={item.subtitle}
          author={item.author}
          content={item.content}
          comments={item.comments}
        />
      ))}
    </div>
  );
};
