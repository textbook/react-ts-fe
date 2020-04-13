#! /usr/bin/env bash
set -euo pipefail

echo 'Preparing Heroku deploy'

heroku buildpacks:clear
heroku buildpacks:add heroku/nodejs
heroku buildpacks:add https://github.com/heroku/heroku-buildpack-static
