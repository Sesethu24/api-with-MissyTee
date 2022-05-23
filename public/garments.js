document.addEventListener('alpine:init', () => {
    Alpine.data('garments', () => ({
        garments : [] ,
        init(){
            alert('Page loaded')
        },

        show() {
            fetch('/api/garments')
			.then(r => r.json())
			.then(userData => {this.garments = userData.data })
        }
    }))
})