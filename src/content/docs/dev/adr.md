---
title: ADR — Décisions d'architecture
description: Liste de toutes les décisions d'architecture du projet GOAT.
tags: [administration]
sidebar:
  order: 3
---

import { Badge } from '@astrojs/starlight/components';

Les **ADR** (Architecture Decision Records) documentent les décisions importantes prises lors du développement du projet GOAT. Chaque ADR explique le contexte, les alternatives considérées et les conséquences de la décision.

## Format d'un ADR

Chaque ADR suit ce format :

| Champ | Description |
|---|---|
| **Contexte** | Quel problème devait être résolu ? Quelles contraintes ? |
| **Décision** | Quelle solution a été retenue ? |
| **Alternatives** | Quelles autres options ont été envisagées ? |
| **Conséquences** | Quels sont les impacts (bons et mauvais) de cette décision ? |
| **Statut** | Proposée / Acceptée / Dépréciée / Remplacée |

## Liste des ADRs

| ADR | Titre | Domaine | Statut |
|---|---|---|---|
| [ADR-001](/starlight/dev/adr-001/) | Architecture ECS pour les composants joueurs | Architecture | <Badge text="Acceptée" variant="success" /> |

## Créer un nouvel ADR

1. Créez un fichier `src/content/docs/dev/adr-XXX.md` (numéro suivant).
2. Utilisez le template ci-dessous.
3. Ajoutez-le au tableau ci-dessus.
4. Ouvrez une PR pour review par l'équipe.

### Template

```markdown
---
title: ADR-XXX — Titre court
description: Décision d'architecture XXX du projet GOAT.
tags: [administration]
sidebar:
  order: 1XX
---

## Contexte

*Décrivez le problème ou la situation qui a nécessité une décision.*

## Décision

*Décrivez la solution retenue.*

## Alternatives envisagées

- **Option A** — description + pourquoi non retenue
- **Option B** — description + pourquoi non retenue

## Conséquences

### Positives
- ...

### Négatives / Trade-offs
- ...

## Statut

**Acceptée** — Date : YYYY-MM-DD

## Références

- Lien vers la discussion GitHub, Discord, etc.
```
