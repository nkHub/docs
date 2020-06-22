# docker

#### [下载](https://hub.docker.com/editions/community/docker-ce-desktop-mac)

#### 镜像获取

```bash
  # 镜像搜索
  sudo docker search 镜像名称
  # 从[仓库](hub.docker.com/)拉取镜像
  sudo docker pull 用户名/镜像名:版本号
  # 已下载镜像列表查看
  docker images
  # 镜像详细信息
  sudo docker inspect 镜像名:版本号/镜像id
  # 镜像删除
  sudo docker rmi 镜像名:版本号
```

#### 创建、启动容器

```bash
  # 创建容器
  sudo docker create 
    -name 容器别名  
    -p 容器端口:外部端口     # 端口映射
    --link 容器别名/容器id  # 容器关联
    -expose 端口号         # 暴露端口 
    镜像名称:版本
  # 启动容器
  sudo docker start 容器别名
  # 一步创建并启动容器
  sudo docker run --name 容器别名 -d 镜像名称:版本
```

#### 容器管理

```bash
  # 查看容器列表
  sudo docker ps -a
  # 关闭容器
  sudo docker stop 容器别名/容器id
  # 删除容器
  sudo docker rm 容器别名/容器id
  # 进入容器
  sudo docker exec -it 容器别名/容器id bash
  # 衔接到容器
  sudo docker attach 容器别名/容器id
```