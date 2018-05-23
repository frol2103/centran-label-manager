#!/bin/bash

set -ue
set -o pipefail

DIR=$(cd $(dirname $0) && pwd)

ls $DIR

docker run \
  -v ${URBAIN_ROOT:-$DIR}/src :/src \
  -u $(id -u)\
  --dns 10.23.142.11 \
  --dns 10.20.128.201 \
  bigbang.finbel.intra:5000/npm-angular:0.4 \
  sh -c 'npm run lint '
