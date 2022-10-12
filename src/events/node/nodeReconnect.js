const Event = require('@structures/Event');
const { Node } = require('shoukaku');

module.exports = class NodeReconnect extends Event {
  constructor(...args) {
    super(...args);
  }
  /**
   *
   * @param {Node} node
   */
  async run(node) {
    this.client.logger.ready(`[Node] - Successfully reconnected to ${node.name}`);
  }
};
