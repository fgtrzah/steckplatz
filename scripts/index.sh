#!/usr/bin/env bash

modulename="${1:-Module}"
hookname="use$modulename"
path="lib/$modulename"

f1="$path/$modulename.tsx"
f2="$path/$modulename.test.tsx"
f3="$path/$modulename.stories.ts"
f4="$path/$hookname.ts"
f5="$path/index.ts"

mkdir -p "$path"

echo $(pwd)

touch "$f1"
touch "$f2"
touch "$f3"
touch "$f4"
touch "$f5"

ls -la@hG $(pwd)

exit 0
