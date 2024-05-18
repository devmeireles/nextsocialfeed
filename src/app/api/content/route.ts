//
// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     try {
//         const response = await fetch('https://stoplight.io/mocks/engine/fullstack-spec/52502230/content', {
//             method: 'GET',
//             headers: {
//                 'Accept': 'application/json',
//                 'Prefer': 'code=200'
//             }
//         });
//
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//
//         const data = await response.json();
//         res.status(200).json(data);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'An error occurred while fetching the feed' });
//     }
// }

import { NextResponse } from 'next/server';

export async function GET(req: Request, res: Response) {
  // return NextResponse.json({
  //     message: 'Hello, world!'
  // })

  try {
    const response = await fetch(
      'https://stoplight.io/mocks/engine/fullstack-spec/52502230/content',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Prefer: 'code=200',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return NextResponse.json({
      data,
    });
  } catch (error) {
    return NextResponse.json({
      error: 'An error occurred while fetching the feed',
    });
  }
}
