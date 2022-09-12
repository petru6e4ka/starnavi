import React from "react";
import { useGetInitialStateQuery } from "./store/mockable";
import { Error } from "./components/error";
import { Loading } from "./components/loading";
import { Form } from "./modules/form";
import Squares from "./modules/squares";
import Preview from "./modules/preview";

function App() {
  const { isLoading, isError, data } = useGetInitialStateQuery();

  return (
    <div className="flex flex-col w-full mx-auto pt-10 px-10 h-screen  justify-start">
      {isError && <Error />}
      {isLoading && <Loading />}
      {data && (
        <Form data={data}>
          <section className="flex flex-wrap flex-none">
            <Squares />
            <Preview />
          </section>
        </Form>
      )}
    </div>
  );
}

export default App;
