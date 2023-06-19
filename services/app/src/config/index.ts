export const appSettings = {
  port: process.env.PORT || 3001,
  cors: {
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
  },
} as const;
