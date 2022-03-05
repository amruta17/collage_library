//constructor
function Book(name, author, type){
    this.name= name;
    this.author= author;
    this.type=type;
}

//display constructor
function display(){

}

//add methods to display prototype
display.prototype.clear=function(){
    let libraryform= document.getElementById('libraryform');
    libraryform.reset();


}





// add submit event listerner to form
let libraryform= document.getElementById('libraryform');
libraryform.addEventListener('submit', libraryformsubmit);



function libraryformsubmit(e){
    e.preventDefault();
    
    let name= document.getElementById('bookname').value;
    let author= document.getElementById('author').value;
    let type;
    let datastructure= document.getElementById('datastructure');
    let programming= document.getElementById('programming');
    let cooking= document.getElementById('cooking');
    if(datastructure.checked){
        type=datastructure.value;
    }
    else 
    if(programming.checked){
        type=programming.value;
    }
    else if(cooking.checked){
        type=cooking.value;
    }

    let book= new Book(name,author,type);
console.log(book);
display.clear();
    
    console.log("you have submitted")
}