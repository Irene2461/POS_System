import { baseService } from "./baseService";

export class QuanLyFoodService extends baseService {
    constructor(){
        super();
    }
    layDanhSachFood = () => {
        return this.get(`/api/Item`);
    }
    layChiTietFood = (maSP) => {
        return this.get(`/api/editItem/${maSP}`);
    }
    layDanhSachFoodTheoLoai = (type) => {
        return this.get(`/api/Item?type=${type}`);
    }
    themFood = (data) => {
        return this.post('/api/addItem',data);
    }
    capNhatFood = (formData) => {
        return this.post('/api/updateItem',formData);
    }
    xoaFood = (maSP) => {
        return this.delete(`/api/deleteItem?MaSP=${maSP}`);
    }
}

export const quanLyFoodService = new QuanLyFoodService();