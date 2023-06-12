docker stop bun
docker rm bun
docker run --name bun -v D:/Source/bun/test:/app -w /app -p 3333:3333 oven/bun -d frameworks/bun.ts
