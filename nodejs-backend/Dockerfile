FROM node:18
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY index.js .
COPY utils /app/utils
CMD ["npm", "run", "dev"]