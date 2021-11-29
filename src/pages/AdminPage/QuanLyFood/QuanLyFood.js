import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { Table, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getApiFoodAction, getApiFoodTypeAction, xoaFoodAction } from '../../../action/FoodAction';
import ModalAdminPage from '../../../component/Modal/ModalAdminPage';

export default function QuanLyFood(props) {

    const {arrFood1} = useSelector(state=>state.FoodReducer);
    const arrFood = [
      {
        maSP: 1,
        tenSP: "Blueberry cupcake",
        hinhAnh: "https://picsum.photos/50/50",
        moTa: "Delicious",
      },
      {
        maSP: 2,
        tenSP: "Blackberry cupcake",
        hinhAnh: "https://picsum.photos/50/50",
        moTa: "Very delicious"
      },
      {
        maSP: 3,
        tenSP: "Coca cola",
        hinhAnh: "https://picsum.photos/50/50",
        moTa: "Super delicious"
      },
    ]
    const dispatch = useDispatch();
    useEffect(()=> {
        const action = getApiFoodAction();
        dispatch(action)
    },[])

    const columns = [
        {
          title: 'Food code',
          dataIndex: 'maSP',
          key: 'maSP',
          render: (text,sp) => <span>{sp.maSP}</span>,
        },
        {
          title: 'Food name',
          dataIndex: 'tenPhim',
          key: 'tenPhim',
          render: (text,sp) => <span>{sp.tenSP}</span>
        },
        {
          title: 'Image',
          dataIndex: 'hinhAnh',
          key: 'hinhAnh',
          render: (text,sp) => <img src={sp.hinhAnh} alt="food" width={50} height={50} />
        },
        {
            title: 'Description',
            dataIndex: 'moTa',
            key: 'moTa',
            render: (text,sp) => <section>{sp.moTa?.length > 50 ? sp.moTa.substr(0,50) + '...' : sp.moTa}</section>
        },
        {
          title: 'Action',
          key: 'action',
          render: (text,sp)=>(
            <Space size="middle">
                {/* <NavLink className="btn btn-adminpage btn-primary" to={`/admin/taolichchieu/${film.maPhim}`}>Tạo lịch chiếu</NavLink> */}
                <NavLink className="btn btn-adminpage btn-primary" to={`/admin/updatefood/${sp.maSP}`}>Update</NavLink>
                <button className="btn btn-adminpage btn-danger" onClick={()=>{
                  // dispatch mã phim lên store
                  dispatch(xoaFoodAction(sp.maSP));
                }} >Delete</button>

            </Space>
          )      
        }     
    ];
      
    const data = arrFood1;
    // tìm kiếm phim
    // const timKiemPhim = (searchKey) => {
    //   if (searchKey.trim() !== ''){
    //     dispatch(timKiemPhimAction(searchKey));
    //   }else{
    //     dispatch(getApiFilmAction('GP01'));
    //   }
    // } 

    return (
        <div className="container">
            <NavLink className="mb-4 btn btn-adminpage btn-primary" to="/admin/addfood">Add food</NavLink>
            <div className="row mb-4">
              <div className="col-6">
                {/* <input type="search" id="search-film" className="form-control" placeholder="Enter food name ..." onChange={()=>{
                  let searchKey = document.getElementById('search-film').value;
                  timKiemPhim(searchKey);
                }}/> */}
              </div>
            </div>
            <Table columns={columns} dataSource={data} />
            <ModalAdminPage/>
        </div>
    )
}
