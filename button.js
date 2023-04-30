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
  }

  toHtml() {
    const button = document.createElement('div');
    button.className = 'btn';
    button.innerHTML = this.en;
    this.classNames.forEach((element) => {
      button.classList.add(element);
    });

    button.addEventListener('mousedown', Button.handleDown.bind(this));
    button.addEventListener('mouseup', Button.handleUp.bind(this));

    return button;
  }

  addOnClickEventListener(callback) {
    this.callback = callback;
  }

  static handleDown(e) {
    e.target.classList.add('btn-down');
    this.callback(this.en);
  }

  static handleUp(e) {
    e.target.classList.remove('btn-down');
  }
}

export default Button;
