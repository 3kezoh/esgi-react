import React, { Fragment, useEffect, useRef, useState } from "react";
import Button from "../Button";
import Loader from "../Loader";
import Select from "../Select";
import Table from "../Table";

/**
 * @description Displays JSONPlaceholder ressources.
 * @returns {React.ReactElement} The component.
 */
function JSONPlaceholder() {
  /**
   * Ressources available on JSONPlaceholder.
   */
  const ressources = [
    "albums",
    "comments",
    "photos",
    "posts",
    "todos",
    "users",
  ];

  const abortController = useRef(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [ressource, setRessource] = useState(ressources.at(0));

  /**
   * @description Sets the current ressource.
   * @param {React.ChangeEvent<HTMLSelectElement>} event The event.
   * @returns {void}
   */
  function onRessourceChange({ target }) {
    setRessource(target.value);
  }

  /**
   * @description Aborts the request to JSONPlaceholder.
   * @returns {void}
   */
  function onAbort() {
    abortController.current.abort();
  }

  useEffect(() => {
    abortController.current = new AbortController();

    /**
     * @description Fetches the ressource from JSONPlaceholder.
     * @returns {void}
     */
    async function fetchJSONPlaceholder() {
      const url = new URL(ressource, "https://jsonplaceholder.typicode.com/");

      const response = await fetch(url, {
        signal: abortController.current.signal,
      });

      if (!response.ok) {
        throw new Error("Error while fetching the ressource");
      }

      const json = await response.json();

      setData(json);
    }

    /**
     * @description Handles the error.
     * @param {any} error The error.
     * @returns {void}
     */
    function onError(error) {
      if (error.name === "AbortError") {
        setError("Request aborted");
        return;
      }

      setError("An unexpected error occurred");
    }

    setError(null);
    setIsLoading(true);

    fetchJSONPlaceholder()
      .catch(onError)
      .finally(() => {
        setIsLoading(false);
      });
  }, [ressource]);

  return (
    <Fragment>
      <Select
        onChange={onRessourceChange}
        options={ressources}
        value={ressource}
      />
      <Button onClick={onAbort}>Abort</Button>
      {error && <div>{error}</div>}
      {isLoading && <Loader />}
      {data && !error && !isLoading && <Table data={data} />}
    </Fragment>
  );
}

export default JSONPlaceholder;
