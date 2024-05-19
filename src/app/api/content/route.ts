import { NextResponse } from 'next/server';
import config from '@/helpers/config';

export async function GET(req: Request, res: Response) {
  try {
    const response = await fetch(config.apiFeedUrl, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Prefer: 'code=200',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return NextResponse.json({
      data: data.contentCards,
    });
  } catch (error) {
    return NextResponse.json({
      error: 'An error occurred while fetching the feed',
    });
  }
}
