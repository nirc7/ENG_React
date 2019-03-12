export default class Item{
    constructor(id, name, price, imgSrc ){
        this.id=id;
        this.name=name;
        this.price = price;
        this.imgSrc = imgSrc;
    }

    show=()=>{
        return `name= ${this.name} price=${this.price}`;
    }
}