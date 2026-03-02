---
title: Stress-Test
description: Plugin de stress-test du serveur GOAT.
sidebar:
  order: 4
---

import { Aside } from '@astrojs/starlight/components';

Le plugin de **Stress-Test** permet de simuler une charge importante sur le serveur pour identifier les points faibles avant le lancement.

## Fonctionnement

Le plugin spawn des "joueurs virtuels" qui effectuent des actions automatiques pour simuler une vraie charge serveur.

<Aside type="note">
Ce plugin est destiné uniquement aux tests en développement. Il ne sera **jamais actif** sur le serveur en production.
</Aside>

## Actions simulées

| Action | Description |
|---|---|
| **Cassage de blocs** | Tous les bots cassent un bloc simultanément |
| **Transactions Market** | Simule 200 ventes et achats en rafale |
| **PvP** | Simule des combats entre bots |
| **Connexions / Déconnexions** | Simule des vagues de connexions massives |
| **Commandes** | Exécution simultanée de nombreuses commandes |

## Métriques surveillées

Pendant le stress-test, les métriques suivantes sont enregistrées :

| Métrique | Valeur cible |
|---|---|
| **TPS** | ≥ 18 TPS sous charge |
| **RAM** | Pas de fuite mémoire |
| **Ping** | Latence stable |
| **Bus Event** | Temps d'exécution acceptable |

## Procédure de test

1. Lancer le serveur en mode test
2. Activer le plugin stress-test avec le nombre de bots souhaité
3. Observer les métriques en temps réel via le [système de Monitoring](/starlight/systemes/monitoring/)
4. Identifier et corriger les goulots d'étranglement
5. Répéter jusqu'à atteindre les objectifs de performance
