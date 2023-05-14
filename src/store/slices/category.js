import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categories: [
        {
            category: 'rabbits',
            title: 'Кролики',
            image: 'https://phonoteka.org/uploads/posts/2021-06/1624436400_47-phonoteka_org-p-krolik-oboi-krasivo-49.jpg'
        },
        {
            category: 'rabbit_food',
            title: 'Корм для кроликов',
            image: 'https://kotsdog.ru/wa-data/public/shop/products/64/02/20264/images/15293/15293.750.jpg'
        },
        {
            category: 'rabbit_meat',
            title: 'Крольчятина',
            image: 'https://dikoved.ru/upload/iblock/cdc/cdc9881174e12da32173536c105a6e3a.jpg'
        },
        {
            category: 'seedlings',
            title: 'Саженцы',
            image: 'https://s.leroymerlin.ru/upload/catalog/img/6/5/17885520/362x362/17885520.jpg'
        },
        {
            category: 'milk',
            title: 'Молоко',
            image: 'https://gloria-club.com/wp-content/uploads/2019/07/panna_fresca_today_2-768x768.jpg'
        },
    ]
};

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    // reducers: {
    // }
});