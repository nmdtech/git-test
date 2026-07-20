import {setPageTitle} from "../components/core/page.js";
import {print} from "../components/core/utils.js";
export function galleryPage() {
    setPageTitle('NMD Gallery');

    const images = Array.from({length: 10}, (_, i) => i+1);
    const thumbs = images.map((image) => `
        <div class="col-1">
            <img src="/assets/img-${image}.jpg" alt="" class="img-fluid galleryThumb">
        </div>
    `).join('');

    print(`
        <div id="gallery">
            <div class='row my-2'>
                <div class="col-8">
                    <img src="/assets/img-1.jpg" alt="" id="mainImg" class="img-fluid">
                </div>
            </div>
            <div class="row g-1 my-4" id="galleryThumbs">
                ${thumbs}
            </div>
        </div>
    `);

    const gallery = document.getElementById('gallery');
    const mainImg = gallery.querySelector('#mainImg');

    const galleryThumbs = gallery.querySelectorAll('.galleryThumb');
    galleryThumbs[0].classList.add('thumb-disabled');

    galleryThumbs.forEach(thumb => {
       thumb.addEventListener('click', () => {
           updateImage(thumb.src);

           galleryThumbs.forEach(t => {
               t.classList.remove('thumb-disabled');
           })

           thumb.classList.add('thumb-disabled');
       })
    });

    function updateImage(targetImg) {
        mainImg.src = targetImg;
    }
}