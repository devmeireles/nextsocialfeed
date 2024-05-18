import INews from '@/types/INews';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import fetchField from '@/app/api/content/fetchFeed';

interface FeedContextProps {
  children: React.ReactNode;
}

interface IFeedContext {
  news: INews[] | [];
  isLoading: boolean;
  isFetching: boolean;
}

const defaultState: IFeedContext = {
  news: [],
  isLoading: false,
  isFetching: false,
};

const FeedContext = React.createContext<IFeedContext>(defaultState);

const useFeedContext = (): IFeedContext => {
  const context = React.useContext(FeedContext);
  if (!context) {
    throw new Error('useFeedContext must be used within a FeedProvider');
  }
  return context;
};

const FeedProvider: React.FC<FeedContextProps> = ({ children }) => {
  const feedQuery = useQuery({
    queryKey: ['country'],
    queryFn: async () => fetchField(),
  });

  const feedContent = feedQuery.data ?? [];

  const contextValues = {
    news: feedContent,
    isLoading: feedQuery.isLoading,
    isFetching: feedQuery.isFetching,
  };

  return (
    <FeedContext.Provider value={contextValues}>
      {children}
    </FeedContext.Provider>
  );
};

export { FeedContext, useFeedContext, FeedProvider };
