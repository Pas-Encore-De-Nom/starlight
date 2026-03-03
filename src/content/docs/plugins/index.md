---
title: Plugins
description: Vue d'ensemble des plugins du serveur GOAT.
tags: [plugin]
sidebar:
  order: 1
---

import { Badge } from '@astrojs/starlight/components';

Le serveur GOAT utilise un ensemble de plugins personnalisés pour enrichir l'expérience de jeu.

## État des plugins

| Plugin | État | Description |
|---|---|---|
| [XP](/starlight/plugins/xp/) | <Badge text="Terminé" variant="success" /> | Système d'expérience générique |
| [Market](/starlight/plugins/market/) | <Badge text="Terminé" variant="success" /> | Économie et échanges |
| [Spawner](/starlight/plugins/spawner/) | <Badge text="Terminé" variant="success" /> | Spawners personnalisés |
| [Jobs](/starlight/plugins/jobs/) | <Badge text="Terminé" variant="success" /> | Métiers et progression |
| [Quêtes](/starlight/plugins/quetes/) | <Badge text="Terminé" variant="success" /> | Système de quêtes |
| [Événements](/starlight/plugins/events/) | <Badge text="En cours" variant="caution" /> | KOTH, boss, événements spéciaux |
| Monde | <Badge text="En cours" variant="caution" /> | Mondes minage / farm / event |

## Architecture

Tous les plugins partagent un composant ECS (Entity Component System) commun qui gère :
- Les données XP des joueurs
- Les méthodes d'ajout/retrait d'XP
- La communication entre plugins via un bus d'événements

Cette architecture permet à des plugins comme les **Factions** et les **Jobs** d'utiliser le même système d'XP sans duplication de code.

## Diagramme d'interactions

```mermaid
graph TD
    ECS["ECS Core<br/>(XpComponent, BalanceComponent)"]
    BUS["Bus d'evenements"]

    XP["XP"] --> ECS
    ECS --> BUS

    Jobs["Jobs"] -- "Gain XP metier" --> XP
    Jobs -- "Recompenses" --> Market
    Quetes["Quetes"] -- "Gain XP" --> XP
    Quetes -- "Recompenses items" --> Market
    Events["Evenements"] -- "Gain XP" --> XP
    Events -- "Recompenses" --> Market
    Spawner["Spawner"] -- "Mobs spawnes" --> Jobs
    Spawner -- "Mobs spawnes" --> Events
    Market["Market"] --> BUS
    Factions["Factions"] -- "Puissance via XP" --> XP
    Factions --> BUS
    Claims["Claims"] -- "Regles de zone" --> Factions

    style ECS fill:#2980b9,color:#fff
    style BUS fill:#8e44ad,color:#fff
    style XP fill:#27ae60,color:#fff
    style Market fill:#27ae60,color:#fff
    style Jobs fill:#27ae60,color:#fff
    style Quetes fill:#27ae60,color:#fff
    style Spawner fill:#27ae60,color:#fff
    style Events fill:#e67e22,color:#fff
    style Factions fill:#c0392b,color:#fff
    style Claims fill:#c0392b,color:#fff
```

> **Vert** = développé ✅ | **Orange** = en cours 🚧 | **Rouge** = planifié 📋
