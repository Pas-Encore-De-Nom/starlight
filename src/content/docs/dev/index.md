---
title: Développement
description: Guide de développement du projet GOAT — conventions, workflow et décisions d'architecture.
tags: [administration]
sidebar:
  order: 1
---

import { Card, CardGrid, LinkCard } from '@astrojs/starlight/components';

Bienvenue dans la section **Développement** du projet GOAT. Cette section documente tout ce dont l'équipe a besoin pour contribuer efficacement au projet : conventions, workflow, et les décisions d'architecture (ADR).

## Vue d'ensemble

<CardGrid>
  <Card title="🤝 Guide de contribution" icon="pencil">
    Environnement de dev, conventions de code, workflow Git et modèle de plugin.

    [Lire le guide →](/starlight/dev/contribution/)
  </Card>
  <Card title="📋 ADR — Décisions d'architecture" icon="document">
    Toutes les décisions techniques expliquées et justifiées pour éviter de ré-ouvrir les mêmes débats.

    [Voir les ADRs →](/starlight/dev/adr/)
  </Card>
  <Card title="📦 Versioning documentaire" icon="rocket">
    Processus pour créer un snapshot de version de la doc à chaque milestone.

    [Voir le workflow →](/starlight/dev/versioning/)
  </Card>
</CardGrid>

## Pourquoi documenter les décisions ?

Dans un projet multi-contributeurs, les décisions techniques sont souvent prises lors de discussions informelles (Discord, réunions). Quelques mois plus tard, personne ne se souvient **pourquoi** une décision a été prise — et on perd du temps à rediscuter.

Les **ADR** (Architecture Decision Records) résolvent ce problème : chaque décision importante est documentée avec son contexte, les alternatives considérées, et les conséquences attendues.

## Roadmap du développement

[Voir la Roadmap complète →](/starlight/roadmap/)
