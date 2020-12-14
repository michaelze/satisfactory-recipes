#!/bin/bash

docker run --rm -ti -p 3000:3000 -v $(pwd):/app --user 1000 --workdir /app node:latest yarn dev