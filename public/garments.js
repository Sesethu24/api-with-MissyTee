document.addEventListener('alpine:init', () => {
  Alpine.data('garments', () => ({
    garments: [],
    seasonFilter: '',
    genderFilter: '',
    maxPrice: 0,
    garmentInfo: {
      description: 'Shorts',
      price: '122.99',
      img: 'fashion.png',
      season: 'Winter',
      gender: 'Unisex',
    },
    // init(){

    //      this.filterData()
    // },
    show() {
      fetch('/api/garments')
        .then(r => r.json())
        .then(userData => {
          this.garments = userData.data
        })
    },
    filterData() {

      fetch(`/api/garments?gender=${this.genderFilter}&season=${this.seasonFilter}`)
        .then(r => r.json())
        .then(results => {
          this.garments = results.data
        })
    },
    filterByPrice() {
      fetch(`/api/garments/${this.maxPrice}`)
        .then(r => r.json())
        .then(result => {
          this.garments = result.data
        })

    },
    addGarments() {

      fetch(`/api/garment`, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.garmentInfo)
        })
        .then(r => console.log(r))
        .then(() => {
          this.filterData()
        }).catch(err => console.table(err))
    },

    removeGarments(){
      fetch(`/api/garments`)
      .then(r => r.json())
      // ).catch(err=> )

    }
  }))
})