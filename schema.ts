export const schemaTypes = [
  {
    title: "Technology Skills Banner",
    name: "technologySkillsBanner",
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
];
