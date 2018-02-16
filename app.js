Vue.component('movie-card',{
    props: ['image', 'title'],
    template: `
    <div>
        <img width="100" :src="image" :alt="title" />
        <h2>{{ title }}</h2>
    </div>
        `
})

new Vue({
    el: '#app',
    data: {
        movies: [
            { title: 'Regreso al Futuro', image:'http://hoycinema.abc.es/Media/201507/03/wallpaper-logo-regreso-al-futuro--644x362.jpg' },
            { title: 'Matrix', image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg' },
            { title: 'Interestellar', image: 'http://allcalidad.com/wp-content/uploads/2016/04/1-191.jpg' }
        ]
    },
    template:`
    <div>
    <movie-card
    v-for="(movie, index) in movies"
    :key= "index"
    :title="movie.title"
    :image="movie.image">
    </movie-card>
    </div>
    `
})