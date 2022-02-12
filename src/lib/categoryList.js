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
    catNumber: 'list/1',
    text: '주거',
    icon: HouseIcon,
  },
  {
    catNumber: 'list/2',
    text: '사무실',
    icon: OfficeIcon,
  },
  {
    catNumber: 'list/3',
    text: '파티룸',
    icon: PartyIcon,
  },
  {
    catNumber: 'list/4',
    text: '스튜디오',
    icon: StudioIcon,
  },
  {
    catNumber: 'list/5',
    text: '가전기기',
    icon: ApplianceIcon,
  },
  {
    catNumber: 'list/6',
    text: '주방/생활용품',
    icon: LivingIcon,
  },
  {
    catNumber: 'list/7',
    text: '디지털기기',
    icon: Digitalcon,
  },
  {
    catNumber: 'list/8',
    text: '가전 렌탈 승계',
    icon: ApplianceRentalIcon,
  },
  {
    catNumber: 'list/9',
    text: ['자동차', <br />, '렌탈/리스 승계'],
    icon: CarIcon,
  },
  {
    catNumber: 'list/10',
    text: ['구합니다', <br />, '(주거/공적 공간)'],
    icon: WantSpaceIcon,
  },
  {
    catNumber: 'list/11',
    text: '구합니다(기타)',
    icon: WantEtcIcon,
  },
  {
    catNumber: 'list/12',
    text: '교환해요',
    icon: ExchangeIcon,
  },
];
