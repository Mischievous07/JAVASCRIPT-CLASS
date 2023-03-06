// <HTML>
<div class="output">
    <h1>Hello</h1>
    <div>Test</div>
    <ul>
        <li id="one">One</li>
        <li class="red">Two</li>
    </ul>
    <div>Test</div>
</div>
// --------------------------------
// JAVASCRIPT
const output = document.querySelector('.output');
const mainList = output.querySelector('ul');
mainList.id = 'mainList';

const divElements = output.querySelectorAll('div');
const divTagNames = [];
divElements.forEach((div) => {
  divTagNames.push(div.tagName.toLowerCase());
});
console.log(divTagNames);

for (let i = 0; i < divElements.length; i++) {
  divElements[i].id = 'id' + i;
  if (i % 2 === 0) {
    divElements[i].style.color = 'red';
  } else {
    divElements[i].style.color = 'blue';
  }
}
