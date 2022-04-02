import React, { useEffect, useState } from "react";
import { Input, Button, Table, Card, CardBody } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import profileImage from "../../../assets/images/ProfileImage.svg";
import Preview from "./Preview";
import CreateAgent from "./CreateAgent";
import { connect, useDispatch } from "react-redux";
import { getLandlordAgents } from "../../../store/actions";
import emptyCan from "../../../assets/images/EmptyCan.png";
import Loader from "../../../components/Common/Loading/index";
import avatar from "../../../assets/images/avi.jpg";

const Agent = ({ user, landlordAgents, getLandlordAgents, loading }) => {
  const [isNewAgent, setIsNewAgent] = useState(false);
  const [preview, setPreview] = useState(false);
  const [searchName, setSearchName] = useState("");
  const [filteredAgents, setFilteredAgents] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLandlordAgents(user?.id));
  }, [dispatch]);

  useEffect(() => {
    setFilteredAgents(
      landlordAgents?.data?.agents.filter(
        (agent) =>
          agent.firstName.toLowerCase() === searchName.toLowerCase() ||
          agent.lastName.toLowerCase() === searchName.toLowerCase() ||
          agent.email.toLowerCase() === searchName.toLowerCase() ||
          (agent.firstName + " " + agent.lastName).toLowerCase() ===
            searchName.toLowerCase()
      )
    );
  }, [searchName]);

  if (preview) {
    return <Preview BackToHome={() => setPreview(false)} />;
  }

  if (isNewAgent) {
    return <CreateAgent BackToHome={() => setIsNewAgent(false)} />;
  }

  return (
    <div className="page-content">
      <h5 className="ml-2"> Agent </h5>
      {loading ? (
        <Card>
          <CardBody>
            <Loader loading={loading} />
          </CardBody>
        </Card>
      ) : (
        <Card>
          <CardBody>
            <div className="d-flex justify-content-between">
              <div className="search-box">
                <div className="position-relative">
                  <Input
                    value={searchName}
                    type="text"
                    className="form-control rounded"
                    placeholder="Search..."
                    onChange={(e) => setSearchName(e.target.value)}
                  />
                  <i className="mdi mdi-magnify search-icon"></i>
                </div>
              </div>
              <div className="text-right">
                <Button
                  color="success"
                  onClick={() => setIsNewAgent(!isNewAgent)}
                >
                  New Agent
                </Button>
              </div>
            </div>
            {landlordAgents?.data?.agents?.length !== 0 ? (
              <div className="table-rep-plugin mt-4">
                <div
                  className="table-responsive mb-0"
                  data-pattern="priority-columns"
                >
                  <Table id="tech-companies-1" striped responsive>
                    <thead>
                      <tr>
                        <th>Agent</th>
                        <th data-priority="1">Properties</th>
                        <th data-priority="3">Email</th>
                        <th data-priority="1">Date Added</th>
                        <th data-priority="3">Last Active</th>
                        <th data-priority="3">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {searchName
                        ? filteredAgents?.map((agent) => (
                            <tr key={agent.id}>
                              <td className="d-flex align-items-center">
                                <Link
                                  to={`/agentpreview/${agent.email}`}
                                  onClick={() => setPreview(true)}
                                >
                                  {agent?.profilePhoto ? (
                                    <img
                                      src={agent?.profilePhoto}
                                      alt="profile"
                                      width="38"
                                      height="38"
                                    />
                                  ) : (
                                    <img
                                      src={avatar}
                                      alt="profile"
                                      width="38"
                                      height="38"
                                    />
                                  )}
                                  <span className="co-name mx-2">
                                    {agent.firstName} {agent.lastName}
                                  </span>
                                </Link>
                              </td>
                              <td></td>
                              <td>{agent.email}</td>
                              <td></td>
                              <td></td>
                              <td>
                                <span>Active</span>
                              </td>
                              <td>
                                <i className="ri-more-2-fill ml-2"></i>
                              </td>
                            </tr>
                          ))
                        : landlordAgents?.data?.agents.map((agent) => (
                            <tr key={agent.id}>
                              <td className="d-flex align-items-center">
                                <Link
                                  to={`/agentpreview/${agent.email}`}
                                  onClick={() => setPreview(true)}
                                >
                                  {agent?.profilePhoto ? (
                                    <img
                                      src={agent?.profilePhoto}
                                      alt="profile"
                                      width="38"
                                      height="38"
                                    />
                                  ) : (
                                    <img
                                      src={avatar}
                                      alt="profile"
                                      width="38"
                                      height="38"
                                    />
                                  )}
                                  <span className="co-name mx-2">
                                    {agent.firstName} {agent.lastName}
                                  </span>
                                </Link>
                              </td>
                              <td></td>
                              <td>{agent.email}</td>
                              <td></td>
                              <td></td>
                              <td>
                                <span>Active</span>
                              </td>
                              <td>
                                <i className="ri-more-2-fill ml-2"></i>
                              </td>
                            </tr>
                          ))}
                    </tbody>
                  </Table>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <img src={emptyCan} alt="empty" className="rounded mb-2" />
                <h4> Table is Empty </h4>
              </div>
            )}
          </CardBody>
        </Card>
      )}
    </div>
  );
};

const mapStatetoProps = (state) => {
  const { user } = state.Account;
  const { landlordAgents, loading } = state.Agents;
  return { landlordAgents, user, loading };
};

export default withRouter(
  connect(mapStatetoProps, { getLandlordAgents })(Agent)
);
