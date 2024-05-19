import { feedTransformer } from '@/helpers/feedTransformer';

const fetchFeed = async () => {
  const res = await fetch('/api/content');
  const { data } = await res.json();

  return data;
};

export default fetchFeed;
