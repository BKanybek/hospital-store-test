import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Payment from './Components/Payment/Payment';
import ProductsContextProvider from './ProductContext/ProductContext';
import Login from './Components/Auth/Login/Login';
import Register from './Components/Auth/Register/Register';
import Cart from './Components/Cart/Cart';
import AddObject from './Components/Admin/AddObject/AddObject';
import EditObject from './Components/Admin/EditObject/EditObject';
import DetailObject from './Components/Admin/DetailObject/DetailObject';
import ListObject from './Components/Admin/ListObject/ListObject';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import EquipmentAdd from './Components/Admin/Equipments/EquipmentAdd/EquipmentAdd';
import EquipmentContextProvider from './ProductContext/EquipmentContext';
import ListEquipments from './Components/Admin/Equipments/ListEquipment/ListEquipment';
import DetailEquipment from './Components/Admin/Equipments/DetailEquipment/DetailEquipment';
import EditEquipment from './Components/Admin/Equipments/EditEquipment/EditEquipment';
import Stream from './Components/Comments/Stream';
import Favorite from './Components/Favorite/Favorite';
import CommentsList from './Components/Comments/CommentsNew/CommentsList';
import CommentsAdd from './Components/Comments/CommentsNew/CommentsAdd';
import AdminCreate from './Components/Admin/AdminCreate/AdminCreate';
import ContactUs from './Components/Home/ContactUs/ContactUs';
// import RealChat from './Components/RealChat/RealChat';







const MyRoutes = () => {
    return (
        <ProductsContextProvider>
            <EquipmentContextProvider>
                <BrowserRouter>
                <NavBar/>
                    <Routes>
                        <Route path='/list' element={<ListObject/>}/>
                        <Route path='/add' element={<AddObject/>} />
                        <Route path='/' element={<Home/>} />
                        <Route path='/list/edit/:id' element={<EditObject/>} />
                        <Route path='/detail/:id' element={<DetailObject/>} />
                        <Route path='/cart' element={<Cart/>} />
                        <Route path='/register' element={<Register/>} />
                        <Route path='/login' element={<Login/>} />       
                        <Route path='/pay' element={<Payment/>} />
                        <Route path='/add2' element={<EquipmentAdd/>} />
                        <Route path='/list2' element={<ListEquipments/>} />
                        <Route path='/equip/:id' element={<DetailEquipment/>} />
                        <Route path='/list2/equip/:id' element={<EditEquipment/>} />
                        <Route path='/comment' element={<Stream/>} />
                        <Route path='/favorite' element={<Favorite/>} />
                        <Route path='/2' element={<CommentsList/>} />
                        <Route path='/123' element={<CommentsAdd/>} />
                        <Route path='/contact' element={<ContactUs/>} />
                        <Route path='/admin' element={<AdminCreate/>} />
                        {/* <Route path='/chat' element={<RealChat/>} /> */}

                    </Routes>
                </BrowserRouter>
             </EquipmentContextProvider>
        </ProductsContextProvider>
    );
};

export default MyRoutes;