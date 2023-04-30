import Keyboard from './keyboard.js';

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

  const keyboard = new Keyboard();
  keyboardWrapper.append(keyboard.createElement());

  keyboard.onButtonClick((b) => {
    textArea.value += b.en;
  });

  const description = document.createElement('p');
  description.className = 'keyboard-wrapper__description';
  description.innerHTML = 'Клавиатура создана в операционной системе Windows. Для переключения языка комбинация: .....';
  keyboardWrapper.append(description);
});
