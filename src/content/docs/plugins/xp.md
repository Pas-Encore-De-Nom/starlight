---
title: XP (Générique)
description: Système d'expérience générique utilisé par tous les plugins GOAT.
sidebar:
  order: 2
---

import { Aside } from '@astrojs/starlight/components';

Le plugin XP est un composant **ECS (Entity Component System)** générique qui sert de brique de base pour tous les autres systèmes nécessitant de la progression.

## Fonctionnement

Le composant XP ajoute une **donnée XP** à chaque joueur, avec des méthodes pour :

```
addXP(joueur, montant)     → Ajouter de l'XP
removeXP(joueur, montant)  → Retirer de l'XP
getXP(joueur)              → Lire l'XP actuelle
```

<Aside type="note">
Ce plugin ne fait rien seul. Il est utilisé par les **Factions** et les **Jobs** pour gérer leur progression respective.
</Aside>

## Utilisation par les autres plugins

| Plugin | Usage |
|---|---|
| **Factions** | L'XP de la faction contribue à sa puissance et ses bonus |
| **Jobs** | L'XP par métier détermine le niveau du joueur dans ce métier |

## Avantages de l'architecture ECS

- **Réutilisabilité** — Un seul système XP pour tous les plugins
- **Performance** — Pas de duplication de données
- **Extensibilité** — Tout nouveau plugin peut utiliser le composant XP facilement
