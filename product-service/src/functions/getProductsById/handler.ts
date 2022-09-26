import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { Book } from 'src/types/api-types';
import data from 'src/mocks/books.json';

export const getProductsById = async (event: {
  pathParameters: { productId: string };
}) => {
  const { productId } = event.pathParameters;
  try {
    const books = data as Book[];
    const product = books.find((prod) => prod.id.toString() === productId);

    if (!product) {
      return formatJSONResponse({
        response: { message: 'Product not found' },
        statusCode: 404,
      });
    }

    return formatJSONResponse({ response: product, statusCode: 200 });
  } catch (error) {
    return formatJSONResponse({ response: error, statusCode: 500 });
  }
};

export const main = middyfy(getProductsById);
