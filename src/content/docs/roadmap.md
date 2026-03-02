---
title: Roadmap
description: Feuille de route du projet GOAT — Hytale PvP Faction.
sidebar:
  order: 99
---

import { Aside } from '@astrojs/starlight/components';

Voici la feuille de route du projet GOAT. Elle définit les grandes étapes du développement, de la conception à la mise en production.

## Phase 1 — Documentation & Organisation

- [ ] Refaire la documentation/wiki avec les idées au propre ← **Vous êtes ici**
- [ ] Jouer au jeu (tester Hytale en l'état)
- [ ] Définir l'architecture du serveur et les relations entre les mods
- [ ] Créer des cartes GitHub avec toutes les idées (GitHub Projects)

## Phase 2 — Préparation du développement

- [ ] Création d'un template de développement pour les plugins
- [ ] Création de CI/CD pour vérifier les commits et merges (GitHub Actions)
- [ ] Définir les conventions de code

## Phase 3 — Développement

- [ ] Tester les performances du jeu (stress-test initial)
- [ ] Développement des plugins :
  - [x] ~~XP~~
  - [x] ~~Market~~
  - [x] ~~Spawner~~
  - [x] ~~Jobs~~
  - [x] ~~Quêtes~~
  - [ ] Événements (KOTH, structures, trésor, totem, boss, McDaDay)
  - [ ] Monde (minage, farm, event)
  - [ ] Faction (système complet)
  - [ ] Claims (Nature, Découvert, Avant-Poste, Bastion)
  - [ ] Pillage (attaque et défense)
  - [ ] Runes
  - [ ] Arbre de compétences
  - [ ] Banque
  - [ ] Casino
  - [ ] Mise à prix PvP
  - [ ] Monitoring externe
  - [ ] Stress-test

## Phase 4 — Tests

- [ ] Tests unitaires de chaque plugin
- [ ] Tests d'intégration entre plugins
- [ ] Stress-test complet du serveur

## Phase 5 — Lancement

- [ ] Préparation du serveur de production
- [ ] Configuration des relations entre les mods
- [ ] Builds de production
- [ ] Site web + wiki public
- [ ] Serveur Discord

<Aside type="tip">
Utilisez les **GitHub Projects** pour suivre l'avancement des tâches de développement en temps réel.
</Aside>

## Plugins terminés ✅

| Plugin | Status |
|---|---|
| XP | ✅ Terminé |
| Market | ✅ Terminé |
| Spawner | ✅ Terminé |
| Jobs | ✅ Terminé |
| Quêtes | ✅ Terminé |

## En cours de développement 🔨

| Plugin | Status |
|---|---|
| Événements | 🔨 En cours |
| Monde | 🔨 En cours |

## À développer 📋

Faction, Claims, Pillage, Runes, Arbre de compétences, Banque, Casino, Mise à prix PvP, Monitoring, Stress-test.
