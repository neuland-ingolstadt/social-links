FROM nginx:1.31.6-alpine3.24

ARG ASSET_VERSION=dev

RUN rm -rf /usr/share/nginx/html/*
COPY index.html styles.css theme.js i18n.js /usr/share/nginx/html/
COPY fonts/ /usr/share/nginx/html/fonts/
COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN sed -i "s/__ASSET_VERSION__/${ASSET_VERSION}/g" /usr/share/nginx/html/index.html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
