const randomNumber = Math.floor(Math.random() * 100)

fetch(`https://jsonplaceholder.typicode.com/posts/${randomNumber}`)
  .then(response => response.json())
  .then(data => {
    console.log(data.title)
    document.getElementById('main-title').textContent = data.title
    document.getElementById('main-text').textContent = data.body
  })