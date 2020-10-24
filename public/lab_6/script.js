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
      // You're going to do your lab work in here. Replace this comment.
     // console.table(countries);
     // const flexList = document.getElementsByClassName('.flex-inner');
     // for (i in range(10)){
      //  const rando = flexList.map(Math.floor(Math.random));
       // flexList[i] = rando;
       // for (j in range(flexList.length)){
       //   if(rando = flexList[j]){
        //    i--;
        //  }
      //  }

    //  }
    //  $ ("button").prepend($("flexList"));
      console.log('fromServer', fromServer);
    })
    .catch((err) => console.log(err));
});