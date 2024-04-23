class ShoppingItem{
    _itemName;
    _itemQuantity;

    constructor(itemName, itemQuantity){
        this._itemName = itemName;
        this._itemQuantity = itemQuantity
    }

    get itemName(){
        return this._itemName;
    }

    get itemQuantity(){
        return this._itemQuantity;
    }

    set itemQuantity(numberOfItem){
        this._itemQuantity = numberOfItem;
    }

    toString(){
        return `${this.list[i].itemName}: ${this.list[i].itemQuantity}`
    }

}

class ShoppingList{
    
    constructor(){
        this.list =  []
    }

    addItem(item){
        this.list.push(item)
    }

    getNumberOfItems(){
        return this.list.length
    }

    getListOfItems(){
        for(let i=0; i< this.list.length; i++){
            console.log(`${this.list[i].itemName}: ${this.list[i].itemQuantity}`)
        }
    }

    removeItem(item){
        for(let i=0; i< this.list.length; i++){
            if(this.list[i] === item){
                this.list.splice(i,1)
                console.log("Your item was removed")
            }
            console.log("Your item doesn't exist")
        }

    }

}

const bananas = new ShoppingItem("banana", 2)
const bread = new ShoppingItem ("bread", 1)

const list = new ShoppingList()

list.addItem(bananas)
list.addItem(bread)
list.getListOfItems()
list.removeItem(bananas)
bread.itemQuantity = 10
list.getListOfItems()
