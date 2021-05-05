export default class FetchApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    fetchApiService() {
    console.log('before',this );
    const url =`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=21418455-02afedd09f38bf37a8407aa32`;
    
    return fetch(url)
    .then(r=>r.json())
    .then(data => {
        this.page += 1;
        return data.hits;
      })
    }

    resetPage() {
        this.page = 1;
    }

    // incrementPage() {
    //     this.page += 1;
    // }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery =  newQuery;
    }
}