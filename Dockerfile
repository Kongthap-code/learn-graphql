FROM node:lts AS api
WORKDIR /api
COPY package*.json ./
RUN ["npm","install"]
COPY . ./
RUN ["npx","prisma","generate"]
CMD ["npm", "start"]