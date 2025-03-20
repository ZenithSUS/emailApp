import { databases, ID, DATABASE_ID, COLLECTION_ID } from ".";
import { Users, AddUser } from "../libs/types";

export async function createInfo(data: AddUser): Promise<Object | void> {
  try {
    const response = await databases.createDocument(
      DATABASE_ID,
      COLLECTION_ID,
      ID.unique(),
      data
    );
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
}

export default async function getInfo(): Promise<Users[] | void> {
  try {
    const { documents } = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);
    return documents as Users[];
  } catch (error) {
    console.error(error);
  }
}