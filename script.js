let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    const developers = arr.map(employee => {
      if (employee.profession === "developer") {
        return employee;
      }
    }).filter(Boolean);
    console.log("Developers by Map:", developers);
  }
  
  function PrintDeveloperbyForEach() {
    let developers = [];
    arr.forEach(employee => {
      if (employee.profession === "developer") {
        developers.push(employee);
      }
    });
    console.log("Developers by ForEach:", developers);
  }
  
  function addData() {
    const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    arr.push(newEmployee);
    console.log("Array after adding new data:", arr);
  }
  
  function removeAdmin() {
    const updatedArr = arr.filter(employee => employee.profession !== "admin");
    console.log("Array after removing admin:", updatedArr);
  }
  
  function concatenateArray() {
    const newArr = [
      { id: 4, name: "susan", age: "20", profession: "developer" },
      { id: 5, name: "lucy", age: "22", profession: "designer" },
      { id: 6, name: "mark", age: "24", profession: "developer" }
    ];
    const concatenatedArr = arr.concat(newArr);
    console.log("Concatenated Array:", concatenatedArr);
  }
  