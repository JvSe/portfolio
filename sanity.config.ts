import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import schemas from "./src/sanity/schemas";

const config = defineConfig({
  projectId: "mcox4s6s",
  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2023-03-04",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
