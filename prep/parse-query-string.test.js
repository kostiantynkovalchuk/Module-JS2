function parseQueryString(queryString) {
  const queryParams = {};
  if (queryString.length === 0) {
    return queryParams;
  }

  // Split by '&' to get individual key-value pairs
  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [key, value] = pair.split("=");
    queryParams[key] = value;
  }

  return queryParams;
}

test("given a query string with multiple key-value pairs, returns them in object form", function () {
  const input = "sort=lowest&color=yellow";
  const currentOutput = parseQueryString(input);
  const targetOutput = { sort: "lowest", color: "yellow" };

  expect(currentOutput).toStrictEqual(targetOutput);
});
