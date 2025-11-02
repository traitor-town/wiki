import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "github",
    repo: "traitor-town/wiki",
  },
  collections: {
    maps: collection({
      label: "Maps",
      slugField: "title",
      path: "src/content/maps/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        creators: fields.text({ label: "creators" }),
        image: fields.image({
          label: "Image (the one shown in map voting UI)",
          directory: "src/assets/images/maps/",
          publicPath: "/src/assets/images/maps/",
        }),
        content: fields.markdoc({
          label: "Content",
          options: {
            image: {
              directory: "src/assets/images/posts",
              publicPath: "../../assets/images/posts/",
            },
          },
        }),

        authors: fields.array(
          fields.relationship({
            label: "Authors",
            collection: "authors",
            validation: {
              isRequired: true,
            },
          }),
          {
            label: "Authors",
            itemLabel: (item) => item.value || "please select an author",
          }
        ),
      },
    }),
    authors: collection({
      label: "Authors",
      slugField: "name",
      path: "src/content/authors/*",
      schema: {
        name: fields.slug({ name: { label: "Name" } }),
        avatar: fields.image({
          label: "Avatar",
          directory: "src/assets/images/avatars/*",
          publicPath: "@assets/images/avatars/",
        }),
      },
      format: "json",
    }),
  },
});
