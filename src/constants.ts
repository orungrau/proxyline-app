export const PROJECT_ID = '1';
export const PROJECT_KEY = 'project-1-apikey';
export const PROMOTE = [
  {
    bubble: 'Используют до 3-х человек',
    title: 'IPv4 Shared',
    description: 'Подходят для любых целей и сайтов',
    image: require('~assets/icons/p-shared.png'),
    tariff: {
      ip_type: 2,
      ip_version: 4,
    },
  },
  {
    bubble: 'Выдаются в одни руки',
    title: 'IPv4 Индивидуальные',
    description: 'Подходят для любых целей и сайтов',
    image: require('~assets/icons/p-indiv.png'),
    tariff: {
      ip_type: 1,
      ip_version: 4,
    },
  },
  {
    bubble: 'Выдаются в одни руки',
    title: 'IPv6 / 32',
    description: 'Подходят для любых целей и сайтов',
    image: require('~assets/icons/p-ipv6.png'),
    tariff: {
      ip_type: 1,
      ip_version: 6,
    },
  },
];
