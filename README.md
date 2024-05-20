The objective of this challenge is to showcase the Next.js proficiency in both backend and frontend development, as well as the ability to integrate APIs effectively.
By developing this full-stack application, we demonstrate the integration retrieving data from a private API, processing it on the backend, and presenting it in an intuitive and user-friendly format on the frontend.

## Table of Contents

- [Getting Started](#Getting Started)
- [Stack](#stack)
- [Test](#test)
- [API](#api)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Stack
 - Next.js
 - TypeScript
 - Jest
 - React Testing Library
 - Tailwind
 - Eslint
 - Prettier

## Test

```bash
npm run test
# or
yarn test
# or
pnpm test
# or
bun test
```

## API
To fetch the content feed, send a GET request to the /api/content route.
- **GET /api/content**: Retrieves the feed of content cards.

### Response
The response will contain an array of content cards.
Example Response:
```json
{
  "data": [
    {
      "id": "1",
      "imageUri": "https://example.com/image1.jpg",
      "textData": {
        "title": "Title 1",
        "subTitle": "Subtitle 1",
        "body": "Body 1",
        "author": {
          "first": "John",
          "last": "Doe"
        }
      },
      "metadata": {
        "priority": 2,
        "publishDate": "2022-05-20T12:00:00Z"
      },
      "comments": [
        {
          "text": "Comment 1",
          "author": "Alice",
          "profilePic": "https://example.com/profile1.jpg",
          "likes": 5
        }
      ]
    }
  ]
}
```