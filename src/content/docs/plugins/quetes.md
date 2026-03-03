---
title: Quêtes
description: Système de quêtes du serveur GOAT.
tags: [plugin, stable]
sidebar:
  order: 7
---

import { Aside } from '@astrojs/starlight/components';

Le système de **Quêtes** permet aux joueurs de se fixer des objectifs structurés avec des récompenses à la clé.

## Structure d'une quête

Chaque quête est composée des éléments suivants :

| Composant | Description |
|---|---|
| **Titre** | Nom de la quête |
| **Description** | Détails et contexte |
| **Durée** | Temps limite pour compléter (ou illimité) |
| **Occurrence** | Quotidienne / Hebdomadaire / Permanente |
| **Objectif(s)** | Ce qu'il faut accomplir |
| **Récompense(s)** | Ce qu'on obtient en complétant |

## Types d'objectifs

- **Bloc cassé** — Miner un certain nombre de blocs d'un type donné
- **Monstre tué** — Éliminer un certain nombre de mobs spécifiques
- **Compléter un événement** — Participer à un KOTH, boss, trésor…

## Occurrences

| Type | Réinitialisation |
|---|---|
| **Quotidienne** | Chaque jour à minuit |
| **Hebdomadaire** | Chaque lundi à minuit |
| **Permanente** | Une seule fois (ne se réinitialise pas) |

## Créateur de quêtes

Un outil de création de quêtes permet à l'équipe d'administration de créer et configurer des quêtes sans modifier le code.

<Aside type="tip">
Référence technique : [EcoTaleQuests](https://github.com/TheFokysnik/EcoTaleQuests) — plugin de référence utilisé comme inspiration.
</Aside>

## Intégration avec les Jobs

Les quêtes quotidiennes et hebdomadaires sont intégrées au système de Jobs pour donner de l'XP supplémentaire dans le métier concerné.
