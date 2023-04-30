class Button {
  constructor({
    code,
    en,
    ru,
    classNames,
  }) {
    this.code = code;
    this.en = en;
    this.ru = ru || en;
    this.classNames = classNames || [];
    this.element = this.createElement();
  }

  createElement() {
    const button = document.createElement('div');
    button.className = 'btn';
    button.id = this.code;
    button.innerHTML = this.en;
    this.classNames.forEach((element) => {
      button.classList.add(element);
    });

    return button;
  }

  down() {
    this.element.classList.add('btn-down');
  }

  up() {
    this.element.classList.remove('btn-down');
  }
}

export default Button;
