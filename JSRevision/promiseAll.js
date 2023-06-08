const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 300, "resolved");
  }); //will be resolved after 300ms
  
  const promise2 = 93; //non-promise
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "resolved2");
  }); // will be resolved after 100ms
  
  Promise.all([promise1, promise2, promise3])
    .then((values) => {
      console.log(values);
    })
    .catch((err) => {
      console.log(err);
    });
  
  //expected output: [ 'resolved', 93, 'resolved2' ]