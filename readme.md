## docker-node-react-mariadb-ts
setup with github action & docker hub & ssl 

> run on developement

```bash
npm run dev
//or rebuild while start the docker
npm run dev_build
```

> run on production

- all the volume will be availble in ~/_tmp_volume this folder
- create docker-compose.stage.yml file
- **create init.sh script (change the domain name, git project name there)**
- **change the domain** in _nginx/config/* files (2 config file)
- **change API URL** from dokcer compose client_build env 
- **add/change the domain** in dokcer compose certbot service
- ___
- change **db name** in backup.sh file and server env based on mysql/mariadb config
- 2 crontab will be set automatically for current user check them by ``` crontab -e ```
- update docker.yml file based on your need
- all done.

> how to use
 - clone the repo.
 - work on client for react app
 - work on server for node app