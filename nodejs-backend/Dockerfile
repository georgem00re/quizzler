FROM node:18
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY index.js .
COPY utils /app/utils
EXPOSE 3000
CMD ["npm", "run", "dev"]