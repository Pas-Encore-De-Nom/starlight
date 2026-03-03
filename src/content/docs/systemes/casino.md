---
title: Casino
description: Système de casino et jeux d'argent sur le serveur GOAT.
tags: [economie, planifie]
sidebar:
  order: 1
---

import { Aside } from '@astrojs/starlight/components';

Le **Casino** offre des mini-jeux d'argent pour les joueurs qui souhaitent tenter leur chance.

<Aside type="caution">
Les jeux de casino impliquent une mise d'argent en jeu. Vous pouvez perdre votre mise !
</Aside>

## Jeux disponibles

### ✂️ Pierre-Feuille-Ciseaux
Défiez un autre joueur à un PFC classique. Mise un montant d'argent et que le meilleur gagne !

**Comment jouer :**
```
/pfc [joueur] [mise]   → Lancer un défi PFC
```

### 🪙 Coin Flip
Pile ou face — 50% de chance de doubler votre mise.

**Comment jouer :**
```
/coinflip [mise]         → Lancer un défi public
/coinflip [joueur] [mise] → Défi privé
```

### 🎰 Roulette
La roulette classique avec différentes mises et multiplicateurs.

## Équité

Les résultats de tous les jeux sont générés de manière aléatoire et équitable côté serveur.
