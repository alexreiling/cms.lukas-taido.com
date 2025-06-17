import { CollectionConfig } from "payload/types";

const DOCUMENTS_PATH = process.env.DOCUMENTS_DIR || "../../documents";
const Documents: CollectionConfig = {
  slug: "documents",
  labels: {
    singular: "Document",
    plural: "Documents",
  },
  access: {
    read: () => true,
  },
  upload: {
    staticURL: "/documents",
    staticDir: DOCUMENTS_PATH,
    adminThumbnail: "thumbnail",
    mimeTypes: ["application/pdf"],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
};

export default Documents; 