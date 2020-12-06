
let postsContainer = []

let blogCard

const newBlogModal = document.getElementById('newBlogModal')
const imageInput = document.getElementById('imageInput')
const titleInput = document.getElementById('titleInput')
const descriptionInput = document.getElementById('descriptionInput')

const deleteBlogModal = document.getElementById('deleteBlogModal')

function updateBlogs() {
    fetch("http://167.99.138.67:1111/getallposts")
   .then(res => res.json()).then(json => {
      let postsContainer = document.getElementById('postsContainer')

      for (let i=0; i<json.data.length; i++) { 
        blogCard = document.createElement('div')       
        blogCard.setAttribute('id', json.data[i].id)
        blogCard.setAttribute('class', 'blogCard')

        let img = document.createElement('img')
        img.setAttribute('class', 'blogImages')
        img.src = json.data[i].image
        
        let titleText = document.createElement('a')
        titleText.href = `../Blog%20page/blog.post.html?id=${json.data[i].id}`
        titleText.innerText = json.data[i].title

       let description = document.createElement('h5')
       description.innerText = json.data[i].description

       let username = document.createElement('h5')
       username.innerText = json.data[i].username
       username.href = ""
       

        let timeText = document.createElement('h4')
        timeText.innerHTML = json.data[i].timestamp

        let timestampData = json.data[i].timestamp
        let fullDate = new Date(timestampData * 1000);
        let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        let month = months[fullDate.getMonth()];
        let date = fullDate.getDate();
        let hour = fullDate.getHours();
        let min = fullDate.getMinutes();
        let sec = fullDate.getSeconds();
        let formattedTime = date + ' ' + month + ' ' + hour + ':' + min + ':' + sec ;
        let datePost = document.createElement('h4')
        datePost.innerText = formattedTime
        
        
        let updateButton = document.createElement('button')
        updateButton.setAttribute('class', 'editButton')
        updateButton.innerText = "EDIT"
        updateButton.addEventListener('click', addBlogModal)

        let removeButton = document.createElement('button')
        removeButton.setAttribute('class', 'removeButton')
        removeButton.innerText = "Remove"
        removeButton.addEventListener('click', ()=> {
          removeBlog(json.data[i].id)
          

        })


        let els = [img, titleText, description,username, datePost, updateButton, removeButton ]
        els.map(el => {
          blogCard.appendChild(el)
        })

        postsContainer.appendChild(blogCard)
      
        
      }
      
      
    })
}

let addButton = document.createElement('button')
addButton.setAttribute('class','mt-2 addBlogBtn')
addButton.innerText = "ADD NEW BLOG"
addButton.addEventListener('click', addBlogModal)
let buttons = document.getElementById('buttons')
buttons.appendChild(addButton)



function removeAllBlogs() {
  let elements = document.getElementsByClassName("blogCard")
  for (let i= elements.length-1; i>=0; i--) {
    elements[i].remove();
  }

}

function removeBlog(id) {
  let deleteBlog = {
      secretKey: "ae1ZtcDKPIHf0VwkoUry",
      id: id
  } 
  
  fetch("http://167.99.138.67:1111/deletepost", {
      method: "POST",
      mode: "cors",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(deleteBlog)
  }).then(res => res.json()).then(data => 
    { 
      removeAllBlogs()
      updateBlogs()
    })
    
}

let addNewBlog = document.getElementById('addNewBlog')
addNewBlog.addEventListener('click', addBlog)

function addBlog() {
  let newPost = {
    secretKey: "ae1ZtcDKPIHf0VwkoUry",
    title: titleInput.value,
    image: imageInput.value,
    description: descriptionInput.value
  }
  fetch("http://167.99.138.67:1111/createpost", {
      method: "POST",
      mode: "cors",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(newPost)
  }).then(res => res.json()).then(data => {
      removeAllBlogs()
      updateBlogs()
      turnOffBlogModal()
    })
}

function addBlogModal() {
  newBlogModal.style.display = 'block'
}

function turnOffBlogModal() {
  newBlogModal.style.display = 'none'
}

function updateBlog() {
  let updatePost = {
    secretKey: "ae1ZtcDKPIHf0VwkoUry",
    title: "asdfasasdf",
    image: "https://i.redd.it/bth03iqi2th21.jpg",
    description: "Nežinau, kurią nuotrauką gavote, nes jų gali būti ir ne viena. Rinkimų kampanijos metu politikai mielai fotografuojasi su galimais rinkėjais, – sakė A. Zuokas ir pridūrė. – Mano širdis ir smegenys yra laisvi. Suprantama, kad tenka bendrauti su daug kuo ir tai yra natūralu"
  }

  fetch("http://167.99.138.67:1111/updatepost", {
      method: "POST",
      mode: "cors",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(updatePost)
  }).then(res => res.json()).then(data => console.log(data))
  
}


window.onload = function(){
  document.getElementById('closeButton').onclick = function(){
      this.parentNode.parentNode.parentNode
      .removeChild(this.parentNode.parentNode);
      return false;
  };
};

function removeBlogModal() {
  deleteBlogModal.style.display = 'block'
}

// function particularUserBlogs() {
  
// }

function openPressedBlog() {
  fetch("http://167.99.138.67:1111/getsinglepost/pupudede/o6JbtlliWV'")
  .then(res => res.json()).then(data => {
  })
}


updateBlogs()


