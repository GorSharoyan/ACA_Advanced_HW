let tableBody=document.querySelector('.tbody')

fetch("https://ghibliapi.herokuapp.com/films")
  .then((data) => data.json())
  .then((data)=>{
    data.forEach(({title,description,director,producer,release_date})=>{
      createTableRow([title,description,director,producer,release_date]);
    }
    )
  });

  function createTableRow (values) {
    let list=document.createElement('ul');
    list.className='movies-list'
    values.forEach((value)=>{
    
     
      let listItem=document.createElement('li');
            listItem.innerText=value;
            console.log(listItem)
            list.append(listItem);
      
    })
    tableBody.append(list);

    
    
  }
