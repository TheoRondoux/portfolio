# Étape 1 : build
FROM node:25 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Étape 2 : serveur Nginx
FROM nginx:stable-alpine

# Copie du build dans le dossier Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Ajout de la config nginx personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 5173
CMD ["nginx", "-g", "daemon off;"]