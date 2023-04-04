'use strict';
const Generator = require('yeoman-generator');
module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.log('Initializing...');
    this.option('babel');
  }
  async start() {
    this.log('start')
    this.answers = await this.prompt([
        {
          type    : 'input',
          name    : 'name',
          message : 'Enter a name for the new component (i.e.: myNewComponent): ',
          default : this.appname
        },
        {
            type    : 'input',
            name    : 'msg',
            message : 'Enter a string message at the file: ',
            store : true
          },
      ])
  }

  writing(){
    this.destinationRoot(this.answers.name);
        this.fs.copyTpl(
        this.templatePath('index.html'),
        this.destinationPath(this.answers.name + '.html'),
            { message: this.answers.msg }
          );
    this.log("cool feature", this.answers.name); // user answer `cool` used
  }

  
};