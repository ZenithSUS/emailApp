import {
  databases,
  ID,
  DATABASE_ID,
  USER_COLLECTION_ID,
  EMAILS_COLLECTION_ID,
} from ".";
import { AddUser } from "../lib/types";

export async function createInfo(data: AddUser) {
  try {
    return await databases.createDocument(
      DATABASE_ID,
      USER_COLLECTION_ID,
      ID.unique(),
      data
    );
  } catch (error) {
    console.error(error);
  }
}

export async function getInfo() {
  try {
    const { documents } = await databases.listDocuments(
      DATABASE_ID,
      USER_COLLECTION_ID
    );
    console.log(documents);
    return documents;
  } catch (error) {
    throw new Error(error as string);
  }
}

export async function insertEmail(email: string) {
  try {
    return await databases.createDocument(
      DATABASE_ID,
      EMAILS_COLLECTION_ID,
      ID.unique(),
      { email: email }
    );
  } catch (error) {
    throw new Error(error as string);
  }
}
