FROM node:20-alpine AS builder
WORKDIR /app

ENV NEXT_PUBLIC_API_URL=https://api.kaveycode.com/api/v1

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000
CMD ["npm", "start"]