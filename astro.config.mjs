// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightVersions from 'starlight-versions';

// https://astro.build/config
export default defineConfig({
  site: 'https://pas-encore-de-nom.github.io',
  base: '/starlight/',
  integrations: [
    starlight({
      title: '⚔️ GOAT — Hytale PvP',
      description: 'Documentation officielle du serveur Hytale PvP Faction GOAT. Toutes les règles, mécaniques et guides pour les joueurs et administrateurs.',
      defaultLocale: 'fr',
      locales: {
        root: { label: 'Français', lang: 'fr' },
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/Pas-Encore-De-Nom' },
      ],
      editLink: {
        baseUrl: 'https://github.com/Pas-Encore-De-Nom/starlight/edit/main/',
      },
      lastUpdated: true,
      pagination: true,
      sidebar: [
        {
          label: '🏠 Accueil',
          link: '/',
        },
        {
          label: '🛡️ Administration',
          collapsed: false,
          items: [
            { label: 'Vue d\'ensemble', link: '/administration/' },
            { label: 'Rôles & Permissions', link: '/administration/roles-permissions/' },
            { label: 'Modération', link: '/administration/moderation/' },
            { label: 'Surveillance', link: '/administration/surveillance/' },
            { label: 'Logs', link: '/administration/logs/' },
          ],
        },
        {
          label: '⚔️ Factions',
          collapsed: false,
          items: [
            { label: 'Vue d\'ensemble', link: '/factions/' },
            { label: 'Rôles & Membres', link: '/factions/roles/' },
            { label: 'Relations', link: '/factions/relations/' },
            { label: 'Puissance', link: '/factions/puissance/' },
          ],
        },
        {
          label: '🗺️ Claims',
          collapsed: false,
          items: [
            { label: 'Vue d\'ensemble', link: '/claims/' },
            { label: 'Nature', link: '/claims/nature/' },
            { label: 'Découvert', link: '/claims/decouvert/' },
            { label: 'Avant-Poste', link: '/claims/avant-poste/' },
            { label: 'Bastion', link: '/claims/bastion/' },
          ],
        },
        {
          label: '🔧 Plugins',
          collapsed: false,
          items: [
            { label: 'Vue d\'ensemble', link: '/plugins/' },
            { label: 'XP', link: '/plugins/xp/' },
            { label: 'Market', link: '/plugins/market/' },
            { label: 'Spawner', link: '/plugins/spawner/' },
            { label: 'Jobs', link: '/plugins/jobs/' },
            { label: 'Événements', link: '/plugins/events/' },
            { label: 'Quêtes', link: '/plugins/quetes/' },
          ],
        },
        {
          label: '🗡️ Items & Blocs',
          collapsed: true,
          items: [
            { label: 'Vue d\'ensemble', link: '/items-blocs/' },
            { label: 'Pillage', link: '/items-blocs/pillage/' },
            { label: 'Runes', link: '/items-blocs/runes/' },
            { label: 'Arbre de Compétences', link: '/items-blocs/arbre-competences/' },
            { label: 'Artefacts & Reliques', link: '/items-blocs/artefacts/' },
            { label: 'Banque', link: '/items-blocs/banque/' },
          ],
        },
        {
          label: '🌍 Mondes',
          collapsed: true,
          items: [
            { label: 'Vue d\'ensemble', link: '/mondes/' },
            { label: 'Monde Principal', link: '/mondes/principal/' },
            { label: 'Monde Minage', link: '/mondes/minage/' },
            { label: 'Monde Farm', link: '/mondes/farm/' },
            { label: 'Lobby', link: '/mondes/lobby/' },
          ],
        },
        {
          label: '🎮 Systèmes Annexes',
          collapsed: true,
          items: [
            { label: 'Casino', link: '/systemes/casino/' },
            { label: 'Mise à Prix PvP', link: '/systemes/mise-a-prix/' },
            { label: 'Monitoring', link: '/systemes/monitoring/' },
            { label: 'Stress-Test', link: '/systemes/stress-test/' },
          ],
        },
        {
          label: '📋 Roadmap',
          link: '/roadmap/',
        },
      ],
      plugins: [
        starlightVersions({
          versions: [{ slug: '1.0' }],
        }),
      ],
    }),
  ],
});
