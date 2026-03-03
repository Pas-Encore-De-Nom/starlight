---
title: Workflow de versioning documentaire
description: Comment créer des snapshots de version de la documentation à chaque milestone du projet GOAT.
tags: [administration]
sidebar:
  order: 4
---

import { Aside, Steps } from '@astrojs/starlight/components';

La documentation GOAT utilise le plugin `starlight-versions` pour maintenir des snapshots versionnés. Cela permet à l'équipe de consulter l'état de la doc à n'importe quel moment passé du projet.

## Principe

- La branche `main` contient toujours la **version courante** (forward-looking, travail en cours).
- À chaque **milestone** (ex: pré-alpha, alpha, bêta fermée, lancement), on crée un **snapshot** de la documentation.
- Les joueurs et développeurs peuvent consulter les specs d'une version précédente directement depuis l'interface.

## Quand créer un snapshot ?

| Événement | Créer un snapshot ? |
|---|---|
| Fin de Phase 1 (documentation) | ✅ `v1.0-docs` |
| Pré-alpha (premiers plugins dev) | ✅ `v0.1` |
| Alpha fermée (test équipe) | ✅ `v0.2` |
| Bêta fermée | ✅ `v0.5` |
| Lancement public | ✅ `v1.0` |
| Hotfix ou correction mineure | ❌ Pas nécessaire |

## Procédure

<Steps>
1. **Vérifiez** que toutes les pages de la version courante sont à jour et correspondent à l'état réel du jeu.

2. **Créez le fichier JSON de version** dans `src/content/versions/` :
   ```json
   // src/content/versions/0.2.json
   {
     "slug": "0.2"
   }
   ```

3. **Enregistrez la version** dans `astro.config.mjs` :
   ```js
   starlightVersions({
     versions: [
       { slug: '0.2' },
       { slug: '1.0' },   // version précédente
     ]
   })
   ```

4. **Ajoutez une entrée au CHANGELOG** (`CHANGELOG.md`) selon le format Keep a Changelog :
   ```markdown
   ## [0.2.0] — 2026-MM-DD
   ### Added
   - Snapshot documentation pré-alpha
   ```

5. **Ouvrez une PR** avec le titre `docs: snapshot v0.2 — pré-alpha` et faites-la merger sur `main`.
</Steps>

<Aside type="note">
Le snapshot est automatiquement généré par le plugin à partir de l'état actuel des pages au moment du build. Vous n'avez pas à copier manuellement le contenu.
</Aside>

## Versions actuelles

| Version | Statut | Description |
|---|---|---|
| `1.0` | Archivée | Premier snapshot — documentation initiale complète |
| `main` | Courante | Développement en cours |

## Bonnes pratiques

- Ne jamais modifier rétrospectivement un snapshot archivé.
- Mettre à jour le `CHANGELOG.md` **avant** de créer le snapshot.
- Tagger le commit Git correspondant : `git tag v0.2 && git push --tags`.
