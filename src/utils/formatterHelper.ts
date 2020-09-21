import { DateFormattableFields } from '../presets/formattableFields';

export const formatData = (fieldName: string, fieldValue: string) : string => {
  if (DateFormattableFields.includes(fieldName)) return new Date(fieldValue).toLocaleDateString();
  return fieldValue;
}