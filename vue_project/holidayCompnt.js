const Themain = ('the-main', {
    template: `<div>
     <div class="navigation">
        <nav class="nav_menu">
            <router-link class="nav_hlday" to="ski">Ski holidays</router-link>
            <router-link class="nav_hlday" to="family">Family holidays</router-link>
            <router-link class="nav_hlday" to="beach">Beach holidays</router-link>
        </nav>
        
        
      </div>
</div>`
});

const Ski = ('ski-component',{
    data: function () {
        return {
            menuVisible: false,
        }
    },
    methods: {
        changeMenuState: function ( event ) {
            this.menuVisible = !this.menuVisible
        }
    },
    template: `<div class="wrapper">
                 <div class="ski">
                    <div class="right_dropdown" @click = "changeMenuState">
                        <span class="chose">chose counrty</span>           
                    </div> 
                    <div class="the_hover">                        
                          <router-link to="/ski/firstChild" v-if="menuVisible" 
                             class="country">
                             Швейцария </router-link><br>
                          <router-link to="/ski/secondChild" v-if="menuVisible"
                             class="country">
                             Польша</router-link>                       
                    </div>
                     <router-view></router-view>
                 </div>    
                </div>`

});
const Family = ('family-component',{
    methods: {
        thenext: () => store.commit("next_img"),
        theprevious: () => store.commit("previous_img")
    },
    components: {
        'family_child': familyChild
    },
    template: `<div class="wrapper">  
                   <div class="family">                                                                                      
                      <i class="fa fa-chevron-left fa-2x"  @click="theprevious"></i>
                      <i class="fa fa-chevron-right fa-2x" @click="thenext"></i>
                      <family_child></family_child>
                     </div>
               </div>`
});

const Beach = ('beach-component',{
    data: function () {
        return {
            beach_data: beach_data,
            show: false
        }
    },
    template: `<div class="wrapper">  
                  <div class="beach" v-for="(item, index) in beach_data">                                                         
                         <div class="biggerimg">
                            <img :src="item.picture" alt="">                                                                      
                         </div>                                      
                         <transition name="showing">
                              <p v-if="show" class="p_visible">{{item.content}}</p>                  
                         </transition>                          
                          <router-link :to="{name: 'post', params: {id: index}}" class="b_rout">
                            <button class="b_button" @click="show = !show">{{item.titel}}</button>
                         </router-link>                                                                                                                                                   
                 </div>                                
               </div>`
});
