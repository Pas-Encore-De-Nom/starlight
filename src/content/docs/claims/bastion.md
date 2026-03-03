---
title: Bastion
description: Le super claim — base principale imprenable sur GOAT.
tags: [claim, pvp, planifie]
sidebar:
  order: 5
---

import { Aside } from '@astrojs/starlight/components';

Le **Bastion** est le claim le plus puissant du jeu. Il représente la base principale d'une faction, pratiquement imprenable dans des conditions normales.

## Caractéristiques

| Propriété | Détail |
|---|---|
| **Protection** | Maximum — ralentit les attaques et empêche le crochetage |
| **Surclaim** | ❌ Jamais, même avec 0 power |
| **Durée** | Permanent — ne se unclaim pas automatiquement |
| **Accès alliés** | ❌ Refusé par défaut (modifiable) |
| **F home** | ✅ Le `/f home` ne fonctionne que depuis le Bastion |

## Invincibilité

Le Bastion est **invincible** dans son état normal. Pour l'attaquer, il faut :

1. Poser un **objet spécial** qui désactive temporairement l'invincibilité
2. L'objet prend **5 à 10 minutes** pour briser l'invincibilité
3. Pendant cette durée, tous les joueurs connectés reçoivent une **alerte**

<Aside type="caution">
Quand un ennemi pose l'objet de siège, vous recevrez une notification immédiate. Organisez votre défense rapidement !
</Aside>

## Bloc téléporteur (Drapeau)

Le Bastion est marqué par un **bloc téléporteur** (ex : un drapeau) qui :
- Définit le point de retour (`/f home`)
- Peut être **amélioré** avec des bonus :
  - Régénération
  - Rapidité (Haste)
  - Autres effets configurables
- **Détecte les ennemis** qui entrent dans la base et déclenche une alerte sonore / visuelle

## Alertes

| Événement | Alerte |
|---|---|
| Objet de siège posé | Notification à tous les joueurs connectés |
| Ennemi dans la base | Alerte sonore / visuelle pour les membres de la faction |

## F home

Le point de retour de faction (`/f home`) n'est accessible **que depuis le Bastion**. Protégez votre drapeau à tout prix !

## Protection du Bastion

| Attaque | Possible ? |
|---|---|
| Cassage de blocs (normal) | ✅ Très ralenti |
| Explosifs (TNT, dynamite) | ✅ Nécessite l'objet de siège d'abord |
| Crochetage des coffres | ❌ Impossible |
| Surclaim | ❌ Impossible |
