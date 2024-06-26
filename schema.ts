export const schemaTypes = [
  {
    title: "Tech Skills Banner",
    name: "techSkillsBanner",
    type: "document",
    fields: [
      { title: "Name", name: "name", type: "string" },
      {
        title: "List Items",
        name: "listItems",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              {
                title: "Image",
                name: "image",
                type: "image",
                options: {
                  hotspot: true,
                },
              },
              {
                title: "Name",
                name: "name",
                type: "string",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Text Blocks",
    name: "textBlocks",
    type: "document",
    fields: [
      { title: "Title", name: "title", type: "string" },
      { title: "Text", name: "text", type: "array", of: [{ type: "block" }] },
    ],
  },
  {
    title: "Projects",
    name: "projects",
    type: "document",
    fields: [
      {
        title: "Image",
        name: "image",
        type: "image",
        options: { hotspot: true },
      },
      { title: "Name", name: "name", type: "string" },
      { title: "Tags", name: "tags", type: "array", of: [{ type: "string" }] },
      { title: "Description", name: "description", type: "text" },
      { title: "Year", name: "year", type: "number" },
      { title: "URL", name: "url", type: "url" },
    ],
  },
];
