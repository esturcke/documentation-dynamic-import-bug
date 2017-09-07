# Documentation Does Not Support Dynamic Imports

See documentation [issue #902](https://github.com/documentationjs/documentation/issues/902).

## Steps to Reproduce

1. `git clone git@github.com:esturcke/documentation-dynamic-import-bug.git`
2. `cd documentation-dynamic-import-bug`
3. `yarn`
4. `./node_modules/.bin/documentation build src/index.js -f html -o docs`
