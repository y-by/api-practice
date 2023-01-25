fetch("https://api.unsplash.com/photos/random?query=nature&orientation=landscape&client_id=[Access Key]")
  .then(res => res.json())
  .then(data => {
    const output = data.urls.full
    console.log(output)
    document.body.style.backgroundImage = `url(${output})`
  })
