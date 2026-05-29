import { auth } from "@/lib/auth";
import { UploadThingError } from "uploadthing/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  pdfUploader: f({ pdf: { maxFileSize: "32MB" } })
    .middleware(async ({ req }) => {
        const { userId } = await auth();
        if (!userId) throw new UploadThingError('Unauthorised');

        return { userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      const fileUrl = file.ufsUrl;
      console.log("upload complete for user id", metadata.userId);
      console.log('file url', fileUrl);
      return { userId: metadata.userId, file: { ufsUrl: fileUrl, name: file.name } };
    }),
} satisfies FileRouter; 

export type OurFileRouter = typeof ourFileRouter;
