import { feedTransformer } from '@/helpers/feedTransformer';
import { expect, describe, it } from '@jest/globals';
import { IContentCard } from '@/types/IContentCard';

describe('feedTransformer', () => {
  it('transforms data correctly', () => {
    const data: IContentCard[] = [
      {
        id: '1',
        imageUri: 'https://example.com/image1.jpg',
        textData: {
          title: 'Title 1',
          subTitle: 'Subtitle 1',
          author: {
            first: 'John',
            last: 'Doe'
          },
          body: 'Body 1'
        },
        metadata: {
          priority: 2,
          publishDate: '2019-08-24T14:15:22Z',
        },
        comments: [
          {
            text: 'Comment 1',
            author: 'Alice',
            profilePic: 'https://example.com/profile1.jpg',
            likes: 5
          }
        ]
      },
    ];

    const expectedTransformedData = [
      {
        id: '1',
        image: 'https://example.com/image1.jpg',
        title: 'Title 1',
        subtitle: 'Subtitle 1',
        author: 'John Doe',
        content: 'Body 1',
        comments: 1
      }
    ];

    const transformedData = feedTransformer(data);

    expect(transformedData).toEqual(expectedTransformedData);

    transformedData.forEach((item) => {
      expect(item.id).toEqual(expect.any(String));
      expect(item.image).toEqual(expect.any(String));
      expect(item.title).toEqual(expect.any(String));
      expect(item.subtitle).toEqual(expect.any(String));
      expect(item.author).toEqual(expect.any(String));
      expect(item.content).toEqual(expect.any(String));
      expect(item.comments).toEqual(expect.any(Number));
    });
  });
});
