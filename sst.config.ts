import type { SSTConfig } from "sst";
import { Config, RemixSite } from "sst/constructs";
import { Config as nodeConfig } from "sst/node/config";
import { Certificate } from "aws-cdk-lib/aws-certificatemanager";

export default {
  config(_input) {
    return {
      name: "remix-portfolio-site",
      region: "eu-west-2",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const CERTIFICATE_ARN = new Config.Secret(stack, "CERTIFICATE_ARN");
      const site = new RemixSite(stack, "site", {
        bind: [ CERTIFICATE_ARN ],
        customDomain: {
          isExternalDomain: true,
          domainName: stack.stage === "prod" ? "angusmcc.co.uk" : `${stack.stage}.angusmcc.co.uk`,
          domainAlias: stack.stage === "prod" ? "www.angusmcc.co.uk" : `www.${stack.stage}.angusmcc.co.uk`,
          cdk: {
            certificate: Certificate.fromCertificateArn(stack, "MyCert", nodeConfig.CERTIFICATE_ARN),
          },
        }
      });
      stack.addOutputs({
        url: site.customDomainUrl || site.url,
      });
    });
  },
} satisfies SSTConfig;
