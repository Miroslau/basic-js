const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    if (arguments.length === 0) {
      this.chain.push('')
    } else {
      this.chain.push(String(value))
    }

    return this;
  },
  removeLink(position) {
    if (position <= 0 || position >= this.chain.length || typeof position !== 'number' || !Number.isInteger(position)) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!")
    }

    this.chain.splice(position - 1, 1);

    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.map(link => `( ${link} )`).join('~~');

    this.chain = [];

    return result;
  },
};
chainMaker.addLink(1).addLink(2);
console.log(chainMaker.finishChain())
//console.log(chainMaker.finishChain())

module.exports = {
  chainMaker,
};
