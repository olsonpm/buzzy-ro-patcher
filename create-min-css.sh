#! /usr/bin/env sh

cat css/ress.css css/hamburgers.css css/hover.css css/index.css > dist/ui/css/all.css
npx cleancss --compatibility ie7 -o dist/ui/css/all.min.css dist/ui/css/all.css
rm dist/ui/css/all.css
