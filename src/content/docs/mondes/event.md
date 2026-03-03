---
title: Monde Event
description: Le monde dédié aux événements du serveur GOAT.
tags: [monde, wip]
sidebar:
  order: 5
---

import { Aside } from '@astrojs/starlight/components';

Le **Monde Event** est un monde temporaire dédié aux événements serveur. Il est instancié à la demande lors du lancement d'un événement et peut être régénéré entre chaque session.

## Rôle

| Propriété | Détail |
|---|---|
| **Disponibilité** | Uniquement pendant les événements actifs |
| **PvP** | Activé — règles spécifiques à chaque event |
| **Claim** | ❌ Pas de claim permanent dans ce monde |
| **Mobs** | Selon l'événement (boss, mobs spéciaux…) |

<Aside type="note">
Le Monde Event est distinct des événements qui peuvent se dérouler dans le **Monde Principal** (ex : KOTH). Certains événements nécessitent un espace de jeu dédié et isolé.
</Aside>

## Événements compatibles

Les événements suivants peuvent se dérouler dans le Monde Event :

| Événement | Description |
|---|---|
| **KOTH** | Arène de King of the Hill isolée |
| **Boss** | Combat de boss dans un environnement dédié |
| **Trésor** | Donjon instancié avec un butin unique |
| **Totem** | Zone de contrôle spéciale |
| **McDaDay** | Événement spécial dans une arène dédiée |

## Accès

Les joueurs accèdent au Monde Event via :
- Une invitation automatique lors du lancement de l'événement
- Un portail temporaire dans le [Monde Principal](/starlight/mondes/principal/) ou le [Lobby](/starlight/mondes/lobby/)

<Aside type="caution">
Quitter le Monde Event pendant un événement actif peut entraîner une disqualification selon les règles de l'événement.
</Aside>

## Lien avec les Jobs et Quêtes

Participer aux événements dans ce monde donne :
- **XP Job** selon le métier concerné
- **Progression de quêtes** si un objectif "Compléter un event" est actif

[Voir le système d'événements complet →](/starlight/plugins/events/)
