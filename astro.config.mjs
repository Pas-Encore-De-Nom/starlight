// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightVersions from 'starlight-versions';
import starlightChangelogs from 'starlight-changelogs';
import starlightImageZoom from 'starlight-image-zoom';
import starlightHeadingBadges from 'starlight-heading-badges';
import starlightGithubAlerts from 'starlight-github-alerts';
import starlightMarkdownBlocks, { Aside } from 'starlight-markdown-blocks';
import starlightVideos from 'starlight-videos';
import starlightScrollToTop from 'starlight-scroll-to-top';
import starlightAnnouncement from 'starlight-announcement';
import starlightTags from 'starlight-tags';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
  site: 'https://wiki-arktyfacts.github.io',
  base: '/starlight/',
  integrations: [
    mermaid(),
    starlight({
      title: 'GOAT - Hytale PvP',
      description: 'Documentation officielle du serveur Hytale PvP Faction GOAT.',
      defaultLocale: 'fr',
      locales: {
        root: { label: 'Francais', lang: 'fr' },
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/wiki-arktyfacts' },
      ],
      editLink: {
        // TODO: changer 'copilot/create-starlight-documentation' en 'main' apres merge de la PR
        baseUrl: 'https://github.com/wiki-arktyfacts/starlight/edit/copilot/main',
      },
      lastUpdated: true,
      pagination: true,
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        { label: 'Accueil', link: '/' },
        {
          label: 'Administration',
          collapsed: false,
          items: [
            { label: "Vue d'ensemble", link: '/administration/' },
            { label: 'Roles et Permissions', link: '/administration/roles-permissions/' },
            { label: 'Moderation', link: '/administration/moderation/' },
            { label: 'Surveillance', link: '/administration/surveillance/' },
            { label: 'Logs', link: '/administration/logs/' },
          ],
        },
        {
          label: 'Factions',
          collapsed: false,
          items: [
            { label: "Vue d'ensemble", link: '/factions/' },
            { label: 'Roles et Membres', link: '/factions/roles/' },
            { label: 'Relations', link: '/factions/relations/' },
            { label: 'Puissance', link: '/factions/puissance/' },
          ],
        },
        {
          label: 'Claims',
          collapsed: false,
          items: [
            { label: "Vue d'ensemble", link: '/claims/' },
            { label: 'Nature', link: '/claims/nature/' },
            { label: 'Decouvert', link: '/claims/decouvert/' },
            { label: 'Avant-Poste', link: '/claims/avant-poste/' },
            { label: 'Bastion', link: '/claims/bastion/' },
          ],
        },
        {
          label: 'Plugins',
          collapsed: false,
          items: [
            { label: "Vue d'ensemble", link: '/plugins/' },
            { label: 'XP', link: '/plugins/xp/' },
            { label: 'Market', link: '/plugins/market/' },
            { label: 'Spawner', link: '/plugins/spawner/' },
            { label: 'Jobs', link: '/plugins/jobs/' },
            { label: 'Evenements', link: '/plugins/events/' },
            { label: 'Quetes', link: '/plugins/quetes/' },
          ],
        },
        {
          label: 'Items et Blocs',
          collapsed: true,
          items: [
            { label: "Vue d'ensemble", link: '/items-blocs/' },
            { label: 'Pillage', link: '/items-blocs/pillage/' },
            { label: 'Runes', link: '/items-blocs/runes/' },
            { label: 'Arbre de Competences', link: '/items-blocs/arbre-competences/' },
            { label: 'Artefacts et Reliques', link: '/items-blocs/artefacts/' },
            { label: 'Banque', link: '/items-blocs/banque/' },
          ],
        },
        {
          label: 'Mondes',
          collapsed: true,
          items: [
            { label: "Vue d'ensemble", link: '/mondes/' },
            { label: 'Monde Principal', link: '/mondes/principal/' },
            { label: 'Monde Minage', link: '/mondes/minage/' },
            { label: 'Monde Farm', link: '/mondes/farm/' },
            { label: 'Monde Event', link: '/mondes/event/' },
            { label: 'Lobby', link: '/mondes/lobby/' },
          ],
        },
        {
          label: 'Systemes Annexes',
          collapsed: true,
          items: [
            { label: 'Casino', link: '/systemes/casino/' },
            { label: 'Mise a Prix PvP', link: '/systemes/mise-a-prix/' },
            { label: 'Monitoring', link: '/systemes/monitoring/' },
            { label: 'Stress-Test', link: '/systemes/stress-test/' },
          ],
        },
        {
          label: 'Développement',
          collapsed: true,
          items: [
            { label: "Vue d'ensemble", link: '/dev/' },
            { label: 'Guide de contribution', link: '/dev/contribution/' },
            { label: 'ADR — Décisions', link: '/dev/adr/' },
            { label: 'ADR-001 — Architecture ECS', link: '/dev/adr-001/' },
            { label: 'Versioning documentaire', link: '/dev/versioning/' },
          ],
        },
        { label: 'Roadmap', link: '/roadmap/' },
      ],
      plugins: [
        starlightVersions({
          versions: [{ slug: '1.0', label: 'v1.0' }],
          current: { label: 'En cours' },
        }),
        starlightChangelogs(),
        starlightImageZoom(),
        starlightHeadingBadges(),
        starlightGithubAlerts(),
        starlightMarkdownBlocks({
          blocks: {
            regle: Aside({ label: 'Regle', icon: '!', color: 'red' }),
            strategie: Aside({ label: 'Strategie', icon: 'star', color: 'purple' }),
            conseil: Aside({ label: 'Conseil', icon: 'information', color: 'green' }),
            lore: Aside({ label: 'Lore', icon: 'open-book', color: 'blue' }),
          },
        }),
        starlightVideos(),
        starlightScrollToTop(),
        starlightTags(),
        starlightAnnouncement({
          announcements: [
            {
              id: 'server-wip',
              content: 'Le serveur GOAT est en cours de developpement.',
            },
          ],
        }),
      ],
    }),
  ],
});