import { buildConfig } from "payload/config";
import path from "path";
// import Examples from './collections/Examples';
import Users from "./collections/Users";
import Tags from "./collections/Tags";
import Projects from "./collections/Projects";
import Media from "./collections/Media";
import Global from "./globals/Global";

export default buildConfig({
  // serverURL fucks up the build
  // serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || "http://localhost:3001",
  admin: {
    user: Users.slug,
  },
  cors: ["http://localhost:3000"],
  collections: [
    Users,
    Tags,
    Projects,
    Media,
    // Add Collections here
    // Examples,
  ],
  globals: [Global],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});
