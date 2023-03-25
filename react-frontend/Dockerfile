FROM node:18
WORKDIR /app
COPY package.json
RUN npm install
COPY tsconfig.json .
COPY tsconfig.node.json .
COPY vite.config.ts .
COPY src /app/src
EXPOSE 5173
CMD ["npm", "run", "dev", "--host"]