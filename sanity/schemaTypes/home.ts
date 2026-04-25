export default {
  name: "home",
  title: "Homepage",
  type: "document",
  fields: [
    { name: "headline", type: "string", title: "Titolo" },
    { name: "subheadline", type: "text", title: "Sottotitolo" },
    { name: "heroImage", type: "image", title: "Immagine Hero" },
    {
      name: "services",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};