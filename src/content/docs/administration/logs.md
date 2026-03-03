---
title: Logs
description: Système de journalisation du serveur GOAT.
tags: [administration, stable]
sidebar:
  order: 5
---

import { Aside } from '@astrojs/starlight/components';

Le système de logs enregistre toutes les actions importantes sur le serveur, structurées par joueur et par plugin.

## Structure des logs

### Logs joueurs

Un dossier et un fichier par joueur, contenant :

- **Commandes utilisées** (avec horodatage)
- **Connexions / Déconnexions** (IP, heure)
- **Achats & transactions** (market, trades…)

```
logs/
└── players/
    └── <UUID-joueur>/
        └── <pseudo>.log
```

### Logs monde / plugins

Un dossier par plugin, contenant les événements serveur liés :

- **Événements du serveur** (démarrage, arrêt, erreurs)
- **Événements faction** (créations, guerres, claims…)
- **Événements market** (transactions importantes)
- **Événements modération** (bans, warns, kicks…)

```
logs/
└── plugins/
    ├── faction/
    ├── market/
    ├── moderation/
    └── ...
```

<Aside type="tip">
Utilisez la commande `/lookup [joueur]` pour accéder rapidement au résumé des logs d'un joueur sans naviguer dans les fichiers.
</Aside>

## Accès aux logs

| Type de log | Modérateur | Admin |
|---|:---:|:---:|
| Logs joueurs | ✅ | ✅ |
| Logs plugins / monde | ❌ | ✅ |
| Logs modération | ✅ (lecture) | ✅ (lecture + écriture) |

## Rétention

Les logs sont conservés indéfiniment pour permettre les audits en cas de litige. Un système d'archivage peut être mis en place pour les logs anciens (plus de 90 jours).
