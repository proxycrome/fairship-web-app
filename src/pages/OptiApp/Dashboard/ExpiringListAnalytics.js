import React, { Component } from 'react';
import { Card, CardBody, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
//Import Charts
import ReactApexChart from 'react-apexcharts';
import './dashboard.scss';
import emptyCan from '../../../assets/images/EmptyCan.png';
import {fetchExpiring, fetchExpiringSixty, fetchExpiringOnetwenty} from '../../../store/actions'

class SalesAnalytics extends Component {

  constructor(props) {
    super(props);
    
    this.state = {

      series:[0, 0, 0],
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
    }
  }

  

  componentDidMount() {
    this.props.fetchExpiring()
    this.props.fetchExpiringSixty()
    this.props.fetchExpiringOnetwenty() 
  
 }

   componentDidUpdate(Pp, Ps, Ss){
    
    if(Pp.rent !== this.props.rent || Pp.sixty !== this.props.sixty || Pp.twenty !== this.props.twenty ){
      console.log(this.props)
      this.setState({
            ...this.state,
            series: [this.props.rent?.entities?.length , this.props.sixty?.entities?.length , this.props.twenty?.entities?.length ]
          })
    }
   }
 
  render() {
   
    return (
      <React.Fragment>
        {(this.props.rent?.entities?.length === 0 && this.props.sixty?.entities?.length === 0  && this.props.twenty?.entities?.length === 0)
        ?
        (
          <Card>
            <CardBody> 
            <h4 className="card-title mb-4">Expiring Leases</h4>
            <div className="text-center">
            <img
              src={emptyCan}
              alt="empty"
              className="rounded mb-2"
            />
            <h5> No Expiring Leases! </h5>
          </div>
          </CardBody>
           </Card>
        ) :
        (
          <Card>
          <CardBody>
            <div className="float-right">
              <Link to='/tenants' className='text-success'>
              See Details
              </Link>
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
                  <h5>{this.props.rent?.entities?.length}</h5>
                </div>
              </Col>
              <Col xs={4}>
                <div className="text-center mt-4">
                  <p className="mb-2 text-truncate">
                    <i className="mdi mdi-circle text-success font-size-10 mr-1"></i>{' '}
                    31 - 60days
                  </p>
                  <h5>{this.props.sixty?.entities?.length}</h5>
                </div>
              </Col>
              <Col xs={4}>
                <div className="text-center mt-4">
                  <p className="mb-2 text-truncate">
                    <i className="mdi mdi-circle text-warning font-size-10 mr-1"></i>{' '}
                    61 - 120 days
                  </p>
                  <h5>{this.props.twenty?.entities?.length}</h5>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
        )
      }
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
     const {rent, error, sixty, errorsixty, twenty, errortwenty} = state.fetchReducerExpiring;
     return {rent, error, sixty, errorsixty, twenty, errortwenty};
};



export default withRouter(connect(mapStatetoProps, {fetchExpiring, fetchExpiringSixty, fetchExpiringOnetwenty})(SalesAnalytics));
