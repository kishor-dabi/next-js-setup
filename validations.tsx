
export const Required = (value: any) => (value ? undefined : 'Required')
export const mustBeNumber = (value: any) => (isNaN(value) ? 'Must be a number' : undefined)
export const minValue = (min:any) => (value: any) =>
  isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`
export const composeValidators = (...validators: any[]) => (value: any) =>
  validators.reduce((error, validator) => error || validator(value), undefined)
export const emailFieldValidation = (value:any) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
      'Invalid email address' : undefined;
