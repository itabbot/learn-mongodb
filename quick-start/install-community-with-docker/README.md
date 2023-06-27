# 使用 Docker 安装 MongoDB 社区版

1. 拉取 MongoDB Docker 最新版镜像（[其他版本>>](https://hub.docker.com/r/mongodb/mongodb-community-server/tags)）

```sh
docker pull mongodb/mongodb-community-server:latest
```

2. 将镜像作为容器运行

```sh
docker run --name mongo -d mongodb/mongodb-community-server:latest
```

3. 检查容器是否正在运行

```sh
docker container ls
```

4. 连接到 MongoDB 部署 mongosh

```sh
> docker exec -it mongo mongosh

Current Mongosh Log ID: 649b04fa71ee472f8bd37856
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1
Using MongoDB:          6.0.6
Using Mongosh:          1.10.1
```
