fetch("https://api.unsplash.com/photos/random?query=nature&orientation=landscape&client_id=UIY5IqxOXXs_MCEKt7IRiQk9u7bLWrgxM_xHN4iBDMU")
  .then(res => res.json())
  .then(data => {
    const output = data.urls.full
    console.log(output)
    document.body.style.backgroundImage = `url(${output})`
  })