import axios from 'axios';
import React, { createContext, useEffect, useReducer, useState } from 'react';
import { API } from '../Helpers/Const';
import { auth } from '../Firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';


export const productContext = createContext()

const INIT_STATE = {
    products: null,
    edit: null,
    cart: {},
    cartLength: 0,
    paginatedPages: 1,
    detail: {},    
}

const reducer = (state = INIT_STATE, action) => {
    switch(action.type){
        case "GET_PRODUCTS":
            return {...state, products: action.payload.data, 
                paginatedPages: Math.ceil(action.payload.headers["x-total-count"] /6)}
        case "GET_EDIT_PRODUCT":
            return{...state, edit: action.payload}
        case "CHANGE_CART_COUNT":
            return{...state, cartLength: action.payload}
        case "GET_CART":
            return{...state, cart: action.payload}  
        case "GET_DETAIL_PRODUCT":
            return{...state, detail: action.payload}
        default: 
            return state
    }
}
const ProductsContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    // ! CREATE 
    const addProduct = async (newProduct) =>  {
        try {
                await axios.post(API, newProduct)
                getProducts()
        } catch (error) {
            alert(error)
        }
    }

    
    // ! READ   
    const getProducts = async () => {
        try {
            let res = await axios.get(`${API}${window.location.search}`)
            let action = {
                type: "GET_PRODUCTS",
                payload: res
            }
            dispatch(action)
    
        } catch (error) {
            alert(error)
        }
    }

     //! DELETE 
     const deleteProduct = async (id) => {
        await axios.delete(`${API}/${id}`)
        getProducts()
    }

     //! Edit Product


     const  editProduct = async (id) => {
        try {
            let res = await axios(`${API}/${id}`)
            let action = {
                type: "GET_EDIT_PRODUCT",
                payload: res.data
            }
            dispatch(action)
        } catch (error) {
            console.log(error);
        }
    }
     //! save edited Product

     const saveEditedProduct = async (updatedProduct) => {
        try {
            await axios.patch(`${API}/${updatedProduct.id}`, updatedProduct)
            getProducts()
        }catch (error) {
            console.log(error);
        }
    }


    //! GEt Detail

    const getDetail = async (id) => {
        const res = await axios(`${API}/${id}`)
        let action = {
            type: "GET_DETAIL_PRODUCT",
            payload: res.data
        }
        dispatch(action)
    }


    //! Sign IN / sign up

    function signUp(email, password){
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function signIn(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    // function ForgotPassword(email){
    //     return sendPasswordResetEmail(auth, email, {
    //         url: 'http//localhost/3000/login'})
    // }
    
    function logout(){
        return signOut(auth)
    }
    function useAuth(){             
        const [currentUser, setCurrentUser] = useState() 

        useEffect(() => { 
            const unsub = onAuthStateChanged(auth, user => setCurrentUser(user))
            return unsub
        }, [])
        return currentUser
    }

    return (
        <productContext.Provider value={{
            addProduct,
            getProducts,
            deleteProduct,
            editProduct,
            saveEditedProduct,
            // addToCart,
            // checkProductInCart,
            // getCartLength,
            // getCart,
            // changeProductCount,
            getDetail,
            signIn,
            signUp,
            logout,
            useAuth,
            // ForgotPassword,
            // deleteCartProduct,
            // deleteCartPayment,
            edit: state.edit,
            products: state.products,
            cartLength: state.cartLength,
            cart: state.cart,
            paginatedPages: state.paginatedPages,
            detail: state.detail
        }}>
            {children}
        </productContext.Provider>
    );
};

export default ProductsContextProvider;
