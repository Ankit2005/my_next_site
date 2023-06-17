import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const colorMode = extendTheme({ config });

export default colorMode;

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const api = createApi({
//   baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
//   endpoints: (builder) => ({
//     // Define your endpoints here
//     getUsers: builder.query({
//       query: () => 'users',
//     }),
//   }),
// });

// const api = createApi({
//   // ...
//   onError: (error) => {
//     // Handle the error response
//     console.error(error);
//   },
//   // ...
// });

// const api = createApi({
//   // ...
//   onError: (error) => {
//     const { status, data } = error.response;

//     if (status === 401) {
//       // Handle unauthorized error
//     } else if (status === 404) {
//       // Handle not found error
//     } else {
//       // Handle other errors
//     }
//   },
//   // ...
// });

// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';

// const store = configureStore({
//   reducer: {
//     [api.reducerPath]: api.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(api.middleware),
// });

// function App() {
//   return (
//     <Provider store={store}>
//       {/* Your app components */}
//     </Provider>
//   );
// }
