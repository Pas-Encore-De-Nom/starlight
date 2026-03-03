---
title: Claims
description: Vue d'ensemble du système de claims (territoires) sur GOAT.
tags: [claim, faction, planifie]
sidebar:
  order: 1
---

import { Card, CardGrid, Aside } from '@astrojs/starlight/components';

Le système de claims définit comment les factions contrôlent et protègent leur territoire. Il existe quatre types de zones avec des niveaux de protection et des règles différents.

## Vue d'ensemble des types de claims

| Type | Protection | Surclaim | Permanent |
|---|---|---|---|
| **Nature** | Aucune | N/A | N/A |
| **Découvert** | Aucune | ✅ Toujours | ❌ |
| **Avant-Poste** | Basique | ✅ Si power insuffisant | ❌ (temporaire) |
| **Bastion** | Maximum | ❌ Jamais | ✅ |

## Cycle de vie d'un claim

```mermaid
stateDiagram-v2
    [*] --> Nature : Terrain initial
    Nature --> Decouvert : Exploration\n(joueur entre dans la zone)
    Decouvert --> AvantPoste : Rituel d'activation\n+ activité suffisante
    Decouvert --> Nature : Sans activité\n(expiration)
    AvantPoste --> Bastion : Upgrade faction\n(bloc spécial placé)
    AvantPoste --> Nature : Unclaim automatique\n(temps écoulé ou surclaim)
    AvantPoste --> Decouvert : Surclaim ennemi\n(power insuffisant)
    Bastion --> [*] : Destruction invincibilité\n+ surclaim impossible

    state Nature {
        direction LR
        Accessible à tous
    }
    state Decouvert {
        direction LR
        Aucune protection
    }
    state AvantPoste {
        direction LR
        Protection basique
    }
    state Bastion {
        direction LR
        Protection maximale
    }
```

## Coût d'un claim

- **1 claim = 20 power** requis
- Maximum **25 chunks** par faction de 20 joueurs

## Affichage sur la minimap

Les différents types de claims apparaissent sur la minimap avec des couleurs distinctes pour faciliter la navigation et la stratégie.

<Aside type="tip">
Protégez votre Bastion en priorité — c'est votre base principale et elle ne peut pas être surclaimed !
</Aside>

## Sections détaillées

<CardGrid>
  <Card title="Nature" icon="open-book">
    Zones naturelles non claimées.
    [En savoir plus →](/starlight/claims/nature/)
  </Card>
  <Card title="Découvert" icon="map">
    Zones explorées sans protection réelle.
    [En savoir plus →](/starlight/claims/decouvert/)
  </Card>
  <Card title="Avant-Poste" icon="star">
    Claim classique avec protection basique.
    [En savoir plus →](/starlight/claims/avant-poste/)
  </Card>
  <Card title="Bastion" icon="rocket">
    Super claim — votre base principale, imprenable.
    [En savoir plus →](/starlight/claims/bastion/)
  </Card>
</CardGrid>
