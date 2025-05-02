import axios from "axios";

let csrfToken = "";

const getToken = async () => {
  const response = await axios.get("http://localhost:8000/getoPi", {
    withCredentials: true,
  });

  csrfToken = response.data.csrf_token;
};

axios.interceptors.request.use((config) => {
  if (
    ["post", "put", "patch", "delete"].includes(
      config.method.toLocaleLowerCase()
    )
  ) {
    config.headers["X-CSRF-TOKEN"] = csrfToken;
    console.log(config.headers, "the headers");
  }
  return config;
});

export { axios, getToken };
