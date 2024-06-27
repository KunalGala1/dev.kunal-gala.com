<<<<<<< HEAD
import { SSTConfig } from "sst";
import { Service } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "devkunal-galacom",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const service = new Service(stack, "service", {
        port: 3000,
      });

      stack.addOutputs({
        ServiceUrl: service.url,
      });
    });
  },
} satisfies SSTConfig;
=======
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
        dns: sst.cloudflare.dns({
          zone: "5d4afab2963be5a2510d240d45406ab6",
        }),
      },
    });
  },
});
>>>>>>> 943f242236923360dc9f5bab269adf1d7ab4ac1e
