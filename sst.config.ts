/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "dev-kunal-gala",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    new sst.aws.Nextjs("MyWeb", {
      domain: {
        name: "dev.kunal-gala.com",
        redirects: ["www.dev.kunal-gala.com"],
        dns: false,
        cert: "arn:aws:acm:us-east-1:975049885293:certificate/0c110bb6-6929-49a4-b188-923ed253f081",
      },
    });
  },
});
