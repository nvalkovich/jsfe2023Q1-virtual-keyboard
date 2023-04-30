import Button from './button.js';
import config from './config.js';

class Keyboard {
  constructor() {
    this.buttons = config.map((c) => new Button(c));
    document.addEventListener('mousedown', this.mousedownHandler.bind(this));
    document.addEventListener('mouseup', this.mouseupHandler.bind(this));
    document.addEventListener('keydown', this.keydownHandler.bind(this));
    document.addEventListener('keyup', this.keyupHandler.bind(this));
    this.element = this.createElement();
  }

  mousedownHandler(e) {
    if (!e.target.classList.contains('btn')) return;

    const button = this.buttons.find((b) => b.code === e.target.id);
    button.down();
    this.callback(button);
  }

  mouseupHandler() {
    this.buttons.forEach((b) => b.up());
  }

  keydownHandler(e) {
    e.preventDefault();
    const button = this.buttons.find((b) => b.code === e.code);
    button.down();
    this.callback(button);
  }

  keyupHandler(e) {
    e.preventDefault();
    const button = this.buttons.find((b) => b.code === e.code);
    button.up();
  }

  createElement() {
    const keyboard = document.createElement('div');
    keyboard.className = 'keyboard';
    this.buttons.forEach((b) => keyboard.append(b.element));

    return keyboard;
  }

  onButtonClick(callback) {
    this.callback = callback;
  }
}

export default Keyboard;
