import React, { Component } from 'react';
import {
  Card,
  CardBody,
  Row,
  Col,
} from 'reactstrap';

//Import Charts
import ReactApexChart from 'react-apexcharts';
import './dashboard.scss';

class EarningReports extends Component {
  state = {
    menu: false,
    series: [72],
    options: {
      chart: {
        sparkline: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ['#5664d2'],
      stroke: {
        lineCap: 'round',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: '70%',
          },
          track: {
            margin: 0,
          },

          dataLabels: {
            show: false,
          },
        },
      },
    },
    series2: [65],
    options2: {
      chart: {
        sparkline: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ['#1cbb8c'],
      stroke: {
        lineCap: 'round',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: '70%',
          },
          track: {
            margin: 0,
          },

          dataLabels: {
            show: false,
          },
        },
      },
    },
  };
  render() {
    return (
      <React.Fragment>
        <div className="text-center">
          <Row>
            <Col sm={6}>
              <Card style={{ borderRadius: '16px' }}>
                <CardBody>
                  <div>
                    <div className="mb-3">
                      <div id="radialchart-1" className="apex-charts">
                        <ReactApexChart
                          options={this.state.options}
                          series={this.state.series}
                          type="radialBar"
                          height="60"
                        />
                      </div>
                    </div>

                    <p className="text-muted text-truncate mb-2">Tenants</p>
                    <h5>523</h5>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col sm={6}>
              <Card style={{ borderRadius: '16px' }}>
                <CardBody>
                  <div className="mt-5 mt-sm-0">
                    <div className="mb-3">
                      <div id="radialchart-2" className="apex-charts">
                        <ReactApexChart
                          options={this.state.options2}
                          series={this.state.series2}
                          type="radialBar"
                          height="60"
                        />
                      </div>
                    </div>

                    <p className="text-muted text-truncate mb-2">Properties</p>
                    <h5>235</h5>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Card style={{ borderRadius: '16px' }}>
                <CardBody>
                  <div>
                    <div className="mb-3">
                      <div id="radialchart-1" className="apex-charts">
                        <ReactApexChart
                          options={this.state.options2}
                          series={this.state.series2}
                          type="radialBar"
                          height="60"
                        />
                      </div>
                    </div>

                    <p className="text-muted text-truncate mb-2">Unit</p>
                    <h5>523</h5>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col sm={6}>
              <Card style={{ borderRadius: '16px' }}>
                <CardBody>
                  <div className="mt-5 mt-sm-0">
                    <div className="mb-3">
                      <div id="radialchart-2" className="apex-charts">
                        <ReactApexChart
                          options={this.state.options}
                          series={this.state.series}
                          type="radialBar"
                          height="60"
                        />
                      </div>
                    </div>

                    <p className="text-muted text-truncate mb-2">
                      Occupied Units
                    </p>
                    <h5>35</h5>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

export default EarningReports;
