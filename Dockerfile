# Etapa de construcción
FROM node:20 AS build

# Establece el directorio de trabajo
WORKDIR /app

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia todo el código fuente de la aplicación
COPY . .

# Verifica la estructura de archivos en el contenedor (opcional para depuración)
RUN ls -R /app

# Construye la aplicación Angular
RUN npx ng build --output-path=dist --configuration production

# Etapa de producción
FROM nginx:alpine

# Copia los archivos construidos de la etapa anterior
COPY --from=build /app/dist/browser /usr/share/nginx/html

# Expone el puerto en el que Nginx escucha
EXPOSE 80

# Comando por defecto para ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]
