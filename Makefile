lint:
	npx eslint .

jsonStart:
	gendiff __test__/__fixtures__/json/before.json __test__/__fixtures__/json/after.json

yamlStart:
	gendiff __test__/__fixtures__/yaml/before.yml __test__/__fixtures__/yaml/after.yml

test:
	npx jest

build:
	npm run build

publish:
	npm publish --dry-run

install:
	sudo npm link