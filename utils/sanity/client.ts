import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "t5hv79xo",
  dataset: "production",
  apiVersion: "2024-06-13",
  useCdn: true,
});
