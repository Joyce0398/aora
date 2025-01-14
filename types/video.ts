import { Creator } from './creator';

export interface Video {
  $collectionId: string;
  $createdAt: string;
  $databaseId: string;
  $id: string;
  $permissions: string[];
  $updatedAt: string;
  creator?: Creator;
  prompt?: string;
  thumbnail?: string;
  title?: string;
  video?: string;
}
