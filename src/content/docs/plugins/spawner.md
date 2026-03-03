---
title: Spawner
description: Système de spawners personnalisés du serveur GOAT.
tags: [plugin, stable]
sidebar:
  order: 4
---

import { Aside } from '@astrojs/starlight/components';

Le plugin **Spawner** introduit des blocs spawners personnalisés, craftables, améliorables et récupérables.

## Propriétés d'un spawner

| Propriété | Description |
|---|---|
| **Cassable / Récupérable** | Peut être récupéré avec le bon outil |
| **Vitesse de spawn** | Modifiable selon le tier |
| **Portée de spawn** | Zone dans laquelle les mobs apparaissent |
| **Activation** | On/Off par clic droit |
| **Consommation** | Consomme des ressources (selon le tier) |
| **Stack spawner** | Plusieurs spawners peuvent être empilés |
| **Stack mobs** | Les mobs peuvent être stackés |

## Tiers de spawners

Les spawners sont disponibles en plusieurs tiers, chaque tier améliorant les statistiques :

| Tier | Vitesse | Consommation | Mobs simultanés |
|---|---|---|---|
| 1 | Lente | Élevée | Faible |
| 2 | Normale | Normale | Normal |
| 3 | Rapide | Faible | Élevé |
| ... | ... | ... | ... |

<Aside type="note">
Plus le tier est élevé, plus le spawner est efficace et moins il consomme de ressources.
</Aside>

## Types de spawners

- **Par mob** — Spécifique à un type de mob (zombie, squelette, araignée…)
- **Par type** — Peaceful / Agressif / Neutre
- **Par groupe** — Ensemble de mobs défini

## Craft

Chaque tier de spawner possède une recette de craft unique et une texture personnalisée pour le distinguer visuellement.
