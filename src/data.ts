import {configs} from "./configs";

export interface IProduct {
    name_ro: string;
    desc_ro: string;
    name_ru: string;
    desc_ru: string;
    price: string;
    image: string;
}
export interface ICategory {
    id: string;
    name_ro: string;
    name_ru: string;
    products: IProduct[];
}
export const categories: ICategory[] = [
    {
        id: "bucket",
        name_ro: "BUCKET",
        name_ru: "BUCKET",
        products: [
            {
                name_ro: "Hot wings bucket",
                desc_ro: "20 aripioare",

                name_ru: "Hot wings bucket",
                desc_ru: "20 крылышек",
                price: "140",
                image: "menu/hot wings bucket.png?version=" + configs.version
            },
            {
                name_ro: "Bucket for two",
                desc_ro: "2 gambe, 6 file+2 bauturi ,2 cartofi",
                name_ru: "Bucket for two",
                desc_ru: "2 ножки, 6 филе + напиток и картофель фри",
                price: "130",
                image: "menu/family buc.png?version=" + configs.version
            },
            {
                name_ro: "Share Bucket",
                desc_ro: "9 file, 9 aripioare",
                name_ru: "Share Bucket",
                desc_ru: "9 филе, 9 крылышек",
                price: "120",
                image: "menu/family buc.png?version=" + configs.version
            },
            {
                name_ro: "Family bucket",
                desc_ro: "4 gambe, 4 file+ 3 cartofi, 3 bauturi",
                name_ru: "Family bucket",
                desc_ru: "4 ножки, 4 филе + напиток и картофель фри",
                price: "200",
                image: "menu/family buc.png?version=" + configs.version
            }
        ]
    },
    {
        id: "meniu_pui",
        name_ro: "MENIU PUI",
        name_ru: "MENIU PUI",
        products: [
            {
                name_ro: "Aripioare",
                desc_ro: "5 sau 8 buc",
                name_ru: "Крылышки",
                desc_ru: "По 5 или 8 шт",
                price: "55/72",
                image: "menu/Aripioare.png?version=" + configs.version
            },
            {
                name_ro: "Crispy fileu",
                desc_ro: "4 sau 7 buc +sos",
                name_ru: "Crispy филе",
                desc_ru: "По 4 или 7 шт + соус",
                price: "53/69",
                image: "menu/Crispy fileu.png?version=" + configs.version
            },
            {
                name_ro: "Crispy fileu meniu",
                desc_ro: "4 sau 7 buc crispy file cu bautura la alegere si cartofi",
                name_ru: "Crispy филе меню",
                desc_ru: "4 или 7 шт хрустящего филе с напитком на выбор, картофелем фри и соусом",
                price: "77/85",
                image: "menu/Crispy fileu meniu.png?version=" + configs.version
            },
            {
                name_ro: "Meniu aripioare",
                desc_ro: "5 sau 8 buc aripioare cu bautura la alegere si cartofi",
                name_ru: "Меню крылышки",
                desc_ru: "5 или 8 крылышек с напитком на выбор и картофелем фри",
                price: "75/95",
                image: "menu/Meniu aripioare.png?version=" + configs.version
            },
            {
                name_ro: "Meniu gambe",
                desc_ro: "2 gambe cu bautura la alegere si cartofi",
                name_ru: "Меню ножки",
                desc_ru: "2 ножки с напитком на выбор и картофелем фри",
                price: "60",
                image: "menu/Meniu gambe.png?version=" + configs.version
            },
            {
                name_ro: "Gambe",
                desc_ro: "1,2 sau 3 gambe",
                name_ru: "Ножки",
                desc_ru: "1, 2 или 3 ножки",
                price: "20/35/50",
                image: "menu/Gambe.png?version=" + configs.version
            }
        ]
    },
    {
        id: "wrap_meniu_fahita",
        name_ro: "WRAP MENIU / FAHITA",
        name_ru: "WRAP MENIU / FAHITA",
        products: [
            {
                name_ro: "Wrap cu fileu",
                desc_ro: "Wrap cu fileu",
                name_ru: "Врап с филе",
                desc_ru: "Врап с филе",
                price: "50",
                image: "assets/images/new-menu/wrap.png?version=" + configs.version
            },
            {
                name_ro: "Wrap cu falafel",
                desc_ro: "Wrap cu falafel",
                name_ru: "Врап с фалафелем",
                desc_ru: "Врап с фалафелем",
                price: "50",
                image: "menu/Wrap cu falafel.png?version=" + configs.version
            },
            {
                name_ro: "Wrap cu fileu meniu mediu /hot",
                desc_ro: "picant/ nepicant",
                name_ru: "Врап с филе меню среднее",
                desc_ru: "острое/не острое",
                price: "70",
                image: "menu/Wrap cu fileu meniu mediu hot.png?version=" + configs.version
            },
            {
                name_ro: "Wrap cu fileiu meniu mare /hot",
                desc_ro: "picant/nepicant",
                name_ru: "Врап с филе меню большое",
                desc_ru: "острое / не острое",
                price: "75",
                image: "menu/Wrap cu fileu meniu mare hot.png?version=" + configs.version
            },
            {
                name_ro: "Wrap cu falafel meniu mediu /hot",
                desc_ro: "Wrap, cartof+bautura",
                name_ru: "Врап с фалафелем меню среднее",
                desc_ru: "Врап, картофель фри и напиток",
                price: "70",
                image: "menu/Wrap cu falafel meniu mediu hot.png?version=" + configs.version
            },
            {
                name_ro: "Wrap cu falafel meniu mare/hot",
                desc_ro: "Wrap, cartof+bautura",
                name_ru: "Врап с фалафелем меню большое",
                desc_ru: "Врап, картофель фри и напиток",
                price: "75",
                image: "menu/Wrap cu falafel meniu mare hot.png?version=" + configs.version
            },
            {
                name_ro: "Fajita",
                desc_ro: "Fajita",
                name_ru: "Фахита",
                desc_ru: "",
                price: "85",
                image: "menu/Fajita.png?version=" + configs.version
            }
        ]
    },
    {
        id: "burger_meniu",
        name_ro: "BURGER MENIU",
        name_ru: "BURGER MENIU",
        products: [
            {
                name_ro: "Burger/hot",
                desc_ro: "picant/nepicant",
                name_ru: "Бургер",
                desc_ru: "острый/ не острый",
                price: "20",
                image: "menu/Burger hot.png?version=" + configs.version
            },
            {
                name_ro: "Double burger/hot",
                desc_ro: "picant/nepicant",
                name_ru: "Двойной бургер",
                desc_ru: "острый/ не острый",
                price: "35",
                image: "menu/Double burger hot.png?version=" + configs.version
            },
            {
                name_ro: "Crispy burger",
                desc_ro: "",
                name_ru: "Бургер Crispy",
                desc_ru: "",
                price: "40",
                image: "menu/Crispy burger.png?version=" + configs.version
            },
            {
                name_ro: "Burger cu vita",
                desc_ro: "",
                name_ru: "Бургер с говядиной",
                desc_ru: "",
                price: "65",
                image: "menu/Burger cu vita.png?version=" + configs.version
            },
            {
                name_ro: "Combo burger meniu",
                desc_ro: "",
                name_ru: "Бургер меню комбо",
                desc_ru: "",
                price: "55",
                image: "menu/Combo burger meniu.png?version=" + configs.version
            },
            {
                name_ro: "Combo burger meniu mare/hot",
                desc_ro: "",
                name_ru: "Бургер меню комбо большое",
                desc_ru: "",
                price: "66",
                image: "menu/Combo burger meniu mare hot.png?version=" + configs.version
            },
            {
                name_ro: "Dublu burger meniu mediu/hot",
                desc_ro: "",
                name_ru: "Двойной бургер меню среднее",
                desc_ru: "",
                price: "57",
                image: "assets/images/new-menu/dubluBurger.png?version=" + configs.version
            },
            {
                name_ro: "Dublu burger meniu mare/hot",
                desc_ro: "",
                name_ru: "Двойной бургер меню большое",
                desc_ru: "",
                price: "62",
                image: "assets/images/new-menu/dubluBurgerMenu.png?version=" + configs.version
            },
            {
                name_ro: "Double crispy burger meniu mediu/hot",
                desc_ro: "",
                name_ru: "Двойной бургер Crispy меню среднее",
                desc_ru: "",
                price: "63",
                image: "menu/Double crispy burger meniu mediuhot.png?version=" + configs.version
            },
            {
                name_ro: "Double crispy burger meniu mare/hot",
                desc_ro: "",
                name_ru: "Двойной бургер Crispy меню большое",
                desc_ru: "",
                price: "68",
                image: "menu/Double crispy burger meniu marehot.png?version=" + configs.version
            }
        ]
    },
    {
        id: "garnituri",
        name_ro: "GARNITURI",
        name_ru: "GARNITURI",
        products: [
            {
                name_ro: "Humus 250g",
                desc_ro: "Gustare orientala din pure de naut ",
                name_ru: "Хумус 250гр",
                desc_ru: "Восточная закуска из нутового пюре",
                price: "35",
                image: "assets/images/new-menu/humus.png?version=" + configs.version
            },
            {
                name_ro: "Babaganus",
                desc_ro: "Gustare din icre de vinata",
                name_ru: "Бабагануш",
                desc_ru: "Закуска из баклажанной икры",
                price: "45",
                image: "assets/images/new-menu/babaganus.png?version=" + configs.version
            },
            {
                name_ro: "Inele de ceapa 120g",
                desc_ro: "",
                name_ru: "Луковые кольца 120gr",
                desc_ru: "Закуска  ",
                price: "35",
                image: "assets/images/new-menu/inele.png?version=" + configs.version
            },
            {
                name_ro: "Falafel 6buc",
                desc_ro: "",
                name_ru: "Фалафель 6шт",
                desc_ru: "",
                price: "37",
                image: "menu/falafel.png?version=" + configs.version
            },
            {
                name_ro: "Cartofi 110/200g",
                desc_ro: "",
                name_ru: "Картофель фри 110/200гр",
                desc_ru: "",
                price: "23/25",
                image: "menu/cartofi.png?version=" + configs.version
            },
            {
                name_ro: "Orez 200g",
                desc_ro: "",
                name_ru: "Рис 200гр",
                desc_ru: "",
                price: "20",
                image: "assets/images/new-menu/orez.png?version=" + configs.version
            },
            {
                name_ro: "Lavas",
                desc_ro: "",
                name_ru: "Лаваш",
                desc_ru: "",
                price: "5",
                image: "assets/images/placeholder-logo.png?version=" + configs.version
            }
        ]
    },
    {
        id: "salate",
        name_ro: "SALATE",
        name_ru: "SALATE",
        products: [
            {
                name_ro: "Salata Greceasca",
                desc_ro: "Salata din legume cu feta",
                name_ru: "Салат Греческий",
                desc_ru: "",
                price: "50",
                image: "menu/Salata din legume cu feta.png?version=" + configs.version
            },
            {
                name_ro: "Salata Cezar",
                desc_ro: "Salata din legume cu pui",
                name_ru: "Салат Цезарь",
                desc_ru: "",
                price: "55",
                image: "menu/Salata din legume cu pui.png?version=" + configs.version
            },
            {
                name_ro: "Coleslow dulce/sarat",
                desc_ro: "Salata din varza cu sos",
                name_ru: "Коулслоу",
                desc_ru: "",
                price: "20",
                image: "assets/images/new-menu/coleslow.png?version=" + configs.version
            },
            {
                name_ro: "Coleslow dulce/sarat",
                desc_ro: "Salata din varza cu sos",
                name_ru: "Коулслоу",
                desc_ru: "",
                price: "20",
                image: "menu/Salata din varza cu sos.png?version=" + configs.version
            }
        ]
    },
    {
        id: "meniu_pentru_copii",
        name_ro: "MENIU PENTRU COPII",
        name_ru: "MENIU PENTRU COPII",
        products: [
            {
                name_ro: "Meniu pentru copii",
                desc_ro: "2 file de pui, cartofi, suc , sos, jucarie",
                name_ru: "Детское меню",
                desc_ru: "2 филе, картофель фри, сок, соус, игрушка",
                price: "20",
                image: "menu/Meniu pentru copii.png?version=" + configs.version
            }
        ]
    },
    {
        id: "desert",
        name_ro: "DESERT",
        name_ru: "DESERT",
        products: [
            {
                name_ro: "Inghetata cornet",
                desc_ro: "",
                name_ru: "Мороженое рожок",
                desc_ru: "",
                price: "10",
                image: "menu/Inghetata cornet.png?version=" + configs.version
            },
            {
                name_ro: "Desert Maestro",
                desc_ro: "Inghetata cu sos de caramel si granola",
                name_ru: "Десерт Maestro ",
                desc_ru: "",
                price: "25",
                image: "menu/Desert Maestro.png?version=" + configs.version
            }
        ]
    },
    {
        id: "bauturi_fierbinti",
        name_ro: "BAUTURI FIERBINTI",
        name_ru: "BAUTURI FIERBINTI",
        products: [
            {
                name_ro: "Americano 150ml",
                desc_ro: "",
                name_ru: "Americano 150ml",
                desc_ru: "",
                price: "15",
                image: "assets/images/new-menu/americano.png?version=" + configs.version
            },
            {
                name_ro: "Espresso 30ml",
                desc_ro: "",
                name_ru: "Espresso 30ml",
                desc_ru: "",
                price: "15",
                image: "assets/images/placeholder-logo.png?version=" + configs.version
            },
            {
                name_ro: "Cappuccino 200ml",
                desc_ro: "",
                name_ru: "Cappuccino 200ml",
                desc_ru: "",
                price: "20",
                image: "assets/images/new-menu/capucino.png?version=" + configs.version
            },
            {
                name_ro: "Ciocolata fierbinte 300",
                desc_ro: "",
                name_ru: "Ciocolata fierbinte 300",
                desc_ru: "",
                price: "30",
                image: "assets/images/placeholder-logo.png?version=" + configs.version
            },
            {
                name_ro: "White Americano",
                desc_ro: "",
                name_ru: "White Americano",
                desc_ru: "",
                price: "20",
                image: "assets/images/placeholder-logo.png?version=" + configs.version
            }
        ]
    },
    {
        id: "bauturi_racoritoare",
        name_ro: "BAUTURI RACORITOARE",
        name_ru: "BAUTURI RACORITOARE",
        products: [
            {
                name_ro: "Airan",
                desc_ro: "",
                name_ru: "Airan",
                desc_ru: "",
                price: "20",
                image: "assets/images/placeholder-logo.png?version=" + configs.version
            },
            {
                name_ro: "Apa plata",
                desc_ro: "",
                name_ru: "Apa plata",
                desc_ru: "",
                price: "15",
                image: "menu/Apa plata 0.5L.png?version=" + configs.version
            },
            {
                name_ro: "Cappuccino 200ml",
                desc_ro: "",
                name_ru: "Cappuccino 200ml",
                desc_ru: "",
                price: "8",
                image: "assets/images/placeholder-logo.png?version=" + configs.version
            },
            {
                name_ro: "Suc Rich in sortiment",
                desc_ro: "",
                name_ru: "Suc Rich in sortiment",
                desc_ru: "",
                price: "12",
                image: "menu/Suc Rich in sortiment 200ml.png?version=" + configs.version
            },
            {
                name_ro: "Cappy grapefruit",
                desc_ro: "",
                name_ru: "Cappy grapefruit",
                desc_ru: "",
                price: "18",
                image: "menu/Cappy grapefruit 330ml.png?version=" + configs.version
            },
            {
                name_ro: "Cappy piersici",
                desc_ro: "",
                name_ru: "Cappy piersici",
                desc_ru: "",
                price: "18",
                image: "menu/Cappy piersici 330ml.png?version=" + configs.version
            },
            {
                name_ro: "Cappy portocala",
                desc_ro: "",
                name_ru: "Cappy portocala",
                desc_ru: "",
                price: "18",
                image: "menu/Cappy portocala 330ml.png?version=" + configs.version
            },
            {
                name_ro: "Frutti lamaie",
                desc_ro: "",
                name_ru: "Frutti lamaie",
                desc_ru: "",
                price: "10",
                image: "menu/Frutti lamaie 200ml.png?version=" + configs.version
            },
            {
                name_ro: "Frutti mar",
                desc_ro: "",
                name_ru: "Frutti mar",
                desc_ru: "",
                price: "10",
                image: "menu/Frutti mar 200ml.png?version=" + configs.version
            },
            {
                name_ro: "Apa carbogazoasa",
                desc_ro: "",
                name_ru: "Apa carbogazoasa",
                desc_ru: "",
                price: "10",
                image: "menu/Apa carbogazoasa 200ml.png?version=" + configs.version
            },
            {
                name_ro: "Ice tea zmeura",
                desc_ro: "",
                name_ru: "Ice tea zmeura",
                desc_ru: "",
                price: "20",
                image: "menu/Ice tea zmeura 0,5L.png?version=" + configs.version
            },
            {
                name_ro: "Ice tea verde",
                desc_ro: "",
                name_ru: "Ice tea verde",
                desc_ru: "",
                price: "20",
                image: "menu/Ice tea verde 0,5L.png?version=" + configs.version
            },
            {
                name_ro: "Ice tea lamaie",
                desc_ro: "",
                name_ru: "Ice tea lamaie",
                desc_ru: "",
                price: "20",
                image: "menu/Ice tea lamaie 0,5L.png?version=" + configs.version
            },
            {
                name_ro: "Ice tea piersici",
                desc_ro: "",
                name_ru: "Ice tea piersici",
                desc_ru: "",
                price: "20",
                image: "menu/Ice tea piersici 0,5L.png?version=" + configs.version
            },
            {
                name_ro: "Coca Cola 250ml",
                desc_ro: "",
                name_ru: "Coca Cola 250ml",
                desc_ru: "",
                price: "12",
                image: "menu/cola250ml (1).png?version=" + configs.version
            },
            {
                name_ro: "Shweppes grapefruit",
                desc_ro: "",
                name_ru: "Shweppes grapefruit",
                desc_ru: "",
                price: "12",
                image: "menu/Schweppes grapefruit 250ml.png?version=" + configs.version
            },
            {
                name_ro: "Shweppes mojito",
                desc_ro: "",
                name_ru: "Shweppes mojito",
                desc_ru: "",
                price: "12",
                image: "menu/Schweppes mojito 250ml.png?version=" + configs.version
            },
            {
                name_ro: "Sprite 250ml",
                desc_ro: "",
                name_ru: "Sprite 250ml",
                desc_ru: "",
                price: "12",
                image: "menu/sprirte250ml (2).png?version=" + configs.version
            },
            {
                name_ro: "Fanta 250ml",
                desc_ro: "",
                name_ru: "Fanta 250ml",
                desc_ru: "",
                price: "12",
                image: "menu/fanta250ml (3).png?version=" + configs.version
            },
            {
                name_ro: "Sprite 0,5",
                desc_ro: "",
                name_ru: "Sprite 0,5",
                desc_ru: "",
                price: "15",
                image: "menu/sprite 0,5ml.png?version=" + configs.version
            },
            {
                name_ro: "Coca Cola 0,5",
                desc_ro: "",
                name_ru: "Coca Cola 0,5",
                desc_ru: "",
                price: "15",
                image: "menu/cola 0,5ml.png?version=" + configs.version
            },
            {
                name_ro: "Fanta 0,5",
                desc_ro: "",
                name_ru: "Fanta 0,5",
                desc_ru: "",
                price: "15",
                image: "menu/fanta 0,5ml.png?version=" + configs.version
            }
        ]
    }
];
