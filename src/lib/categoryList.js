import {
  ApplianceIcon,
  ApplianceRentalIcon,
  CarIcon,
  Digitalcon,
  ExchangeIcon,
  HouseIcon,
  LivingIcon,
  OfficeIcon,
  PartyIcon,
  StudioIcon,
  WantEtcIcon,
  WantSpaceIcon,
} from 'assets/icons/categorys';

export const categoryList = [
  {
    catNumber: 'search?category=1',
    text: '주거',
    icon: HouseIcon,
  },
  {
    catNumber: 'search?category=2',
    text: '사무실',
    icon: OfficeIcon,
  },
  {
    catNumber: 'search?category=3',
    text: '파티룸',
    icon: PartyIcon,
  },
  {
    catNumber: 'search?category=4',
    text: '스튜디오',
    icon: StudioIcon,
  },
  {
    catNumber: 'search?category=5',
    text: '가전기기',
    icon: ApplianceIcon,
  },
  {
    catNumber: 'search?category=6',
    text: '주방/생활용품',
    icon: LivingIcon,
  },
  {
    catNumber: 'search?category=7',
    text: '디지털기기',
    icon: Digitalcon,
  },
  {
    catNumber: 'search?category=8',
    text: '가전 렌탈 승계',
    icon: ApplianceRentalIcon,
  },
  {
    catNumber: 'search?category=9',
    text: ['자동차', <br />, '렌탈/리스 승계'],
    icon: CarIcon,
  },
  {
    catNumber: 'search?category=10',
    text: ['구합니다', <br />, '(주거/공적 공간)'],
    icon: WantSpaceIcon,
  },
  {
    catNumber: 'search?category=11',
    text: '구합니다(기타)',
    icon: WantEtcIcon,
  },
  {
    catNumber: 'search?category=12',
    text: '교환해요',
    icon: ExchangeIcon,
  },
];
