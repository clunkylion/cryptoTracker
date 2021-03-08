class Http {
  //singleton, un solo objeto de la misma clase
  static instance = new Http();

  get = async (url) => {
    try {
      let req = await fetch(url);
      let json = await req.json();
      return json;
    } catch (error) {
      console.error('Http get method error', error);
      throw Error(error);
    }
  };
  post = async (url, body) => {
    try {
      let req = await fetch(url, {
        method: 'POST',
        body,
      });
      let json = await req.json();
      return json;
    } catch (error) {
      console.error('Http post error', error);
      throw Error(error);
    }
  };
}
export default Http;
