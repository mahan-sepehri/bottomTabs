const getPosts = async (pageNum = 1) => {
  try {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    const response = await fetch(
      `https://uniplato.staging.uniplato.us/api/v1/mock-data?page=${pageNum}&limit=10`,
      requestOptions
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error fetching posts", error);
  }
};

export default getPosts;
