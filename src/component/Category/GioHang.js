import React, { Component } from "react";

export default class GioHang extends Component {
  renderGioHang = () => {
    // Nhận props gioHang từ component cha (BTDanhSáchanPham) this.props.gioHang
    let { gioHang } = this.props;

    return gioHang.map((sanpham, index) => {
        return <div className="row py-2">
                    <div className="col-2">
                        <img src={sanpham.hinhAnh} style={{width:'4rem', height:'4rem', objectFit: 'cover'}}/>
                    </div>
                    <div className="col-8">
                        <h5>{sanpham.tenSP}</h5>
                        <div className="row">
                            <div className="col-6">
                                <button className="btn btn-danger mr-2" onClick={()=>{
                                  this.props.tangGiamSoLuong(sanpham.maSP,1)
                                }}>+</button>{sanpham.soLuong}
                                <button className="btn btn-danger ml-2" onClick={()=>{
                                  this.props.tangGiamSoLuong(sanpham.maSP,-1)
                                }}>-</button>
                            </div>
                            <div className="col-6">
                                <div className="row">
                                  <div className="col-6 text-right">
                                    <p style={{fontSize: '20px'}}>{(sanpham.giaBan * sanpham.soLuong).toLocaleString()}</p>
                                    {/* <p style={{fontSize: '12px'}}>[VAT 10%]</p> */}
                                  </div>
                                  <div className="col-6">
                                    <button className="btn btn-danger" onClick={()=>{
                                      this.props.xoaSanPham(sanpham.maSP);
                                    }}>Delete</button>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    //   return <tr key={index}>
    //     <td>{sanpham.maSP}</td>
    //     <td>
    //       <img src={sanpham.hinhAnh} width={50} height={50} />
    //     </td>
    //     <td>{sanpham.tenSP}</td>
    //     <td>
    //       <button className="btn btn-success mr-2" onClick={()=>{
    //           this.props.tangGiamSoLuong(sanpham.maSP,1)
    //         }}>+</button>{sanpham.soLuong}
    //       <button className="btn btn-success ml-2" onClick={()=>{
    //           this.props.tangGiamSoLuong(sanpham.maSP,-1)
    //         }}>-</button>
    //     </td>
    //     <td>{(sanpham.giaBan).toLocaleString()}</td>
    //     <td>{(sanpham.giaBan * sanpham.soLuong).toLocaleString()}</td>
    //     <td>
    //       <button className="btn btn-danger" onClick = {()=>{
    //           this.props.xoaSanPham(sanpham.maSP);
    //       }}>Xoá</button>
    //     </td>
    //   </tr>;
    });
  };

  tinhTongSoLuong = () => {
      let tongSL = 0;
      for (let spGH of this.props.gioHang){
          tongSL += spGH.soLuong;
      }
      return tongSL;
  }

  tangGiamSoLuong = (maSP, soLuong, gioHang) =>{
    let gioHangCapNhat = gioHang;
    // Tìm sản phẩm bấm nút + hoặc - dựa vào mã sản phẩm
    let index = gioHangCapNhat.findIndex(sp => sp.maSP === maSP);
    if (index !== -1){
      if ((gioHangCapNhat[index].soLuong > 1 && soLuong < 0) || soLuong > 0){
        gioHangCapNhat[index].soLuong += soLuong;
      }else{
        alert('Số lượng tối thiểu phải là 1');
      }
    }
    gioHang = gioHangCapNhat;
  }


  render() {
    return (
      <div className="container">
        <h2 className="text-danger">Your Cart <i className="fa fa-shopping-cart"></i> ({this.tinhTongSoLuong()}) </h2>
        {/* <div className="text-right">
          
        </div> */}
        {/* <table className="table">
          <thead>
            <tr>
              <th>Mã sp</th>
              <th>Hình ảnh</th>
              <th>Tên sản phẩm</th>
              <th>Số lượng</th>
              <th>Giá bán</th>
              <th>Tổng tiền</th>
            </tr>
          </thead>
          <tbody>
              {this.renderGioHang()}
          </tbody>
        </table> */}
        {this.renderGioHang()}
      </div>
    );
  }
}
