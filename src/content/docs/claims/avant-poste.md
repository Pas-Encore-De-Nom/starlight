---
title: Avant-Poste
description: Claims classiques avec protection basique sur GOAT.
tags: [claim, pvp, planifie]
sidebar:
  order: 4
---

import { Aside } from '@astrojs/starlight/components';

L'**Avant-Poste** est le type de claim standard d'une faction. Il offre une protection basique et représente les zones de guerre classiques du serveur.

## Caractéristiques

| Propriété | Détail |
|---|---|
| **Protection** | Coffres, blocs et construction protégés pour les membres |
| **Durée** | Temporaire — se unclaim automatiquement après X temps sans activité |
| **Surclaim** | Possible si la faction a moins de power que le coût du claim |
| **Accès alliés** | ❌ Refusé par défaut (modifiable) |
| **Crochetage** | ✅ Les coffres peuvent être crochetés (mini-jeu) |

## Protection

- **Coffres** — Protégés contre l'accès non autorisé, mais **crochetables** avec le système de mini-jeu
- **Blocs** — Cassage ralenti (pas instantané) pour laisser le temps aux défenseurs de réagir
- **Explosifs** — Destructible par les objets du [plugin Pillage](/starlight/items-blocs/pillage/)

<Aside type="note">
Le cassage de blocs dans un Avant-Poste est **ralenti** mais pas impossible. Préparez vos défenses !
</Aside>

## Accès alliés

Par défaut, les alliés n'ont pas accès aux Avant-Postes. Un officier ou le chef peut modifier cette règle pour des zones spécifiques.

## Expiration automatique

Un Avant-Poste non entretenu sera automatiquement unclaim après une période d'inactivité définie par les admins. Restez actifs pour maintenir votre territoire !

## Surclaim

Si votre faction tombe en dessous du power nécessaire, vos Avant-Postes peuvent être surclaimed :
```
Power requis par claim = 20 power
```

Exemple : 3 Avant-Postes = 60 power minimum requis.
