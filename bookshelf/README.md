This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Overview
This app is a log of current reading and past read books. This also includes chart of genres and page counts to show variety in reading.

## Routes
"/" - Dashboard: Current reading and progress towards reading goal
"/history" - History: Past read books
"/stats" - Stats: Breakdown of reading by genre and by page count. Can click on pie chart section to be navigated to history of that genre/book size.

## Future Updates
- Remove tailwind styling and dependencies
- Migrate db json files to db (DynamoDB?) to create a persistent accurate log of books
- Add GraphQL layer to call db and 3rd party apis (look into amazon)
- Add dark/light mode
- Make the app pretty
### Dashboard Page
- Add ability to update current book placement (update page and finish book)
- Add "start new book" option with form
- Add "Continue series" section to show in progress series with link to buy next book amazon/waterstones
### History Page
- Add sort by logic on the history page (ex. title, author, date read asc/desc, rating, genre)
### Stats Page
- Add bar chart of most popular authors read

## Getting Started
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
