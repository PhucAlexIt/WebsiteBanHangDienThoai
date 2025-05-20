# ===== Stage 1: Build React App =====
FROM node:18 AS builder

WORKDIR /app

# Copy file cấu hình trước để tận dụng cache layer
COPY package.json package-lock.json ./

# Cài đặt dependencies
RUN npm install

# Copy toàn bộ mã nguồn vào image
COPY . .

# Build project
RUN npm run build


# ===== Stage 2: Serve bằng Nginx =====
FROM nginx:stable-alpine AS production

# Copy build folder từ stage builder vào nginx static folder
COPY --from=builder /app/build /usr/share/nginx/html

# Expose cổng 80
EXPOSE 80

# Khởi động nginx ở foreground
CMD ["nginx", "-g", "daemon off;"]
