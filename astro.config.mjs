// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightVersions from 'starlight-versions';

// https://astro.build/config
export default defineConfig({
  // Replace <TON-USERNAME> with your GitHub username and <NOM-DU-REPO> with your repository name.
  site: 'https://<TON-USERNAME>.github.io',
  base: '/<NOM-DU-REPO>',
  integrations: [
    starlight({
      title: 'Ma Doc',
      plugins: [
        starlightVersions({
          versions: [{ slug: '1.0' }],
        }),
      ],
    }),
  ],
});
