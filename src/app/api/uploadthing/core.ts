import { currentUser } from "@clerk/nextjs/server";
import { UploadThingError } from "uploadthing/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  pdfUploader: f({ pdf: { maxFileSize: "32MB" } })
    .middleware(async ({ req }) => {

        const user = await currentUser();
        if (!user) throw new UploadThingError('Unauthorised');

        return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      const { url: fileUrl } = file as { url: string };
      console.log("upload complete for user id", metadata.userId);
      console.log('file url', fileUrl);
      return { userId: metadata.userId, file: fileUrl };
    }),
} satisfies FileRouter; 

export type OurFileRouter = typeof ourFileRouter;
