FROM node:lts AS api
WORKDIR /api
COPY package*.json ./
RUN ["npm","install"]
COPY . ./
CMD ["npm", "start"]