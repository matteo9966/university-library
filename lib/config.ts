export const config = {
  env: {
    database_url: process.env.DATABASE_URL,
    NEXT_PUBLIC_PUBLIC_KEY: process.env.NEXT_PUBLIC_PUBLIC_KEY, //for imagekit
    NEXT_PUBLIC_URL_ENDPOINT: process.env.NEXT_PUBLIC_URL_ENDPOINT, //for imagekit
    PRIVATE_KEY: process.env.PRIVATE_KEY,
    DATABASE_URL: process.env.DATABASE_URL,
    AUTH_SECRET: process.env.AUTH_SECRET,
    UPSTASH_URL: process.env.UPSTASH_URL,
    UPSTASH_TOKEN: process.env.UPSTASH_TOKEN,
    QSTASH_URL: process.env.QSTASH_URL,
    QSTASH_TOKEN: process.env.QSTASH_TOKEN,
    QSTASH_CURRENT_SIGNING_KEY: process.env.QSTASH_CURRENT_SIGNING_KEY,
    QSTASH_NEXT_SIGNING_KEY: process.env.QSTASH_NEXT_SIGNING_KEY,
    ENV: process.env.ENV,
  },
};
