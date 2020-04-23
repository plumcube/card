'use strict'
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

const data = {
  name: chalk.white('              Ben Ng'),
  handle: chalk.white('plumcube ') + chalk.red('⬢'),
  work: chalk.white('Director of Engineering @ BeeswaxIO Inc.'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.cyan('nycben'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('plumcube'),
  github: chalk.gray('https://github.com/') + chalk.green('plumcube'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~plumcube'),
  web: chalk.cyan('https://plumcube.com'),
  npx: chalk.green('npx') + ' ' + chalk.white('@plumcube/card'),
  labelWork: chalk.white.bold('       Work:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:')
}

const output = `${data.name} / ${data.handle}

${data.labelWork}  ${data.work}
${data.labelLinkedIn}  ${data.linkedin}
${data.labelTwitter}  ${data.twitter}
${data.labelGitHub}  ${data.github}
${data.labelnpm}  ${data.npm}
${data.labelWeb}  ${data.web}

${data.labelCard}  ${data.npx}`;

fs.writeFileSync(path.join(__dirname, 'bin/output'),
  chalk.green(boxen(output, {
    padding: 1,
    margin: 1,
    borderStyle: 'round'
  }))
);
