const _import = file => import('../../views/' + file + '.vue')

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
