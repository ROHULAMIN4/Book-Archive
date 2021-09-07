
const errorHnadalingEmptyinput=document.getElementById('ErrorhandlingEmptyInput').style.display='none';
const unexpextedInput=document.getElementById('ErrorhandlingUnexperctedInput').style.display='none';

const inputdata=()=>{
    const inputField=document.getElementById('inputField');
    const inputElement=inputField.value;
    inputElement.textContent = '';
    // const text = node.textContent;
    if(inputElement===''){
        document.getElementById('ErrorhandlingEmptyInput').style.display='block';
    }
    else{
      document.getElementById('ErrorhandlingEmptyInput').style.display='none';
    }
    inputField.value='';
    const url=`https://openlibrary.org/search.json?q=${inputElement}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayData(data))
  
}
const displayData=(books)=> {
    // console.log(books)
   
    const span=document.getElementById('count-book');
    const bookCount=books.numFound;
    span.innerText=bookCount;

    // book count  
    if(books.docs.length>0){
      document.getElementById('text-amound').style.display='block'
    }

    books.docs.forEach((book) => {
        // card container 
       
        const container=document.getElementById('cardContainer');
        const div=document.createElement('div');
      const urlImg=` https://covers.openlibrary.org/b/id/${book?.cover_i}-M.jpg`
        div.classList.add('col');
        div.innerHTML=`
        <div class="card">
       
        <div class="card-body">
        <img src="${urlImg}" class="card-img-top" alt="...">
          <h5 class="card-title"><span class='text-warning'> Book Name:</span><span class='text-info'> ${book.title}</span></h5>
          <h6 class="card-title"><span class='text-warning'> Authur Name:</span><span class='text-info'> ${book.author_name}</span></h6>
          <h6 class="card-title"><span class='text-warning'> First Published Year :</span><span class='text-info'> ${book.first_publish_year}</span></h6>
          <h6 class="card-title"><span class='text-warning'> Publisher :</span><span class='text-info'> ${book.publisher[0]}</span></h6>

         
        </div>
      </div> 
        `;
        container.appendChild(div)
 
    });

 
}



