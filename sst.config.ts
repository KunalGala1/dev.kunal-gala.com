/// <reference path="./.sst/platform/config.d.ts" />
export default $config({
  app(input) {
    return {
      name: "dev-kunal-gala",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: { cloudflare: true },
    };
  },
  async run() {
    new sst.aws.Nextjs("MyWeb", {
      domain: {
        name: "dev.kunal-gala.com",
        redirects: ["www.dev.kunal-gala.com"],
        dns: sst.cloudflare.dns(),
      },
    });
  },
});
