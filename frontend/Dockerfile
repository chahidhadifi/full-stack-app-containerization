FROM node:18-alpine AS builder

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY --chown=appuser:appgroup . .

RUN npm run build

FROM nginx:1.26.2-alpine

COPY nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /app/dist /usr/share/nginx/html

RUN chown -R nginx:nginx /usr/share/nginx/html && chmod -R 755 /usr/share/nginx/html && \
    chown -R nginx:nginx /var/cache/nginx && chown -R nginx:nginx /var/log/nginx && \
    chown -R nginx:nginx /etc/nginx/conf.d && touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/run/nginx.pid

RUN apk update && apk upgrade && rm -rf /var/cache/apk/*

USER nginx

EXPOSE 5173

CMD ["nginx", "-g", "daemon off;"]