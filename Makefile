lint:
	npx eslint .

test:
	npx babel-node src/bin/gendiff.js __test__/before.json __test__/after.json

start:
	gendiff __test__/__fixtures__/before.json __test__/__fixtures__/after.json

jest:
	npx jest --coverage

build:
	npm run build

publish:
	npm publish --dry-run

install:
	npm link