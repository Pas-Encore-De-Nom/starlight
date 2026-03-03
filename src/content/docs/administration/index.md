---
title: Administration
description: Vue d'ensemble du système d'administration du serveur GOAT.
tags: [administration, stable]
sidebar:
  order: 1
---

Le système d'administration du serveur GOAT est conçu pour offrir un contrôle précis et complet du serveur. Il comprend la gestion des rôles, la modération des joueurs, la surveillance en temps réel et un système de logs détaillé.

## Composants principaux

| Composant | Description |
|---|---|
| [Rôles & Permissions](/starlight/administration/roles-permissions/) | Définit qui peut faire quoi sur le serveur |
| [Modération](/starlight/administration/moderation/) | Ban, Kick, Warn, Mute, Jail |
| [Surveillance](/starlight/administration/surveillance/) | Vanish, anti-spam, anti-afk, anti-flood |
| [Logs](/starlight/administration/logs/) | Journaux des actions des joueurs et du serveur |

## Types de rôles administratifs

Le serveur dispose de trois types de rôles administratifs :

- **Admin** — Accès complet à toutes les commandes et fonctionnalités.
- **Modérateur** — Accès à la modération des joueurs (ban, kick, warn, mute, jail) et à la surveillance.
- **Player** — Accès aux commandes joueur standard.

## Système de report

Les joueurs peuvent soumettre des rapports directement via la commande :

```
/report [joueur] [raison/catégorie] [commentaire]
```

**Catégories disponibles :**
- Joueurs (comportement, triche…)
- Modérateur
- Bugs
- Suggestions

Une bibliothèque de reports (idée d'Alexis) conserve l'historique par joueur, avec catégorie, sanction associée et commentaires — accessible uniquement à l'équipe de modération.
