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

  // Logged In
  MyPage: '/mypage',
  ReviewPage: '/mypage/review',
};

export default Path;
