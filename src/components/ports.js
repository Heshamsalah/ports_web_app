import React from 'react'

const Ports = ({ ports, loggedIn }) => {
  let divStyle = {
    border: '1px solid black',
    backgroundColor: 'black',
    color: 'white'
  };
  let cstyle = {
    padding: '10px',
    backgroundColor: 'yellow'
  };

  if(true) {
    return (
      <div style={cstyle}>
        <center><h1>Ports List</h1></center>
        <table style={divStyle}>
          <thead class="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Code</th>
              <th scope="col">City</th>
              <th scope="col">Oceans insights code</th>
              <th scope="col">Latitude</th>
              <th scope="col">Longitude</th>
              <th scope="col">Bigschedules</th>
              <th scope="col">Port type</th>
              <th scope="col">Hub port</th>
              <th scope="col">Ocean insights</th>
              <th scope="col">Created at</th>
              <th scope="col">Updated at</th>
            </tr>
          </thead>
          <tbody>
          {ports.map((port) => {
            console.log(port)
            let attributes = port['attributes'];
              return ( 
                <tr>
                  <td>{port['id']}</td>
                  <td>{attributes.name}</td>
                  <td>{attributes.code}</td>
                  <td>{attributes.city}</td>
                  <td>{attributes.oceans_insights_code}</td>
                  <td>{attributes.lat}</td>
                  <td>{attributes.lng}</td>
                  <td>{attributes.big_schedules}</td>
                  <td>{attributes.port_type}</td>
                  <td>{attributes.port_hub}</td>
                  <td>{attributes.ocean_insights}</td>
                  <td>{attributes.created_at}</td>
                  <td>{attributes.updated_at}</td>
                </tr>
              )
            }
          )}
          </tbody>
        </table>
      </div>
    )
  }
  else
  {
    return (
      <div class="container">
        <center><h1>LogIn</h1></center>
      </div>
    );
  }
};

export default Ports