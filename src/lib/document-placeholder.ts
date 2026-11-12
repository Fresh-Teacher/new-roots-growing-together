import { archiveExtensions, documentExtension } from '@/lib/document-formats';
const pdf = { url: '/__l5e/assets-v1/c7e94ea6-7246-4f0e-a8e6-4d8f58929204/e3f2c139-pdf.webp' };
const word = { url: '/__l5e/assets-v1/6d42a01f-3a64-4e58-b7c8-4243330e6b95/cd164d7b-word.webp' };
const excel = { url: '/__l5e/assets-v1/89e63729-87fa-4a85-b316-ea9591c5109f/76c3c917-excel.webp' };
const powerpoint = { url: '/__l5e/assets-v1/60958ccf-b18e-4094-8dbc-6efc217c3f92/995dbb07-powerpoint.webp' };
const archive = { url: '/__l5e/assets-v1/14926161-ec2b-490c-a0a4-d7c19137fe01/e3e38388-archive.webp' };
const rtf = { url: '/__l5e/assets-v1/3ed72f23-3a50-424d-80d0-3d98b19fddb7/03dc7ab4-rtf.png' };
const txt = { url: '/__l5e/assets-v1/14cee288-164d-4844-a8aa-50cc16baa05a/cd7794b8-txt.webp' };

const placeholders = { pdf, word, excel, powerpoint, archive, rtf, txt };

export function documentPlaceholder(url: string) {
  const extension = documentExtension(url);
  if (extension === 'pdf') return placeholders.pdf;
  if (['doc', 'docx'].includes(extension)) return placeholders.word;
  if (['xls', 'xlsx'].includes(extension)) return placeholders.excel;
  if (['ppt', 'pptx', 'pps', 'ppsx'].includes(extension)) return placeholders.powerpoint;
  if (extension === 'rtf') return placeholders.rtf;
  if (extension === 'txt') return placeholders.txt;
  if (archiveExtensions.includes(extension)) return placeholders.archive;
  return null;
}
