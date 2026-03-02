---
title: Rôles & Membres
description: Hiérarchie et permissions des membres d'une faction sur GOAT.
sidebar:
  order: 2
---

import { Aside } from '@astrojs/starlight/components';

Chaque faction possède une hiérarchie interne à quatre niveaux. Les permissions sont cumulatives : un rôle supérieur hérite des permissions des rôles inférieurs.

## Hiérarchie

### 👑 Chef
Le chef est le propriétaire de la faction. Il dispose de toutes les permissions.

**Permissions exclusives :**
- Définir si la faction est publique ou privée
- Transmettre la propriété de la faction à un autre membre
- Nommer et révoquer les officiers
- Toutes les permissions des rôles inférieurs

### ⭐ Adjoint / Officier
Bras droit du chef, l'officier gère la faction au quotidien.

**Permissions :**
- Définir le `/f sethome` (uniquement dans le bastion)
- Attribuer des permissions par rôle sur les claims (coffres, portes, cassage)
- Gérer les membres (inviter, exclure, promouvoir)
- Gérer les relations avec les autres factions (alliés, ennemis…)

### 🧑 Membre
Un membre actif de la faction.

**Permissions :**
- Claimer des zones de territoire
- Accéder aux claims de la faction (selon les permissions configurées)
- Utiliser les fonctionnalités de la faction (banques, récompenses, f home…)

### 🌱 Recrue
Nouveau venu dans la faction. Permissions très limitées.

**Permissions :**
- Aucune permission spéciale
- Peut voir le chat de faction
- Doit prouver sa valeur pour être promu membre

<Aside type="tip">
Le chef peut configurer des permissions granulaires pour chaque rôle sur les claims : qui peut ouvrir les coffres, qui peut casser des blocs, qui peut ouvrir les portes.
</Aside>

## Tableau récapitulatif

| Permission | Recrue | Membre | Officier | Chef |
|---|:---:|:---:|:---:|:---:|
| Chat faction | ✅ | ✅ | ✅ | ✅ |
| Accès claims | ❌ | ✅ | ✅ | ✅ |
| Claimer zones | ❌ | ✅ | ✅ | ✅ |
| Gérer membres | ❌ | ❌ | ✅ | ✅ |
| Gérer relations | ❌ | ❌ | ✅ | ✅ |
| F sethome | ❌ | ❌ | ✅ | ✅ |
| Nommer officiers | ❌ | ❌ | ❌ | ✅ |
| Transférer faction | ❌ | ❌ | ❌ | ✅ |
| Public / Privé | ❌ | ❌ | ❌ | ✅ |
