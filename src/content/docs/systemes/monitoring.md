---
title: Monitoring
description: Système de monitoring externe du serveur GOAT.
tags: [administration, planifie]
sidebar:
  order: 3
---

import { Aside } from '@astrojs/starlight/components';

Le système de **Monitoring** est un outil externe au serveur qui permet d'analyser en temps réel l'utilisation de toutes les fonctionnalités.

## Objectifs

- **Prédire ce que les joueurs aiment** — Quelles fonctionnalités sont les plus utilisées ?
- **Détecter les fonctionnalités ignorées** — Quelles mécaniques ne sont pas utilisées ?
- **Anticiper les problèmes** — Détecter les pics d'utilisation et les goulots d'étranglement

## Métriques suivies

### Performance serveur
| Métrique | Description |
|---|---|
| **TPS** | Ticks Per Second — indicateur de santé du serveur (idéal : 20) |
| **RAM** | Utilisation mémoire |
| **Ping** | Latence moyenne des joueurs |
| **Bus Event** | Temps d'exécution du bus d'événements entre plugins |

### Utilisation des fonctionnalités
- Fréquence d'utilisation de chaque commande
- Taux de participation aux événements
- Volume de transactions Market
- Activité par monde

<Aside type="tip">
Ces données sont précieuses pour prendre des décisions de game design basées sur des faits plutôt que des suppositions.
</Aside>

## Architecture

Le monitoring est **externe** au serveur de jeu pour ne pas impacter ses performances. Il collecte les données via des hooks et APIs exposées par les plugins.

## Tableau de bord

Un tableau de bord web permet à l'équipe de visualiser les métriques en temps réel et d'accéder à l'historique des données.
