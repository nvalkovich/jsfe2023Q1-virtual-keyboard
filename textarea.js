class Textarea {
  constructor() {
    this.element = Textarea.createElement();
  }

  handleButtonClick(button) {
    this.element.value += button.en;
  }

  static createElement() {
    const textarea = document.createElement('textarea');
    textarea.className = 'textarea';

    return textarea;
  }
}

export default Textarea;
