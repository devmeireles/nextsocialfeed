import { IAuthor } from '@/types/IAuthor';

export interface ITextData {
  title: string;
  subTitle: string;
  body: string;
  author: IAuthor;
}
