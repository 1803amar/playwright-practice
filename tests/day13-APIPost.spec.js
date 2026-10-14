import { test , expect } from '@playwright/test';

test("POST request - create a post" , async({request})=>{

    const response = await request.post('https://jsonplaceholder.typicode.com/posts',
    {
      data: {
        title: 'Amar ka post',
        body: 'Ye mera pehla API test hai',
        userId: 1,
      },
    });
    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body.title).toBe('Amar ka post');
})