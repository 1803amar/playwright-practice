import { test, expect } from '@playwright/test';

test('GET request - fetch a post', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

    // status code check kro
    expect(response.status()).toBe(200);

    // Response body check kro
    const body = await response.json();
    console.log(body);
    expect(body.id).toBe(1);

});