import { GlobalConfig } from "payload/types";

const Impressum: GlobalConfig = {
  slug: "impressum",
  access: {
    read: () => true,
  },
  versions: {
    drafts: {
      autosave: true,
    },
  },
  fields: [
    {
      name: "content",
      type: "richText",
    },
  ],
};

export default Impressum;
