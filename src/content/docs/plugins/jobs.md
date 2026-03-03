---
title: Jobs (Métiers)
description: Système de métiers et de progression du serveur GOAT.
tags: [plugin, economie, stable]
sidebar:
  order: 5
---

import { Aside } from '@astrojs/starlight/components';

Le système de **Jobs** est l'axe de progression principal du serveur. Il permet la compétition entre joueurs et donne des avantages permanents.

## Liste des métiers

| Métier | Spécialité |
|---|---|
| ⛏️ **Mineur** | Minage de minerais, four |
| 🌾 **Agriculteur** | Récoltes, élevage, dressage |
| 🔨 **Black-Smith** | Craft runes, armures, armes |
| ⚔️ **Tizen (Chasseur)** | PvP, mobs, donjons |
| 🎮 **Générique** | Niveau global (cumulatif) |

## Système de niveaux

### Niveau par métier
- **Niveau maximum : 25**
- Chaque niveau donne **10 points de compétences**
- Bonus liés au métier (ex : Mineur → mine plus vite)
- **Gain d'XP limité** par jour/semaine pour éviter le farming abusif
- **Palier tous les 5 niveaux** avec événement / quête / défi spécial (+ formulaire feedback avec récompense)

### Niveau global (cumulatif)
Le niveau global est la somme des niveaux dans tous les métiers. Il débloque :

| Avantage | Description |
|---|---|
| Grade temporaire | Obtenu rapidement (niveau 5, ~1 semaine) |
| Items exclusifs | Équipements et consommables |
| Commandes | Accès à des commandes spéciales |
| Mondes / Events | Accès à des zones exclusives |
| Donjon | Accès avec ticket + craft ticket |

## Gain d'XP par métier

### ⛏️ Mineur
- Miner des blocs (selon le minerai, certains rapportent plus)
- Récupérer des lingots cuits dans un four (sécurité : même joueur que celui qui a placé)
- **Event hebdomadaire** de farm avec classement Top 1% / 20% / 50% (inspiré de Jacob's Farming Contest sur Hypixel)
- Quêtes journalières

### 🌾 Agriculteur
- Récolter des cultures
- Tuer / utiliser / reproduire des mobs passifs
- Tanner / dresser des animaux
- Event hebdomadaire + quêtes

### 🔨 Black-Smith
- Crafter des runes
- Placer des runes sur des objets
- Utiliser des pendentifs
- Crafter des armes et armures

### ⚔️ Tizen (Chasseur)
- Tuer des mobs (passifs et agressifs) et des boss
- Compléter le "Pokédex" (collection de mobs tués)
- Victoires en PvP
- Compléter des donjons
- Event hebdomadaire + quêtes

## Avantages du système

- **Compétition** entre joueurs via les classements
- **Progression** avec des bonus permanents (pas uniquement dans le métier)
- **Courbe de progression** équilibrée avec limitation du gain d'XP quotidien

<Aside type="tip">
Choisissez votre métier principal en fonction de votre style de jeu. Un Mineur bien levelé est aussi précieux qu'un Guerrier pour votre faction !
</Aside>
