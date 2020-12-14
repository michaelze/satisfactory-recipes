#!/bin/bash

docker run --rm -ti -v $(pwd):/app --user 1000 node:latest bash
