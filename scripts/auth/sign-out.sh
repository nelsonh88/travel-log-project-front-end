#!/bin/bash

# sh assets/scripts/shell-files/sign-in.sh

curl "https://travel-log-app.herokuapp.com/sign-out" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \


echo
