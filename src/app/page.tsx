'use client';
import React from 'react';
import { FeedProvider, useFeedContext } from '@/context/FeedContext';
import Loading from '@/components/atoms/Loading';
import { FeedList } from '@/components/templates/FeedList';

const HomeScreen = () => {
  const { news, isLoading, isFetching, error } = useFeedContext();

  if (isLoading) {
    return (
      <div className='flex h-screen items-center justify-center'>
        <Loading size='h-16 w-16' color='text-brand-secondary' />
      </div>
    );
  }

  if (error) {
    return <div>Error loading news</div>;
  }

  return (
    <div className='home bg-slate-100 px-6 py-12'>
      {!isFetching && news.length > 0 && <FeedList news={news} />}
    </div>
  );
};

const Home = () => {
  return (
    <FeedProvider>
      <HomeScreen />
    </FeedProvider>
  );
};

export default Home;
