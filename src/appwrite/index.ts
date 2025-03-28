import { Client, Databases, Account } from "appwrite";

export const client = new Client();
client
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);
export { ID } from "appwrite";

export const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
export const USER_COLLECTION_ID = import.meta.env
  .VITE_APPWRITE_USER_COLLECTION_ID;
export const EMAILS_COLLECTION_ID = import.meta.env
  .VITE_APPWRITE_EMAILS_COLLECTION_ID;
