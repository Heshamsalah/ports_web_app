import React from 'react'
import { Table } from 'semantic-ui-react'

class Ports extends React.Component {
  state = {
    ports: []
  }

  componentDidMount() {
    fetch('https://hsalah.net/ports_app/?&page=1&per=30', {
      method: 'get',
      headers: new Headers({
        'Authorization': localStorage.getItem('accessToken'),
        'Content-Type': 'application/json',
      })
    })
    .then(res => res.json())
    .then(data => {
      this.setState({ ports: data['data'] })
    })
    .catch(console.log)
  }

  render() {
    const {ports} = this.state;

    return (
      <Table celled selectable compact>
        <Table.Header fullWidth>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Code</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Oceans insights code</Table.HeaderCell>
            <Table.HeaderCell>Latitude</Table.HeaderCell>
            <Table.HeaderCell>Longitude</Table.HeaderCell>
            <Table.HeaderCell>Bigschedules</Table.HeaderCell>
            <Table.HeaderCell>Port type</Table.HeaderCell>
            <Table.HeaderCell>Hub port</Table.HeaderCell>
            <Table.HeaderCell>Ocean insights</Table.HeaderCell>
            <Table.HeaderCell>Created at</Table.HeaderCell>
            <Table.HeaderCell>Updated at</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {ports.map((port) => {
            let attributes = port['attributes'];
              return ( 
                <Table.Row>
                  <Table.Cell>{port['id']}</Table.Cell>
                  <Table.Cell>{attributes.name}</Table.Cell>
                  <Table.Cell>{attributes.code}</Table.Cell>
                  <Table.Cell>{attributes.city}</Table.Cell>
                  <Table.Cell>{attributes.oceans_insights_code}</Table.Cell>
                  <Table.Cell>{attributes.lat}</Table.Cell>
                  <Table.Cell>{attributes.lng}</Table.Cell>
                  <Table.Cell>{attributes.big_schedules}</Table.Cell>
                  <Table.Cell>{attributes.port_type}</Table.Cell>
                  <Table.Cell>{attributes.port_hub}</Table.Cell>
                  <Table.Cell>{attributes.ocean_insights}</Table.Cell>
                  <Table.Cell>{attributes.created_at}</Table.Cell>
                  <Table.Cell>{attributes.updated_at}</Table.Cell>
                </Table.Row>
              )
            }
          )}
        </Table.Body>
      </Table>
    )
  }
}

export default Ports;