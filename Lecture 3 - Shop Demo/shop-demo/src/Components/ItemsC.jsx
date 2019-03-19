import React from 'react';
import ItemC from './ItemC';

export default function ItemsC(props) {

    // liClicked = (e) => {
    //     //alert(e.currentTarget.dataset.itemid );

    //     //opt1
    //     //this.props.sendItemToMove(e.currentTarget.dataset.itemid);
    //     // console.log(e.currentTarget.dataset.item);
    //     // let me = this.props.items.find(item => item == e.currentTarget.dataset.item);
    //     // console.log('me=', me);
    //     // this.props.sendItemObjToMove(me);

    //     //opt2
    //     // const localItemIndex = e.currentTarget.dataset.index;
    //     // console.log('mor=', localItemIndex);
    //     // this.props.sendItemObjToMove(this.props.items[localItemIndex]);
    // }

    const getItemObjToMoveFromItemC = (itemToMoveObj) => {
        props.sendItemObjToMoveFromItemsC(itemToMoveObj)
    }

    const listOfItemCToShow = props.items.map((item, index) => {
        return (
            <ItemC item={item} key={index} sendItemObjToMoveFromItemC={getItemObjToMoveFromItemC} />
        );
    });

    {
        // // let itemsToShow = this.props.items.map((item, index) => {
        // //     return (
        // //         <li
        // //             key={item.id}
        // //             style={{
        // //                 padding: 10,
        // //                 flex: 1,
        // //                 border: '2px solid black',
        // //                 borderRadius: 15
        // //             }}
        // //             //onClick={this.liClicked}
        // //             onClick={() => this.props.sendItemObjToMove(item)} //opt3 :)
        // //         // data-itemid={item.id}
        // //         // data-item={item}
        // //         // data-index={index}
        // //         >
        // //             {item.show()}
        // //             <img src={item.imgSrc} style={{ width: 100, height: 100 }} />
        // //         </li>
        // //     );
        // // });
    }

    return (
        <div style={{ display: 'flex', border: '2px solid black' }}>
            <ul style={{ display: 'flex', flexDirection: 'column' }}>
                {/* {itemsToShow}
                    items */}
                {listOfItemCToShow}
            </ul>
        </div>
    );
}