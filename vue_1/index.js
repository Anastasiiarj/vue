var tour = new Vue({
    el: '#tour',
    data: {
        selected: null,
        select: null,
        nght: '',
        stars: '',
        message: "",
        showme: false
    },
    methods: {
        show: function () {
            return this.showme = true;
        }
    },
    computed: {
        hotel: function () {
            return "На " + this.nght + " в отель " + this.stars
        }

    }
});
