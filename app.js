const news = 
[
  { 
    id: 1, 
    title: "NASA Dart Mission ", 
    content: "It was designed to assess how much a spacecraft impact deflects an asteroid through a transfer of momentum by hitting the asteroid head on and attempting to slow it.",
    image: url = "img/dart.jpg"
  },
  { id: 2, 
    title: "Hurricane Ian", 
    content: "The death toll from Hurricane Ian has reportedly risen to nearly 100 in Florida as rescue personnel continue to search for survivors.",
    image: url = "img/ian.jpg"

  },
  { id: 3, 
    title: "Trapped squirrel forces Greggs shop to close", 
    content: "An overly adventurous squirrel forced a Greggs shop to close after getting trapped inside." ,
    image: url="img/squirrel.jpeg"

  },
];

const titleInput = document.querySelector('#newsTitle');
const contentInput = document.querySelector('#newsContentInput');
const imageInput = document.querySelector('#imageInput');
const addNewsbtn = document.querySelector('#addNewsbtn');

//news array
const templateInput = document.querySelector('#card-list');

//load add event listeners

loadEventListeners();

function loadEventListeners() {
  document.addEventListener('DOMContentLoaded', getNewsList);
  addNewsbtn.addEventListener('click', addNews);

}

function getNews() {
  return news;
}

function addCard() {

  getNews().forEach((info) => {

    const template =
    document.getElementById("card-template").content.cloneNode(true);
    template.querySelector('.card-title').innerText = `${info.title}`;
    template.querySelector('.card-text').innerText = `${info.content}`
    document.querySelector('#card-list').prepend(template);
  })

}

const timer = setInterval(function () {
  addCard();
}, 5000);
  


//add cards from user inputs

function getNewsList() {

  let newsList;
  if(sessionStorage.getItem('newsList') === null) {
    newsList = [];
  } else {
    newsList = JSON.parse(sessionStorage.getItem('newsList'));
  }

  newsList.forEach(function(anyNews) {

  const template =
    document.getElementById("card-template").content.cloneNode(true);
    template.querySelector(".card-title").innerText = anyNews
    template.querySelector(".card-text").innerText = anyNews
    document.querySelector("#card-list").prepend(template);
  
   });
 
};

  
function addNews(e) {
 
if (titleInput.value === '') {
  alert('Cannot add empty title');
}

if (contentInput.value === '') {
    alert('Cannot add empty empty content');
  }

  
//convert user inputs

  let breakingNews =  {
    title: titleInput.value,
    content: contentInput.value,
    // image: imageInput.value
  }
  news.push(breakingNews);
  document.querySelector('form').reset();

 const template =
  document.getElementById("card-template").content.cloneNode(true);
  template.querySelector(".card-title").innerText = `${breakingNews.title}`;
  template.querySelector(".card-text").innerText = `${breakingNews.content}`;
  document.querySelector("#card-list").prepend(template);

  

  // storeInsessionStorage(breakingNews.id);
  
  storeInsessionStorage(breakingNews.title);
  storeInsessionStorage(breakingNews.content);

  
  titleInput.value = '';
  contentInput.value = '';
  

  setTimeout(function reloadCard() {
    window.location.reload();
  }, 15000);



e.preventDefault();
}

  // if ("content" in document.createElement("template")) {
  //   addCard();
 
  // }


  // console.warn('added', {news});
  // let preMsg = document.querySelector('#msg pre');
  // preMsg.textContent = '\n' + JSON.stringify(news, '\t', 2);


function storeInsessionStorage(anyNews) {
  let newsList;
  if (sessionStorage.getItem('newsList') === null) {
    newsList = [];
  } else {
    newsList = JSON.parse(sessionStorage.getItem('newsList'));
  }
  
  const titleS = titleInput.value;
  const contentS = contentInput.value;
  
  newsList.push(anyNews);

  sessionStorage.setItem('title', JSON.stringify(breakingNews.title));
  sessionStorage.setItem('content', JSON.stringify(breakingNews.content));
}





