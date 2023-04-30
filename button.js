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
    this.element = this.toHtml();

    document.addEventListener('keydown', (e) => {
      if (e.code !== this.code) return;

      e.preventDefault();
      Button.handleDown.bind(this)();
    });

    document.addEventListener('keyup', (e) => {
      if (e.code !== this.code) return;

      e.preventDefault();
      Button.handleUp.bind(this)();
    });
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

  static handleDown() {
    this.element.classList.add('btn-down');
    this.callback(this.en);
  }

  static handleUp() {
    this.element.classList.remove('btn-down');
  }
}

export default Button;
