lint:
	npx eslint .

start:
	genDiff __test__/__fixtures__/before.json __test__/__fixtures__/after.json

test:
	npx jest --watchAll

build:
	npm run build

publish:
	npm publish --dry-run

install:
	sudo npm link