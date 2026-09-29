# =========================================================
# Stage 1: Build
# =========================================================

FROM node:22-alpine AS builder

WORKDIR /app

# Copy dependency files first.
# This allows Docker to cache npm install when source code changes.
COPY package.json package-lock.json ./

RUN npm ci

# Copy TypeScript configuration
COPY tsconfig.json ./

# Copy application source
COPY src ./src

# Compile TypeScript -> dist/
RUN npm run build


# =========================================================
# Stage 2: Production
# =========================================================

FROM node:22-alpine AS production

WORKDIR /app

ENV NODE_ENV=production

# Install production dependencies only
COPY package.json package-lock.json ./

RUN npm ci --omit=dev \
    && npm cache clean --force

# Copy compiled application
COPY --from=builder /app/dist ./dist

# Resume and project files
COPY uploads ./uploads

# Application port
EXPOSE 8000

# Start compiled production application
CMD ["node", "dist/index.js"]