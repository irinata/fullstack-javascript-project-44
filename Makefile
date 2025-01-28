install: # Clean install the project
	npm ci

brain-games: # Start brain-games.js
	node bin/brain-games.js

publish: # Publish the package
	npm publish --dry-run
