const key = config.MY_ACCESS_KEY

// get image from unsplash
fetch(`https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=${key}`)
  .then(res => {
    return res.json()
  })
  .then(data => {
    console.log(data)
    document.body.style.backgroundImage = `url(${data.urls.full})`
    document.getElementById('author-name').textContent = `Photo By: ${data.user.name}`
  })
  .catch(err => {
    console.log(err)
    document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDE2NzA&ixlib=rb-1.2.1&q=80&w=1920)"
  })

// get crypto info from coingecko
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
      document.getElementById("crypto-top").innerHTML = `
        <div class="crypto-details">
          <img src="${data.image.small}" alt="coin">
          <span>${data.name}</span>
        </div>
      `
      document.getElementById("crypto").innerHTML += `
        <p>🎯: $${data.market_data.current_price.usd}</p>
        <p>👆: $${data.market_data.high_24h.usd}</p>
        <p>👇: $${data.market_data.low_24h.usd}</p>
      `

    })
    .catch(err => console.error(err))
    
    // add time long way
    // function formatAMPM(date) {
    //   let hours = date.getHours()
    //   let minutes = date.getMinutes()
    //   const ampm = hours >= 12 ? 'pm' : 'am'
    //   hours = hours % 12
    //   hours = hours ? hours : 12 // the hour 0 should be 12
    //   minutes = minutes < 10 ? '0' + minutes : minutes
    //   const strTime = `${hours}:${minutes} ${ampm}`
    //   return strTime
    // }
    // const time = formatAMPM(new Date)
    // console.log(time)

    // add time short way
    function getCurrentTime(){
      const date = new Date()
      const time = date.toLocaleTimeString("en-US", {timeStyle: "short"})
      document.getElementById("time").textContent = time
    }
    setInterval(getCurrentTime, 100)