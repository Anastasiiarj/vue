const router = new VueRouter ({

    routes: [
        {
            path: '/ski',
            name: 'Ski',
            component: Ski,
            props:true,
            children: [
                {
                    path: 'firstChild',
                    component: firstChild,
                    props: {name: "Switzerland"}
                },
                {
                    path: 'secondChild',
                    component: firstChild,
                    props: {name: "Poland"}
                }
            ]

        },
        {
            path: '/family',
            name: 'Family',
            component: Family,
            props:true
        },
        {
            path: '/beach',
            name: 'post',
            component: Beach,
            props:true,
            children: [
                {
                    path: ':id',
                    component: Beach,
                    name: 'post',
                    props: true
                }
            ]
        }
    ]
});
