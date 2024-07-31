document.addEventListener('click', function(event) {
  const newImage = document.createElement('img');
  newImage.src = 'sorakunsayohara/sorakunsayohara.png'; // イースターエッグの画像パスを指定
  newImage.classList.add('image');
  newImage.style.left = event.clientX - 25 + 'px'; 
  newImage.style.top = event.clientY - 25 + 'px';
  document.body.appendChild(newImage);

  setTimeout(() => {
    newImage.style.opacity = 0; 
    setTimeout(() => {
      newImage.remove(); 
    }, 1000); 
  }, 3000); 
});
