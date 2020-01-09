lint:
	npx eslint .

start:
	gendiff __test__/__fixtures__/before.json __test__/__fixtures__/after.json

test:
	npx jest --coverage

build:
	npm run build

publish:
	npm publish --dry-run

install:
	npm link