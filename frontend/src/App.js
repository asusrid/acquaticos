import './App.css';
// import Table from 'react-bootstrap/Table';

const App = () => {
  return (
    <div>
      <h1>Header Usernemane and wallet</h1>
      <div>
        <h1>Acqua Management Console</h1>
      </div>
      <div className="table-container">
        <table className="table table-striped">
|          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Size</th>
              <th scope="col">Volume</th>
              <th scope="col">Goal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Barcelona</td>
              <td>2000</td>
              <td>8000</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Barcelona</td>
              <td>2000</td>
              <td>8000</td>
            </tr>
            <tr>
              <th scope="row">3</th>
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

export default App;
