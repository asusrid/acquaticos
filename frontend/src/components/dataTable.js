
const DataTable = () => {
  
  return (
    <div>
        <h1>Company Name</h1>
      <div className="table-container">
        <table className="table table-striped">
|          <thead class="thead-dark">
            <tr>
              <th scope="col">Side</th>
              <th scope="col">Volume</th>
              <th scope="col">Bench Mark</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Barcelona</td>
              <td>2000</td>
              <td>8000</td>
            </tr>
            <tr>
              <td>Barcelona</td>
              <td>2000</td>
              <td>8000</td>
            </tr>
            <tr>
              <td>Barcelona</td>
              <td>2000</td>
              <td>8000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;