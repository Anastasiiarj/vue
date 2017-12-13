const store = new Vuex.Store ({
    state: {
        family_data: [
            {
                url: "http://www.dzinepress.com/wp-content/uploads/2013/01/Discounts.jpg",
                country_name: 'Германия',
                content: `Неизменно правильная Германия — это добротная кухня, отличный сервис в отелях и ухоженные
                          города. Летом туристов ждут на Балтийском побережье и озерах Баварии, зимой — на горнолыжных курортах.
                          Музеи Дрездена, Гамбурга и Мюнхена и все о Германии: виза, карты и фото.`
            },
            {
                url: "http://travel.miruvashihnog.ru/wp-content/uploads/2016/05/family-on-vacation.jpg",
                country_name: 'Турция',
                content: `Турция — это не только отличные пляжи четырех морей, но и великолепный Стамбул
                          с Голубой мечетью и дворцом Топкапы, термальные источники Яловы и белоснежный 
                          Памуккале, монастыри Каппадокии, горные лыжи и классный шоппинг. Все о Турции: отели,
                          туры, погода, цены.`
            },
            {
                url: "https://www.obertauern.com/fileadmin/_processed_/f/7/csm_Obertauern_Winter_42_2feb0ecb13.jpg",
                country_name: 'Австрия',
                content: `Горнолыжные курорты Австрии известны любому — здесь самые снежные склоны и лучшие трассы.
                          Вас ждут блистательная Вена и озерный край Зальцбург, замки, музеи и достопримечательности. Все об
                          Австрии от Тонкостей туризма — виза, туры, карты и отели.`
            }
        ],
        family_data_counter: 0,
        transitionName : 'side',

    },
    mutations: {
        next_img: state => {
            state.family_data_counter = (state.family_data_counter === state.family_data.length-1) ? 0:
                state.family_data_counter + 1
        },
        previous_img: state => {
            state.family_data_counter = (state.family_data_counter === 0) ? state.family_data.length-1 :
                state.family_data_counter-1
        }
    }
})