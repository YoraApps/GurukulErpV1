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
        title: 'Admission Fee Status',
        link: '/pages/admission/admission-fee-status',
      },
      {
        title: 'Exam Result Upload',
        link: '/pages/admission/examresultupload',
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
        link: '/pages/admission/IdCard',
      },
      {
        title: 'Schedule Examination',
        link: '/pages/admission/Scheduleexamination',
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
        title: 'Campaign Management',
        link: '/pages/academics/Campaign-Management',
      },
      {
        title: 'Approve Deputation',
        link: '/pages/academics/approvedeputation',
      },
      {
        title: 'Teacher Notes',
        link: '/pages/academics/teachernote',
      },
      {
        title: 'Student Dairy',
        link: '/pages/academics/Studentdairy',
      },
      {
        title: 'Set Examination Marks',
        link: '/pages/academics/Examination',
      },
      {
        title: 'Asssign Exam',
        link: '/pages/academics/AsssignExamToStudent',
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
        title: 'Route Creation',
        link: '/pages/transportation/routecreation',
      },
      {
        title: 'Assign Route',
        link: '/pages/transportation/assignroute',
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
      {
        title: 'Payroll',
        link: '/pages/human-resource/payroll',
      },
      {
        title: 'Leaves',
        link: '/pages/human-resource/Leaves',
      },
    ],
  },
  {
    title: 'Account',
    icon: 'nb-keypad',
    children: [
      {
        title: 'Account-Summary',
        link: '/pages/account/account-summary',
      },
      {
        title: 'Manage-Payment',
        link: '/pages/account/managepayment',
      },
    ],
  },
  {
    title: 'Academic Settings',
    icon: 'nb-keypad',
    children: [
      {
        title: 'Course ',
        link: '/pages/settings/course',
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
        title: 'Chapter',
        link: '/pages/settings/chapter',
      },
      {
        title: 'Class Room',
        link: '/pages/settings/classroom',
      },
      {
        title: 'Club',
        link: '/pages/settings/club',
      },
      {
        title: 'Fee',
        link: '/pages/settings/fee',
      },
      {
        title: 'Group',
        link: '/pages/settings/group',
      },
      {
        title: 'Popup',
        link: '/pages/settings/popupbranch',
      },
      {
        title: 'Faculty-Department',
        link: '/pages/settings/faculty-department',
      },
      {
        title: 'Program-Study',
        link: '/pages/settings/program-study',
      },
      {
        title: 'Grade',
        link: '/pages/settings/grade',
      },
      {
        title: 'Semester',
        link: '/pages/settings/semester',
      },
      {
        title: 'Fee Association',
        link: '/pages/settings/feeassociation',
      },
      {
        title: 'Student Profile',
        link: '/pages/settings/studentprofile',
      },
    ],
  },
  {
    title: 'Manage-Settings',
    icon: 'nb-keypad',
    children: [
      {
        title: 'Program Sem Association',
        link: '/pages/manage-settings/program-sem-association',
      },
      {
        title: 'Manage Course',
        link: '/pages/manage-settings/manage-course',
      },
      {
        title: 'Manage Curriculum',
        link: '/pages/manage-settings/manage-curriculum',
      },
      {
        title: 'Manage Batch',
        link: '/pages/manage-settings/manage-batch',
      },
      {
        title: 'Manage Semester',
        link: '/pages/manage-settings/manage-semester',
      },
      {
        title: 'Assign Student To Group',
        link: '/pages/manage-settings/assign-student-to-group',
      },
      {
        title: 'Assign Councelor To Group',
        link: '/pages/manage-settings/assign-councelor-to-group',
      },
      {
        title: 'Manage Club',
        link: '/pages/manage-settings/manage-club',
      },
      {
        title: 'Manage Student Curriculam',
        link: '/pages/manage-settings/manage-student-curriculam',
      },
      {
        title: 'Manage Faculty Department',
        link: '/pages/manage-settings/manage-faculty-department',
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
