FROM node:12-alpine AS build

# Install build dependencies for node modules
RUN apk add git python make g++

# Set workdir
WORKDIR /app

# Add package.json and yarn.lock
ADD package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy resources
ADD . .

# Build static site
RUN yarn build

# Deploy built distribution to nginx
FROM nginx:alpine
COPY --from=build /app/dist/ /usr/share/nginx/html/
COPY .docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY .docker/mime.types /etc/nginx/mime.types