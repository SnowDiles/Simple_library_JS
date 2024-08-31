function Books(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = function () {};
  this.info = `Le livre : ${title} écrit par ${author} contient ${pages} pages`;
}

const myLibrary = [];

function addBookToLibrary() {
  // Get user input
  let title = prompt("Enter the book's title:");
  let author = prompt("Enter the book's author:");
  let pages = prompt("Enter the number of pages:");

  // Create a new Book object
  let newBook = new Books(title, author, pages);

  // Add the new book to the library array
  myLibrary.push(newBook);

  // Optional: Display the added book details
  console.log("Book added:", newBook);
}

function showLibray(array) {
  const output = document.querySelector(".output");

  if (output) {
    output.innerHTML = "";

    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);

      let li = document.createElement("li");

      li.textContent = JSON.stringify(array[i], null, 2);
      output?.appendChild(li);

      

      let button = document.createElement("button");
      output?.appendChild(button);
      button.classList.add('button');
      button.textContent = 'Supprimer ce livre';
      button.id = String(i);

      let hr = document.createElement("hr");
      output?.appendChild(hr);

      button.onclick = function() {
        array.splice(button.id, 1);
        showLibray(array);
      };

    }
  }
}



function deleteBooks(params) {




  console.log("test");
  
}


// const h3 = document.createElement('h3');
// h3.textContent = "j'aime les pates";
// output?.appendChild(h3);
// h3.classList.add('highlight');
// h3.style.color = 'red';
// h3.style.textAlign = "center";
// h3.style.display = "inline"
