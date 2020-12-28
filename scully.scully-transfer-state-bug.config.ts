import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "scully-transfer-state-bug",
  outDir: './dist/static',
  routes: {
  },
  inlineStateOnly: true,
};