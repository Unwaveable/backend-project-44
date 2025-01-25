install: #установить модули
	npm ci
brain-games: #запуск программы
	node bin/games/brain-games.js
publish: #паблиш
	npm publish --dry-run
lint: #запуск eslint
	npx eslint .