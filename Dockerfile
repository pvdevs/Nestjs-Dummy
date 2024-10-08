# Build stage
FROM node:20 as build

# Install pnpm globally
RUN npm i -g pnpm

WORKDIR /usr/src/app

# Copy pnpm-lock.yaml and package.json
COPY pnpm-lock.yaml package.json ./

# Install project dependencies using pnpm
RUN pnpm i

# Copy source code
COPY . .
EXPOSE 3001

# Build the application (this command should generate the `dist` directory)
RUN pnpm run build


# Command to run the container
CMD [ "pnpm", "start:dev" ]

# Prod stage
FROM node:20

WORKDIR /usr/src/app

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

COPY --from=build /usr/src/app/dist ./dist

COPY package*.json ./

RUN npm install --only=production --legacy-peer-deps

RUN rm package*.json

EXPOSE 3001

CMD ["node", "dist/main.js"]