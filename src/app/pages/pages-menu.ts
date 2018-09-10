import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-plus-circled',
    link: '/admission/admission-list',
    home: true,
  },
  {
    title: 'Admission',
    icon: 'nb-keypad',
    children: [
      {
        title: 'Admission list',
        link: '/pages/admission/admission-list',
      },
      {
        title: 'Admission Forms',
        link: '/pages/admission/admission-form',
      },
      {
        title: 'Counselling',
        link: '/pages/admission/counselling',
      },
      {
        title: 'Schedule Examination',
        link: '/pages/settings/course',
      },
      {
        title: 'Admission Fee Status',
        link: '/pages/admission/admission-fee-status',
      },
      {
        title: 'Exam Result Upload',
        link: '/pages/settings/batch',
      },
      {
        title: 'Applicant Course Fee',
        link: '/pages/admission/applicant-course-fee-status',
      },
      {
        title: 'Review And Approve',
        link: '/pages/admission/reviewand-approve',
      },
      {
        title: 'Id Cards',
        link: '/pages/admission/batch',
      },
    ],
  },
  {
    title: 'Academics',
    icon: 'nb-keypad',
    children: [
      {
        title: 'Memo-Circular-Notice',
        link: '/pages/academics/memo-circular-notice',
      },
      {
        title: 'conduct',
        link: '/pages/academics/conduct',
      },
      {
        title: 'Campaign-Management',
        link: '/pages/academics/Campaign-Management',
      },
    ],
  },
  {
    title: 'Transportation',
    icon: 'nb-keypad',
    children: [
      {
        title: 'Location',
        link: '/pages/transportation/location',
      },
      {
        title: 'Vehicle',
        link: '/pages/transportation/vehicle',
      },
      {
        title: 'Driver',
        link: '/pages/transportation/driver',
      },
      {
        title: 'Routecreation',
        link: '/pages/transportation/routecreation',
      },
    ],
  },
  {
    title: 'Human-Resourse',
    icon: 'nb-keypad',
    children: [
      {
        title: 'Staff-Management',
        link: '/pages/human-resource/staff-management',
      },
    ],
  },
  {
    title: 'Account',
    icon: 'nb-keypad',
    children: [
      {
        title: 'account-summary',
        link: '/pages/account/account-summary',
      },
    ],
  },
  {
    title: 'Academic Settings',
    icon: 'nb-keypad',
    children: [
      {
        title: 'Degree Category',
        link: '/pages/settings/degree-category',
      },
      {
        title: 'Degree Type',
        link: '/pages/settings/degree-type',
      },
      {
        title: 'Course ',
        link: '/pages/settings/course',
      },
      {
        title: 'Branch',
        link: '/pages/settings/branch',
      },
      {
        title: 'Batch',
        link: '/pages/settings/batch',
      },
      {
        title: 'Exam Type',
        link: '/pages/settings/exam-type',
      },
      {
        title: 'Chapters',
        link: '/pages/settings/chapter',
      },
      {
        title: 'classroom',
        link: '/pages/settings/classroom',
      },
      {
        title: 'club',
        link: '/pages/settings/club',
      },
      {
        title: 'academic-master',
        link: '/pages/settings/academic-master',
      },
      {
        title: 'fee',
        link: '/pages/settings/fee',
      },
      {
        title: 'group',
        link: '/pages/settings/group',
      },
    ],
  },
  {
    title: 'UI Features',
    icon: 'nb-keypad',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Buttons',
        link: '/pages/ui-features/buttons',
      },
      {
        title: 'Grid',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Modals',
        link: '/pages/ui-features/modals',
      },
      {
        title: 'Popovers',
        link: '/pages/ui-features/popovers',
      },
      {
        title: 'Typography',
        link: '/pages/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/pages/ui-features/search-fields',
      },
      {
        title: 'Tabs',
        link: '/pages/ui-features/tabs',
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'nb-compose',
    children: [
      {
        title: 'Form Inputs',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/pages/forms/layouts',
      },
    ],
  },
  {
    title: 'Components',
    icon: 'nb-gear',
    children: [
      {
        title: 'Tree',
        link: '/pages/components/tree',
      }, {
        title: 'Notifications',
        link: '/pages/components/notifications',
      },
    ],
  },
  {
    title: 'Maps',
    icon: 'nb-location',
    children: [
      {
        title: 'Google Maps',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/pages/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/pages/maps/bubble',
      },
      {
        title: 'Search Maps',
        link: '/pages/maps/searchmap',
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: 'Editors',
    icon: 'nb-title',
    children: [
      {
        title: 'TinyMCE',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/pages/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables',
    icon: 'nb-tables',
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: 'nb-shuffle',
    children: [
      {
        title: '404',
        link: '/pages/miscellaneous/404',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
