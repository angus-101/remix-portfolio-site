import type { SSTConfig } from "sst";
import { RemixSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "remix-portfolio-site",
      region: "eu-west-2",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new RemixSite(stack, "site");
      stack.addOutputs({
        url: site.url,
        customDomain:
          stack.stage === "prod" ? "angusmcc.co.uk" : `${stack.stage}.angusmcc.co.uk`,
      });
    });
  },
} satisfies SSTConfig;
