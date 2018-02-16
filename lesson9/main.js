function findById(items, id){
    console.log("se muestra items");
    console.log(items);
    for(var i in items){
        console.log("entro al for");
        if(items[i].id == id){
            console.log("se encontro: "+items[i]);
            return items[i];
        }
    }

    return null;
}

Vue.filter('category', function (id){
    var category = findById(vm.categories,id);
    return category != null ? category.name : 'Sin categoría';
});
var vm = new Vue({
    el: '#app',
    data:{
        notes:[
            {
                note: 'Laravel 5.1 es LTS',
                category_id: 1
            },
            {
                note: 'v-for es la directiva que utilizamos para iterar una lista',
                category_id: 2
            },
            {
                note:'@click se utiliza como un alias de v-on:click',
                category_id: 2
            },
            {
                note: 'Registrate hoy en styde.net y obtén acceso a todos nuestros cursos',
                category_id: 4
            }
        ],
        categories:[
            {
                id: 1,
                name:'Laravel'
            },
            {
                id: 2,
                name:'Vue.js'
            },
            {
                id: 3,
                name:'Publicidad'
            }
        ]
    }/*,
    filters: {
        category: function(id){
            var category= findById(this.categories,id);

            return category != null ? category.name : 'Sin categoría';
        }
    }*/

});

