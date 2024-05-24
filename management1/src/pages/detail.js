// import { useEffect, useState, forwardRef, useImperativeHandle } from 'react'
// import { Popup, Button } from 'antd-mobile'
// import { AddOutline, StarFill } from 'antd-mobile-icons'
// import closeImg from '../common/close.png'
// import goods1Img from '../common/goods1.png'
// import goods2Img from '../common/goods2.png'
// import goods3Img from '../common/goods3.png'
// import goods4Img from '../common/goods4.png'
// import rateImg from '../common/rate.png'
// import '../index.scss'

// const DetailModal = (props, ref) => {
//     useImperativeHandle(ref, () => ({
//         onOpen,
//         onClose,
//     }))
//     const [visible, setVisible] = useState(false)
//     const [cardTitle, setCardTitle] = useState('')
//     const [cardItem1, setCardItem1] = useState('delivery for free')
//     const [cardItem2, setCardItem2] = useState('20-30min')
//     const [cardItem3, setCardItem3] = useState('')

//     const itemList = [
//         {
//             name: 'Chicken burger',
//             img: goods1Img,
//             content: '200 gr chicken+cheese Lettuce + tomato',
//             rate: 4.8,
//             price: '22.00'
//         },
//         {
//             name: 'Chicken burger',
//             img: goods2Img,
//             content: '200 gr chicken+cheese Lettuce + tomato',
//             rate: 4.8,
//             price: '25.00'
//         },
//         {
//             name: 'Chicken burger',
//             img: goods3Img,
//             content: '200 gr chicken+cheese Lettuce + tomato',
//             rate: 4.8,
//             price: '23.00'
//         },
//         {
//             name: 'Chicken burger',
//             img: goods4Img,
//             content: '200 gr chicken+cheese Lettuce + tomato',
//             rate: 4.8,
//             price: '24.00'
//         },
//     ]
//     const onOpen = (item) => {
//         setCardTitle(item.name)
//         setCardItem3(item.rate)
//         setVisible(true)
//     }
//     const onClose = () => {
//         setVisible(false)
//     }
//     // 添加商品
//     const onAddGoods = item => {
//         console.log(item)
//     }
//     return (
//         <Popup
//             visible={visible}
//             onMaskClick={() => {
//                 setVisible(false)
//             }}
//             onClose={() => {
//                 setVisible(false)
//             }}
//             bodyStyle={{ height: '100vh' }}
//         >
//             <div className="detailArea">
//                 <div className="closeIcon" onClick={onClose}>
//                     <img src={closeImg}  />
//                 </div>
//                 <div className="topContent">
//                     <div className="bgContent">
//                         <div className="cardTitle">{cardTitle}</div>
//                         <ul className="cardList">
//                             <li>{cardItem1}</li>
//                             <li>{cardItem2}</li>
//                             <li>
//                                 {cardItem3}
//                                 <img src={rateImg} style={{ marginLeft: '3px', width: '15px', height: '15px'}} />
//                             </li>
//                         </ul>
//                     </div>
                    
//                 </div>
//                 <ul className="listContent">
//                     {itemList.map(item => {
//                         return (
//                             <li className="contentItem">
//                                 <div className="itemRate">
//                                     <StarFill style={{ color: '#efc96a', marginRight: '3px' }} />
//                                     <div>{item.rate}</div>
//                                 </div>
//                                 <img className="itemImg" src={item.img} />
//                                 <div className="itemName">{item.name}</div>
//                                 <div className="itemContent">{item.content}</div>
//                                 <div className="itemFooter">
//                                     <div className="itemPrice">$ {item.price}</div>
//                                     <Button className="itemAddBtn" onClick={() => onAddGoods(item)}><AddOutline /></Button>
//                                 </div>
//                             </li>
//                         )
//                     })}
//                 </ul>
//             </div>
//         </Popup>)
// }

// export default forwardRef(DetailModal)