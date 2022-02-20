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
    catNumber: 'category/1',
    text: '주거',
    icon: HouseIcon,
  },
  {
    catNumber: 'category/2',
    text: '사무실',
    icon: OfficeIcon,
  },
  {
    catNumber: 'category/3',
    text: '파티룸',
    icon: PartyIcon,
  },
  {
    catNumber: 'category/4',
    text: '스튜디오',
    icon: StudioIcon,
  },
  {
    catNumber: 'category/5',
    text: '가전기기',
    icon: ApplianceIcon,
  },
  {
    catNumber: 'category/6',
    text: '주방/생활용품',
    icon: LivingIcon,
  },
  {
    catNumber: 'category/7',
    text: '디지털기기',
    icon: Digitalcon,
  },
  {
    catNumber: 'category/8',
    text: '가전 렌탈 승계',
    icon: ApplianceRentalIcon,
  },
  {
    catNumber: 'category/9',
    text: ['자동차', <br />, '렌탈/리스 승계'],
    icon: CarIcon,
  },
  {
    catNumber: 'category/10',
    text: ['구합니다', <br />, '(주거/공적 공간)'],
    icon: WantSpaceIcon,
  },
  {
    catNumber: 'category/11',
    text: '구합니다(기타)',
    icon: WantEtcIcon,
  },
  {
    catNumber: 'category/12',
    text: '교환해요',
    icon: ExchangeIcon,
  },
];
