import { LightningElement } from 'lwc';

export default class BasicCarousel extends LightningElement {
    carouselSlides = [
        {image: 'https://v1.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg', header: 'First house', description: 'This is an awesome first house'},
        {image: 'https://v1.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg', header: 'Second house', description: 'This is an awesome second house'},
        {image: 'https://v1.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg', header: 'Third house', description: 'This is an awesome third house'}
    ]
}