import Home from '../pages/Home'
import DetailProduct from '../pages/DetailProduct'
import News from '../pages/News'
import DangNhap from '../pages/Login';
import Admin from '../pages/Admin';
import AddProduct from '../pages/Admin/ProductAdd';
import UpdateProduct from '../pages/Admin/ProductUpdate';
import Cart from '../pages/Cart';




// Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: 'product/detail/:proid', component: DetailProduct },
    { path: '/news', component: News },
    { path: '/login', component: DangNhap },
    { path: '/cart', component: Cart },
    { path: '/admin', component: Admin, layout: null },
    { path: '/admin/add', component: AddProduct, layout: null },
    { path: '/admin/update/:proid', component: UpdateProduct, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes }