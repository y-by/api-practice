document.getElementById('get-activity').addEventListener('click', function(){
  fetch('http://www.boredapi.com/api/activity/')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      document.getElementById('activity-name').textContent = data.activity
      let activityType = document.getElementById('activity-type')
      activityType.textContent = data.type
    })
})