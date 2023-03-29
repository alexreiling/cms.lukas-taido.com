import { CollectionConfig } from "payload/types";

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Projects: CollectionConfig = {
  slug: "projects",
  admin: {
    useAsTitle: "label",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "teaserImage",
      type: "upload", // required
      relationTo: "media", // required
      required: true,
    },
    {
      name: "tags",
      type: "relationship",
      relationTo: "tags",
      hasMany: true,
    },
    {
      name: "content",
      type: "richText",
    },
    {
      name: "images",
      type: "array",
      fields: [
        {
          name: "image",
          type: "upload",
          required: true,
          relationTo: "media",
        },
        {
          name: "caption",
          type: "text",
        },
      ],
    },
  ],
};

export default Projects;
