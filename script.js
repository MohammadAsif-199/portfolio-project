function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function addRecommendation(event) {
  event.preventDefault();
  const name = document.getElementById('recomName').value.trim();
  const text = document.getElementById('recomText').value.trim();

  if (name && text) {
    const recomList = document.getElementById('recomList');
    const newItem = document.createElement('li');
    newItem.innerHTML = '<strong>' + name + ':</strong> "' + text + '"';
    recomList.appendChild(newItem);

    alert('Thank you! Your recommendation has been submitted.');

    // Clear form inputs
    document.getElementById('recomName').value = '';
    document.getElementById('recomText').value = '';
  }
}
