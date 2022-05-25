export interface IProduct {
    name_md: string;
    desc_md: string;
    name_ru: string;
    desc_ru: string;
    price: string;
}
export interface ICategory {
    id: string;
    name: string;
    products: IProduct[];
}
export const categories: ICategory[] = [
    {
        id: "bucket",
        name: "BUCKET",
        products: [
            {
                name_md: "Hot wings bucket",
                desc_md: "20 aripioare",

                name_ru: "Hot wings bucket",
                desc_ru: "20 крылышек",
                price: "140"
            },
            {
                name_md: "Bucket for two",
                desc_md: "2 gambe, 6 file+bautura si cartofi",
                name_ru: "Bucket for two",
                desc_ru: "2 ножки, 6 филе + напиток и картофель фри",
                price: "130"
            },
            {
                name_md: "Share Bucket",
                desc_md: "9 file, 9 aripioare",
                name_ru: "Share Bucket",
                desc_ru: "9 филе, 9 крылышек",
                price: "120"
            },
            {
                name_md: "Family bucket",
                desc_md: "4 gambe, 4 file+ bautura si cartofi",
                name_ru: "Family bucket",
                desc_ru: "4 ножки, 4 филе + напиток и картофель фри",
                price: "200"
            }
        ]
    },
    {
        id: "meniu_pui",
        name: "MENIU PUI",
        products: [
            {
                name_md: "Aripioare",
                desc_md: "5 sau 8 buc",
                name_ru: "Крылышки",
                desc_ru: "По 5 или 8 шт",
                price: "55/72"
            },
            {
                name_md: "Crispy fileu",
                desc_md: "4 sau 7 buc +sos",
                name_ru: "Crispy филе",
                desc_ru: "По 4 или 7 шт + соус",
                price: "53/69"
            },
            {
                name_md: "Crispy fileu meniu",
                desc_md: "4 sau 7 buc crispy fileu cu bautura la alegere si cartofi",
                name_ru: "Crispy филе меню",
                desc_ru: "4 или 7 шт хрустящего филе с напитком на выбор, картофелем фри и соусом",
                price: "77/85"
            },
            {
                name_md: "Meniu aripioare",
                desc_md: "5 sau 8 buc aripioare cu bautura la alegere si cartofi",
                name_ru: "Меню крылышки",
                desc_ru: "5 или 8 крылышек с напитком на выбор и картофелем фри",
                price: "75/95"
            },
            {
                name_md: "Meniu gambe",
                desc_md: "2 gambe cu bautura la alegere si cartofi",
                name_ru: "Меню ножки",
                desc_ru: "2 ножки с напитком на выбор и картофелем фри",
                price: "60"
            },
            {
                name_md: "Gambe",
                desc_md: "1,2 sau 3 gambe",
                name_ru: "Ножки",
                desc_ru: "1, 2 или 3 ножки",
                price: "20/35/50"
            }
        ]
    },
    {
        id: "wrap_meniu_fahita",
        name: "WRAP MENIU / FAHITA",
        products: [
            {
                name_md: "Wrap cu fileu",
                desc_md: "Wrap cu fileu",
                name_ru: "Врап с филе",
                desc_ru: "Врап с филе",
                price: "50"
            },
            {
                name_md: "Wrap cu falafel",
                desc_md: "Wrap cu falafel",
                name_ru: "Врап с фалафелем",
                desc_ru: "Врап с фалафелем",
                price: "50"
            },
            {
                name_md: "Wrap cu fileu meniu mediu /hot",
                desc_md: "picant/ nepicant",
                name_ru: "Врап с филе меню среднее",
                desc_ru: "острое/не острое",
                price: "70"
            },
            {
                name_md: "Wrap cu fileiu meniu mare /hot",
                desc_md: "picant/nepicant",
                name_ru: "Врап с филе меню большое",
                desc_ru: "острое / не острое",
                price: "75"
            },
            {
                name_md: "Wrap cu falafel meniu mediu /hot",
                desc_md: "Wrap, cartof+bautura",
                name_ru: "Врап с фалафелем меню среднее",
                desc_ru: "Врап, картофель фри и напиток",
                price: "70"
            },
            {
                name_md: "Wrap cu falafel meniu mare/hot",
                desc_md: "Wrap, cartof+bautura",
                name_ru: "Врап с фалафелем меню большое",
                desc_ru: "Врап, картофель фри и напиток",
                price: "75"
            },
            {
                name_md: "Fajita",
                desc_md: "Fajita",
                name_ru: "Фахита",
                desc_ru: "",
                price: "85"
            }
        ]
    },
    {
        id: "burger_meniu",
        name: "BURGER MENIU",
        products: [
            {
                name_md: "Burger/hot",
                desc_md: "picant/nepicant",
                name_ru: "Бургер",
                desc_ru: "острый/ не острый",
                price: "20"
            },
            {
                name_md: "Double burger/hot",
                desc_md: "picant/nepicant",
                name_ru: "Двойной бургер",
                desc_ru: "острый/ не острый",
                price: "35"
            },
            {
                name_md: "Crispy burger",
                desc_md: "",
                name_ru: "Бургер Crispy",
                desc_ru: "",
                price: "40"
            },
            {
                name_md: "Burger cu vita",
                desc_md: "",
                name_ru: "Бургер с говядиной",
                desc_ru: "",
                price: "65"
            },
            {
                name_md: "Combo burger meniu",
                desc_md: "",
                name_ru: "Бургер меню комбо",
                desc_ru: "",
                price: "55"
            },
            {
                name_md: "Combo burger meniu mediu/hot",
                desc_md: "",
                name_ru: "Бургер меню комбо большое",
                desc_ru: "",
                price: "66"
            },
            {
                name_md: "Dublu burger meniu mediu/hot",
                desc_md: "",
                name_ru: "Двойной бургер меню среднее",
                desc_ru: "",
                price: "57"
            },
            {
                name_md: "Dublu burger meniu mare/hot",
                desc_md: "",
                name_ru: "Двойной бургер меню большое",
                desc_ru: "",
                price: "62"
            },
            {
                name_md: "Double crispy burger meniu mediu/hot",
                desc_md: "",
                name_ru: "Двойной бургер Crispy меню среднее",
                desc_ru: "",
                price: "63"
            },
            {
                name_md: "Double crispy burger meniu mare/hot",
                desc_md: "",
                name_ru: "Двойной бургер Crispy меню большое",
                desc_ru: "",
                price: "68"
            }
        ]
    },
    {
        id: "garnituri",
        name: "GARNITURI",
        products: [
            {
                name_md: "Humus 250g",
                desc_md: "Gustare orientala din pure de naut ",
                name_ru: "Хумус 250гр",
                desc_ru: "Восточная закуска из нутового пюре",
                price: "35"
            },
            {
                name_md: "Babaganus",
                desc_md: "Gustare din icre de vinata",
                name_ru: "Бабагануш",
                desc_ru: "Закуска из баклажанной икры",
                price: "45"
            },
            {
                name_md: "Inele de ceapa 120g",
                desc_md: "",
                name_ru: "Луковые кольца 120gr",
                desc_ru: "Закуска  ",
                price: "35"
            },
            {
                name_md: "Falafel 6buc",
                desc_md: "",
                name_ru: "Фалафель 6шт",
                desc_ru: "",
                price: "37"
            },
            {
                name_md: "Cartofi 110/200g",
                desc_md: "",
                name_ru: "Картофель фри 110/200гр",
                desc_ru: "",
                price: "23/25"
            },
            {
                name_md: "Orez 200g",
                desc_md: "",
                name_ru: "Рис 200гр",
                desc_ru: "",
                price: "20"
            },
            {
                name_md: "Lavas",
                desc_md: "",
                name_ru: "Лаваш",
                desc_ru: "",
                price: "5"
            }
        ]
    },
    {
        id: "salate",
        name: "SALATE",
        products: [
            {
                name_md: "Salata Greceasca",
                desc_md: "Salata din legume cu feta",
                name_ru: "Салат Греческий",
                desc_ru: "",
                price: "50"
            },
            {
                name_md: "Salata Cezar",
                desc_md: "Salata din legume cu pui",
                name_ru: "Салат Цезарь",
                desc_ru: "",
                price: "55"
            },
            {
                name_md: "Coleslow dulce/sarat",
                desc_md: "Salata din varza cu sos",
                name_ru: "Коулслоу",
                desc_ru: "",
                price: "20"
            },
            {
                name_md: "Coleslow dulce/sarat",
                desc_md: "Salata din varza cu sos",
                name_ru: "Коулслоу",
                desc_ru: "",
                price: "20"
            }
        ]
    },
    {
        id: "meniu_pentru_copii",
        name: "MENIU PENTRU COPII",
        products: [
            {
                name_md: "Meniu pentru copii",
                desc_md: "",
                name_ru: "Детское меню",
                desc_ru: "2 филе, картофель фри, сок, соус, игрушка",
                price: "20"
            }
        ]
    },
    {
        id: "desert",
        name: "DESERT",
        products: [
            {
                name_md: "Inghetata cornet",
                desc_md: "",
                name_ru: "Мороженое рожок",
                desc_ru: "",
                price: "10"
            },
            {
                name_md: "Desert Maestro",
                desc_md: "Inghetata cu sos de caramel si granola",
                name_ru: "Десерт Maestro ",
                desc_ru: "",
                price: "25"
            }
        ]
    },
    {
        id: "bauturi_fierbinti",
        name: "BAUTURI FIERBINTI",
        products: [
            {
                name_md: "Americano 150ml",
                desc_md: "",
                name_ru: "Americano 150ml",
                desc_ru: "",
                price: "15"
            },
            {
                name_md: "Espresso 30ml",
                desc_md: "",
                name_ru: "Espresso 30ml",
                desc_ru: "",
                price: "15"
            },
            {
                name_md: "Cappuccino 200ml",
                desc_md: "",
                name_ru: "Cappuccino 200ml",
                desc_ru: "",
                price: "20"
            },
            {
                name_md: "Ciocolata fierbinte 300",
                desc_md: "",
                name_ru: "Ciocolata fierbinte 300",
                desc_ru: "",
                price: "30"
            },
            {
                name_md: "White Americano",
                desc_md: "",
                name_ru: "White Americano",
                desc_ru: "",
                price: "20"
            }
        ]
    },
    {
        id: "bauturi_racoritoare",
        name: "BAUTURI RACORITOARE",
        products: [
            {
                name_md: "Airan",
                desc_md: "",
                name_ru: "Airan",
                desc_ru: "",
                price: "20"
            },
            {
                name_md: "Apa plata",
                desc_md: "",
                name_ru: "Apa plata",
                desc_ru: "",
                price: "15"
            },
            {
                name_md: "Cappuccino 200ml",
                desc_md: "",
                name_ru: "Cappuccino 200ml",
                desc_ru: "",
                price: "8"
            },
            {
                name_md: "Suc Rich in sortiment",
                desc_md: "",
                name_ru: "Suc Rich in sortiment",
                desc_ru: "",
                price: "12"
            },
            {
                name_md: "Cappy grapefruit",
                desc_md: "",
                name_ru: "Cappy grapefruit",
                desc_ru: "",
                price: "18"
            },
            {
                name_md: "Cappy piersici",
                desc_md: "",
                name_ru: "Cappy piersici",
                desc_ru: "",
                price: "18"
            },
            {
                name_md: "Cappy portocala",
                desc_md: "",
                name_ru: "Cappy portocala",
                desc_ru: "",
                price: "18"
            },
            {
                name_md: "Frutti lamaie",
                desc_md: "",
                name_ru: "Frutti lamaie",
                desc_ru: "",
                price: "10"
            },
            {
                name_md: "Frutti mar",
                desc_md: "",
                name_ru: "Frutti mar",
                desc_ru: "",
                price: "10"
            },
            {
                name_md: "Apa carbogazoasa",
                desc_md: "",
                name_ru: "Apa carbogazoasa",
                desc_ru: "",
                price: "10"
            },
            {
                name_md: "Ice tea zmeura",
                desc_md: "",
                name_ru: "Ice tea zmeura",
                desc_ru: "",
                price: "20"
            },
            {
                name_md: "Ice tea verde",
                desc_md: "",
                name_ru: "Ice tea verde",
                desc_ru: "",
                price: "20"
            },
            {
                name_md: "Ice tea lamaie",
                desc_md: "",
                name_ru: "Ice tea lamaie",
                desc_ru: "",
                price: "20"
            },
            {
                name_md: "Ice tea piersici",
                desc_md: "",
                name_ru: "Ice tea piersici",
                desc_ru: "",
                price: "20"
            },
            {
                name_md: "Coca Cola 250ml",
                desc_md: "",
                name_ru: "Coca Cola 250ml",
                desc_ru: "",
                price: "12"
            },
            {
                name_md: "Shweppes grapefruit",
                desc_md: "",
                name_ru: "Shweppes grapefruit",
                desc_ru: "",
                price: "12"
            },
            {
                name_md: "Shweppes mojito",
                desc_md: "",
                name_ru: "Shweppes mojito",
                desc_ru: "",
                price: "12"
            },
            {
                name_md: "Sprite 250ml",
                desc_md: "",
                name_ru: "Sprite 250ml",
                desc_ru: "",
                price: "12"
            },
            {
                name_md: "Fanta 250ml",
                desc_md: "",
                name_ru: "Fanta 250ml",
                desc_ru: "",
                price: "12"
            },
            {
                name_md: "Sprite 0,5",
                desc_md: "",
                name_ru: "Sprite 0,5",
                desc_ru: "",
                price: "15"
            },
            {
                name_md: "Coca Cola 0,5",
                desc_md: "",
                name_ru: "Coca Cola 0,5",
                desc_ru: "",
                price: "15"
            },
            {
                name_md: "Fanta 0,5",
                desc_md: "",
                name_ru: "Fanta 0,5",
                desc_ru: "",
                price: "15"
            }
        ]
    }
];
