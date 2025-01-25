FROM node:18.17.0-alpine
WORKDIR /slightly_techie
COPY package*.json ./
COPY prisma ./prisma/

RUN npm install
RUN npx prisma generate

COPY . .
EXPOSE 5000
CMD [ "npm", "start"]