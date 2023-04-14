container=$(docker container ls -a | grep zsm-webapp-deployment)
image=$(docker image ls | grep zsm-webapp)

if [ ! -z "$container" ]; then
    docker stop zsm-webapp-deployment
    docker rm zsm-webapp-deployment
fi

if [ ! -z "$image" ]; then
    docker image rm zsm-webapp
fi

docker build -t zsm-webapp ./Server
docker run -d -p 3000:80 --add-host host.docker.internal:host-gateway --name=zsm-webapp-deployment zsm-webapp 
