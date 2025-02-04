# Usamos una imagen base de Nginx
FROM nginx:latest

# Copiar archivos del proyecto al contenedor
COPY . /usr/share/nginx/html

# Exponer el puerto 3002 para evitar conflictos con los otros contenedores
EXPOSE 3002

# Arrancar Nginx
CMD ["nginx", "-g", "daemon off;"]
