# ===== Builder Stage ===== (For generating Prisma client)
FROM node:18.17.0-alpine AS builder

WORKDIR /slightly_techie
COPY package*.json ./
COPY prisma ./prisma/

RUN npm install
RUN npx prisma generate



# ===== Development Stage ===== (With hot-reload)
FROM node:18.17.0-alpine AS dev

WORKDIR /slightly_techie
# Copy from builder (node_modules + generated Prisma client)
COPY --from=builder /slightly_techie/node_modules ./node_modules
COPY --from=builder /slightly_techie/prisma ./prisma

# Install nodemon globally for hot-reload
RUN npm install -g nodemon

COPY . .

EXPOSE 5000
CMD ["nodemon", "--exec", "npm", "start"]  # Hot-reload on file changes




# ===== Production Stage =====
FROM node:18.17.0-alpine AS prod

WORKDIR /slightly_techie 

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install --omit=dev
RUN npx prisma generate

COPY . .

EXPOSE 5000
CMD [ "npm", "start"]