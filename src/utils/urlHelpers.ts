// splits the url and gets penultimate item
export const getIdFromUrl = (url: string) : string => url.split('/').slice(-2).shift() || '';

// splits the url and gets the endpoint from it by using the resource name and the id
export const mapEndpointFromUrl = (url: string) : string => {
  const [endpoint, id, ] = url.split('/').slice(-3);
  return `/${endpoint}/${id}`;
};