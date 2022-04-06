## docker-node-react-mariadb-ts
setup with github action & docker hub & ssl 

> run on developement

```bash
npm run dev
//or rebuild while start the docker
npm run dev_build
```

> run on production

- create _tmp_volume folder and put it in the .gitignore file
- create docker-compose.stage.yml file
- **create init.sh script (change the domain name there)**
- **change the domain** in _nginx/config/* files (2 config file)
- **change API URL** from dokcer compose client_build env 
- **change the domain** in dokcer compose certbot service