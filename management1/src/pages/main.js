// import React, { useEffect, useState } from 'react';
// import { Badge, TabBar } from 'antd-mobile';
// import { AppOutline, UnorderedListOutline, UserOutline, } from 'antd-mobile-icons';
// import Home from './pages'
// import homeIcon from'../common/home_icon.png'
// import homeIconActive from'../common/home_icon_active.png'
// import shoppingCarIcon from'../common/shopping_car.png'
// import shoppingCarIconActive from'../common/shopping_car_active.png'
// import './App.scss'
// const iconMap = {
//   homeIcon,
//   homeIconActive,
//   shoppingCarIcon,
//   shoppingCarIconActive
// }
// const tabs = [
//   {
//     key: 'home',
//     title: 'Home',
//     icon: 'homeIcon',
//   },
//   {
//     key: 'page1',
//     title: 'Cart',
//     icon: 'shoppingCarIcon',
//   },
// ];
// export default () => {
//   const [activeKey, setActiveKey] = useState('home')
//   const onChangeActiveKey = key => {
//     setActiveKey(key)
//   } 
//   useEffect(() => {
//     console.log(activeKey)
//   }, [activeKey])
//   return (
//     <div className="mainContent">
//       <div className="mainPage">
//         {activeKey === 'home' && <Home />}
//       </div>
//       <div className="footerBar">
//         {tabs.map(tab => {
//           return (
//             <div
//               key={tab.key}
//               className={`${activeKey === tab.key ? 'activeItem' : ''} tabItem`}
//               onClick={() => onChangeActiveKey(tab.key)}
//             >
//               <img src={iconMap[`${tab.icon}${activeKey === tab.key ? 'Active' : ''}`]} />
//               <div>{tab.title}</div>
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   );
// };