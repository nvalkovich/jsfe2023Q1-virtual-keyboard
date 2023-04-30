class Textarea {
  constructor() {
    this.element = Textarea.createElement();
    this.element.addEventListener('click', this.setPosition.bind(this));
    this.position = 0;
  }

  setPosition() {
    this.position = this.element.selectionStart;
  }

  handleButtonClick(button) {
    this.element.focus();
    switch (button.code) {
      case 'Enter':
        this.addSymbol('\n');
        break;
      default:
        this.addSymbol(button.en);
    }
    this.position += 1;
    this.element.selectionStart = this.position;
    this.element.selectionEnd = this.position;
  }

  addSymbol(symbol) {
    const { value } = this.element;
    this.element.value = value.slice(0, this.position) + symbol + value.slice(this.position);
  }

  static createElement() {
    const textarea = document.createElement('textarea');
    textarea.className = 'textarea';

    return textarea;
  }
}

export default Textarea;
