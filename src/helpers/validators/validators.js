export const required = value => (value ? undefined : 'Required')
export const requiredCheckbox = value => (value === 'false' ? undefined : !value)
export const emailCheck = value => (/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi.test(value) ?  undefined :'Wrong email')
export const minLength = (...min) => value => (!value || value.length > min  ? undefined: `Should be more that ${min} characters`)
export const maxLength = (...max) => value => (!value || value.length < max  ? undefined: `Should be less that ${max} characters`)
export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)
