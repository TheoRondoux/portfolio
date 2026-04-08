# Portfolio

Un portfolio personnel moderne et interactif construit avec **React**, **TypeScript**, **Tailwind CSS** et **Vite**.

## 🎯 Caractéristiques

- ⚡ **Vite** : Build ultra-rapide et hot module replacement
- ⚛️ **React 19** : Dernière version avec fonctionnalités modernes
- 🎨 **Tailwind CSS** : Système de design utilitaire puissant
- 📘 **TypeScript** : Code type-safe et robuste
- 🛣️ **React Router** : Navigation fluide entre les pages
- 🐳 **Docker** : Déploiement containerisé avec Nginx
- ✨ **Responsive** : Design adaptable à tous les appareils
- 📱 **Icons** : Icônes Tabler intégrées

## 📁 Structure du Projet

```
portfolio/
├── src/
│   ├── components/          # Composants réutilisables
│   │   ├── LegalCategory/
│   │   ├── TrButton/
│   │   ├── TrCard/
│   │   ├── TrFooter/
│   │   ├── TrHeader/
│   │   └── TrSticker/
│   ├── pages/              # Pages de l'application
│   │   ├── Landing/        # Page d'accueil
│   │   ├── MentionsLegales/
│   │   └── PolitiqueConfidentialite/
│   ├── layouts/            # Mises en page
│   ├── router/             # Configuration du routeur
│   ├── assets/             # Images et icônes
│   ├── index.css           # Styles globaux
│   └── main.tsx            # Point d'entrée React
├── public/                 # Fichiers statiques
├── docker-compose.yml      # Configuration Docker Compose
├── Dockerfile              # Configuration Docker
├── vite.config.ts          # Configuration Vite
├── tsconfig.json          # Configuration TypeScript
├── eslint.config.ts       # Configuration ESLint
└── package.json           # Dépendances du projet
```

## 🚀 Démarrage Rapide

### Prérequis

- **Node.js** 18+ ou **npm** 9+

### Installation

1. **Cloner le dépôt**

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```
   L'application sera disponible à `http://localhost:3000`

### Build pour la Production

```bash
npm run build
```

Les fichiers compilés seront dans le dossier `dist/`.

### Aperçu du Build

```bash
npm run preview
```

## 📦 Dépendances Principales

### Production
- **react** (^19.2.4) - Bibliothèque UI
- **react-dom** (^19.2.4) - Rendu DOM
- **react-router-dom** (^7.14.0) - Routage
- **tailwindcss** (^4.2.2) - Framework CSS
- **@tailwindcss/vite** (^4.2.2) - Plugin Vite
- **@tabler/icons-react** (^3.41.1) - Icônes vectorielles

### Développement
- **typescript** (~5.9.3) - Langage typé
- **vite** (^8.0.1) - Build tool
- **@vitejs/plugin-react** (^6.0.1) - Plugin React pour Vite
- **eslint** (^9.39.4) - Linter
- **@types/react** (^19.2.14) - Types TypeScript

## 🐳 Docker

### Déploiement avec Docker

1. **Construire l'image**
   ```bash
   docker build -t portfolio:latest .
   ```

2. **Lancer le conteneur**
   ```bash
   docker run -p 5173:5173 portfolio:latest
   ```

### Déploiement avec Docker Compose

```bash
docker-compose up
```

Le Dockerfile utilise une build multi-étapes :
- **Étape 1** : Build avec Node.js
- **Étape 2** : Serveur Nginx allégé pour la production

## 📝 License

Ce projet est sous license [MIT](LICENSE).

## 👤 Auteur

**Théo Rondoux** - Portfolio personnel

---