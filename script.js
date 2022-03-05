//constructor
function Book(name, author, type){
    this.name= name;
    this.author= author;
    this.type=type;
}

//display constructor
function Display(){
    

}

//add methods to display prototype
Display.prototype.add=function(book){
    tablebody=document.getElementById('tablebody');
    let uistring=`<tr>
  
    <td> ${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
  </tr>`

  tablebody.innerHTML += uistring;
  
}




Display.prototype.clear=function(){
    let libraryform= document.getElementById('libraryform');
    libraryform.reset();


}

Display.prototype.validate=function(book){
    if(book.name.length===0 || book.author.length===0){
        return false;
    }
    else{
        return true;
    }
}

Display.prototype.show=function(type,displaymeassage){
    let meassage= document.getElementById('message')
    meassage.innerHTML +=`<div class="alert ${type} alert-warning alert-dismissible fade show" role="alert">
    <strong>Holy guacamole!</strong> ${displaymeassage}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`
  setTimeout(function(){
      meassage.innerHTML="";

  },2000)
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
let display= new Display();
if(display.validate(book)){
display.add(book);
display.clear();
display.show('sucess','your book has been successfully added')
}
else{
    //show error to the user
    display.show('danger','sorry you cannnot add book')
}


    
    console.log("you have submitted")
}