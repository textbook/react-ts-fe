#! /usr/bin/env bash
set -euo pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT='react-ts-fe'
CONTAINER="$PROJECT-e2e"

function compose() {
  docker-compose \
    --file "$HERE/../e2e/docker-compose.yml" \
    --project-name "$PROJECT" \
    --project-directory "$HERE/.." \
    "$@"
}

compose build
if compose run --name "$CONTAINER" e2e run e2e:run; then
  RESULT=0
else
  RESULT=1
fi

echo 'Storing test reports'
REPORTS="$HERE/../reports/docker/"
rm -rf "$REPORTS"
docker cp "$CONTAINER:/home/node/reports/e2e/." "$REPORTS"

compose down

exit "$RESULT"
