var base_dropdown_menu = ('dd_menu', {
    props: {
        options:{
            type: Array,
            required: true
        }
    },       //["arr_picture"]
    data: function () {
        return { visibleStatus: false }
    },
    methods : {
        drop_picture: function(event){
            this.visibleStatus = !this.visibleStatus
        },
        select_handler: function (event) {
            this.visibleStatus = true,
                this.$parent.$emit ('menuSelect', event.target.innerHTML.trim())

        }
    },
    template: `<div>                 
                     <button class="button" @click="drop_picture">Gallary</button>
                     <div class="picture" v-if = "visibleStatus">
                        <li class="dd_menu_item"
                      v-for = "item in options"
                     :key="item"
                      @mouseenter="select_handler">
                        {{item}}
                        </li>       
                     </div>
              </div>`

});

var app = new Vue ({
    el: '#app',
    data: {
        main_menu: [
            'ny_1',
            'ny_2',
            'ny_3',
            'ny_4'
        ],
        options_pictr: list_gallary,
        current_pictr: ''
    },
    components: {
        'dd_menu': base_dropdown_menu
    }
})
app.$on ('menuSelect', function (val){
    //this.options_pictr[val]
    this.current_pictr = this.options_pictr[val];
    //console.log(val);
})

