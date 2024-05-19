import { IMetadata } from '@/types/IMetadata';
import { ITextData } from '@/types/ITextData';
import { IComment } from '@/types/IComment';

export interface IContentCard {
  id: string;
  imageUri: string;
  textData: ITextData;
  metadata: IMetadata;
  comments: IComment[];
}
