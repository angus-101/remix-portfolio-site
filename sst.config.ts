import type { SSTConfig } from "sst";
import { RemixSite } from "sst/constructs";
import { Certificate } from "aws-cdk-lib/aws-certificatemanager";
import invariant from "tiny-invariant";

export default {
  config(_input) {
    return {
      name: "remix-portfolio-site",
      region: "eu-west-2",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      invariant(process.env.CERTIFICATE_ARN, "CERTIFICATE_ARN is undefined")
      const site = new RemixSite(stack, "site", {
        customDomain: {
          isExternalDomain: true,
          domainName: stack.stage === "prod" ? "angusmcc.co.uk" : `${stack.stage}.angusmcc.co.uk`,
          // domainAlias: stack.stage === "prod" ? "www.angusmcc.co.uk" : `www.${stack.stage}.angusmcc.co.uk`,
          cdk: {
            certificate: Certificate.fromCertificateArn(stack, "MyCert", process.env.CERTIFICATE_ARN),
          },
        }
      });
      stack.addOutputs({
        url: site.customDomainUrl || site.url,
      });
    });
  },
} satisfies SSTConfig;
