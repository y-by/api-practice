fetch("https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=[Access-key]")
  .then(res => {
    return res.json()
  })
  .then(data => {
    document.body.style.backgroundImage = `url(${data.urls.full})`
    document.getElementById('author-name').textContent = `Photo By: ${data.user.name}`
  })
  .catch(err => {
    console.log(err)
    document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDE2NzA&ixlib=rb-1.2.1&q=80&w=1920)"
  })


  fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => {
      if (!res.ok) {
        throw Error(`Somthing went wrong, status: ${res.status}`)
      }
      console.log(res.ok)
      console.log(res.status)
      return res.json()
    })
    .then(data => {
      console.log(data.name)
      console.log(data.image.small)
      document.getElementById("crypto").innerHTML = `
        <div class="crypto-details">
          <img src="${data.image.small}" alt="coin">
          <span>${data.name}</span>
        </div>
      `
    })
    .catch(err => console.error(err))

