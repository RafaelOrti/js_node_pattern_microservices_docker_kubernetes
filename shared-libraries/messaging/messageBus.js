// shared-libraries/messaging/messageBus.js

class MessageBus {
  constructor() {
    this.subscribers = {};
  }

  subscribe(event, callback) {
    if (!this.subscribers[event]) {
      this.subscribers[event] = [];
    }
    this.subscribers[event].push(callback);
  }

  publish(event, data) {
    const subscribers = this.subscribers[event];
    if (subscribers) {
      subscribers.forEach(callback => callback(data));
    }
  }
}

module.exports = new MessageBus();
