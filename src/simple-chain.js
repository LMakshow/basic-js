const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === null) {
      this.chain.push('null')
    } else this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (this.chain[position - 1] == undefined) {
      this.chain = [];
      throw Error("You can\'t remove incorrect link!");
    };
    this.chain.splice((position - 1), 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let finishedChain = `( ${this.chain.join(' )~~( ')} )`;
    this.chain = [];
    return finishedChain;
  }
};

module.exports = {
  chainMaker
};
