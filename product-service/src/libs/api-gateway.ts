type Response = {
  response: any;
  statusCode: number;
  config?: Record<string, unknown>;
};

export const formatJSONResponse = ({ response, statusCode }: Response) => {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': 'https://d2htxos98rraoe.cloudfront.net',
      'Access-Control-Allow-Methods': 'OPTIONS,GET',
    },
    body: JSON.stringify(response),
  };
};
