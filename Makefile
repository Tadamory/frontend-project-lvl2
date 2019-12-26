lint:
	npx eslint .

gendiff:
	npx babel-node src/bin/gendiff.js

build:
	npm run build

publish:
	npm publish --dry-run

install:
	npm link