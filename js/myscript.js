const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Ciao! Sto scrivendo usando Vue!',
            img: 'https://images.pushsquare.com/fa49e0ee4457a/god-of-war-ps4-playstation-4.large.jpg'
        }
    }
}).mount('#ciao')