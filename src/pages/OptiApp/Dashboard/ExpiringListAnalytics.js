import React, { Component } from 'react';
import { Card, CardBody, Row, Col } from 'reactstrap';

//Import Charts
import ReactApexChart from 'react-apexcharts';
import './dashboard.scss';

class SalesAnalytics extends Component {
  state = {
    series: [42, 26, 15],
    options: {
      labels: ['Product A', 'Product B', 'Product C'],
      plotOptions: {
        pie: {
          donut: {
            size: '75%',
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      colors: ['#5664d2', '#1cbb8c', '#eeb902'],
    },
  };
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardBody>
            <div className="float-right text-success">
              See Details
            </div>
            <h4 className="card-title mb-4">Expiring Leases</h4>

            <div id="donut-chart" className="apex-charts">
              <ReactApexChart
                options={this.state.options}
                series={this.state.series}
                type="donut"
                height="220"
              />
            </div>

            <Row>
              <Col xs={4}>
                <div className="text-center mt-4">
                  <p className="mb-2 text-truncate">
                    <i className="mdi mdi-circle text-primary font-size-10 mr-1"></i>{' '}
                    30Days 
                  </p>
                  <h5>12</h5>
                </div>
              </Col>
              <Col xs={4}>
                <div className="text-center mt-4">
                  <p className="mb-2 text-truncate">
                    <i className="mdi mdi-circle text-success font-size-10 mr-1"></i>{' '}
                    31 - 60days
                  </p>
                  <h5>26</h5>
                </div>
              </Col>
              <Col xs={4}>
                <div className="text-center mt-4">
                  <p className="mb-2 text-truncate">
                    <i className="mdi mdi-circle text-warning font-size-10 mr-1"></i>{' '}
                    61 - 120 days
                  </p>
                  <h5>42</h5>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default SalesAnalytics;
