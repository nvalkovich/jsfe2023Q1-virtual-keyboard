class Button {
  constructor({
    code,
    en,
    ru,
    enShift,
    ruShift,
    classNames,
    isSpecial,
  }) {
    this.code = code;
    this.en = en;
    this.ru = ru || en;
    this.enShift = enShift;
    this.ruShift = ruShift || enShift;
    this.hasShift = !!enShift;
    this.classNames = classNames || [];
    this.element = this.createElement();
    this.isSpecial = !!isSpecial;
  }

  createElement() {
    const button = document.createElement('div');
    button.className = 'btn';
    button.id = this.code;
    button.innerText = this.en;
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

  displayShift() {
    if (this.hasShift) {
      this.element.innerText = this.enShift;
    } else if (!this.isSpecial) {
      this.element.innerText = this.en.toUpperCase();
    }
  }

  hideShift() {
    if (this.hasShift) {
      this.element.innerText = this.en;
    } else if (!this.isSpecial) {
      this.element.innerText = this.en.toLowerCase();
    }
  }
}

export default Button;
