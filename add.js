showNotes();
let btn=document.getElementById("addbtn");
btn.addEventListener("click",function(e){
    let addTxt=document.getElementById("addTxt");
    let addTit = document.getElementById("addTit");
    let notes = localStorage.getItem("notes");
    if (notes==null){
        noteObj=[];
    (e).preventDefault();
    }
    else{
        noteObj=JSON.parse(notes);
    }
    let myObj={
        title : addTit.value,
        text: addTxt.value
    }
    noteObj.push(myObj);
    
    localStorage.setItem("notes",JSON.stringify(noteObj));
    
    addTxt.value = " ";

    
    showNotes();
})
function showNotes(){
    let notes = localStorage.getItem("notes");
    if (notes==null){
        noteObj=[];

    }
    else{
        noteObj=JSON.parse(notes);
    }
    let html ="";
    noteObj.forEach(function(element,index){
        html+=`
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${index+1}-${element.title}</h5>
          <p class="card-text">${element.text}</p>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
      </div>       
        `
    }
        
    );
    let notesEl = document.getElementById("notes");
    if(noteObj.length!=0){
     notesEl.innerHTML=html;
    }
    else{
        notesEl.innerHTML=`No Note Added.`;
    }
}
function deleteNote(index){
    let notes = localStorage.getItem("notes");
    if (notes==null){
        noteObj=[];
    }
    else{
        noteObj=JSON.parse(notes);
    }
    noteObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(noteObj));
    showNotes();
}
let search=document.getElementById("searchTxt");
search.addEventListener("input",function(){
    let inputVal = search.value;
    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function(element){
        let cardTxt=element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    })
})
