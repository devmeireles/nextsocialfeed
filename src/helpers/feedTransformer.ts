import INews from '@/types/INews';
import { IContentCard } from '@/types/IContentCard';

export const feedTransformer = (data: IContentCard[]): INews[] | [] => {
  return data
    .sort((a, b) => b.metadata.priority - a.metadata.priority)
    .map((item) => ({
      id: item.id,
      image: item.imageUri,
      title: item.textData.title,
      subtitle: item.textData.subTitle,
      author: `${item.textData.author.first} ${item.textData.author.last}`,
      content: item.textData.body,
      comments: item.comments.length,
    }));
};
