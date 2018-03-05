const shell = require('shelljs')

shell.rm('-rf', 'lib')
shell.exec('npx babel node_modules/style-resources-loader/lib --out-dir ./lib')
