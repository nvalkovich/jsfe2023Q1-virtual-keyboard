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
    this.handleDown(e.target.id);
  }

  mouseupHandler() {
    this.buttons.forEach((b) => b.up());
    this.hideShift();
  }

  keydownHandler(e) {
    e.preventDefault();
    this.handleDown(e.code);
  }

  keyupHandler(e) {
    e.preventDefault();
    const button = this.buttons.find((b) => b.code === e.code);
    button.up();
    this.hideShift();
  }

  handleDown(code) {
    const button = this.buttons.find((b) => b.code === code);
    button.down();

    switch (code) {
      case 'ShiftLeft':
      case 'ShiftRight':
        this.buttons.forEach((b) => b.displayShift());
        break;
      case 'Enter':
        this.callback({ value: '\n' });
        break;
      case 'Backspace':
        this.callback({ removePrev: true });
        break;
      case 'Delete':
        this.callback({ removeNext: true });
        break;
      default:
        this.callback({ value: button.en });
    }
  }

  hideShift() {
    this.buttons.forEach((b) => b.hideShift());
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
