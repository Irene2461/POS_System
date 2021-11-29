import { SET_CUPCAKE, SET_DOUGHNUT, SET_DRINK, SET_FOOD, SET_FOOD_DETAIL, SET_FOOD1 } from "../../action/types/FoodType";

const stateDefault = {
    arrFood1:[],
    arrDoughnut:[],
    arrCupcake:[],
    arrDrink:[],
    gioHang: [],
    thongTinChiTiet:[]
}

export const FoodReducer = (state = stateDefault,action) => {
    switch(action.type){
        case SET_FOOD_DETAIL: {
            state.thongTinChiTiet = action.thongTinChiTiet
            return {...state};
        }
        case SET_FOOD1: {
            state.arrFood1 = action.dataFood1
            return {...state};
        }
        case SET_DOUGHNUT: {
            state.arrDoughnut = action.dataFood
            return {...state};
        }
        case SET_CUPCAKE: {
            state.arrCupcake = action.dataFood
            return {...state};
        }
        case SET_DRINK: {
            state.arrDrink = action.dataFood
            return {...state};
        }
        default: return state;
    }
}