---
title: Puissance
description: Système de puissance des factions sur GOAT.
sidebar:
  order: 4
---

import { Aside } from '@astrojs/starlight/components';

La puissance (power) est la ressource fondamentale qui détermine la capacité d'une faction à maintenir et étendre ses territoires.

## Règles de base

| Propriété | Valeur |
|---|---|
| Puissance par claim | **20 power** |
| Maximum de chunks | **25 chunks** (faction de 20 joueurs) |
| Power maximum | **1000** |
| Puissance | Cumulative au nombre de joueurs |

## Calcul de la puissance

La puissance d'une faction est la **somme des puissances individuelles** de ses membres. Elle est également influencée par le **niveau global** de chaque joueur.

```
Puissance totale = Σ(puissance individuelle des membres)
```

## Bonus de puissance

Des bonus de puissance peuvent être accordés par :
- Compléter des quêtes de faction
- Remporter des événements
- Activité régulière des membres

## Perdre de la puissance

La puissance peut être perdue :
- En mourant en PvP (perte de puissance individuelle)
- Par inactivité prolongée des membres
- Par défaite lors de certains événements

## Impact sur les claims

Si la puissance d'une faction tombe **en dessous du coût de ses claims**, certains de ses territoires peuvent être surclaimed par des ennemis.

| Type de claim | Surclaim possible si power insuffisant ? |
|---|---|
| Découvert | ✅ Toujours possible |
| Avant-Poste | ✅ Si power insuffisant |
| Bastion | ❌ Jamais (même avec 0 power) |

<Aside type="caution">
Surveillez la puissance de votre faction ! Perdre des membres ou des combats peut rendre vos Avant-Postes vulnérables.
</Aside>

## Commandes

```
/f power            → Voir la puissance de votre faction
/f power [faction]  → Voir la puissance d'une autre faction
```
