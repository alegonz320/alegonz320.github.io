function testFunction() {
    const myHeading = document.querySelector('h1', 'title');
    myHeading.textContent = 'Lab 5 for Marta Gonzalez';

    const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

btn.onclick = function() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}
}