FROM node:20-alpine
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm  &&  pnpm install --force
COPY . .
EXPOSE 3005
CMD ["pnpm", "run","start"]