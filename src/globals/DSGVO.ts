import { GlobalConfig } from "payload/types";

const DSGVO: GlobalConfig = {
  slug: "dsgvo",
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

export default DSGVO;
