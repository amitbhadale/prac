import i18n from '@/utils/i18n'
const t = i18n.global.t

export const employerInfoFormFields = [
  {
    type: 'text',
    name: 'nameOfEmployer',
    label: t('nameOfEmployer'),
  },
  {
    type: 'text',
    name: 'telephoneNumber',
    label: t('telephoneNumber'),
  },
  {
    type: 'text',
    name: 'extention',
    label: t('extention'),
  },
  {
    type: 'select',
    name: 'addressType',
    label: t('addressType'),
    options: [{ label: 'Default', value: 'default' }],
  },
]

export const personFormFields = [
  {
    type: 'text',
    name: 'surname',
    label: t('surname'),
  },
  {
    type: 'text',
    name: 'givenName',
    label: t('givenName'),
  },
  {
    type: 'text',
    name: 'otherInitial',
    label: t('otherInitial'),
  },
  {
    type: 'text',
    name: 'alias',
    label: t('alias'),
  },
  {
    type: 'date',
    name: 'dob',
    label: t('dob'),
  },
  {
    type: 'text',
    name: 'partyKey',
    label: t('partyKey'),
  },
  {
    type: 'text',
    name: 'telephoneNumber',
    label: t('telephoneNumber'),
  },
  {
    type: 'text',
    name: 'extention',
    label: t('extention'),
  },
  {
    type: 'text',
    name: 'occupation',
    label: t('occupation'),
  },
  {
    type: 'select',
    name: 'countryOfResidence',
    label: t('countryOfResidence'),
    options: [{ label: 'Default', value: 'default' }],
  },
  {
    type: 'select',
    name: 'countryOfCitizenship',
    label: t('countryOfCitizenship'),
    options: [{ label: 'Default', value: 'default' }],
  },
  {
    type: 'select',
    name: 'addressType',
    label: t('addressType'),
    options: [{ label: 'Default', value: 'default' }],
  },
]

export const identificationFormFields = [
  {
    type: 'select',
    name: 'identifierType',
    label: t('identifierType'),
    options: [{ label: 'Default', value: 'default' }],
  },
  {
    type: 'text',
    name: 'ifOtherPleaseSpecify',
    label: t('ifOtherPleaseSpecify'),
  },
  {
    type: 'text',
    name: 'numberAssociatedWithIdentifierType',
    label: t('numberAssociatedWithIdentifierType'),
  },
  {
    type: 'select',
    name: 'jurisdictionOfIssueCountry',
    label: t('jurisdictionOfIssueCountry'),
    options: [{ label: 'Default', value: 'default' }],
  },
  {
    type: 'text',
    name: 'jurisdictionOfIssueProvinceStateName',
    label: t('jurisdictionOfIssueProvinceStateName'),
  },
]

export const entityFormFields = [
  {
    type: 'text',
    name: 'nameOfEntity',
    label: t('nameOfEntity'),
  },
  {
    type: 'text',
    name: 'partyKey',
    label: t('partyKey'),
  },
  {
    type: 'text',
    name: 'telephoneNumber',
    label: t('telephoneNumber'),
  },
  {
    type: 'text',
    name: 'extention',
    label: t('extention'),
  },
  {
    type: 'select',
    name: 'addressType',
    label: t('addressType'),
    options: [{ label: 'Default', value: 'default' }],
  },
]

export const trusteeFormFields = [
  {
    type: 'select',
    name: 'copyFromSubjects',
    label: t('copyFromSubjects'),
    rules: ['required'],
    options: [{ label: 'Default', value: 'default' }],
  },

  {
    type: 'text',
    name: 'surname',
    label: t('surname'),
  },
  {
    type: 'text',
    name: 'givenName',
    label: t('givenName'),
  },
  {
    type: 'text',
    name: 'otherInitial',
    label: t('otherInitial'),
  },
  {
    type: 'text',
    name: 'telephoneNumber',
    label: t('telephoneNumber'),
  },
  {
    type: 'text',
    name: 'extension',
    label: t('extension'),
  },
  {
    type: 'select',
    name: 'addressType',
    label: t('addressType'),
    rules: ['required'],
    options: [{ label: 'Default', value: 'default' }],
  },
]

export const structuredAddessFormFields = [
  {
    type: 'text',
    name: 'aptRoomSuiteUnitNumber',
    label: t('aptRoomSuiteUnitNumber'),
  },
  {
    type: 'text',
    name: 'houseBuildingNumber',
    label: t('houseBuildingNumber'),
  },
  {
    type: 'text',
    name: 'streetAddress',
    label: t('streetAddress'),
  },
  {
    type: 'text',
    name: 'city',
    label: t('city'),
  },
  {
    type: 'text',
    name: 'district',
    label: t('district'),
  },
  {
    type: 'text',
    name: 'postalZipCode',
    label: t('postalZipCode'),
  },
  {
    type: 'select',
    name: 'country',
    label: t('country'),
    options: [{ label: 'Default', value: 'default' }],
  },
  {
    type: 'select',
    name: 'provinceState',
    label: t('provinceState'),
    options: [{ label: 'Default', value: 'default' }],
  },
  {
    type: 'text',
    name: 'subProvinceSubLocality',
    label: t('subProvinceSubLocality'),
  },
]

export default {}
