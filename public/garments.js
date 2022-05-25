document.addEventListener('alpine:init', () => {
    Alpine.data('garments', () => ({
        garments : [] ,
        seasonFilter : '',
        genderFilter : '',
        maxPrice: 0,
        // init(){
            
        //      this.filterData()
        // },
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
            })
      },
      filterByPrice() {
          fetch(`/api/garments/${this.maxPrice}`)
          .then(r => r.json())
          .then(result => {
              this.garments = result.data})
              
      }
    }))
})

