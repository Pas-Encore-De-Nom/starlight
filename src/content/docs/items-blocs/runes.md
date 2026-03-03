---
title: Runes
description: Système runique d'amélioration des équipements sur GOAT.
tags: [plugin, planifie]
sidebar:
  order: 3
---

import { Aside } from '@astrojs/starlight/components';

Le système **Runique** permet d'améliorer les équipements avec des stats supplémentaires, mais comporte un risque d'échec.

## Fonctionnement

1. **Choisissez une rune** à fusionner avec votre équipement
2. Approchez-vous d'une **Table Runique**
3. La fusion est effectuée avec un **pourcentage de chance de réussite**
   - ✅ Succès → La rune est appliquée, la stat est améliorée
   - ❌ Échec → Une **stat de l'équipement est réduite** !

<Aside type="caution">
L'échec d'une fusion pénalise votre équipement ! Soyez prudent avec les runes de haute rareté.
</Aside>

## Table Runique

La Table Runique est un bloc spécial (craftable) nécessaire pour effectuer toutes les fusions. Elle consomme des ressources à chaque utilisation.

## Limite de runes par équipement

Chaque équipement peut accueillir un **nombre maximum de runes** défini (à configurer).

## Système de rareté

| Rareté | Couleur | Bonus | Risque d'échec |
|---|---|---|---|
| Peu commun | Gris | Faible | Faible |
| Commun | Blanc | Normal | Normal |
| Rare | Bleu | Élevé | Élevé |
| Épique | Violet | Très élevé | Très élevé |
| Légendaire | Or | Maximum | Maximum |

## Stats modifiables

| Stat | Description |
|---|---|
| ❤️ Santé | Augmente les points de vie max |
| 🛡️ Résistance physique | Réduit les dégâts physiques reçus |
| 🏹 Résistance projectiles | Réduit les dégâts de projectiles |
| ⚔️ Augmentation des dégâts | Bonus aux dégâts infligés |
| ☠️ Poison | Inflige l'effet de poison sur coup |
| 💨 Vitesse | Augmente la vitesse de déplacement |
| 💚 Régénération | Régénération passive de vie |
| 🌟 Invincibilité | Brève invincibilité après réception de dégâts |
| ... | D'autres stats selon l'évolution du projet |

## Craft des runes

Les runes se craftent via le métier **Black-Smith** du système de [Jobs](/starlight/plugins/jobs/).
