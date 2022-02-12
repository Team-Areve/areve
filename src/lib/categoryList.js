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
    text: '주거',
    icon: HouseIcon,
  },
  {
    text: '사무실',
    icon: OfficeIcon,
  },
  {
    text: '파티룸',
    icon: PartyIcon,
  },
  {
    text: '스튜디오',
    icon: StudioIcon,
  },
  {
    text: '가전기기',
    icon: ApplianceIcon,
  },
  {
    text: '주방/생활용품',
    icon: LivingIcon,
  },
  {
    text: '디지털기기',
    icon: Digitalcon,
  },
  {
    text: '가전 렌탈 승계',
    icon: ApplianceRentalIcon,
  },
  {
    text: ['자동차', <br />, '렌탈/리스 승계'],
    icon: CarIcon,
  },
  {
    text: ['구합니다', <br />, '(주거/공적 공간)'],
    icon: WantSpaceIcon,
  },
  {
    text: '구합니다(기타)',
    icon: WantEtcIcon,
  },
  {
    text: '교환해요',
    icon: ExchangeIcon,
  },
];
