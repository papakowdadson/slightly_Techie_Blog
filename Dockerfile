FROM node:18.17.0-alpine
WORKDIR /slightly_techie
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "node", "index.js"]
EXPOSE 5000