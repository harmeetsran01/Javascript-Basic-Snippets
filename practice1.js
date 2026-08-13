const obj1 = {
    id: 1,
    name:"Harmeet Singh",
    obj2:{class:"BCA",
        obj3:{
            name3:"This is end child object"
        }
    }
    
}

tempobj = Object.assign({},obj1) //copy obj1 to tempobj
console.log(tempobj);
tempobj = Object.keys(obj1) //returns array of keys
console.log(tempobj);
tempobj = Object.values(obj1) //returns array of values
console.log(tempobj);
tempobj = {...obj1} //exract values same as assign function
console.log(tempobj);

// document.getElementById("hi").textContent = JSON.stringify(tempobj);


//de-structure
const {name} = obj1 //It exacts the value of name and store to variable name
console.log(name)
const {obj2 : puchi } = obj1 //puchi is a varible
console.log(puchi) //same result

//same as below
const navbar = (company) => {
company:"abc"
}
navbar(company = "abc")

// func
let func = () => {
    console.log("Hi")
}

//rest operator

function calculation(val1,...num1){ //this is rest operator(...num1)
    return num1 //returns array
}
console.log(calculation(100,200,300)) 

//spread operator
const arr1 = [1,2,3,4]
const arr2 = [5,6,7,8]

console.log(...arr1,...arr2) //this is spread operator: spread values of arrays into another arrays

//Pass obj to func
const user = {
    username:"Sahil",
    id:0o7
}

function handleuser(anyobj){
console.log(`Username is ${anyobj.username} and id is ${anyobj.id}`);
}
handleuser(user)
handleuser({username:"Harmeet",id: 100})

//Pass array to func
const myNewArray = [100,200,300,400]
function returnSeconValue(getarray){
    return getarray[1]
}
console.log(returnSeconValue(myNewArray));
