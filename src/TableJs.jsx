import Table from "react-bootstrap/Table";
import { data, dataHeader } from "./Data";
import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";

const TableJs = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);

  return !loading ? (
    <HashLoader loading={!loading} size={100} color="#123abc" />
  ) : (
    <Table bordered responsive="lg">
      <thead>
        <tr>
          {dataHeader.map((val, key) => {
            return <th key={key}>{val}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((val, key) => {
          return (
            <tr>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.company}</td>
              <td>{val.email}</td>
              <td>{val.phone}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TableJs;
