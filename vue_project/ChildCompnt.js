const firstChild = ({
    props:{
        name: {
            type: String,
            default: 'good'
        }
    },
    data: function () {
        return {
            ski_data: ski_data
        }
    },
    computed: {
        select: function () {
            return this.name
        }
    },
    template: `<div class="wrapper">
               <div class="article" v-for="item in ski_data[select]">              
                 <p>{{item.titel}}</p>
                 <img :src="item.picture"/>                
                 <p>{{item.content}}</p>                   
               </div>
</div>`
});

const familyChild = ('family_child',{
    computed: {
        country_name : () => store.state.family_data[store.state.family_data_counter].country_name,
        pict : () => store.state.family_data[store.state.family_data_counter].url,
        content: () => store.state.family_data[store.state.family_data_counter].content
    },
    template: `<div class="f_article">                
                  <img :src="pict" :key="pict">
                  <h1>{{country_name}}</h1>
                  <p>{{content}}</p>
               </div>`
});


