---
title: Rôles & Permissions
description: Système de rôles et de permissions du serveur GOAT.
tags: [administration, stable]
sidebar:
  order: 2
---

import { Aside } from '@astrojs/starlight/components';

## Types de rôles

Le serveur utilise trois types de rôles principaux :

| Rôle | Description |
|---|---|
| **Admin** | Accès total à toutes les commandes et configurations |
| **Modérateur** | Modération des joueurs et surveillance |
| **Player** | Joueur standard |

## Structure d'un rôle

Chaque rôle est configuré avec les propriétés suivantes :

- **Nom** — Identifiant unique du rôle
- **Groupe** — Groupe d'appartenance (admin, modo, player…)
- **Préfixe** — Affiché avant le pseudo en jeu (ex : `[ADMIN]`)
- **Suffixe** — Affiché après le pseudo en jeu

## Permissions par rôle

### Admin
- Toutes les commandes de modération
- Configuration du serveur
- Gestion des rôles et permissions
- Bloquer des items/blocs
- Accès aux logs complets
- Commandes de vanish niveau Admin

### Modérateur
- Commandes de modération (ban, kick, warn, mute, jail)
- Surveillance (vanish niveau modérateur, freeze, lookup)
- Accès aux logs joueurs
- Système de report (lecture + commentaires)

### Player
- Commandes de base
- Commandes de faction
- Accès au market, jobs, quêtes
- Commandes de report (`/report`)

<Aside type="tip">
Les permissions sont héritées : un Admin possède toutes les permissions d'un Modérateur, qui possède toutes les permissions d'un Player.
</Aside>

## Bloquer des items/blocs

Les admins peuvent restreindre l'utilisation de certains items ou blocs en jeu. Cette fonctionnalité est utile pour équilibrer le gameplay ou empêcher des abus.
