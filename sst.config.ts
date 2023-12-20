import type { SSTConfig } from "sst";
import { RemixSite } from "sst/constructs";
import { Certificate } from "aws-cdk-lib/aws-certificatemanager";

export default {
  config() {
    return {
      name: "remix-portfolio-site",
      region: "eu-west-2",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new RemixSite(stack, "site", {
        customDomain: {
          isExternalDomain: true,
          domainName: stack.stage === "prod" ? "angusmcc.co.uk" : `${stack.stage}.angusmcc.co.uk`,
          cdk: {
            certificate: Certificate.fromCertificateArn(stack, "MyCert", `arn:aws:acm:us-east-1:${app.account}:certificate/59ae9b6d-efef-4ab4-9efb-dbafb0e88781`),
          },
        }
      });
      stack.addOutputs({
        url: site.customDomainUrl ?? site.url,
      });
    });
  },
} satisfies SSTConfig;
