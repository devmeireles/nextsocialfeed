import React from 'react';
import INews from '@/types/INews';
import { useQuery } from '@tanstack/react-query';
import fetchFeed from '@/app/api/content/fetchFeed';
import { feedTransformer } from '@/helpers/feedTransformer';

interface FeedContextProps {
  children: React.ReactNode;
}

interface IFeedContext {
  news: INews[] | [];
  isLoading: boolean;
  isFetching: boolean;
  error: Error | null;
}

const defaultState: IFeedContext = {
  news: [],
  isLoading: false,
  isFetching: false,
  error: null,
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
  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ['country'],
    queryFn: async () => fetchFeed(),
  });

  const contextValues = {
    news: data ? feedTransformer(data) : [],
    isLoading,
    isFetching,
    error,
  };

  return (
    <FeedContext.Provider value={contextValues}>
      {children}
    </FeedContext.Provider>
  );
};

export { FeedContext, useFeedContext, FeedProvider };
