// You may wish to find an effective randomizer function on MDN.
function range(int) {
  const arr = [];
  for (let i = 0; i < int; i += 1) {
    arr.push(i);
  }
  return arr;
}

function sortFunction(a, b, key) {
  if (a[key] < b[key]) {
    return -1;
  } if (a[key] > b[key]) {
    return 1;
  }
  return 0;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max-min+1) + min); //The maximum is inclusive and the minimum is inclusive 
}

document.body.addEventListener('submit', async (e) => {
  e.preventDefault(); // this stops whatever the browser wanted to do itself.
  const form = $(e.target).serializeArray(); // here we're using jQuery to serialize the form
  fetch('/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  })
    .then((fromServer) => fromServer.json())
    .then((fromServer) => {
      if(document.querySelector('.flex-inner')){
        document.querySelector('.flex-inner').remove();
      }
    const contArr = range(10);
    const contlArr = contArr.map(() => {
      const contNum = getRandomInt(0, 243);
      return fromServer[contNum];
    });
    const rvList = contlArr.sort((a,b) => sortFunction(b,a,'name'));

    const ol = document.createElement('ol');
    ol.className = "flex-inner";
    $('form').prepend(ol);

    rvList.forEach((el, i)=>{
      const li = document.createElement('li');
      $(li).append(`<input type = "checkbox" value = ${el.code} id = ${el.code}/>`);
      $(li).append(`<label for=  ${el.code}> ${el.name}</label>`);
      $(ol).append(li);
    });
    })
    .catch((err) => console.log(err));
});