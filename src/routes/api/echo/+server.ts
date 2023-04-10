import type { RequestHandler } from './$types';
import sleep from 'await-sleep';
import { json } from '@sveltejs/kit';

export const GET = (async ({ url }) => {
    const q = url.searchParams.get('q') || '';
    await sleep(1000);
    return json(String(q))
}) satisfies RequestHandler;