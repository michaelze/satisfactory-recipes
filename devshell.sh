#!/bin/bash

docker run --rm -ti -v $(pwd):/app --user 1000 --workdir /app node:latest "$@"
