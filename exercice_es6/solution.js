task1:

// calculer age
const pets =[
    { name : "Max" , type: "dog", bornOn:2018},
    { name : "Angel" , type: "cat", bornOn:2015},
    { name : "jasber" , type: "dog", bornOn:2016}
]
function getAge(){

    let array = []
    for (let i = 0; i < pets.length; i++) {

        array.push(2023 - pets[i].bornOn )

    }
    return array
}
getAge()

 

// tale of only dogs
function dogs(){
    let onlyDogs=[];
    let j=0
    for(let i=0;i<pets.length;i++){
        if (pets[i].type==="dog"){
            onlyDogs[j]=pets[i]
            j++
        } 
    } return onlyDogs
} 
dogs()










// version ES6 correction task 1
const pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "jasber", type: "dog", bornOn: 2016 }
  ];
  
  const date = new Date().getFullYear();
  console.log(date);
  const getage = (bornOn) => date-bornOn;
  
  const petage=pets.map((el)=>({...el,age:getage(el.bornOn)}))
  console.log(petage);
  
  const dogs=pets.filter((el)=>el.type=="dog")
  console.log(dogs);
  
  const test=petage.find((el)=>el.name.toUpperCase()=="Jasber".toUpperCase())
  console.log(`${test.name} is ${test.age} years old`);





  // correction task 2 version es6
  task 2:
const removeZero=(arr)=>[...(arr.filter((el)=>el!=0)),...(arr.filter((el)=>el==0))]

console.log(removeZero([0,"hello",1,0,2,5,0]));
  


// correction task 3
task 3:
const str = "hello world!";

const test = str
  .split(" ")
  .map((el, index) => (index % 2 != 0 ? el.split("").reverse().join("") : el)).join(" ")
  console.log(test)
