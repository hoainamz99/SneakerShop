import React from 'react'
import DtProduct from '../../components/Product/dtProduct'
import BgBreadCrumb from '../../components/bg_breadcrumb'
import TinTuc from '../../components/News'
import '../DetailProduct/style.css'


const DetailProduct = () => {
    return (
        <div className="main">
            <BgBreadCrumb />
            <DtProduct />

            <h2 className='h2'>TIN TỨC MỚI NHẤT</h2>

            <TinTuc />

        </div>
    )
}

export default DetailProduct