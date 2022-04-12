export class Product {
    _id:number;
    name : string;
    description: string;
    price: number;
    image: string;
    created_At: string;
    constructor(){
        this._id =0;
        this.name = "";
        this.description="";
        this.price = 0;
        this.image = "";
        this.created_At = ""
    }

}
