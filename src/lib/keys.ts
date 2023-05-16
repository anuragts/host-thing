import { config } from "dotenv";
config();

export const keys = {
    PROJECT_ID: process.env.PROJECT_ID,
    BUCKET_ID: process.env.BUCKET_ID,
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    
    
}