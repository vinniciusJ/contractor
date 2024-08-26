FROM nginx:1.25.5-alpine

COPY  ./dist /usr/share/nginx/html

RUN mkdir /etc/nginx/templates
COPY nginx/default.conf.template /etc/nginx/templates
COPY nginx/nginx.conf /etc/nginx/nginx.conf

CMD [ "nginx", "-g", "daemon off;" ]
