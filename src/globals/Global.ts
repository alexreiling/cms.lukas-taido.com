import { GlobalConfig } from "payload/types";

const Global: GlobalConfig = {
  slug: "global",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "activeTags",
      type: "relationship",
      relationTo: "tags",
      hasMany: true,
      admin: {
        description: "The filters that can be selected on the portfolio page",
      },
    },
    {
      name: "introGallery",
      type: "array",
      fields: [
        {
          name: "image",
          type: "upload", // required
          relationTo: "media", // required
          required: true,
        },
      ],
      admin: {
        description: "The images being displayed on the landing page",
      },
    },
    {
      name: "cv",
      type: "array",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "content",
          type: "richText",
        },
      ],
    },
    {
      name: "contact",
      type: "richText",
    },
  ],
};

export default Global;
