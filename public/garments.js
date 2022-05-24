document.addEventListener('alpine:init', () => {
    Alpine.data('garments', () => ({
        garments : [] ,
        seasonFilter : '',
        genderFilter : '',
        maxPrice: 0,
        init(){
            alert('Page loaded')
            // this.filterData()
        },
        show() {
            fetch('/api/garments')
			.then(r => r.json())
			.then(userData => {this.garments = userData.data })
        },
        filterData() {
            
            fetch(`/api/garments?gender=${this.genderFilter}&season=${this.seasonFilter}`)
            .then(r => r.json())
            .then(results=>{
                this.garments = results.data  
                console.log(this.garments); 
            })
      }
    }))
})

