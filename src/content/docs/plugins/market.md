---
title: Market
description: Système d'économie et de marché du serveur GOAT.
tags: [plugin, economie, stable]
sidebar:
  order: 3
---

import { Aside } from '@astrojs/starlight/components';

Le plugin **Market** gère l'économie du serveur : solde des joueurs, échanges directs et marché public.

## Fonctionnalités

### Gestion du solde

| Commande | Description |
|---|---|
| `/bal` | Afficher votre solde |
| `/baltop` | Classement des joueurs les plus riches |
| `/pay [joueur] [montant]` | Donner de l'argent à un autre joueur |

### Vendre des items

**Entre joueurs (échange direct) :**
```
/sell [item] [quantité] [prix]
/sell [item] [quantité] [prix] [joueur]   → Vente privée à un joueur spécifique
```

**Sur le marché public :**
```
/sell [item] [quantité] [prix]   → L'annonce est visible par tous
```

### Commandes admin

- Donner de l'argent à un joueur
- Retirer de l'argent
- Réinitialiser l'économie

## API

Le Market expose une API pour les autres plugins :

```
getBalance(joueur)   → Retourne le solde d'un joueur
```

<Aside type="tip">
Utilisez `/baltop` pour suivre les joueurs les plus puissants économiquement — ce sont souvent les cibles les plus rentables en PvP !
</Aside>
