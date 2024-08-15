
# Route handler and page handler
- If we have both `route.ts` for API and `page.tsx` for page in the same folder, Next.js will execute the `route.ts` by default.
- To use both in the same folder, we should create an `api` folder and put the `route.ts` in it. (in this example: `profile/api` for the API and `/profile` for the page)