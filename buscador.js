const searchInput = document.getElementById('search');
const images = document.querySelectorAll('.image');

searchInput.addEventListener('input', function() {
    const searchText = searchInput.value.toLowerCase();
    
    images.forEach(image => {
        const imageName = image.getAttribute('data-name').toLowerCase();
        if (imageName.includes(searchText)) {
            image.style.display = 'inline-block';  
        } else {
            image.style.display = 'none'; 
        }
    });
});
