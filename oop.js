class Person {

    _name;
    _dateOfBirth;
    _placeOfBirth;
  
    constructor(name, dateOfBirth, placeOfBirth){
      this._name = name;
      this._dateOfBirth = dateOfBirth;
      this._placeOfBirth = placeOfBirth;
      
    }
  
    get name(){
      return this._name;
    }
    
    set name(name){
      this._name = name;
    }
  
    get dateOfBirth(){
      return this._dateOfBirth;
    }
  
    talk(){
      return `Hi my name is ${this._name} and I was born in ${this._placeOfBirth}.`;
    }
    
  }
  
  
  class AdaStaff extends Person {
  
    _role;
    _base;
  
    constructor(name, dateOfBirth, placeOfBirth, role, base){
  
      super(name, dateOfBirth, placeOfBirth);
      this._role = role;
      this._base = base;
    }
  
    get base(){
      return this._base;
    }
    
    set base(base){
      this._base = base;
    }
  
    get role(){
      return this._role;
    }
    
    set role(role){
      this._role = role;
    }
  
    talk(){
      return `Hi my name is ${this._name}. I work in ${this._base} and my role is ${this._role}.`;
    }
    
    
  }

  class AdaStudent extends Person {
  
    _course;
    _company;
    _yearStarted;
  
    constructor(name, dateOfBirth, placeOfBirth, course, company, yearStarted){
  
      super(name, dateOfBirth, placeOfBirth);
      this._course = course;
      this._company = company;
      this._yearStarted = yearStarted;
    }
  
    get yearStarted(){
      return this._yearStarted;
    }
    
    set yearStarted(yearStarted){
      this._yearStarted = yearStarted;
    }
  
    get course(){
      return this._course;
    }
    
    set course(course){
      this._course = course;
    }
    
    get company(){
      return this._company;
    }

    set company(company){
      this.company = company;
    }
  
    talk(){
      return `Hi my name is ${this._name}. I started studying ${this.course} in ${this._yearStarted} and I work for ${this._company}.`;
    }
    
    
  }

  class Cohort {

    _cohortCode;
      
      constructor(cohortCode){
    
        this._cohortCode = cohortCode;
        this.cohort = [];
    
      }

      add(adaStudent){
        this.cohort.push(adaStudent)
        return this.cohort.length;
      }

      remove(studentName){
        for(let i= 0; i < this.cohort.length; i++){
          if(this.cohort[i].name === studentName ){
            this.cohort.splice(i, 1) 
            return "student deleted";
          }
        }
        return "student not found"
      }

      search(studentName){
        for(let i= 0; i < this.cohort.length; i++){
          if(this.cohort[i].name === studentName){
            return(`The student ${studentName} was found - they work at ${this.cohort[i].company}`)
          }
        }
        return "student not found"
      }

      list(){
        for(let i= 0; i < this.cohort.length; i++){
          console.log (this.cohort[i].name)
        }
      }
      
    }
    

//Create a new instance of Cohort called april24
const april24 = new Cohort("24-04-LDN-MCR");
//Create an AdaStudent object
const sumilA = new AdaStudent("Sumil Aryin", "22/12/2002", "London", "TC", "PwC", 2024);
//Add sumilA to the april24 cohort array
april24.add(sumilA);
//Create a new Ada student and add them to the array all in one line
april24.add(new AdaStudent("Jess Fryer", "02/02/1998", "Manchester", "TC", "PwC", 2024))
//Check the contents of the array.
april24.list()
// console.log(april24.remove("Jess Fryer"))
// april24.list()
console.log(april24.search("Jess Fryer"))
console.log(this.cohort)

    
  
  const aqil = new Person("Aqil Hussain", "01/01/2000", "Manchester");
  const steve = new AdaStaff("Steve Rich", "01/01/1998", "Lincoln", "Lecturer", "Manchester");
  const taryn = new AdaStudent("Taryn Bilsborough", "01/12/2019", "Blackburn", "Level 4 Software Development", "Moneysupermarket", 2024);
  
  
  
  // console.log(steve);
  // console.log(aqil);
  // console.log(steve.talk());
  // console.log(aqil.talk());
  // console.log(steve.name);
  // console.log(taryn.talk());
  // console.log(taryn)
  // console.log(taryn.talk())