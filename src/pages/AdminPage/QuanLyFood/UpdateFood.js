import React, { useEffect } from 'react';
import "../styleAdmin.css";
import { useDispatch, useSelector } from 'react-redux';
import { capNhatPhimAction, getFilmDetailAction } from '../../../action/FilmAction';
import { useState } from 'react';
import { capNhatFoodAction, getFoodDetailAction } from '../../../action/FoodAction';
 

export default function UpdateFood(props) {

    const dispatch = useDispatch();
    const { thongTinChiTiet } = useSelector(state => state.FoodReducer);
    const [state, setState] = useState({
        values:{
            tenSP: '',
            giaBan: 0,
            hinhAnh: '',
            available: true,
            moTa: '',
            type: ''
        },
        errors:{
            tenSP: '',
            giaBan: '',
            hinhAnh: '',
            available: '',
            moTa: '',
            type: ''
        }
        
    });
    const [number, setNumber] = useState(1);
    // lấy dữ liệu phim từ redux về
    useEffect(() => {
        // lấy mã phim từ url
        const action = props.match.params.id;
        dispatch(getFoodDetailAction(action));

    }, [])  

    const handelChange = (e) => {
        
        let {name,value} = e.target;
        let newValues = {...state.values};
        newValues = {...newValues,[name]:value};
        let newErrors = { ...state.errors };
        let errorMessage = '';
        if (newValues[name].trim() === '') {
            errorMessage = name + ' không được bỏ trống'
        }
       
        if (name ==="hinhAnh"){
            newValues[name] = e.target.files[0];
        } 
        else {
            newValues[name] = e.target.value;
        }
        
        newErrors[name] = errorMessage;
        setState({
            ...state,
            values:newValues,
            errors:newErrors
        })

    }
    
    const handelSubmit = (e) => {
        e.preventDefault();
        delete state.values['maSP'];
        console.log(state.values);
        let valid = true;
        for (let keyName in state.errors) {
            if (state.errors[keyName] !== '') {
                // co 1 truong hien thi bi loi
                valid = false;
            }
        }
        if (!valid) {
            alert(' Dữ liệu không hợp lệ');
            return
        }
        let formData = new FormData();
        for (let key in state.values){
            formData.append(key, state.values[key]);
        }
        dispatch(capNhatFoodAction(props.match.params.id, formData));
    }
    // gán giá trị state khi click vào thay đổi
    useEffect(() => {
        setState({          
            values: thongTinChiTiet
        })
    }, [number]);



    return (
        <form id="formUpdateFilms" className="container form-admin-page" onSubmit={handelSubmit} >
            <h3 className="mb-4">Food Update</h3>
            <div className="row">
                <div className="col-6">
                    <div className="form-group">
                        <p>Food name</p>
                        <input className="form-control" name="tenSP" value={state.values.tenSP} onChange={handelChange}/>
                        <p className="text text-warning text-danger">{state.errors?.tenSP}</p>
                    </div>
                    <div className="form-group">
                        <p>Description</p>
                        <input className="form-control" name="moTa" value={state.values.moTa} onChange={handelChange} />
                        <p className="text text-warning text-danger">{state.errors?.moTa}</p>
                    </div>
                    <div className="form-group">
                        <p>Price</p>
                        <input className="form-control" name="giaBan" value={state.values.giaBan} onChange={handelChange} />
                        <p className="text text-warning text-danger">{state.errors?.giaBan}</p>
                    </div>
                </div>
                <div className="col-6">
                <div className="form-group">
                        <p>Image</p>
                        <input className="form-control" name="hinhAnh" value={state.values.hinhAnh} onChange={handelChange} />
                        <p className="text text-warning text-danger">{state.errors?.hinhAnh}</p>
                    </div>
                    <div className="form-group">
                        <p>Availability</p>
                        <input className="form-control" name="available" value={state.values.available} onChange={handelChange} />
                        <p className="text text-warning text-danger">{state.errors?.available}</p>
                    </div>
                    <div className="form-group">
                        <p>Food Type</p>
                        <input className="form-control" name="type" value={state.values.type} onChange={handelChange} />
                        <p className="text text-warning text-danger">{state.errors?.type}</p>
                    </div>
                </div>
            </div>
            <div className="form-group d-flex justify-content-center mt-5">
                <button type="button" className="btn btn-update btn-primary mx-4" onClick={() => {
                    props.history.goBack();
                }}> Go back</button>
                <button type="button" className="btn btn-update btn-success mx-4" onClick={()=>{
                    setNumber({
                        number : number + 1
                    })
                }}>Edit</button>
                <button type="submit" className="btn btn-update btn-success mx-4">Finish</button>
            </div>
            <p className="text-danger text-center mt-5"> <span className="bg-white p-1">* Click on edit to view information and finish after all! </span></p>
        </form>
        // <form id="formUpdateFilms" className="container form-admin-page" >
        //     <h3 className="mb-4">Food Update</h3>
        //     <div className="row">
        //         <div className="col-6">
        //             <div className="form-group">
        //                 <p>Food code</p>
        //                 <input className="form-control" name="maPhim" value="1" disabled />
        //             </div>
        //             <div className="form-group">
        //                 <p>Food name</p>
        //                 <input className="form-control" name="tenPhim" value="state.values.tenSP" />
        //                 <p className="text text-warning text-danger"></p>
        //             </div>
        //             <div className="form-group">
        //                 <p>Description</p>
        //                 <input className="form-control" name="moTa" value="state.values.moTa"  />
        //                 <p className="text text-warning text-danger"></p>
        //             </div>
        //         </div>
        //         <div className="col-6">
        //             <div className="form-group">
        //                 <p>Image</p>
        //                 <input className="form-control" name="hinhAnh" type="file" style={{ height: '45px' }}  />
        //                 <p className="text-warning">Current image: "thongTinChiTiet.hinhAnh"</p>
        //                 <p className="text text-warning text-danger"></p>
        //             </div>
        //             <div className="form-group">
        //                 <p>Availability</p>
        //                 <input className="form-control" name="moTa" value="True"  />
        //                 <p className="text text-warning text-danger"></p>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="form-group d-flex justify-content-center mt-5">
        //         <button type="button" className="btn btn-update btn-primary mx-4" onClick={() => {
        //             props.history.goBack();
        //         }}> Go back</button>
        //         <button type="button" className="btn btn-update btn-success mx-4" onClick={()=>{
        //             // setNumber({
        //             //     number : number + 1
        //             // })
        //         }}>Edit</button>
        //         <button type="submit" className="btn btn-update btn-success mx-4">Finish</button>
        //     </div>
        //     <p className="text-danger text-center mt-5"> <span className="bg-white p-1">* Click on edit to view information and finish after all! </span></p>
        // </form>
    )
}
