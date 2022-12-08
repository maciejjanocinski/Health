class Slider {
    constructor(images) {
        this.images = images;
        this.slide = null;
        this.prevBtn = null;
        this.nextBtn = null;
        this.image = null;
        this.currentSlide = 0;
        this.slideArrayLength = 0;
        this.counter = null;

        this.UiSelectors = {
            slide: '[data-slide]',
            prev: '[data-button-prev]',
            next: '[data-button-next]',
            containter: '[data-container]',
        };
    }

    initializeSlider() {
        this.slide = document.querySelector(this.UiSelectors.slide);
        this.prevBtn = document.querySelector(this.UiSelectors.prev);
        this.nextBtn = document.querySelector(this.UiSelectors.next);
        this.container = document.querySelector(this.UiSelectors.containter);

        this.image = document.createElement('img');
        this.image.classList.add('slide__img');

        this.setSlideAttribute(0);
        this.slideArrayLength = this.images && this.images.length;

        this.counter = document.createElement('figcaption');
        this.counter.classList.add('slide__counter');
        this.container.appendChild(this.counter);



        this.slide.appendChild(this.image);
        this.disableButtons();
        this.addListeners();
        this.addCaption();

    }

    addCaption(){
    this.counter.innerText = `${this.currentSlide+1}/${this.slideArrayLength}`;
    }

    addListeners() {
        this.nextBtn.addEventListener('click', () => this.changeSlide(this.currentSlide + 1));
        this.prevBtn.addEventListener('click', () => this.changeSlide(this.currentSlide - 1));
    }

    disableButtons() {
        this.currentSlide === 0
            ? this.prevBtn.setAttribute('disabled', true)
            : this.prevBtn.removeAttribute('disabled');

        this.currentSlide === this.slideArrayLength - 1
            ? this.nextBtn.setAttribute('disabled', true)
            : this.nextBtn.removeAttribute('disabled');
    }

    changeSlide(index) {
        this.currentSlide = index;
        this.addCaption();
        this.setSlideAttribute(index)
        this.disableButtons();
    }

    setSlideAttribute(index) {
        this.image.setAttribute('src', this.images[index]);
    }

}

