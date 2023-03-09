module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME", "dr54a7gze"),
        api_key: env("CLOUDINARY_KEY", "868275163814591"),
        api_secret: env("CLOUDINARY_SECRET", "U0-E-H34SF1Dl1vpyroUU361AUQ"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  ckeditor: {
    enabled: true,
    resolve: "./src/strapi-plugin-ckeditor",
  },
});
