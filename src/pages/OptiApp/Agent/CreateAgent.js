import React, { useEffect, useState } from "react";
import {
  Container,
  Card,
  CardBody,
  Col,
  FormGroup,
  Form,
  Alert,
  Label,
} from "reactstrap";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { getAgents, postAgents } from "../../../store/actions";
import Loader from "../../../components/Common/Loading/index";
import { clearMessages } from "../../../store/Agent/actions";

const CreateAgent = ({ BackToHome, userId }) => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState(null);
  const [formData, setFormData] = useState({
    agentId: 0,
    landlordId: 0,
  });

  useEffect(() => {
    dispatch(getAgents());
    dispatch(clearMessages());
  }, [dispatch]);

  console.log(userId);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);

    setFormData({
      ...formData,
      agentId: selectedOption.value,
      landlordId: userId,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    dispatch(postAgents(formData));
  };

  const { agents, postAgentData, landlordAgents, loading, postAgentError } = useSelector(
    (state) => state.Agents
  );


  console.log(postAgentError);

  const AgentsIdArray = landlordAgents?.data?.agents?.map((agent) => agent.id);

  const filteredAgents = agents?.entities?.filter(
    (agent) => !AgentsIdArray?.find((id) => id === agent?.id)
  );

  // console.log(filteredAgents);

  console.log(agents);

  // console.log(postAgentData?.message);

  const optionGroup = [
    {
      label: "Select an Agent",
      options: filteredAgents?.map((agent) => {
        return {
          label: `${agent.firstName} ${agent.lastName}`,
          value: agent.id,
        };
      }),
    },
  ];

  return (
    <React.Fragment>
      <div className="page-content" style={{ height: "100vh" }}>
        <Container fluid>
          <span onClick={BackToHome} className="mx-2 font-size-14 mb-2">
            <span>
              <i className="fas fa-arrow-left font-size-14 mr-2" />
            </span>
            Back
          </span>
          {loading ? (
            <Card>
              <CardBody>
                <Loader/>
              </CardBody>
            </Card> 
          ) : (
            <Card className="mt-2">
              <CardBody>
                {postAgentData && postAgentData?.message && (
                  <Alert color="success" className="text-center">
                    {postAgentData?.message}
                  </Alert>
                )}
                {postAgentError && (
                  <Alert color="danger" className="text-center">
                    {postAgentError?.message}
                  </Alert>
                )}
                <h5>
                  <b>Add Agent</b>
                </h5>
                <Form className="mx-4 mt-2">
                  <FormGroup row>
                    <Col md={12}>
                      <Label>Agent</Label>
                      <Select
                        value={selectedOption}
                        options={optionGroup}
                        onChange={handleChange}
                      />
                    </Col>
                  </FormGroup>

                  <div className="text-center">
                    <button
                      className="btn btn-success px-5"
                      onClick={handleSubmit}
                    >
                      Add
                    </button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          )}
          
        </Container>
      </div>
    </React.Fragment>
  );
};

export default CreateAgent;
