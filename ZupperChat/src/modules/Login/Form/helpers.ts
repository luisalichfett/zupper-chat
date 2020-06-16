import map from 'lodash/map';
import includes from 'lodash/includes';

export const verifySubmit = (beforeSubmitData: any, exception?: string) => {
  map(Object.keys(beforeSubmitData), (key: string) => {
    if (key === exception) {
      delete beforeSubmitData[key];
    }
  });

  const responseUndefined = includes(
    Object.values(beforeSubmitData),
    undefined
  );
  const responseEmptyString = includes(Object.values(beforeSubmitData), '');

  return responseUndefined || responseEmptyString;
};
