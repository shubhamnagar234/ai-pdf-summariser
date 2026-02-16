'use client';

import { useRef, useState, type SubmitEventHandler } from 'react';
import { useRouter } from 'next/navigation';
import { useUploadThing } from '@/utils/uploadthing';
import UploadFormInput from './upload-form-input';
import { z } from 'zod';
import { toast } from 'sonner';
import {
  generatePDFSummary,
  storePdfSummaryAction,
} from '@/actions/upload-actions';

const schema = z.object({
  file: z
    .instanceof(File, { message: 'Invalid file' })
    .refine(
      (file) => file.size <= 20 * 1024 * 1024,
      'File size must be less than 20MB'
    )
    .refine(
      (file) => file.type.startsWith('application/pdf'),
      'File must be a PDF'
    ),
});

export default function UploadForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const { startUpload, routeConfig } = useUploadThing('pdfUploader', {
    onClientUploadComplete: () => {
      console.log('uploaded successfully!');
    },
    onUploadError: (err: unknown) => {
      console.error('error occurred while uploading', err);
    },
    onUploadBegin: (fileName: string) => {
      console.log('upload has begun for', fileName);
    },
  });

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const formData = new FormData(e.currentTarget);
      const file = formData.get('file') as File;

      // Validating the fields
      const validatedFields = schema.safeParse({ file });

      if (!validatedFields.success) {
        toast.error('Something went wrong', {
          description:
            // Use the standard Zod error format since flattenError does not exist
            validatedFields.error.errors?.[0]?.message ?? 'Invalid file',
        });
        setIsLoading(false);
        return;
      }

      toast.success('Uploading PDF', {
        description: 'We are uploading your PDF!',
      });

      //upload the file to uploadthing
      const resp = await startUpload([file]);
      if (!resp) {
        toast.error('Something went wrong', {
          description: 'Please use a different file',
        });
        setIsLoading(false);
        return;
      }

      toast.success('Processing PDF', {
        description: 'Hang tight! Our AI is reading through your document!',
      });

      //parse the pdf using langchain
      const result = await generatePDFSummary(resp);

      const { data = null, message = null } = result || {};

      if (data) {
        let storeResult: any;
        toast.success('Saving PDF...', {
          description: 'Hang tight! We are saving your summary',
        });

        if (data.summary) {
          storeResult = await storePdfSummaryAction({
            summary: data.summary,
            fileUrl: resp[0].serverData.file.url,
            title: data.title,
            fileName: file.name,
          });
          toast.success('Summary Generated!', {
            description: 'Your PDF has been successfully summaries and saved!',
          });
          formRef.current?.reset();
          router.push(`/summaries/${storeResult.id}`);
        }
      }
    } catch (error) {
      setIsLoading(false);
      console.error('Error occurred', error);
      formRef.current?.reset();
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
      <UploadFormInput
        isLoading={isLoading}
        ref={formRef}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
