fetch("http://api.open-notify.org/astros.json")
  .then((responce) => responce.json())
  .then((json) => {
    const allAstr = json.people;
    const allNames = allAstr.map((astr) => astr.name);
  
    console.log(
      `There are ${allAstr.length} astronauts in space, they are: ${allNames}`
    );

    const numberAustr = document.querySelector('[data-id="number_austronauts"]');
    numberAustr.textContent = json.number;

    const listElement = document.querySelector('[data-id="austronaut_list"]');
    // const allAstr = json.people;
    allAstr.forEach(person => {
      const elem = document.createElement('li');
      elem.textContent = person.name;
      listElement.appendChild(elem);
      
    });
  });
