require('../styles/style.scss');
import Scale from './scale'

const scaling = new Scale();

const resizeWindow = _.debounce(() => {
	scaling.getScaleFactor()
}, 100 );

window.addEventListener('resize', resizeWindow);

const thumbnails = document.querySelectorAll('.thumb-img');

function handleThumbnailClick(event) {
    document.querySelector('.selected-thumbnail').classList.remove('selected-thumbnail');
    
    event.target.classList.add('selected-thumbnail');

	const imgSrc = event.target.src
	const newImgSrc = imgSrc.replace('thumb', 'large');

	document.getElementById('main-image').src = newImgSrc;
}

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', handleThumbnailClick);
});