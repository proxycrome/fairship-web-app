import React, { Component } from 'react';
import { Card, CardBody, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

//Import Images
import img1 from '../../../assets/images/home.png';

class Sources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
    };
  }

  render() {
    const getDifferenceInDays = (date1, date2) => {
      if (date2 >= date1) {
        const diffInMs = date2 - date1;
        return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
      }
    };

    const rentActive = this.props?.allrentals?.entities?.filter(
      (rentals) => rentals.status === 'ACTIVE'
    );

    const total = rentActive?.reduce((acc, data) => {
      if (
        new Date(
          `${data.dueDate.split('-')[1]}-${data.dueDate.split('-')[0]}-${
            data.dueDate.split('-')[2]
          }`
        ) < new Date()
      ) {
        acc += data.property.price;
      }
      return acc;
    }, 0);

    // console.log(total);

    // console.log(rentActive);
    return (
      <React.Fragment>
        <Card>
          <CardBody>
            <h4 className="float-right">₦{total}</h4>

            <h4 className="card-title mb-3">Outstanding Balance</h4>

            <div>
              <div className="table-responsive mt-4">
                <Table hover className=" mb-0 table-centered table-nowrap">
                  <tbody>
                    {rentActive?.map((data) => (
                      <tr key={data.id}>
                        <td>
                          <div className="avatar-xs">
                            <div className="avatar-title rounded bg-light">
                              {data.tenant.profilePhoto ? (
                                <img
                                  src={data.tenant.profilePhoto}
                                  alt=""
                                  height="20"
                                />
                              ) : (
                                <img src={img1} alt="" height="20" />
                              )}
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="mb-0 text-muted">
                            {data?.property?.bedrooms}beds,{' '}
                            {data?.property?.bathrooms}baths
                          </p>
                          <h5 className="font-size-14 mb-0">
                            {data?.property?.parentProperty?.title}{' '}
                            {data?.property?.title}
                          </h5>
                        </td>

                        <td>
                          <div id="spak-chart2"></div>
                        </td>
                        <td>
                          <p className="text-muted mb-0 text-primary">
                            {getDifferenceInDays(
                              new Date(),
                              new Date(
                                `${data.dueDate.split('-')[1]}-${
                                  data.dueDate.split('-')[0]
                                }-${data.dueDate.split('-')[2]}`
                              )
                            ) >= 0
                              ? '₦' + 0
                              : '₦' + data?.property?.price}
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>

              <div className="text-center mt-4">
                <Link to="/tenants" className="btn btn-primary btn-sm">
                  View more
                </Link>
              </div>
            </div>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}

export default Sources;
