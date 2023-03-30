import { CollectionConfig } from "payload/types";

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Tags: CollectionConfig = {
  slug: "tags",
  admin: {
    useAsTitle: "label",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "label",
      type: "text",
      required: true,
      admin: {
        description: "The filter name as displayed on the portfolio page",
      },
    },
  ],
};

export default Tags;
