// Libraries
import React, { useEffect } from "react";
// Modules
import { JOBS } from "../../modules/api/endpoints";
// Hooks
import useFetch from "../../hooks/useFetch";

export default function Jobs() {
  const { response, performFetch } = useFetch(JOBS);

  useEffect(() => {
    performFetch();
  }, [performFetch]);

  console.log(response);

  return <div>Jobs Component</div>;
}
