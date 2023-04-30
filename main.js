import buttons from './config.js';
import Button from './button.js';

document.addEventListener('DOMContentLoaded', () => {
  const keyboardWrapper = document.createElement('div');
  keyboardWrapper.className = 'keyboard-wrapper';
  document.body.append(keyboardWrapper);

  const title = document.createElement('h1');
  title.className = 'keyboard-wrapper__title';
  title.innerHTML = 'RSS Виртуальная клавиатура';
  keyboardWrapper.append(title);

  const textArea = document.createElement('textarea');
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
    keyBoard.append(button.element);
  }

  const description = document.createElement('p');
  description.className = 'keyboard-wrapper__description';
  description.innerHTML = 'Клавиатура создана в операционной системе Windows. Для переключения языка комбинация: .....';
  keyboardWrapper.append(description);
});
