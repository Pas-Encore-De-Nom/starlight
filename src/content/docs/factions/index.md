---
title: Factions
description: Vue d'ensemble du système de factions du serveur GOAT.
sidebar:
  order: 1
---

import { Card, CardGrid } from '@astrojs/starlight/components';

Le système de factions est au cœur de l'expérience PvP de GOAT. Chaque faction est un groupe de joueurs qui coopèrent pour conquérir des territoires, accumuler de la puissance et s'affronter.

## Caractéristiques générales

| Propriété | Valeur |
|---|---|
| Limite de membres | **20 joueurs** par faction |
| Système inspiré de | Clash of Clans |

## Types d'accès à une faction

| Type | Description |
|---|---|
| **Ouvert** | Les joueurs rejoignent automatiquement sans invitation |
| **Sur invitation** | Un joueur demande à rejoindre, ou est invité |
| **Fermé** | Invitation obligatoire, aucune demande possible |

## Prérequis pour rejoindre

Des prérequis peuvent être définis par le chef de faction (ex : niveau joueur minimum).

## Sections détaillées

<CardGrid>
  <Card title="Rôles & Membres" icon="seti:git">
    Chef, Officier, Membre, Recrue — qui peut faire quoi dans une faction.

    [Voir les rôles →](/starlight/factions/roles/)
  </Card>
  <Card title="Relations" icon="star">
    Alliés, Ennemis, Neutres, Wild, Event, Protected.

    [Voir les relations →](/starlight/factions/relations/)
  </Card>
  <Card title="Puissance" icon="rocket">
    Comment gagner et perdre de la puissance, et ce qu'elle influence.

    [Voir la puissance →](/starlight/factions/puissance/)
  </Card>
</CardGrid>
