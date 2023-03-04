let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  function addNewKey(obj, key, value) {
    obj[key] = value;
  }
  
  addNewKey(lesson2, 'turno', 'noite');
  console.log(lesson2);

  function listKeys(obj){
    return Object.keys(lesson2);
  } console.log(listKeys(lesson2));

  function sizeObject(obj) {
    return Object.keys(obj).length;
  } console.log(sizeObject(lesson1));

  function valueObj(obj) {
    return Object.values(obj)
  } console.log(valueObj(lesson1));

  let allLessons = Object.assign({}, {
    lesson1: lesson1,
    lesson2: lesson2,
    lesson3: lesson3,
  }); 
  console.log(allLessons);