import React from "react";
import { useRouter } from "next/router";

import dynamic from "next/dynamic";

function Loading() {
  return <p>loading...</p>;
}

const DynamicComponent = dynamic(
  () => import(`@pages/play/components/Paging`),
  { loading: () => <Loading /> }
);

function Main() {
  const {
    query: { playId },
  } = useRouter();

  // Paging

  // dynamic() can't be used inside of React rendering
  // as it needs to be marked in the top level of the module
  // for preloading to work, similar to React.lazy.

  return (
    <div>
      hello:{playId}
      {/* <DynamicComponent /> */}
    </div>
  );
}

export default Main;
