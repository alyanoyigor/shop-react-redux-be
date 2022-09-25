import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

export const getProductsList = async (_event) => {
  const data = [
    {
      id: 1,
      title: 'Book 1',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 10,
      count: 10,
    },
    {
      id: 2,
      title: 'Book 2',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 20,
      count: 10,
    },
    {
      id: 3,
      title: 'Book 3',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 30,
      count: 10,
    },
    {
      id: 4,
      title: 'Book 4',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 40,
      count: 10,
    },
    {
      id: 5,
      title: 'Book 5',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 50,
      count: 10,
    },
  ];

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': 'https://d2htxos98rraoe.cloudfront.net',
      'Access-Control-Allow-Methods': 'OPTIONS,GET',
    },
  };

  return formatJSONResponse(data, config);
};

export const main = middyfy(getProductsList);
