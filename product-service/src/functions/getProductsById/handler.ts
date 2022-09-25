import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

export const getProductsById = async (_event) => {
  const data = {
    id: 1,
    title: 'Book 1',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 10,
    count: 10,
  };

  return formatJSONResponse(data);
};

export const main = middyfy(getProductsById);
