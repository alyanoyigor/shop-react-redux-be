import { getProductsList } from '@functions/getProductsList/handler';

describe('testing getProductsList', () => {
  const expectedElement = {
    id: 1,
    title: 'Book 1',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    price: 10,
    count: 10,
  };

  test('should return correct data length', async () => {
    const receiveData = await getProductsList({});
    expect(JSON.parse(receiveData.body).length).toBe(5);
  });

  test('should return correct first element', async () => {
    const receiveData = await getProductsList({});
    expect(JSON.parse(receiveData.body)[0]).toEqual(expectedElement);
  });
});
