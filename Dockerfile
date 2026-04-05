# ============================================================
# Stage 1 — Build the React application (Vite)
# ============================================================
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the app (Vite)
RUN npm run build

# ============================================================
# Stage 2 — Serve with Nginx
# ============================================================
FROM nginx:1.27-alpine AS production

# Install wget for healthcheck
RUN apk add --no-cache wget

# Remove default Nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built app from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost/health || exit 1

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]