---
title: Banque
description: Système de coffre-fort d'items sur GOAT.
tags: [economie, plugin, planifie]
sidebar:
  order: 6
---

import { Aside } from '@astrojs/starlight/components';

La **Banque** est un système de coffre-fort d'items qui permet de stocker ses objets précieux en sécurité.

## Types de banque

### Banque personnelle
Accessible via `/bank`, la banque personnelle offre un stockage sécurisé pour vos items.

<Aside type="note">
L'accès à `/bank` peut être réservé aux joueurs ayant un certain statut (donateur, rang élevé…).
</Aside>

### Banque de faction
Accessible via `/fbank`, la banque de faction permet à tous les membres autorisés de déposer et retirer des items partagés. Les règles d'accès sont définies avec le mod faction.

## Tiers de banque

Les banques sont disponibles en plusieurs tiers. Chaque tier multiplie la capacité par 2 par rapport au tier précédent :

| Tier | Capacité relative |
|---|---|
| 1 | 1× |
| 2 | 2× |
| 3 | 4× |
| 4 | 8× |

La capacité peut être définie **en slots** (nombre d'emplacements) ou **en lignes** (une ligne = 9 slots).

## Sécurité

Les items dans la banque sont **entièrement protégés** :
- Inaccessibles depuis les claims ennemis
- Non affectés par le pillage
- Non récupérables en cas de mort
