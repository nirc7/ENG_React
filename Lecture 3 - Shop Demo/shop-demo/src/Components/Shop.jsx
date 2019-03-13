import React, { Component } from 'react';
import ItemsC from './ItemsC.jsx';
import Item from '../Classes/Item';
import ItemsInCart from './ItemsInCart.jsx';
import './Styles/Shop.css';

class Shop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                new Item(1, 'T-Shirt', 20, './images/tshirt.jpg'),
                new Item(2, 'Pants', 30, './images/pants.jpg'),
                new Item(3, 'Hat', 10, './images/hat.jpg'),
            ],
            // items: [
            //     {id:1,name:'T-Shirt',price:20,imgSrc: './images/tshirt.jpg' },
            //     {id:2,name:'Pants',price:30,imgSrc: './images/pants.jpg' },
            //     {id:3,name:'Hat',price:10,imgSrc: './images/hat.jpg' },
            // ],
            itemsInCart: []
        };
    }

    getItemObjToMove = (itemToMove) => {
        console.log('itemToMove=' , itemToMove);
        let newItems = this.state.items.filter(item => item != itemToMove);
        let newItemsInCart = [...this.state.itemsInCart, itemToMove ];
        console.log(newItems);
        this.setState({
            items: newItems,
            itemsInCart: newItemsInCart
        });
    }

    // getItemToMove = (itemIdToMove) => {
    //     console.log(itemIdToMove);
    //     // let newItems = this.state.items.filter(item => 
    //     //     {
    //     //         //console.log(typeof( itemIdToMove));
    //     //         return item.id != itemIdToMove
    //     //     });

    //     let newItems = this.state.items.filter(item => item.id != itemIdToMove);
    //     let newItemsInCart = [...this.state.itemsInCart, this.state.items.filter(item => item.id == itemIdToMove)[0]];
    //     console.log(newItems);
    //     this.setState({
    //         items: newItems,
    //         itemsInCart: newItemsInCart
    //     });
    // }

    getItemToMoveBackToItems = (itemIdToMove) => {
        console.log(itemIdToMove);
        // let newItems = this.state.items.filter(item => 
        //     {
        //         //console.log(typeof( itemIdToMove));
        //         return item.id != itemIdToMove
        //     });

        let newItemsInCart = this.state.itemsInCart.filter(item => item.id != itemIdToMove);
        let newItems = [...this.state.items, this.state.itemsInCart.filter(item => item.id == itemIdToMove)[0]];
        console.log(newItems);
        this.setState({
            items: newItems,
            itemsInCart: newItemsInCart
        });
    }

    render() {
        console.log(this.state.itemsInCart);
        return (
            <div className='main-container' style={{ margin: 20 }}>
                <center>
                    <div className='navbar'>
                        <div style={{ flex: 3 }}>shop</div>
                        <div className='right-navbar'>
                            <ItemsInCart
                                sendItemToMoveBackToItems={this.getItemToMoveBackToItems}
                                items={this.state.itemsInCart}
                            />
                        </div>

                    </div>
                    <ItemsC
                        items={this.state.items}
                        sendItemToMove={this.getItemToMove}
                        sendItemObjToMove={this.getItemObjToMove} />
                </center>
            </div>
        );
    }
}

export default Shop;

