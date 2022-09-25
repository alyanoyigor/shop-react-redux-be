export const getProductsById = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      id: 1,
      title: "Book 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 10,
      count: 10,
    }),
  };
};
