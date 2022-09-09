import React from "react";
import { useGetInitialStateQuery } from "./store/mockable";
import { Error } from "./components/error";
import { Loading } from "./components/loading";
import { Form } from "./modules/form";

function App() {
  const { isLoading, isError, data } = useGetInitialStateQuery();

  return (
    <div className="flex flex-col mx-auto pt-10 px-10 w-screen h-screen justify-between items-center">
      {isError && <Error />}
      {isLoading && <Loading />}
      {data && <Form data={data} />}
    </div>
  );
}

export default App;
