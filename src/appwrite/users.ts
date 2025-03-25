import { databases, ID, DATABASE_ID, COLLECTION_ID } from ".";
import {  AddUser } from "../libs/types";

export async function createInfo(data: AddUser) {
  try {
    return await databases.createDocument(
      DATABASE_ID,
      COLLECTION_ID,
      ID.unique(),
      data
    );
  } catch (error) {
    console.error(error);
  }
}

export default async function getInfo() {
  try {
    const { documents } = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);
    console.log(documents);
    return documents;
  } catch (error) {
    throw new Error(error as string);
  }
}