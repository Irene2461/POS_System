import { SET_DOUGHNUT, SET_CUPCAKE, SET_DRINK, SET_FOOD, SHOW_MODAL, HIDE_MODAL, SET_FOOD_DETAIL, SET_FOOD1 } from "./types/FoodType";
import { history } from "../App";
import { quanLyFoodService } from "../sevices/QuanLyFoodService";


export const getApiFoodAction = () => {
    return async (dispatch) =>{
        try {
            var result = await quanLyFoodService.layDanhSachFood();
            // sau khi lay du lieu tu API ve dua len redux
            const action = {
                type: SET_FOOD1,
                dataFood1: result.data
            }
            dispatch(action)
        } catch (errors) {
            console.log ("Hello")
            // alert('errors: ' + errors.response?.data);
        }
    }
}

export const getFoodDetailAction = (maSP) => {
    return async dispatch => {
        try{
            const result = await quanLyFoodService.layChiTietFood(maSP);    
            // dua du lieu len redux
            dispatch({
                type: SET_FOOD_DETAIL,
                thongTinChiTiet: result.data
            })

        }catch(err){
            alert('errors: ' + err.response?.data)
        }
    }
}

export const getApiFoodTypeAction = (type) => {
    return async (dispatch) => {
        try {
            var result = await quanLyFoodService.layDanhSachFoodTheoLoai(type);
            const action = {
                type: SET_FOOD1,
                dataFood1: result.data
            }
            dispatch(action)
        } catch (errors) {
            alert('errors: ' + errors.response?.data)
        }
    }
}

export const getApiFoodDoughnut = () => {
    return async (dispatch) => {
        try {
            var result = await quanLyFoodService.layDanhSachFoodTheoLoai("doughnut");
            const action = {
                type: SET_DOUGHNUT,
                dataFood: result.data
            }
            dispatch(action)
        } catch (errors) {
            alert('errors: ' + errors.response?.data)
        }
    }
}

export const getApiFoodCupcake = () => {
    return async (dispatch) => {
        try {
            var result = await quanLyFoodService.layDanhSachFoodTheoLoai("cupcake");
            const action = {
                type: SET_CUPCAKE,
                dataFood: result.data
            }
            dispatch(action)
        } catch (errors) {
            alert('errors: ' + errors.response?.data)
        }
    }
}

export const getApiFoodDrink = () => {
    return async (dispatch) => {
        try {
            var result = await quanLyFoodService.layDanhSachFoodTheoLoai("drink");
            const action = {
                type: SET_DRINK,
                dataFood: result.data
            }
            dispatch(action)
        } catch (errors) {
            alert('errors: ' + errors.response?.data)
        }
    }
}

export const themFoodAction = (formData) =>{
    return async dispatch =>{
        try{
            const result = await quanLyFoodService.themFood(formData);
            await dispatch({
                type:SHOW_MODAL
            })
            // load lại trang
            dispatch(getApiFoodAction());
        }catch (err){
            alert('errors: ' + err.response?.data)
        }
    }
}

export const xoaFoodAction = (maSP) => {
    return async dispatch =>{
        try{
            const result = await quanLyFoodService.xoaFood(maSP);
            await dispatch({
                type:SHOW_MODAL
            })
            // load lại trang
            dispatch(getApiFoodAction());
        }catch (err){
            alert('errors: ' + err.response?.data)
        }
    }
}

export const capNhatFoodAction = (maSP, formData) => {
    return async dispatch =>{
        try{
            const result = await quanLyFoodService.capNhatFood2(maSP, formData);
            await dispatch({
                type:SHOW_MODAL
            })
            history.replace("/admin/food");
            dispatch(getApiFoodAction());
        }catch (err){
            alert('errors: ' + err);
        }
    }
}