FROM node:16.9.1-alpine
WORKDIR /index
COPY package*.json ./
RUN npm install
COPY . ./
EXPOSE 3000
CMD ["npm","start"]