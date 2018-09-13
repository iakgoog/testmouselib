var shell = require('shelljs')

shell.cd('node_modules/win-mouse')
shell.rm('-rf', 'build')
shell.exec('node-gyp --debug rebuild')
shell.cd('../..')
shell.exec('npm run rebuild')
shell.exit(1)