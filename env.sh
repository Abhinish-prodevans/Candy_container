#!/usr/bin/env bash
if test; then
    echo -e "env = {\nHOST: '$SERVICE_HOST',\nPORT: '$SERVICE_PORT'\n};" > $(pwd)/src/env.js
else
    echo
fi
