import React from 'react'
import '../Log/style.css'
import BgBreadCrumb from '../../bg_breadcrumb'

const Login = () => {
    return (
        <div className="">
            <BgBreadCrumb />
            <div className="login-form">
                <h3 className="heading">
                    Đăng nhập
                </h3>
                <form action="" className='form-input'>
                    <label htmlFor="user">Email</label>
                    <input type="email" placeholder='Email' />
                    <label htmlFor="password">Mật khẩu</label>
                    <input type="password" placeholder='Mật khẩu' />
                    <button>Đăng nhập</button>
                </form>
                <div className="dn">
                    <a href="#">Quên mật khẩu</a>
                    <p className="pa">Đã có tài khoản, đăng nhập <a href="/dangky.html">tại đây</a></p>
                    <p>Hoặc đăng nhập bằng</p>
                    <div className="or">
                        <a href="#">
                            <img src="https://bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg" alt="facebook" />
                        </a>
                        <a href="#">
                            <img src="https://bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg" alt="facebook" />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login