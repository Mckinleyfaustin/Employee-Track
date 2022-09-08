const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = 'Engineer'
    }
    
    getgithub() {
        return this.github;
    }
  }
  
  module.exports = Engineer;

// pretend you have an Engineer object called Eduardo
// Eduardo.getgithub(); // this will return the value that is stored in the property 'github'