import { databases, ID, DATABASE_ID, COLLECTION_ID } from ".";
import { Users } from "../libs/types";

export async function createInfo(data: Users): Promise<Object | void> {
  try {
    const response = await databases.createDocument(
      DATABASE_ID,
      COLLECTION_ID,
      ID.unique(),
      data
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}

export default async function getInfo(): Promise<Users[] | void> {
  try {
    const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);
    return response.documents as Users[];
  } catch (error) {
    console.error(error);
  }
}