# pull from registry
# docker compose pull

# re run the container(run all container except certbot)
docker compose up --scale certbot=0 -d