import React from 'react';

export default function ItemC(props) {
    let { item } = props;

    return (
        <div>
            <li
                key={item.id}
                style={{
                    padding: 10,
                    flex: 1,
                    border: '2px solid black',
                    borderRadius: 15
                }}
                onClick={() => props.sendItemObjToMoveFromItemC(item)}
            >
                {item.show()}
                <img src={item.imgSrc} style={{ width: 100, height: 100 }} alt='img1' />
            </li>
        </div>
    );
}