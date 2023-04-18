const {createApp} = Vue

createApp({
    data() {
        return {
            // variabili Vue3
            message: "Ciao Mondo!",
            message2: "hehehehe",
            inputValue: '',
            count: "0",
            myClass: "text-primary",
            imgPath: "",
            showElement: "d-none"
        }
    },
    methods: {
        // funzioni Vue3
        changeColor() {
            if (this.myClass === 'text-primary') {
                this.myClass = "text-danger"
            }
            else {
                this.myClass = "text-primary"
            }
        },

        showPicture() {
            this.showElement = "d-block"
            this.imgPath = "https://picsum.photos/300/200"
        }
        
    }
}).mount('#app')

// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.