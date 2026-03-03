---
title: Guide de contribution
description: Comment contribuer au développement des plugins GOAT — environnement, conventions et workflow.
tags: [administration]
sidebar:
  order: 2
---

import { Aside, Steps, Tabs, TabItem } from '@astrojs/starlight/components';

Ce guide explique comment rejoindre le développement du projet GOAT, mettre en place son environnement et respecter les conventions de l'équipe.

## Prérequis

- Java 21+
- [Hytale SDK / API](https://hytale.com) (version compatible serveur)
- Git + GitHub account membre de [wiki-arktyfacts](https://github.com/wiki-arktyfacts)
- IntelliJ IDEA (recommandé) ou VS Code avec l'extension Java

## Workflow Git

<Steps>
1. **Créez une branche** depuis `main` avec le format `feat/nom-du-plugin` ou `fix/description`.
2. **Développez** en suivant les conventions ci-dessous.
3. **Commitez** avec le format Conventional Commits (voir ci-dessous).
4. **Ouvrez une Pull Request** sur GitHub avec la description du changement.
5. **Review par un autre membre** avant merge. Pas de merge direct sur `main`.
</Steps>

## Conventions de commit

Format : `type(scope): description`

| Type | Quand l'utiliser |
|---|---|
| `feat` | Nouvelle fonctionnalité |
| `fix` | Correction de bug |
| `docs` | Documentation uniquement |
| `refactor` | Refactoring sans changement de comportement |
| `test` | Ajout ou modification de tests |
| `chore` | Tâches de maintenance (CI, dépendances) |

**Exemples :**
```
feat(market): ajouter la commande /sell avec quantité
fix(xp): corriger le calcul XP lors d'un multi-kill
docs(claims): ajouter diagramme d'état de transition
```

## Ajouter un nouveau plugin

Chaque plugin doit suivre cette structure :

```
plugins/
  mon-plugin/
    src/
      main/
        java/com/goat/monplugin/
          MonPlugin.java          ← Point d'entrée
          components/             ← Composants ECS
          systems/                ← Systèmes ECS
          commands/               ← Commandes joueurs
          events/                 ← Listeners d'événements
    build.gradle
    README.md                     ← Doc minimale du plugin
```

<Aside type="tip">
Consultez [ADR-001](/starlight/dev/adr-001/) pour comprendre pourquoi l'architecture ECS a été choisie.
</Aside>

## Intégration avec le système XP

Tous les plugins qui donnent de l'XP doivent utiliser le composant ECS commun :

```java
// Récupérer le composant XP du joueur
XpComponent xp = player.getComponent(XpComponent.class);

// Ajouter de l'XP
xp.add(150, XpSource.MINING);

// Lire l'XP total
long total = xp.getTotal();
```

<Aside type="caution">
Ne jamais modifier directement la donnée XP sans passer par `XpComponent`. Les événements bus sont déclenchés automatiquement pour synchroniser Market, Jobs, et Factions.
</Aside>

## CI/CD

Chaque Pull Request déclenche automatiquement :

- ✅ Compilation Java
- ✅ Tests unitaires
- ✅ Lint (checkstyle)
- ✅ Build de l'artefact

Un merge n'est possible que si tous les checks passent.

## Conventions de nommage

| Élément | Convention | Exemple |
|---|---|---|
| Classes | PascalCase | `MarketPlugin`, `XpComponent` |
| Méthodes | camelCase | `addXp()`, `getSellPrice()` |
| Constantes | SCREAMING_SNAKE | `MAX_FACTION_SIZE` |
| Packages | lowercase | `com.goat.market` |
| Commandes | kebab-case | `/f set-home`, `/market sell` |
