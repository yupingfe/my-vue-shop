import Navbar from '@/components/Navbar.vue'

import Home from '@/views/Home.vue'
import Shop from '@/views/Shop.vue'
import Cart from '@/views/Cart.vue'
import My from '@/views/My.vue'

const routes = [{
  path: '/',
  redirect: '/home',
  meta: {
    showNavBar: false
  }
}, {
  path: '/home',
  name: 'Home',
  components: {
    default: Home,
    'nav-bar': Navbar
  },
  meta: {
    showNavBar: true,
    title: '首页',
    icon: 'home-o',
    to: '/home'

  }
}, {
  path: '/shop',
  name: 'Shop',
  components: {
    default: Shop,
    'nav-bar': Navbar
  },
  meta: {
    showNavBar: true,
    title: '商城',
    icon: 'shop-o',
    to: '/shop'
  }
}, {
  path: '/cart',
  name: 'Cart',
  components: {
    default: Cart,
    'nav-bar': Navbar
  },
  meta: {
    showNavBar: true,
    title: '购物车',
    icon: 'shopping-cart-o',
    to: '/cart'
  }
}, {
  path: '/my',
  name: 'My',
  components: {
    default: My,
    'nav-bar': Navbar
  },
  meta: {
    showNavBar: true,
    title: '我的',
    icon: 'friends-o',
    to: '/my'
  }
}
]

export default routes