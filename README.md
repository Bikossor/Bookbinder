# Bookbinder
Easy-to-use templating for your markdown files.

## Installation
```shell
$ npm install bookbinder -g
```

## Setup
### Test.book
```markdown
# Bookbinder

{{ date }}
{{ time }}
```
See the list of supported tokens [here](/wiki/Tokens).

## Usage
- Open your terminal
- Navigate to the directory which contains your ``.book`` file
- Run the following command:
```shell
$ bookbinder
```

and Bookbinder turns your template into the following:
```markdown
# Bookbinder

Sun Nov 03 2019
12:34:56 GMT+0100 (GMT+01:00)
```

*Note that this tool is still work in progess.*