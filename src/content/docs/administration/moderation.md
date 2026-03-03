---
title: Modération
description: Commandes et procédures de modération du serveur GOAT.
tags: [administration, stable]
sidebar:
  order: 3
---

import { Aside, Tabs, TabItem } from '@astrojs/starlight/components';

Le système de modération couvre cinq actions principales : **Ban**, **Kick**, **Warn**, **Mute** et **Jail**. Chaque action peut être temporaire ou permanente et doit inclure une raison.

## Ban

Exclut définitivement ou temporairement un joueur du serveur.

| Commande | Description |
|---|---|
| `/ban [joueur] [raison] [durée]` | Bannir un joueur (durée optionnelle → permanent si absente) |
| `/unban [joueur]` | Lever un bannissement |
| `/banlist <joueur>` | Consulter la liste des bans (optionnel : filtrer par joueur) |

<Aside type="caution">
Un ban permanent est irréversible sans `/unban`. Toujours préciser une raison claire.
</Aside>

**Formats de durée** : `1h`, `24h`, `7d`, `30d`, `permanent`

---

## Kick

Déconnecte un joueur sans bannissement.

| Commande | Description |
|---|---|
| `/kick [joueur] [raison]` | Expulser un joueur de la session en cours |

---

## Warn

Avertissement formel enregistré dans le dossier du joueur.

| Commande | Description |
|---|---|
| `/warn [joueur] [raison] [durée]` | Avertir un joueur (durée optionnelle → permanent) |
| `/unwarn [joueur]` | Supprimer un avertissement |
| `/warnlist <joueur>` | Voir les avertissements d'un joueur |

---

## Mute

Empêche un joueur de communiquer dans le chat.

| Commande | Description |
|---|---|
| `/mute [joueur] [raison] [durée]` | Rendre muet un joueur |
| `/unmute [joueur]` | Lever le mute |
| `/mutelist <joueur>` | Voir les mutes actifs |

---

## Jail (Prison)

Téléporte et confine un joueur dans une zone dédiée.

| Commande | Description |
|---|---|
| `/jail [joueur] [raison] [durée]` | Emprisonner un joueur |
| `/unjail [joueur]` | Libérer un joueur |
| `/jaillist <joueur>` | Voir les joueurs emprisonnés |
| `/jailsethome` | Définir la zone de prison |
| `/jaildelhome` | Supprimer la zone de prison |

<Aside type="note">
La prison peut être temporaire ou permanente. Le joueur est téléporté à la zone définie par `/jailsethome` jusqu'à expiration ou `/unjail`.
</Aside>

---

## Bonnes pratiques

1. **Toujours préciser une raison** — Elle sera visible par le joueur sanctionné.
2. **Préférer l'escalade** : Warn → Mute → Kick → Jail → Ban temporaire → Ban permanent.
3. **Documenter** — Toutes les sanctions sont enregistrées dans les [Logs](/starlight/administration/logs/).
