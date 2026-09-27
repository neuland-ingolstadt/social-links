FROM nginx:1.31.6-alpine3.24

RUN rm -rf /usr/share/nginx/html/*
COPY index.html styles.css theme.js i18n.js /usr/share/nginx/html/
COPY fonts/ /usr/share/nginx/html/fonts/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
