// java script do zoom+ nas imagens


const postImages = document.querySelectorAll('article.post img');

postImages.forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', function() {
        this.classList.toggle('zoomed');

        if (this.classList.contains('zoomed')) {
            let overlay = document.createElement('div');
            overlay.id = 'zoom-overlay';
            overlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.7); z-index: 999;';
            document.body.appendChild(overlay);

            overlay.addEventListener('click', function() {
                img.classList.remove('zoomed');
                this.remove();
            });
        } else {
            let overlay = document.getElementById('zoom-overlay');
            if (overlay) overlay.remove();
        }
    });
});