import PropTypes from "prop-types";
import React from "react";
import styles from "./table.module.css";

/**
 * @typedef {Object} TableProps The properties of the component.
 * @property {Object[]} data The data to display.
 */

/**
 * @description Displays a table with the given data.
 * @param {TableProps} props
 * @returns {React.ReactElement} The component.
 */
function Table({ data }) {
  const headers = Object.keys(data.at(0));

  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          const entries = Object.entries(item);

          return (
            <tr key={item.id}>
              {entries.map(([key, value]) => (
                <td key={key} className={styles.td}>
                  {JSON.stringify(value)}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
