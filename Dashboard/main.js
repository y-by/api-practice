fetch("https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=[Access-key]")
  .then(res => res.json())
  .then(data => {
    const output = data.urls.full
    console.log(output)
    document.body.style.backgroundImage = `url(${output})`
  })
