# Builder container
FROM node:14.16.0-alpine AS builder
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Runner container
FROM node:14.16.0-alpine
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/build /usr/src/app/build
RUN npm install -g serve
EXPOSE 8080
CMD ["serve", "-s", "build", "-l", "8080"]