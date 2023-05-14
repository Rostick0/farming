import { createSlice } from '@reduxjs/toolkit';

export const getPopularProducts = () => {
    return [
        {
            id: 13,
            image: 'https://storage.delikateska.ru/cache/8/6/8c58ba85-fdf3-45a4-984f-ad726f2ddc00.jpg/w400h400.webp',
            images: [
                {
                    id: 1,
                    src: 'https://storage.delikateska.ru/cache/8/6/8c58ba85-fdf3-45a4-984f-ad726f2ddc00.jpg/w400h400.webp'
                },
                {
                    id: 2,
                    src: 'https://storage.delikateska.ru/cache/8/6/8c58ba85-fdf3-45a4-984f-ad726f2ddc00.jpg/w400h400.webp'
                }
            ],
            title: 'Шейка кролика на кости 500г',
            category: 'rabbit_meat',
            raiting: 4,
            vendor: 'Неизвестно',
            is_have: true,
            price: 350
        },
        {
            id: 9,
            image: 'https://www.zoolakki.ru/upload/iblock/b74/b74129d04892044b24663044495f92bb.jpg',
            images: [
                {
                    id: 1,
                    src: 'https://www.zoolakki.ru/upload/iblock/b74/b74129d04892044b24663044495f92bb.jpg'
                },
                {
                    id: 2,
                    src: 'https://www.zoolakki.ru/upload/iblock/b74/b74129d04892044b24663044495f92bb.jpg'
                }
            ],
            title: 'Корм комплексный|основной для кроликов и молодняка Padovan Junior coniglietti 0,85 кг',
            category: 'rabbit_food',
            raiting: 5,
            vendor: 'Неизвестно',
            is_have: true,
            price: 220
        },
        {
            id: 10,
            image: 'https://www.zoolakki.ru/upload/iblock/4a5/4a5d5f8294f090e4a705c921da38ccd4.jpg',
            images: [
                {
                    id: 1,
                    src: 'https://www.zoolakki.ru/upload/iblock/4a5/4a5d5f8294f090e4a705c921da38ccd4.jpg'
                },
                {
                    id: 2,
                    src: 'https://www.zoolakki.ru/upload/iblock/4a5/4a5d5f8294f090e4a705c921da38ccd4.jpg'
                }
            ],
            title: 'Полнорационный корм для кроликов Little One Rabbits',
            category: 'rabbit_food',
            raiting: 5,
            vendor: 'Неизвестно',
            is_have: true,
            price: 363
        },
        {
            id: 11,
            image: 'https://www.zoolakki.ru/upload/iblock/de8/de8ddf55d42d48f43fbdf636e34aca96.jpeg',
            images: [
                {
                    id: 1,
                    src: 'https://www.zoolakki.ru/upload/iblock/de8/de8ddf55d42d48f43fbdf636e34aca96.jpeg'
                },
                {
                    id: 2,
                    src: 'https://www.zoolakki.ru/upload/iblock/de8/de8ddf55d42d48f43fbdf636e34aca96.jpeg'
                }
            ],
            title: 'Корм для кроликов и шиншилл Вака Люкс 0,8 кг',
            category: 'rabbit_food',
            raiting: 5,
            vendor: 'Пчелоферма',
            is_have: true,
            price: 2499
        },
        {
            id: 12,
            image: 'https://storage.delikateska.ru/cache/9/1/c7a63f71-6125-4254-b9a5-9931176068e3.jpg/w400h400.webp',
            images: [
                {
                    id: 1,
                    src: 'https://storage.delikateska.ru/cache/9/1/c7a63f71-6125-4254-b9a5-9931176068e3.jpg/w400h400.webp'
                },
                {
                    id: 2,
                    src: 'https://storage.delikateska.ru/cache/9/1/c7a63f71-6125-4254-b9a5-9931176068e3.jpg/w400h400.webp'
                }
            ],
            title: 'Ножки кролика передние 1кг',
            category: 'rabbit_meat',
            raiting: 5,
            vendor: 'Неизвестно',
            is_have: true,
            price: 999,
            reviews: [
                {
                    id: 1,
                    image: 'https://webtopsolutions.org/img/team.png',
                    name: 'Даниил',
                    raiting: 5,
                    text: 'Вся семья была довольна!'
                }
            ]
        },
        {
            id: 6,
            image: 'https://i.ytimg.com/vi/EghC4BGWmyU/maxresdefault.jpg',
            images: [
                {
                    id: 1,
                    src: 'https://i.ytimg.com/vi/EghC4BGWmyU/maxresdefault.jpg'
                },
                {
                    id: 2,
                    src: 'https://i.ytimg.com/vi/EghC4BGWmyU/maxresdefault.jpg'
                }
            ],
            title: 'Группа кроликов',
            category: 'rabbits',
            raiting: 5,
            vendor: 'Пчелоферма',
            is_have: true,
            price: 2499
        },
        {
            id: 11,
            image: 'https://www.zoolakki.ru/upload/iblock/de8/de8ddf55d42d48f43fbdf636e34aca96.jpeg',
            images: [
                {
                    id: 1,
                    src: 'https://www.zoolakki.ru/upload/iblock/de8/de8ddf55d42d48f43fbdf636e34aca96.jpeg'
                },
                {
                    id: 2,
                    src: 'https://www.zoolakki.ru/upload/iblock/de8/de8ddf55d42d48f43fbdf636e34aca96.jpeg'
                }
            ],
            title: 'Корм для кроликов и шиншилл Вака Люкс 0,8 кг',
            category: 'rabbit_food',
            raiting: 5,
            vendor: 'Пчелоферма',
            is_have: true,
            price: 2499
        },
        {
            id: 18,
            image: 'https://agro-market24.ru/upload/iblock/4df/tgvg8xvr66lf8hxxzyk453a6oieaej5m.jpg',
            images: [
                {
                    id: 1,
                    src: 'https://agro-market24.ru/upload/iblock/3e2/m5a62rlc6zecucaf53qw8k289wkecmec.jpg'
                },
                {
                    id: 2,
                    src: 'https://agro-market24.ru/upload/iblock/8e0/6ydcjzo9hjxy87yv14xy01oogaghgnx2.jpg'
                }
            ],
            title: 'Саженцы Малина Лячка',
            category: 'seedlings',
            raiting: 5,
            vendor: 'Неизвестно',
            is_have: true,
            price: 999,
            reviews: [
                {
                    id: 1,
                    image: 'https://webtopsolutions.org/img/team.png',
                    name: 'Даниил',
                    raiting: 5,
                    text: 'Замечательный корм на каждый день'
                }
            ]
        },
    ];
}

export const getNewProducts = () => {
    return [
        {
            id: 29,
            image: 'https://roscontrol.com/wp-content/uploads/2021/09/ecf830e2717589904c05.jpg',
            images: [
                {
                    id: 1,
                    src: 'https://roscontrol.com/wp-content/uploads/2021/09/ecf830e2717589904c05.jpg'
                },
                {
                    id: 2,
                    src: 'https://ru.openfoodfacts.org/images/products/460/711/806/1143/front_ru.10.full.jpg'
                }
            ],
            title: 'Молоко красное',
            category: 'milk',
            raiting: 2,
            vendor: 'Красная цена',
            is_have: false,
            price: 15,
        },
        {
            id: 30,
            image: 'https://www.vladtime.ru/uploads/posts/2017-01/1484058922_1463904853_1453219993_shutterstock_84282775.jpg',
            images: [
                {
                    id: 1,
                    src: 'https://www.vladtime.ru/uploads/posts/2017-01/1484058922_1463904853_1453219993_shutterstock_84282775.jpg'
                },
                {
                    id: 2,
                    src: 'https://yanashla.com/wp-content/uploads/2019/12/milk-3518891_1280.jpg'
                }
            ],
            title: 'Молоко в кувшине',
            category: 'milk',
            raiting: 5,
            vendor: 'Джин',
            is_have: false,
            price: 15000,
            reviews: [
                {
                    id: 1,
                    image: 'https://webtopsolutions.org/img/team.png',
                    name: 'Дмитрий',
                    raiting: 5,
                    text: 'То что я люблю)'
                }
            ]
        },
        {
            id: 23,
            image: 'https://agro-market24.ru/upload/iblock/042/2j236lkdpnu9ilg1dz4aw5c3yfza428p.png',
            images: [
                {
                    id: 1,
                    src: 'https://agro-market24.ru/upload/iblock/b5a/2ye81d72kyrrbfny8strh19lsb5x3zd8.jpg'
                },
                {
                    id: 2,
                    src: 'https://agro-market24.ru/upload/iblock/884/c90b2iodu8qv3tkdjpk6cidd576kocvw.jpg'
                }
            ],
            title: 'Саженцы Малина Новость Кузьмина',
            category: 'seedlings',
            raiting: 5,
            vendor: 'Пчелоферма',
            is_have: true,
            price: 833
        },
        {
            id: 25,
            image: 'https://koketta.ru/wp-content/uploads/9/e/a/9ea1693f0d05177e0a9ba7c11982790c.jpeg',
            images: [
                {
                    id: 1,
                    src: 'https://koketta.ru/wp-content/uploads/9/e/a/9ea1693f0d05177e0a9ba7c11982790c.jpeg'
                },
                {
                    id: 2,
                    src: 'https://zakvasik.com.ua/image/data/tovary/jogurt/123.jpg'
                },
                {
                    id: 3,
                    src: 'https://avatars.mds.yandex.net/i?id=e2620d959529a62d3792dd8d19489657-4101207-images-thumbs&ref=rim&n=33&w=333&h=188'
                }
            ],
            title: 'Молоко в бутылке',
            category: 'milk',
            raiting: 4,
            vendor: 'Молочный завод',
            is_have: false,
            price: 400,
            reviews: [
                {
                    id: 1,
                    image: 'https://webtopsolutions.org/img/team.png',
                    name: 'Дмитрий',
                    raiting: 4,
                    text: 'Предпочитаю молоко в кувшине'
                }
            ]
        },
        {
            id: 10,
            image: 'https://www.zoolakki.ru/upload/iblock/4a5/4a5d5f8294f090e4a705c921da38ccd4.jpg',
            images: [
                {
                    id: 1,
                    src: 'https://www.zoolakki.ru/upload/iblock/4a5/4a5d5f8294f090e4a705c921da38ccd4.jpg'
                },
                {
                    id: 2,
                    src: 'https://www.zoolakki.ru/upload/iblock/4a5/4a5d5f8294f090e4a705c921da38ccd4.jpg'
                }
            ],
            title: 'Полнорационный корм для кроликов Little One Rabbits',
            category: 'rabbit_food',
            raiting: 5,
            vendor: 'Неизвестно',
            is_have: true,
            price: 363
        }
    ];
}

const getProducts = (state, { category, text, price_min, price_max, is_have, raiting }) => {
    return [...state.productsAll].filter(elem => {
        if (category && elem?.category != category) {
            return false;
        }

        if (text && elem?.title?.search(text) === -1) {
            return false;
        }

        if (price_min && elem?.price < price_min) {
            return false;
        }

        if (price_max && elem?.price > price_max) {
            return false;
        }

        if (is_have && !elem?.is_have) {
            return false;
        }

        if (raiting && elem?.raiting < 5) {
            return false;
        }

        return elem;
    });
}

const setCategoryFunc = (state, actions) => {
    const queryParams = {
        category: actions?.payload?.category,
        text: actions?.payload?.text,
        price_min: actions?.payload?.price_min,
        price_max: actions?.payload?.price_max,
        is_have: actions?.payload?.is_have,
        raiting: actions?.payload?.raiting
    };

    state.products = getProducts(state, queryParams);
}

const typeSortHelper = (a, b, typeSort) => {
    if (typeSort === 'price_max') {
        return b.price - a.price;
    }

    if (typeSort === 'price_min') {
        return a.price - b.price;
    }

    if (typeSort === 'a_z') {
        return a.title.localeCompare(b.title)
    }


    if (typeSort === 'z_a') {
        return b.title.localeCompare(a.title)
    }


    if (typeSort === 'reset') {
        return a.id - b.id;
    }

    return 0;
};

const sortProductFunc = (state, action) => {
    state.products.sort((a, b) => typeSortHelper(a, b, action.payload.typeSort))
}

const initialState = {
    products: [],
    productsAll: [
        {
            id: 1,
            image: 'https://pet-q.com/wp-content/uploads/2018/06/2018_06_11-2_2-600x400.jpg',
            images: [
                {
                    id: 1,
                    src: 'https://pet-q.com/wp-content/uploads/2018/06/2018_06_11-2_2-600x400.jpg'
                },
                {
                    id: 2,
                    src: 'https://pet-q.com/wp-content/uploads/2018/06/2018_06_11-2_2-600x400.jpg'
                }
            ],
            title: 'Кролик белый',
            category: 'rabbits',
            raiting: 5,
            vendor: 'Неизвестно',
            is_have: false,
            price: 999,
            reviews: [
                {
                    id: 1,
                    image: 'https://webtopsolutions.org/img/team.png',
                    name: 'Даниил',
                    raiting: 5,
                    text: 'Хороший кролик'
                }
            ]
        },
        {
            id: 2,
            image: 'http://wtalks.com/sites/default/files/imagecache/width_670_nowater/speak/105/imagepost/img_3974-1300x675.jpg',
            images: [
                {
                    id: 1,
                    src: 'http://wtalks.com/sites/default/files/imagecache/width_670_nowater/speak/105/imagepost/img_3974-1300x675.jpg'
                },
                {
                    id: 2,
                    src: 'http://wtalks.com/sites/default/files/imagecache/width_670_nowater/speak/105/imagepost/img_3974-1300x675.jpg'
                }
            ],
            title: 'Кролик оранжевый',
            category: 'rabbits',
            raiting: 4,
            vendor: 'Неизвестно',
            is_have: true,
            price: 899
        },
        {
            id: 3,
            image: 'https://natalyland.ru/wp-content/uploads/1/c/b/1cbf6f8eebbe51e0f7a5f1d57c86a47c.jpeg',
            images: [
                {
                    id: 1,
                    src: 'https://natalyland.ru/wp-content/uploads/1/c/b/1cbf6f8eebbe51e0f7a5f1d57c86a47c.jpeg'
                },
                {
                    id: 2,
                    src: 'https://natalyland.ru/wp-content/uploads/1/c/b/1cbf6f8eebbe51e0f7a5f1d57c86a47c.jpeg'
                }
            ],
            title: 'Два кролика',
            category: 'rabbits',
            raiting: 5,
            vendor: 'Неизвестно',
            is_have: true,
            price: 1599
        },
        {
            id: 4,
            image: 'https://sun9-48.userapi.com/impg/6ZNJubRfIGaq_sye3y8i6ZcK2RwfWh1iZLOwyQ/-beVEvaXbIo.jpg?size=604x604&quality=96&sign=b0c2044ab61bf300656de6e6a104c391&type=album',
            images: [
                {
                    id: 1,
                    src: 'https://sun9-48.userapi.com/impg/6ZNJubRfIGaq_sye3y8i6ZcK2RwfWh1iZLOwyQ/-beVEvaXbIo.jpg?size=604x604&quality=96&sign=b0c2044ab61bf300656de6e6a104c391&type=album'
                },
                {
                    id: 2,
                    src: 'https://sun9-48.userapi.com/impg/6ZNJubRfIGaq_sye3y8i6ZcK2RwfWh1iZLOwyQ/-beVEvaXbIo.jpg?size=604x604&quality=96&sign=b0c2044ab61bf300656de6e6a104c391&type=album'
                }
            ],
            title: 'Кролик дикий',
            category: 'rabbits',
            raiting: 5,
            vendor: 'Неизвестно',
            is_have: true,
            price: 1199
        },
        {
            id: 5,
            image: 'https://i.pinimg.com/originals/e3/72/37/e37237b100ebd3e7a4a49e4aec33014c.jpg',
            images: [
                {
                    id: 1,
                    src: 'https://i.pinimg.com/originals/e3/72/37/e37237b100ebd3e7a4a49e4aec33014c.jpg'
                },
                {
                    id: 2,
                    src: 'https://i.pinimg.com/originals/e3/72/37/e37237b100ebd3e7a4a49e4aec33014c.jpg'
                }
            ],
            title: 'Кролик в травке',
            category: 'rabbits',
            raiting: 5,
            vendor: 'Неизвестно',
            is_have: true,
            price: 1999
        },
        {
            id: 6,
            image: 'https://i.ytimg.com/vi/EghC4BGWmyU/maxresdefault.jpg',
            images: [
                {
                    id: 1,
                    src: 'https://i.ytimg.com/vi/EghC4BGWmyU/maxresdefault.jpg'
                },
                {
                    id: 2,
                    src: 'https://i.ytimg.com/vi/EghC4BGWmyU/maxresdefault.jpg'
                }
            ],
            title: 'Группа кроликов',
            category: 'rabbits',
            raiting: 5,
            vendor: 'Пчелоферма',
            is_have: true,
            price: 2499
        },
        {
            id: 6,
            image: 'https://www.zoolakki.ru/upload/iblock/d82/d8231c4f00e22c97cb9db96c7e2227f3.jpg',
            images: [
                {
                    id: 1,
                    src: 'https://www.zoolakki.ru/upload/iblock/d82/d8231c4f00e22c97cb9db96c7e2227f3.jpg'
                },
                {
                    id: 2,
                    src: 'https://www.zoolakki.ru/upload/iblock/d82/d8231c4f00e22c97cb9db96c7e2227f3.jpg'
                }
            ],
            title: 'Корм для кроликов Зоомир "Кроша" 500 г',
            category: 'rabbit_food',
            raiting: 5,
            vendor: 'Неизвестно',
            is_have: true,
            price: 190,
            reviews: [
                {
                    id: 1,
                    image: 'https://webtopsolutions.org/img/team.png',
                    name: 'Даниил',
                    raiting: 5,
                    text: 'Замечательный корм на каждый день'
                }
            ]
        },
        {
            id: 7,
            image: 'https://www.zoolakki.ru/upload/iblock/33b/33ba643b367f96e7d31d873876113ae8.jpg',
            images: [
                {
                    id: 1,
                    src: 'https://www.zoolakki.ru/upload/iblock/33b/33ba643b367f96e7d31d873876113ae8.jpg'
                },
                {
                    id: 2,
                    src: 'https://www.zoolakki.ru/upload/iblock/33b/33ba643b367f96e7d31d873876113ae8.jpg'
                }
            ],
            title: 'Корм комплексный основной для кроликов и молодняка Padovan Premium coniglietti 0,5 кг',
            category: 'rabbit_food',
            raiting: 4,
            vendor: 'Неизвестно',
            is_have: true,
            price: 452
        },
        {
            id: 8,
            image: 'https://www.zoolakki.ru/upload/iblock/b74/b74129d04892044b24663044495f92bb.jpg',
            images: [
                {
                    id: 1,
                    src: 'https://www.zoolakki.ru/upload/iblock/b74/b74129d04892044b24663044495f92bb.jpg'
                },
                {
                    id: 2,
                    src: 'https://www.zoolakki.ru/upload/iblock/b74/b74129d04892044b24663044495f92bb.jpg'
                }
            ],
            title: 'Корм комплексный для кроликов Padovan Grandmix coniglietti 0,85 кг',
            category: 'rabbit_food',
            raiting: 5,
            vendor: 'Неизвестно',
            is_have: true,
            price: 435
        },
        {
            id: 9,
            image: 'https://www.zoolakki.ru/upload/iblock/b74/b74129d04892044b24663044495f92bb.jpg',
            images: [
                {
                    id: 1,
                    src: 'https://www.zoolakki.ru/upload/iblock/b74/b74129d04892044b24663044495f92bb.jpg'
                },
                {
                    id: 2,
                    src: 'https://www.zoolakki.ru/upload/iblock/b74/b74129d04892044b24663044495f92bb.jpg'
                }
            ],
            title: 'Корм комплексный|основной для кроликов и молодняка Padovan Junior coniglietti 0,85 кг',
            category: 'rabbit_food',
            raiting: 5,
            vendor: 'Неизвестно',
            is_have: true,
            price: 220
        },
        {
            id: 10,
            image: 'https://www.zoolakki.ru/upload/iblock/4a5/4a5d5f8294f090e4a705c921da38ccd4.jpg',
            images: [
                {
                    id: 1,
                    src: 'https://www.zoolakki.ru/upload/iblock/4a5/4a5d5f8294f090e4a705c921da38ccd4.jpg'
                },
                {
                    id: 2,
                    src: 'https://www.zoolakki.ru/upload/iblock/4a5/4a5d5f8294f090e4a705c921da38ccd4.jpg'
                }
            ],
            title: 'Полнорационный корм для кроликов Little One Rabbits',
            category: 'rabbit_food',
            raiting: 5,
            vendor: 'Неизвестно',
            is_have: true,
            price: 363
        },
        {
            id: 11,
            image: 'https://www.zoolakki.ru/upload/iblock/de8/de8ddf55d42d48f43fbdf636e34aca96.jpeg',
            images: [
                {
                    id: 1,
                    src: 'https://www.zoolakki.ru/upload/iblock/de8/de8ddf55d42d48f43fbdf636e34aca96.jpeg'
                },
                {
                    id: 2,
                    src: 'https://www.zoolakki.ru/upload/iblock/de8/de8ddf55d42d48f43fbdf636e34aca96.jpeg'
                }
            ],
            title: 'Корм для кроликов и шиншилл Вака Люкс 0,8 кг',
            category: 'rabbit_food',
            raiting: 5,
            vendor: 'Пчелоферма',
            is_have: true,
            price: 2499
        },
        {
            id: 12,
            image: 'https://storage.delikateska.ru/cache/9/1/c7a63f71-6125-4254-b9a5-9931176068e3.jpg/w400h400.webp',
            images: [
                {
                    id: 1,
                    src: 'https://storage.delikateska.ru/cache/9/1/c7a63f71-6125-4254-b9a5-9931176068e3.jpg/w400h400.webp'
                },
                {
                    id: 2,
                    src: 'https://storage.delikateska.ru/cache/9/1/c7a63f71-6125-4254-b9a5-9931176068e3.jpg/w400h400.webp'
                }
            ],
            title: 'Ножки кролика передние 1кг',
            category: 'rabbit_meat',
            raiting: 5,
            vendor: 'Неизвестно',
            is_have: true,
            price: 999,
            reviews: [
                {
                    id: 1,
                    image: 'https://webtopsolutions.org/img/team.png',
                    name: 'Даниил',
                    raiting: 5,
                    text: 'Вся семья была довольна!'
                }
            ]
        },
        {
            id: 13,
            image: 'https://storage.delikateska.ru/cache/8/6/8c58ba85-fdf3-45a4-984f-ad726f2ddc00.jpg/w400h400.webp',
            images: [
                {
                    id: 1,
                    src: 'https://storage.delikateska.ru/cache/8/6/8c58ba85-fdf3-45a4-984f-ad726f2ddc00.jpg/w400h400.webp'
                },
                {
                    id: 2,
                    src: 'https://storage.delikateska.ru/cache/8/6/8c58ba85-fdf3-45a4-984f-ad726f2ddc00.jpg/w400h400.webp'
                }
            ],
            title: 'Шейка кролика на кости 500г',
            category: 'rabbit_meat',
            raiting: 4,
            vendor: 'Неизвестно',
            is_have: true,
            price: 350
        },
        {
            id: 14,
            image: 'https://storage.delikateska.ru/cache/5/3/6f9c5d00-41fd-463c-b415-a03c3ca2f891.jpg/w400h400.webp',
            images: [
                {
                    id: 1,
                    src: 'https://storage.delikateska.ru/cache/5/3/6f9c5d00-41fd-463c-b415-a03c3ca2f891.jpg/w400h400.webp'
                },
                {
                    id: 2,
                    src: 'https://storage.delikateska.ru/cache/5/3/6f9c5d00-41fd-463c-b415-a03c3ca2f891.jpg/w400h400.webp'
                }
            ],
            title: 'Филе кролика 500г',
            category: 'rabbit_meat',
            raiting: 5,
            vendor: 'Неизвестно',
            is_have: true,
            price: 300
        },
        {
            id: 15,
            image: 'https://storage.delikateska.ru/cache/f/3/a4d0ca75-9201-4363-8671-345ad0134cf9.jpg/w400h400.webp',
            images: [
                {
                    id: 1,
                    src: 'https://storage.delikateska.ru/cache/f/3/a4d0ca75-9201-4363-8671-345ad0134cf9.jpg/w400h400.webp'
                },
                {
                    id: 2,
                    src: 'https://storage.delikateska.ru/cache/f/3/a4d0ca75-9201-4363-8671-345ad0134cf9.jpg/w400h400.webp'
                }
            ],
            title: 'Фрикадельки из мяса кролика и индейки 300г',
            category: 'rabbit_meat',
            raiting: 5,
            vendor: 'Неизвестно',
            is_have: true,
            price: 250
        },
        {
            id: 16,
            image: 'https://storage.delikateska.ru/cache/9/a/21968499-ac30-4545-a99d-9fdb540ced90.jpg/w400h400.webp',
            images: [
                {
                    id: 1,
                    src: 'https://storage.delikateska.ru/cache/9/a/21968499-ac30-4545-a99d-9fdb540ced90.jpg/w400h400.webp'
                },
                {
                    id: 2,
                    src: 'https://storage.delikateska.ru/cache/9/a/21968499-ac30-4545-a99d-9fdb540ced90.jpg/w400h400.webp'
                }
            ],
            title: 'Фарш из мяса кролика охлажденный 500г',
            category: 'rabbit_meat',
            raiting: 5,
            vendor: 'Неизвестно',
            is_have: true,
            price: 400
        },
        {
            id: 17,
            image: 'https://storage.delikateska.ru/cache/9/c/66542dd7-b2e1-4927-9a47-539c05618fbd.jpg/w400h400.webp',
            images: [
                {
                    id: 1,
                    src: 'https://storage.delikateska.ru/cache/9/c/66542dd7-b2e1-4927-9a47-539c05618fbd.jpg/w400h400.webp'
                },
                {
                    id: 2,
                    src: 'https://storage.delikateska.ru/cache/9/c/66542dd7-b2e1-4927-9a47-539c05618fbd.jpg/w400h400.webp'
                }
            ],
            title: 'Кролик тушка фермерский 1,3кг',
            category: 'rabbit_meat',
            raiting: 5,
            vendor: 'Пчелоферма',
            is_have: true,
            price: 833
        },
        {
            id: 18,
            image: 'https://agro-market24.ru/upload/iblock/4df/tgvg8xvr66lf8hxxzyk453a6oieaej5m.jpg',
            images: [
                {
                    id: 1,
                    src: 'https://agro-market24.ru/upload/iblock/3e2/m5a62rlc6zecucaf53qw8k289wkecmec.jpg'
                },
                {
                    id: 2,
                    src: 'https://agro-market24.ru/upload/iblock/8e0/6ydcjzo9hjxy87yv14xy01oogaghgnx2.jpg'
                }
            ],
            title: 'Саженцы Малина Лячка',
            category: 'seedlings',
            raiting: 5,
            vendor: 'Неизвестно',
            is_have: true,
            price: 999,
            reviews: [
                {
                    id: 1,
                    image: 'https://webtopsolutions.org/img/team.png',
                    name: 'Даниил',
                    raiting: 5,
                    text: 'Замечательный корм на каждый день'
                }
            ]
        },
        {
            id: 19,
            image: 'https://agro-market24.ru/upload/iblock/a42/6zcduayx5oip217ko1wkclmyuf0qska0.jpg',
            images: [
                {
                    id: 1,
                    src: 'https://agro-market24.ru/upload/iblock/ed8/53sdcjzkvrbwsu55g30dtvizsetc2dja.jpg'
                },
                {
                    id: 2,
                    src: 'https://agro-market24.ru/upload/iblock/6b0/lpswtsu5nlkx3g4gh7raogj14yuy0ocr.jpg'
                }
            ],
            title: 'Саженцы Малина Изобильная',
            category: 'seedlings',
            raiting: 4,
            vendor: 'Неизвестно',
            is_have: true,
            price: 350
        },
        {
            id: 20,
            image: 'https://agro-market24.ru/upload/iblock/87a/65w7yr8o31tg40jsir3ogahjrmhn0u1g.jpg',
            images: [
                {
                    id: 1,
                    src: 'https://agro-market24.ru/upload/iblock/13a/5nd9t1xo8f9qkhjrl0ebsg0pk8w550g1.jpg'
                },
                {
                    id: 2,
                    src: 'https://agro-market24.ru/upload/iblock/103/tlqwoczghq47mmiwct523oszzp59qu48.png'
                }
            ],
            title: 'Саженцы Малина Жёлтый Гигант',
            category: 'seedlings',
            raiting: 5,
            vendor: 'Неизвестно',
            is_have: true,
            price: 300
        },
        {
            id: 21,
            image: 'https://agro-market24.ru/upload/iblock/c64/w4ixpxu3macgnnwad1ani0pjgiidwbf8.jpg',
            images: [
                {
                    id: 1,
                    src: 'https://agro-market24.ru/upload/iblock/a12/ryxfm546cytveo456jldg0r8v3cyx7j5.jpg'
                },
                {
                    id: 2,
                    src: 'https://agro-market24.ru/upload/iblock/e39/6xfi3lrvvevb5qv918y6l4bj4b3nthbb.jpg'
                }
            ],
            title: 'Саженцы Малина ярко-красная "Пшехиба"',
            category: 'seedlings',
            raiting: 5,
            vendor: 'Неизвестно',
            is_have: true,
            price: 250
        },
        {
            id: 22,
            image: 'https://agro-market24.ru/upload/iblock/5b2/hvy1pf7asjvk5xmw1uywzmryrd6g69jg.jpg',
            images: [
                {
                    id: 1,
                    src: 'https://agro-market24.ru/upload/iblock/698/qe0rwxk02wyflie46s07kjdjb23aetg4.jpg'
                },
                {
                    id: 2,
                    src: 'https://agro-market24.ru/upload/iblock/1f8/2srxl08dyw06z0w9050f60rgfum613eg.jpg'
                }
            ],
            title: 'Саженцы Малина Полка',
            category: 'seedlings',
            raiting: 5,
            vendor: 'Неизвестно',
            is_have: true,
            price: 400
        },
        {
            id: 23,
            image: 'https://agro-market24.ru/upload/iblock/042/2j236lkdpnu9ilg1dz4aw5c3yfza428p.png',
            images: [
                {
                    id: 1,
                    src: 'https://agro-market24.ru/upload/iblock/b5a/2ye81d72kyrrbfny8strh19lsb5x3zd8.jpg'
                },
                {
                    id: 2,
                    src: 'https://agro-market24.ru/upload/iblock/884/c90b2iodu8qv3tkdjpk6cidd576kocvw.jpg'
                }
            ],
            title: 'Саженцы Малина Новость Кузьмина',
            category: 'seedlings',
            raiting: 5,
            vendor: 'Пчелоферма',
            is_have: true,
            price: 833
        },
        {
            id: 25,
            image: 'https://koketta.ru/wp-content/uploads/9/e/a/9ea1693f0d05177e0a9ba7c11982790c.jpeg',
            images: [
                {
                    id: 1,
                    src: 'https://koketta.ru/wp-content/uploads/9/e/a/9ea1693f0d05177e0a9ba7c11982790c.jpeg'
                },
                {
                    id: 2,
                    src: 'https://zakvasik.com.ua/image/data/tovary/jogurt/123.jpg'
                },
                {
                    id: 3,
                    src: 'https://avatars.mds.yandex.net/i?id=e2620d959529a62d3792dd8d19489657-4101207-images-thumbs&ref=rim&n=33&w=333&h=188'
                }
            ],
            title: 'Молоко в бутылке',
            category: 'milk',
            raiting: 4,
            vendor: 'Молочный завод',
            is_have: false,
            price: 400,
            reviews: [
                {
                    id: 1,
                    image: 'https://webtopsolutions.org/img/team.png',
                    name: 'Дмитрий',
                    raiting: 4,
                    text: 'Предпочитаю молоко в кувшине'
                }
            ]
        },
        {
            id: 26,
            image: 'https://storage.yandexcloud.net/images.ratengoods.com/1/e7fa8d235d1ec4dad6d794c468737f1b814c4d12.jpeg',
            images: [
                {
                    id: 1,
                    src: 'https://storage.yandexcloud.net/images.ratengoods.com/1/e7fa8d235d1ec4dad6d794c468737f1b814c4d12.jpeg'
                },
                {
                    id: 2,
                    src: 'https://yt3.ggpht.com/ytc/AMLnZu95slu8EWoxGlLHpgg8-MtjUGi52xhm8mle9VRhog=s900-c-k-c0x00ffffff-no-rj'
                }
            ],
            title: 'Молоко Пастеризованное',
            category: 'milk',
            raiting: 5,
            vendor: '36 копеек',
            is_have: false,
            price: 320,
        },
        {
            id: 27,
            image: 'https://static.tildacdn.com/tild3230-6663-4865-a665-636261616665/20200227_172.jpeg',
            images: [
                {
                    id: 1,
                    src: 'https://static.tildacdn.com/tild3230-6663-4865-a665-636261616665/20200227_172.jpeg'
                },
                {
                    id: 2,
                    src: 'https://avatars.mds.yandex.net/get-mpic/4409630/img_id4320222328091541861.jpeg/14hq'
                }
            ],
            title: 'Молоко топленое',
            category: 'milk',
            raiting: 4,
            vendor: 'Счастливые коровы',
            is_have: false,
            price: 320,
        },
        {
            id: 28,
            image: 'https://main-cdn.sbermegamarket.ru/hlr-system/-10/217/854/592/119/49/100040783877b0.jpg',
            images: [
                {
                    id: 1,
                    src: 'https://main-cdn.sbermegamarket.ru/hlr-system/-10/217/854/592/119/49/100040783877b0.jpg'
                },
                {
                    id: 2,
                    src: 'https://o-pencil.ru/upload/iblock/cb9/cb97eef998825bb4389e3d5f99165e50.jpg'
                }
            ],
            title: 'Молоко полторашка',
            category: 'milk',
            raiting: 5,
            vendor: 'Простоквашино',
            is_have: false,
            price: 990,
        },
        {
            id: 29,
            image: 'https://roscontrol.com/wp-content/uploads/2021/09/ecf830e2717589904c05.jpg',
            images: [
                {
                    id: 1,
                    src: 'https://roscontrol.com/wp-content/uploads/2021/09/ecf830e2717589904c05.jpg'
                },
                {
                    id: 2,
                    src: 'https://ru.openfoodfacts.org/images/products/460/711/806/1143/front_ru.10.full.jpg'
                }
            ],
            title: 'Молоко красное',
            category: 'milk',
            raiting: 2,
            vendor: 'Красная цена',
            is_have: false,
            price: 15,
        },
        {
            id: 30,
            image: 'https://www.vladtime.ru/uploads/posts/2017-01/1484058922_1463904853_1453219993_shutterstock_84282775.jpg',
            images: [
                {
                    id: 1,
                    src: 'https://www.vladtime.ru/uploads/posts/2017-01/1484058922_1463904853_1453219993_shutterstock_84282775.jpg'
                },
                {
                    id: 2,
                    src: 'https://yanashla.com/wp-content/uploads/2019/12/milk-3518891_1280.jpg'
                }
            ],
            title: 'Молоко в кувшине',
            category: 'milk',
            raiting: 5,
            vendor: 'Джин',
            is_have: false,
            price: 15000,
            reviews: [
                {
                    id: 1,
                    image: 'https://webtopsolutions.org/img/team.png',
                    name: 'Дмитрий',
                    raiting: 5,
                    text: 'То что я люблю)'
                }
            ]
        }
    ]
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setCategory: setCategoryFunc,
        sortProduct: sortProductFunc
    }
});

export const { setCategory, sortProduct } = productsSlice.actions