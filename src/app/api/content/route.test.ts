import '@testing-library/jest-dom'
import { beforeEach, describe, expect, it } from '@jest/globals';
import { GET } from '@/app/api/content/route';
import { IContentCard } from '@/types/IContentCard';

describe('/api/content', () => {
  beforeEach(() => {
    process.env.NEXT_PUBLIC_API_URL = 'https://stoplight.io/mocks/engine/fullstack-spec/52502230';
  });

  it('returns a list of news', async () => {

    const response = await GET();
    const body = await response.json();

    expect(body).toHaveProperty('data');
    expect(Array.isArray(body.data)).toBe(true);
    expect(body.data.length).toBeGreaterThan(0);

    body.data.forEach((card: IContentCard) => {
      expect(card).toHaveProperty('id');
      expect(card).toHaveProperty('imageUri');
      expect(card).toHaveProperty('textData');
      expect(card).toHaveProperty('metadata');
      expect(card).toHaveProperty('comments');

      const { textData } = card;
      expect(textData).toHaveProperty('title');
      expect(textData).toHaveProperty('subTitle');
      expect(textData).toHaveProperty('body');
      expect(textData).toHaveProperty('author');
      expect(textData.author).toHaveProperty('first');
      expect(textData.author).toHaveProperty('last');

      const { metadata } = card;
      expect(metadata).toHaveProperty('priority');
      expect(metadata).toHaveProperty('publishDate');

      const { comments } = card;
      expect(Array.isArray(comments)).toBe(true);
      comments.forEach((comment) => {
        expect(comment).toHaveProperty('text');
        expect(comment).toHaveProperty('author');
        expect(comment).toHaveProperty('profilePic');
        expect(comment).toHaveProperty('likes');
      });
    });
  });
});