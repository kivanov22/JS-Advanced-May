function notify(message) {
  console.log('todo')
  // let contentElement = document.getElementById('content');
  let notificationDiv = document.getElementById('notification');
  notificationDiv.textContent = message;
  notificationDiv.style.display = 'block';

  let dataNotificationAttribute = notificationDiv.getAttribute('data-notification-set');//our attribute , we create it

  if (dataNotificationAttribute!=='true') {
    notificationDiv.setAttribute('data-notification-set','true');//this way it doesn't create new elements in DOm
    notificationDiv.addEventListener('click',notificationClickHandler);
  }

  function notificationClickHandler(e){
    let notificationDiv=document.getElementById('notification');
    notificationDiv.style.display='none';
  }

}