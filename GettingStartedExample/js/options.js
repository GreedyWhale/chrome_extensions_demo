const page = document.getElementById('buttonDiv');
const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
function constructOptions(kButtonColors) {
  kButtonColors.forEach(color => {
    const button = document.createElement('button');
    button.style.backgroundColor = color;
    button.addEventListener('click', function() {
      chrome.storage.sync.set({ color }, function() {
        console.log('color is ' + color);
      })
    });
    page.appendChild(button);
  })
}
constructOptions(kButtonColors);