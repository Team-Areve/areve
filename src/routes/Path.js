const Path = {
  MainPage: '/',
  ApplyPage: '/apply',
  ReservePage: '/reserve/:itemNum',
  DetailPage: '/item/:itemNum',
  ListPage: '/search',
  FavoritePage: '/favorite',

  // no Logged In
  LogInPage: '/login',
  RegisterPage: '/register',
  FindAccountPage: '/findAccount',

  // Logged In
  MyPage: '/mypage',
  ReviewPage: '/:userNum/review',

  Redirect: '/areve'
};

export default Path;
