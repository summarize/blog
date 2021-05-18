// 双箭头 函数柯里化 把接收多个参数的函数变成接受一个单一参数，并且返回接受余下的参数而返回结果的新函数
const _import = file => () => import('../../views/' + file + '.vue')

const authRoute = [
  {
    path: '/auth',
    redirect: '/auth/login',
    meta: { auth: false },
    component: _import('auth/layout'),
    children: [
      {
        name: 'login',
        path: '/auth/login',
        component: _import('auth/login')
      }
    ]
  }
]

export default authRoute
