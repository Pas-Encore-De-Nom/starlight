---
title: Mise à Prix PvP
description: Système de mise à prix et de ratio K/D sur GOAT.
sidebar:
  order: 2
---

Le système de **Mise à Prix PvP** ajoute une dimension économique au combat : tuer un joueur peut être très rentable si ce joueur a une prime sur sa tête.

## Mécaniques

### Ratio K/D
Chaque joueur possède un ratio Kills/Deaths (K/D) basé sur ses combats PvP.

| Stat | Description |
|---|---|
| **Kills** | Nombre de joueurs éliminés en PvP |
| **Deaths** | Nombre de fois que le joueur est mort en PvP |
| **K/D** | Kills ÷ Deaths |

### Prime au kill
En tuant un joueur en PvP, le vainqueur reçoit :
- Un **pourcentage de l'argent** du joueur tué
- La **prime** éventuellement placée sur sa tête

### Mises à prix
N'importe quel joueur peut placer une prime sur la tête d'un autre joueur. La prime est versée au premier joueur qui le tue.

```
/bounty set [joueur] [montant]    → Placer une prime
/bounty list                       → Voir les primes actives
```

## Intégration avec le Market

Les fonds des primes transitent par le système [Market](/starlight/plugins/market/). La commande `getBalance` est utilisée pour vérifier que le joueur qui place la prime a les fonds nécessaires.
