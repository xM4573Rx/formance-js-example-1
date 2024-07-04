import { SDK as Formance } from '@formance/formance-sdk';
import { createAuthorizationProvider } from '@formance/formance-sdk-oauth';

const ENDPOINT = "https://cicqvhvhauht-amdn.sandbox.formance.cloud";

const formance = new Formance({
  serverURL: ENDPOINT,
  authorization: createAuthorizationProvider({
    endpointUrl: ENDPOINT,
    // These are sensitive credentials that should not be exposed to the public.
    clientId: "75866c7b-6055-4691-94a7-d4f14c474747",
    clientSecret: "bc3fcf92-cbc5-4d45-bcbc-8008462f62f9",
  }),
});

async function main() {
  const ledgerInfo = await formance.ledger.getInfo();
  console.log(ledgerInfo.configInfoResponse!.data);
}

main();
