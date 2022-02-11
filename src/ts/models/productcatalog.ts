export class Product {
    name: string;
    price: number;
    users: string;
    img: string;
    details: string;
    id: number;
  
    constructor(
        name: string,
        price: number,
        users: string,
        img: string,
        details: string,
        id: number,
    ) {
      this.name = name;
      this.price = price;
      this.users = users;
      this.img = img;
      this.details = details;
      this.id = id;
    }
  }

export const productcatalog: Product[] = [
    {
        name: "Campa på Area 51",
        price: 20999,
        users: "1-2",
        img: "https://images.unsplash.com/photo-1638862925201-4e373cb6a630?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        details: "En naturnära övernattning i Nevadaöknen. The truth is out there.",
        id: 101
    },

    {
        name: "Ölnirvana",
        price: 10999,
        users: "1-4",
        img: "https://images.unsplash.com/photo-1560761069-ce1ebcc652a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        details: "Meditationsretreat och bryggerihotell i ett!",
        id: 102
    },

    {
        name: "Rymdresa",
        price: 3999000,
        users: "1",
        img: "https://images.unsplash.com/photo-1541873676-a18131494184?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=718&q=80",
        details: "När du behöver lite space.",
        id: 103
    },

    {
        name: "Squid game",
        price: 99000,
        users: "1",
        img: "https://images.unsplash.com/photo-1636542980176-cd7822b5a5cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
        details: "Den perfekta upplevelsen för alla äventyrslystna.",
        id: 104
    },
    
    {
        name: "Sleepover på slottet",
        price: 50599,
        users: "1-10",
        img: "https://images.unsplash.com/photo-1622647608751-db4d3a66aa72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        details: "Festa som en kung. Sov som en prinsessa.",
        id: 105
    },

    {
        name: "Hyr Jay-Z:s ö",
        price: 790000,
        users: "1-20",
        img: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80",
        details: "Jay-Z vet hur en ledig vecka ska tillbringas - och nu kan du semestra som honom. Låt paradisön bli ditt privata semesterparadis för den nätta summan 790 000 kronor per vecka.",
        id: 106
    },
  
];

