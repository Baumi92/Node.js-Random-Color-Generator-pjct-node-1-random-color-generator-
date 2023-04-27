# Node.js Random Color Generator

Generates a block of approximately 31x9 '#' characters of a random color (using hex code, e.g. #ff0000) when a person enters a specific command in the command line.

```bash
$ node index.js
###############################
###############################
###############################
#####                     #####
#####       #ff0000       #####
#####                     #####
###############################
###############################
###############################

```

Or random colors based on input:

```bash
$ node index.js red light
###############################
###############################
###############################
#####                     #####
#####       #ff0201       #####
#####                     #####
###############################
###############################
###############################

```

It also accepts requests for a:

- hue (e.g. green or red or blue)
- luminosity (e.g. light or dark)

and then generate random colors that match those choices.

## Todo

- [x] Create a Git Hub repo
- [x] Clone the GitHub repo
- [x] Setup 'package.jason'
- [x] Setup the ESLint config
- [x] Create an 'index.js' and implement the following:
- [x] Generate some random color (Hex code)
- [x] Create a 31x9 # Pattern
- [x] Paint the pattern with color
