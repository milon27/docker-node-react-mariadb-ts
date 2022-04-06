#!/bin/bash

# cd into current project dir
cd "$(dirname "$0")"

docker compose run --rm certbot renew
