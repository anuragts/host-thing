import { Client } from "appwrite";

export const appwrite = async () => {
    const client = new Client();

    client
        .setEndpoint('https://cloud.appwrite.io/v1')
        .setProject('6462dfb43a09a57143bd');
        
}