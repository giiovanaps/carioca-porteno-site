import {spawnSync} from "node:child_process";
import {fileURLToPath} from "node:url";

// Netlify's Next.js adapter needs a genuine .next build, not a Worker bundle.
const cli=fileURLToPath(new URL("../node_modules/next/dist/bin/next",import.meta.url));
const result=spawnSync(process.execPath,[cli,"build","--webpack"],{
 stdio:"inherit",
 env:{...process.env,SITE_DEPLOY_TARGET:"netlify",NEXT_TELEMETRY_DISABLED:"1"},
});
if(result.error)throw result.error;
process.exit(result.status??1);
