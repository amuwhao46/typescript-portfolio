import { dataset, projectId } from "../env";

export function getFileUrl(fileRef: string): string {
  const match = fileRef.match(/file-(.*?)-pdf/);

  if (match && match[1]) {
    const fileId = match[1];
    return `https://cdn.sanity.io/files/${projectId}/${dataset}/${fileId}.pdf`;
  }

  return '';
}
