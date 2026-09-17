# Site cmen.ch — Cabinet médico-esthétique Dr. Nathalie Jénin

Site vitrine statique (HTML/CSS/JS), sans dépendance ni build. Hébergé via GitHub Pages.

## Structure

```
index.html                    Accueil
medecine-esthetique.html      Liste des soins
soin-*.html                   12 pages de soins
a-propos.html                 Le cabinet, l'équipe, la philosophie
blog.html                     Liste des articles
article-*.html                Articles de blog
contact.html                  Coordonnées, horaires, plan
404.html                      Page d'erreur
assets/styles.css             Feuille de style unique (couleurs, typo, responsive)
assets/site.js                Menu mobile + accordéon FAQ
photos/                       Images
logo-*.svg / logo-icone.png   Logos
_archive/                     Pages mises de côté (non publiées)
```

## Modifier le site

Tout se modifie directement dans les fichiers HTML. Les couleurs et la typographie sont centralisées en haut de `assets/styles.css` dans le bloc `:root`.

### Ajouter un article de blog

1. Dupliquer un fichier `article-*.html` existant et le renommer avec des mots-clés (ex. `article-peeling-medical.html`)
2. Modifier le `<title>`, la `<meta name="description">`, le titre, la date, l'image de couverture et le texte
3. Mettre à jour les deux cartes « À lire aussi » en bas de page
4. Dans `blog.html`, dupliquer un bloc `<a class="post-card">` et pointer le `href` vers le nouveau fichier
5. Ajouter la page dans `sitemap.xml`

Articles actuels :
- `article-medecine-esthetique-neuchatel.html`
- `article-prp-plasma-riche-plaquettes.html`
- `article-peau-deshydratee.html`

### Ajouter un soin

Même principe : dupliquer une page `soin-*.html`, puis ajouter le lien dans le menu déroulant (présent dans chaque page), dans `medecine-esthetique.html` et dans `sitemap.xml`.

## Déploiement

Le site est publié automatiquement par GitHub Pages à chaque modification poussée sur la branche `main`.

- `CNAME` contient le domaine personnalisé (`cmen.ch`)
- `.nojekyll` désactive le traitement Jekyll (sert les fichiers tels quels)
- `sitemap.xml` et `robots.txt` pour le référencement
