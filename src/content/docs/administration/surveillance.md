---
title: Surveillance
description: Outils de surveillance et de modération en temps réel sur le serveur GOAT.
sidebar:
  order: 4
---

import { Aside } from '@astrojs/starlight/components';

Le système de surveillance permet aux modérateurs et admins de surveiller le serveur en temps réel et d'intervenir discrètement.

## Vanish

Le vanish rend un membre du staff invisible pour les joueurs. Il dépend du rôle :

| Rôle | Niveau de vanish |
|---|---|
| Admin | `vanish admin` — invisible pour tous |
| Modérateur | `vanish modérateur` — invisible pour les joueurs |
| Autres | Selon configuration |

<Aside type="note">
Les membres du staff plus élevés en grade peuvent voir les membres en vanish d'un grade inférieur.
</Aside>

## Commandes de surveillance

| Commande | Description |
|---|---|
| `/vanish` | Activer/désactiver le mode invisible |
| `/freeze [joueur]` | Immobiliser un joueur (ne peut plus bouger) |
| `/lookup [joueur]` | Voir l'historique complet d'un joueur |
| `/freecam` / `/noclip` | Mode caméra libre / traverser les blocs |
| `/rtp` | Téléportation aléatoire (utile pour inspecter discrètement) |
| `/resume [joueur]` | Voir les détails complets sur un joueur connecté |
| `/toys` | Accès aux outils de modération visuels |

## Protections automatiques

Le serveur inclut des systèmes automatiques de protection :

### Anti-Spam
Détecte et bloque les envois répétés de messages dans le chat. Les contrevenants peuvent être automatiquement mutés temporairement.

### Anti-AFK
Détecte les joueurs inactifs (absence de mouvement ou d'interaction). Actions configurables :
- Avertissement
- Kick automatique après X minutes

### Anti-Flood
Bloque l'envoi massif de paquets ou commandes en très peu de temps. Protège le serveur contre les abus et les lags volontaires.

## Accès aux outils selon le rôle

| Outil | Modérateur | Admin |
|---|:---:|:---:|
| Vanish | ✅ | ✅ |
| Freeze | ✅ | ✅ |
| Lookup | ✅ | ✅ |
| Freecam / Noclip | ❌ | ✅ |
| Resume | ✅ | ✅ |
| Anti-spam (config) | ❌ | ✅ |
| Anti-afk (config) | ❌ | ✅ |
| Anti-flood (config) | ❌ | ✅ |
