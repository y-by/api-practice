fetch("https://ap.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=[Access-key]")
  .then(res => res.json())
  .then(data => {
    // const output = data.urls.full
    // console.log(output)
    document.body.style.backgroundImage = `url(${data.urls.full})`
    document.getElementById('author-name').textContent = `Photo By: ${data.user.name}`
  })
  .catch(err => {
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDE2NzA&ixlib=rb-1.2.1&q=80&w=1920)`
  })
