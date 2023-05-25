//your code here
const divs = document.querySelectorAll('div');

divs.forEach(div => {
  div.addEventListener('dragstart', dragStart);
  div.addEventListener('dragover', dragOver);
  div.addEventListener('drop', drop);
});