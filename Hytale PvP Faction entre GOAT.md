Système d’administration : 

* Rôle / permissions  
* Ban / Kick / Mute / Warn / Prison  
  * permanent  
  * temporaire  
* surveillance  
  * vanish  
  * anti-spam  
  * anti-afk  
  * antiflood  
  * logs  
* bloquer item / block

Système de faction : 

* Rôles / permission (membres)  
* Alliés / Faction / enemies / neutre / wild / event / protected  
* Claim ? (comment faire)  
* home  
* puissance  
  * combien ?  
  * comment gagner / perdre ?  
  * bonus

Système de claim : 

* Nature  
* Découvert  
  * possible surclaim  
  * nécessite une **activité**  
* Avant Poste  
  * appartient à la faction  
  * pas de surclaim  
  * accessible aux alliés  
* Bastion  
  * Safe

Système plugin : 

- [x] ~~XP~~  
      - [x] ~~utilisé par **faction**~~  
      - [x] ~~utilisé par job~~  
- [x] ~~Market~~  
- [x] ~~Spawner~~  
- [x] ~~Job~~  
- [ ] Event  
      - [ ] Koth  
      - [ ] structure aléatoire  
      - [ ] trésor  
      - [ ] totem  
      - [ ] boss  
      - [ ] McDaDay  
- [ ] Monde  
      - [ ] minage  
      - [ ] farm  
      - [ ] event  
- [x] ~~quête~~

Items and block : 

* enchant / amélioration  
* protection / pillage  
  * dyna  
  * obsi ?

à méditer : 

Administration : 

* type Rôle   
  * Admin  
  * Moderateur  
  * Player  
* Rôle  
  * Nom  
  * Group  
  * préfixe / suffixe  
* surveillance  
  * anti-spam  
  * anti-afk  
  * anti-flood  
  * logs  
* ban  
  * temporaire  
  * permanent  
  * raison  
  * durée  
  * ban \[joueur\] \[raison\] \[durée\]  
  * unban \[joueur\]  
  * banlist \<joueur\>  
* Kick  
  * raison  
  * kick \[joueur\] \[raison\]  
* Warn  
  * temporaire  
  * permanent  
  * raison  
  * warn \[joueur\] \[raison\] \[durée\]  
  * unwarn  
  * warnlist \<joueur\>  
* Mute  
  * temporaire  
  * permanent  
  * raison  
  * mute \[joueur\] \[raison\] \[durée\]  
  * unmute \[joueur\]  
  * mutelist \<joueur\>  
* Jail  
  * temporaire  
  * permanent  
  * raison  
  * jail \[joueur\] \[raison\] \[durée\]  
  * unjail \[joueur\]  
  * jaillist \<joueur\>  
  * jailsethome  
  * jaildelhome  
* vanish  
  * qui dépend du rôle  
    * vanish admin  
    * vanish modérateur  
    * …  
  * rtp  
  * freeze  
  * lookup \[joueur\]  
  * freecam / noclip  
  * toys  
* resume  
  * plein de détail sur le joueur  
* log  
  * log joueur (un dossier par joueur / un fichier par joueur)  
    * commande  
    * connexion / déconnexion  
    * achat  
  * log monde (un dossier par plugin)  
    * log events serveur  
    *   
* bloquer item / block  
  *   
* système report (revoir le nom pour ajouter les suggestion)  
  * bibliothèque report (idée d’Alexis)  
    * nom du joueur  
    * catégorie  
    * sanction  
    * uniquement pour la modération  
      * commentaire en \+  
  * faire un rapport :   
    * joueurs  
    * modérateur  
    * bugs  
    * suggestion  
  * report \[joueur\] \[raison/catégorie\] \[Commentaire\]

Faction : 

* Type de faction (clash of clan) (ouvert / fermé / sur invitation)  
  * un joueur demande à rejoindre  
    * sur invitation  
  * rejoindre automatiquement  
    * ouvert  
  * invité à rejoindre uniquement  
    * fermé  
    * sur invitation  
    * ouvert  
* pré-requis pour rejoindre (niveau joueur …)  
* Rôles / permission (membres d’une faction)  
  * chef  
    * toutes les permissions (attribue les rôle officier)  
    * définir si une faction est publique / privé  
    * transmettre la propriété de la faction  
    * nommer les officiers  
  * adjoint/officier  
    * faction sethome  
    * donner des permissions par rôle sur les claims (coffre / porte / cassée)  
    * gérer les membres (inviter, exclure …)  
    * gérer les relations entre faction  
  * membre  
    * claim des zones  
    * accès aux claims (casser poser ouvrir des trucs selon les permissions)  
    * accès aux fonctionnalités des factions (banques, récompenses, …)  
  * recrue  
    * rien  
* Alliés / Faction / enemies / neutre / wild / event / protected (relation entre les factions)  
* limite de joueur de par faction : **20**

Claims : 

* 1 claim \= 20 power  
* puissance  
  * cumulatif au nombre de joueur  
  * influencé par le niveau global du joueur  
  * max 1000  
  * 25 chunk max pour grande faction (20 joueurs)  
      
* Nature  
* Découvert  
  * possible surclaim  
  * aucune protection  
    * tout peut-être fait par tout le monde  
  * passe automatiquement en AP au bout d’un certain temps ou après une certaine activité  
    * fait un rituel pour passer le claim en AP  
* Avant Poste  
  * claim classique   
    * protection coffre/bloc/casser  
  * temporaire  
    * unclaim automatiquement au bout d’X temps  
  * peut-être surclaim si moins de power   
  * inaccessible aux alliés par défaut  
    * modifiable au besoin  
  * destructible par les objets du plugin pillage  
  * coffre accessible via le crochetage  
  * niveau de protection basique  
    * ralenti les attaques (le cassage ne doit pas être instantané)  
* Bastion  
  * genre de “super claim”  
  * pas de surclaim (même avec moins de power)  
  * représente le base   
  * f home uniquement dans le bastion  
  * bloc téléporteur pour qui définit le bastion (drapeau par exemple)  
    * bloc améliorable avec bonus style effet (regen/haste …)  
    * détection quand un ennemie rentre dans la base  
  * claim permanent  
  * niveau de protection plus élevé  
    * ralentir les attaques  
    * empêche le crochetage  
  * bastion invincible  
    * nécessite un objet pour désactiver temporairement l’invincibilité (pendant X temps)  
    * l’objet prend du temps à casser l’invisibilité (5-10 minutes)  
    * alerte à tous les joueurs connectés ? (quand l’objet est posé)  
    * un truc visible ou sonore quand on est dans la base ou à proximité  
  * inaccessible aux alliés par défaut  
    * modifiable au besoin  
* faire apparaître les claims sur la minimap

![][image1]![][image2]

Pillage : 

* Attaque  
  * Dynamite  
  * tnt  
  * explosif (canon)  
  * gobelin (jeu de base)  
  * Golem qui creuse des blocs en avant (3x3)  
  * drill portative (avec consommable)  
  * crochetage (avec mini-jeux)  
* Défense  
  * à voir pendant le dev

Quests : 

* composant d’une quête  
  * titre  
  * description  
  * durée  
  * occurrence (quotidien / hebdo / perma)  
  * objectif  
    * bloc cassé  
    * monstre tué  
    * compléter un event  
  * récompense  
* créateur de quête  
* https://github.com/TheFokysnik/EcoTaleQuests

Market : 

* solde  
  * afficher  
  * donner de l’argent entre joueur  
  * give money  
  * classement baltop  
* vendre des objet (item)  
  * entre joueur  
    * sell \[item\] \[quantité\] \[prix\]  
    * sell \[item\] \[quantité\] \[prix\] \[joueur\]  
  * sur le market  
    * sell \[item\] \[quantité\] \[prix\]  
* api  
  * getBalance  
* commandes admins

Spawner : 

* Création d’un bloc   
  * craft  
  * texture  
  * propriété  
    * cassable / récupérable  
    * vitesse de spawn  
    * portée de spawn  
    * spawn activé désactivé (par clique)  
    * consomme des ressources (en fonction du tier ?)  
    * stack spawner  
    * stack mobs  
* plusieurs tier de spawner  
  * amélioration de la vitesse de spawn  
  * moins de consommation  
  * plus de mob spawn  
* spawner par mob  
* spawner par type (peaceful / agressif …)  
* par groupe

XP (générique) : 

* implémente un component ECS qui ajoute une donnée XP au joueurs avec méthode pour ajouter et retirer de l’xp.

World : 

Job : 

* permet la compétition entre les joueurs  
* uniquement farmable  
* donne des avantages sur le serveur (global, pas uniquement dans le job)  
* courbe de progression  
* donne :   
  * commande  
  * argent  
  * cosmétiques  
  * items  
  * statistiques bonus  
    * fortune  
    * minage plus rapide  
* liste job   
  * mineur  
  * agriculteur  
  * chasseur  
  * mage ?  
  * gladiateur / Warrior  
  * job générique (peut-être juste un niveau de joueur)  
* niveau global (cumulatif des autres job)  
  * grade temporaire rapidement (niveau 5\) (1 semaine)  
  * donne des items  
  * commandes  
  * accès à des monde / event  
  * accès au donjon (ticket \+ craft ticket)  
* niveau par job  
  * niveau max job : 25  
  * donne des points de compétences (10 points)  
  * bonus en rapport avec le métier ex : minage \-\> miner plus vite  
  * limiter le gain d’xp par jour/semaine  
  * palier tous les 5 niveau avec event / quête / défis (avec formulaire feedback avec récompense)  
* gain xp  
  * minage  
    * miné (en fonction du minerai)  
    * récupérer cuit dans le four (securité faut que ce soit le même joueur qui place dans le four)  
    * event hebdo de farm avec top 1% / 20% / 50% (global au serveur \-\> inspi jacob’s farming conquest hypixel)  
    * quête journalière  
  * agriculteur  
    * recolter culture  
    * tuer / utiliser / reproduire mobs passifs  
    * taner / dressage  
    * \+ event hebdo / quête  
  * black-smith  
    * craft rune  
    * placer les runes sur les objets  
    * utiliser pendentifs  
    * craft armes, armures  
  * Tizen  
    * tuer mob (passifs / agressifs) / boss  
    * augmenter le pokedex  
    * tuer des fdps   
    * système de donjons  
    * \+ event hebdo / quête

![][image3]

Items and blocks : 

banque : 

* coffre fort d’item  
  * tier x2 entre tier   
  * en slot ou en ligne  
* /bank (pour les gens qui paye)  
* fbank (à voir avec le mod faction)

système de mise à prix en pvp : 

* ratio K/D (mort et kill pvp)  
* prime / % de money du joueur au kill

casino 👍 : 

* pierre-feuille-ciseau entre joueur  
* coin flip  
* roulette

Système runique pour les améliorations des équipements : 

* Fusionner directement sur l’équipement avec un pourcentage de chance de réussite, cependant si ca ne fonctionne pas réduit une stat de l’équipement  
* Table runique  
* Consomme des ressources  
* Avoir un maximum de Rune par équipement  
* Système de rareté  
  * Peu commun  
  * Commun  
  * Rare  
  * Épique  
  * Légendaire  
* Stats modifié  
  * Santé  
  * Résistance physique  
  * Résistance de projectile  
  * Effet d’augmentation des dégâts  
  * Effet de poison  
  * Effet de vitesse  
  * Effet de régénération  
  * Effet d’invincibilité  
  * etc…..

Arbre de compétences :

* Un arbre par joueur et peut être un faction ?  
* Avoir plus de compétences (50 compétences) que de points (40 points)  
* Ce que ca donne  
  * Stats permanentes  
  * débloquer des crafts  
  * Utilisation d’objets

Artefact/Relique :

* Donne un effet instant  
* Durabilité limité  
* non stackable

Mondes :

* Monde principale  
  * pas de mob dutout  
  * Spawn  
  * Warzone  
  * Ap  
  * Autour du spawn, Warzone et ap les chunks soient pleins  
* Monde minage  
  * monde aménagé avec spawn de minerais aléatoire, plus on va loin plus il y a des minerais rare (avec mobs potentiellement)  
* Monde farm  
  * Un genre de hub avec possibilité de farmer les mobs  
  * monde aménagé, avec petites structures stylé en lien avec le mob  
* Monde lobby  
  * Accès tous les serveurs  
  * Mini jeux

plugin stress-test

* spawn de “joueur”  
* actions  
  * ils cassent tous un bloc en même temps  
  * simule 200 ventes, achats dans le market  
  * …  
* monitor  
  * TPS  
  * RAM  
  * Ping  
  * temps d'exécution du bus event

https://essentialsx.net/commands

Système de monitoring complet externe au serveur permettant de monitorer entièrement toutes les fonctionnalités afin de prédire ce que les joueurs aimes ou n’aimes pas, utilisés ou n’utilises pas 

1. Part 1  
- [ ] Refaire un doc/wiki en mettant les idées aux propres  
        
2. Jouer au jeu

3. Organisation  
- [ ] Architecture du serveur, relation entre les mods  
- [ ] Créer des cartes sur le github avec les idées

4. Préparer le développement  
- [ ] Création d'un template de développement  
- [ ] Création de CI pour check les commits/merges

5. Développement  
- [ ] Tester les perfs du jeu  
- [ ] Développement des mods

6. Test des mods  
7. Serveur  
- [ ] Préparation du serveur  
- [ ] Relation entre les mods  
- [ ] Builds  
- [ ] Site \+ wiki  
- [ ] Serveur Discord

