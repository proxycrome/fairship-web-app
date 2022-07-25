import React, {useState, Component, useEffect } from 'react';
import { Row, Col, Card, CardBody, ButtonGroup, Button } from 'reactstrap';

//Import Charts
import ReactApexChart from 'react-apexcharts';
import './dashboard.scss';

const RevenueAnalytics = (props) => {
  const [series, setSeries] = useState([
    {
      name: 'Rent Completed',
      type: 'column',
      data: []  //[23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
    },
    {
      name: 'Active Rent',
      type: 'line',
      data: []  //[23, 32, 27, 38, 27, 32, 27, 38, 22, 31, 21, 16],
    },
  ])

  const [options, setOptions] = useState({
    chart: {
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: [0, 3],
      curve: 'smooth',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '20%',
      },
    },
    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },
    colors: ['#5664d2', '#1cbb8c'],
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec', 
    ],
  })

  

  useEffect(() => {
    const activeRentAnalytics = () => {
      let obj = {Jan: 0, Feb: 0, Mar: 0, Apr: 0, May: 0, Jun: 0, Jul: 0, Aug: 0, Sep: 0, Oct: 0, Nov: 0, Dec: 0};
      const may = props.allrentals?.entities?.forEach(rentals => {
        for (let month of options.labels) {
          if(rentals.status === "ACTIVE"){
            if (options.labels[+rentals?.originalRentStartDate?.split("-")[1] - 1] === month){
              obj[month] = (obj[month] || 0) + 1;
            }  
          }  
        }  
      })
      return Object.values(obj);
    }

    const completeRentAnalytics = () => {
      let obj = {Jan: 0, Feb: 0, Mar: 0, Apr: 0, May: 0, Jun: 0, Jul: 0, Aug: 0, Sep: 0, Oct: 0, Nov: 0, Dec: 0};
      const may = props.allrentals?.entities?.forEach(rentals => {
        for (let month of options.labels) {
          if(rentals.status === "EXPIRED" || rentals.status === 'WAITING_TO_BE_MOVED_OUT' || rentals.status === 'EXITED'){
            if (options.labels[+rentals?.dueDate?.split("-")[1] - 1] === month){
              obj[month] = (obj[month] || 0) + 1;
            }  
          }  
        }  
      })
      return Object.values(obj);
    }

    setSeries([
      {
        name: 'Rent Completed',
        type: 'column',
        data:  completeRentAnalytics(), //[23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
      },
      {
        name: 'Active Rent',
        type: 'line',
        data: activeRentAnalytics(), //[23, 32, 27, 38, 27, 32, 27, 38, 22, 31, 21, 16],
      },
    ])
    
  }, [props.allrentals])


  const rentComplete = props?.allrentals?.entities?.filter((rentals) => rentals.status === 'EXPIRED' ||  rentals.status === 'WAITING_TO_BE_MOVED_OUT' || rentals.status === 'EXITED')?.length;
  // console.log(props.allrentals)
  const rentActive = props?.allrentals?.entities?.filter((rentals) => rentals.status === 'ACTIVE')?.length;
  // console.log(series);
  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <div className="float-right d-none d-md-inline-block">
            <ButtonGroup className="mb-2">
              {/* <Button size="sm" color="light" type="button">
                Today
              </Button> */}
              {/* <Button size="sm" color="light" active type="button">
                Weekly
              </Button> */}
              <Button size="sm" color="light" active type="button">
                Monthly
              </Button>
            </ButtonGroup>
          </div>
          <h4 className="card-title mb-4">Rent Analytics</h4>
          <div>
            <div id="line-column-chart" className="apex-charts" dir="ltr">
              <ReactApexChart
                options={options}
                series={series}
                type="line"
                height="250"
              />
            </div>
          </div>
        </CardBody>

        <CardBody className="border-top text-center">
          <Row>

            <Col sm={6}>
              <div className="mt-4 mt-sm-0">
                <p className="mb-2 text-muted text-truncate">
                  <i className="mdi mdi-circle text-primary font-size-10 mr-1"></i>{' '}
                  Rent Completed
                </p>
                <div className="d-inline-flex">
                  <h5 className="mb-0 mr-2">{rentComplete}</h5>
                </div>
              </div>
            </Col>
            <Col sm={6}>
              <div className="mt-4 mt-sm-0">
                <p className="mb-2 text-muted text-truncate">
                  <i className="mdi mdi-circle text-success font-size-10 mr-1"></i>{' '}
                  Active Rent
                </p>
                <div className="d-inline-flex">
                  <h5 className="mb-0"> {rentActive}</h5>
                </div>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </React.Fragment>
  );  
}

export default RevenueAnalytics;
