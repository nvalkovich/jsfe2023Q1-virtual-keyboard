import buttons from './buttons.js';

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

    return button;
  }

  addOnClickEventListener(callback) {
    this.callback = callback;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const keyboardWrapper = document.createElement('div');
  keyboardWrapper.className = 'keyboard-wrapper';
  document.body.append(keyboardWrapper);

  const title = document.createElement('h1');
  title.className = 'keyboard-wrapper__title';
  title.innerHTML = 'RSS Виртуальная клавиатура';
  keyboardWrapper.append(title);

  const textArea = document.createElement('input');
  textArea.type = 'text';
  textArea.className = 'textarea';
  keyboardWrapper.append(textArea);

  const keyBoard = document.createElement('div');
  keyBoard.className = 'keyboard';
  keyboardWrapper.append(keyBoard);

  for (let i = 0; i < buttons.length; i += 1) {
    const button = new Button(buttons[i]);
    button.addOnClickEventListener((value) => {
      textArea.value += value;
    });
    keyBoard.append(button.toHtml());
  }

  const description = document.createElement('p');
  description.className = 'keyboard-wrapper__description';
  description.innerHTML = 'Клавиатура создана в операционной системе Windows. Для переключения языка комбинация: .....';
  keyboardWrapper.append(description);
});
