# EasyTech Client Frontend

Frontend pour EasyTech, une plateforme de services informatiques.

## Technologies

- React.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- React Query
- Wouter pour le routing

## Prérequis

- Node.js v18+
- npm ou yarn

## Variables d'environnement

Créez un fichier `.env` à la racine du projet client en vous basant sur `.env.example` :

```bash
# URL de l'API backend (en développement local)
VITE_API_URL=http://localhost:5000/api

# Pour production (après déploiement sur Render)
# VITE_API_URL=https://easytech-api.onrender.com/api
```

## Installation

```bash
# Installer les dépendances
npm install

# Démarrer en mode développement
npm run dev

# Compiler pour la production
npm run build

# Prévisualiser la version de production
npm run preview
```

## Structure du projet

```
client/
├── public/             # Ressources statiques
├── src/
│   ├── assets/         # Images, icônes, etc.
│   ├── components/     # Composants React réutilisables
│   │   └── ui/         # Composants UI shadcn
│   ├── hooks/          # Custom hooks React
│   ├── lib/            # Utilitaires et configuration
│   ├── pages/          # Pages de l'application
│   ├── types/          # Définitions de types TypeScript
│   ├── App.tsx         # Composant racine
│   ├── main.tsx        # Point d'entrée
│   └── index.css       # Styles globaux
├── index.html          # Template HTML
├── vite.config.ts      # Configuration Vite
└── tsconfig.json       # Configuration TypeScript
```

## Caractéristiques

- **Design responsive** optimisé pour mobile, tablette et desktop
- **Thème personnalisé** avec la palette de couleurs EasyTech
- **Authentification utilisateur** avec gestion de session
- **Blog** avec articles et catégories
- **Formulaires** de contact et réservation
- **Système de réservation** pour les services IT
- **Témoignages clients**
- **Newsletter**

## Routes

- `/` - Page d'accueil
- `/about` - À propos
- `/services` - Nos services
- `/services/:id` - Détails d'un service
- `/blog` - Articles de blog
- `/blog/:id` - Article spécifique
- `/contact` - Contact
- `/login` - Connexion
- `/register` - Inscription
- `/profile` - Profil utilisateur (réservé aux utilisateurs connectés)
- `/bookings` - Réservations (réservé aux utilisateurs connectés)

## Déploiement

Ce projet est configuré pour être déployé sur Vercel.

1. Connectez votre compte GitHub à Vercel
2. Importez le projet (dossier `client`)
3. Configurez les variables d'environnement
4. Définissez les paramètres de build appropriés si nécessaire

## Équipe

Fondé en juin 2025 par cinq étudiants de l'Institut F2i en architecture web :
- Borel Kamsu (Co-fondateur)
- Brice Fandio (Co-fondateur)
- Elhadj Oumar (Co-fondateur)
- Jordan Bell (Co-fondateur)
- Jules Gregoire (Co-fondateur)

## Licence

Copyright (c) 2025 EasyTech. Tous droits réservés.