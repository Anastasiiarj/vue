const tour = new Vue({
    data: {},
    router,
    store,
    components: {
        'the-main': Themain,
        'ski-component': Ski,
        'family-component': Family,
        'beach-component': Beach
    }
}).$mount('#tour');