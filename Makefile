lint:
	npx eslint .

test:
	npx babel-node src/bin/gendiff.js __test__/before.json __test__/after.json

start:
	gendiff __test__/before.json __test__/after.json

jest:
	npx jest --coverage

build:
	npm run build

publish:
	npm publish --dry-run

install:
	npm link