import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import data from 'src/mocks/books.json';

export const getProductsList = async (_event) => {
  try {
    return formatJSONResponse({ response: data, statusCode: 200 });
  } catch (error) {
    return formatJSONResponse({ response: error, statusCode: 500 });
  }
};

export const main = middyfy(getProductsList);
