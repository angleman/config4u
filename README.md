# config4u

Environment, command line or JSON file with comments and single quotes

Wanted multiple tiered config like [config]() https://github.com/lorenwest/node-config will use ```NODE_ENV``` and [ALCE](https://github.com/walmartlabs/ALCE) parsing like [getconfig](https://github.com/HenrikJoreteg/getconfig) with the added ability to define ```config.json``` directory or filename via command line ```--config``` or environment variable ```NODE_CONFIG_DIR```

## Install :hammer:

```sh
npm install config4u
```

## Usage :bulb:

```js
{
    postgres: {
        "url": '...', // database connection url
    }
}
```

```js
config = new require('config4u')({ default: "values"})
dburl  = config.postgres.url
```

```sh
node myapp.js --config dir_or_filename // /somepath for /somepath.config.json or dev_config.json for /current_dir/dev_config.json
```

## Assignment order

- Passed in defaults
- ```config.json``` file (in current application directory if not defined by ```--config```)
- ```config.json``` file (as defined by ```--config```)
- ```config.json``` file (optionally if defined by ```NODE_CONFIG_DIR```)
- ```NODE_ENV``` environment value as JSON string, ex: ```NODE_ENV = "{postgres: {url: '...'}}"```

## Contributions :muscle:

:smile: Feedback, problem reports, enhancement requests are welcome.

:up: Example code are better.

:cool: Pull requests are best.

## License

### MIT
