import React from 'react';
import {useFormik} from 'formik';
import { DatePicker } from 'antd';
import { useDispatch } from 'react-redux';
import { themFoodAction } from '../../../action/FoodAction';
import "../styleAdmin.css";


export default function ThemPhim(props) {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues:{
            maSP: 0,
            tenSP:'',
            giaBan: 0,
            moTa:'',
            hinhAnh:'',
            available: true,
        },
        onSubmit:(values)=>{
            // bien doi JSON thanh form data
            let formData = new FormData();
            for (let key in values){
                formData.append(key,values[key]);     
            }
            dispatch(themFoodAction(formData));
            
        }
    });

    const changeFile = (e)=>{
        // lay du lieu duoi dang file
        let file = e.target.files[0];
        formik.setFieldValue('hinhAnh',file)
    }
    // đổi string qua number
    const changeMaPhim = (e) => {
        let {maSP,value} = e.target;
        formik.setFieldValue('maSP',parseInt(value));
    }
    return (
        <form id="formAddFilms" className="container form-admin-page" onSubmit={formik.handleSubmit}>
            <h3 className="mb-4">Add Food</h3>
            <div className="row">
                <div className="col-6">
                    <div className="form-group">
                        <p>Food code</p>
                        <input className="form-control" name="maSP" onChange={changeMaPhim} />
                    </div>
                    <div className="form-group">
                        <p>Food name</p>
                        <input className="form-control" name="tenPhim" onChange={formik.handleChange} />
                    </div>
                    <div className="form-group">
                        <p>Description</p>
                        <input className="form-control" name="moTa" onChange={formik.handleChange} />
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group">
                        <p>Image</p>
                        <input className="form-control" name="hinhAnh" type="file" style={{height:'45px'}} onChange={changeFile} />
                    </div>  
                    <div className="form-group">
                        <p>Availability (true - if available / false - if not)</p>
                        <input className="form-control" name="availability" onChange={formik.handleChange} />
                    </div>
                </div>
            </div>
            <div className="form-group d-flex justify-content-center mt-5">
                <button type="button" className="btn btn-update btn-primary mr-4" onClick={()=>{
                    props.history.goBack();
                }}> Go back</button>
                <button type="submit" className="btn btn-update btn-success ml-4">Add food</button>
            </div>
        </form>
    )
}

