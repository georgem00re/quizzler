FROM node:18
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci

COPY tsconfig.json .
COPY tsconfig.node.json .
COPY vite.config.ts .

COPY src /app/src
CMD ["npm", "run", "dev", "--host"]