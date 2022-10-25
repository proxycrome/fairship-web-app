import React, { useEffect, useState } from "react";

import {
  Row,
  Col,
  Button,
  Alert,
  Container,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";

// Redux
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation";

// actions
import {
  apiError,
  registerUser,
  registerUserFailed,
} from "../../../../store/actions";

import { fetchCountry, fetchState } from "../../../../store/actions";

// import images
import logodark from "../../../../assets/images/FairshipLogo.svg";

const Register = ({
  back,
  registerUser,
  registrationError,
  agentType,
  message,
  history,
  loading,
  fetchCountry,
  fetchState,
  countries,
  states,
}) => {
  const [show, setShow] = useState(false);
  const [showTOS, setShowTOS] = useState(false);

  const hideModal = () => {
    setShow(false);
  };

  const showModal = () => {
    setShow(true);
  };

  const hideTOSModal = () => {
    setShowTOS(false);
  };

  const showTOSModal = () => {
    setShowTOS(true);
  };

  const handleSubmit = (event, values) => {
    const {companyAgentDetails, ...others} = values;
    const formData = {
      ...others,
      phone: values.phone.startsWith("+234")
        ? values.phone.replace(/\+234/, "234")
        : values.phone.startsWith("0")
        ? values.phone.replace(/0/, "234")
        : values.phone,
    };
    const agentDetails = {
      type: agentType,
      companyName: values.companyAgentDetails?.companyName,
    };
    formData.agentDetails = agentDetails;
    formData.role = "AGENT";

    registerUser(formData, history);
  };

  useEffect(() => {
    fetchCountry();
    fetchState(1);
  }, []);

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        registerUserFailed("");
        history.push("/activation");
      }, [2000]);
    }
  }, [message]);

  return (
    <React.Fragment>
      <div>
        <Container fluid className="p-0" style={{ overflowX: "hidden" }}>
          <Row className="no-gutters">
            <Col lg={6}>
              <div className="authentication-bg text-center">
                <div className="bg-overlay"></div>
                <div className="overlay-text">
                  <div className="d-flex justify-content-between align-items-center h-100">
                    <div className="col-12">
                      <h1 className="text-center">Welcome!</h1>
                      <p className="text-center">Create an account with us</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="authentication-page-content  d-flex mt-4 min-vh-100">
                <div className="w-100">
                  <div className="d-flex align-items-center justify-content-between">
                    <Link to="/" className="logo">
                      <img src={logodark} height="100" alt="logo" />
                    </Link>
                    <div>
                      <Link to="/login">
                        <Button color="success" className="mr-2">
                          Log in
                        </Button>
                      </Link>
                      <Link to="#" onClick={back}>
                        <Button color="light" className="mr-4">
                          Back
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <Row className="justify-content-center">
                    <Col lg={9}>
                      <div>
                        <div className="text-center">
                          <h3 className="mt-2 font-weight-bold">
                            Create Account
                          </h3>
                          <p className="text-muted">
                            Fill the your details below to create an account
                            with us
                          </p>
                        </div>

                        {registrationError && registrationError ? (
                          <Alert color="danger" className="text-center">
                            {registrationError}
                          </Alert>
                        ) : null}

                        {message && (
                          <Alert color="success" className="text-center">
                            {message}
                          </Alert>
                        )}

                        <div className="p-2 mt-1">
                          <AvForm
                            className="form-horizontal"
                            onValidSubmit={handleSubmit}
                          >
                            <Row>
                              <Col sm={12}>
                                <FormGroup className="form-group-custom mb-3">
                                  <AvField
                                    name="companyAgentDetails.companyName"
                                    type="text"
                                    className="form-ctrl bg-light border border-0"
                                    id="companyName"
                                    placeholder="Company Name"
                                    required={agentType === "COMPANY"}
                                  />
                                </FormGroup>
                              </Col>
                              <Col sm={6}>
                                <FormGroup className="form-group-custom mb-3">
                                  <AvField
                                    name="firstName"
                                    type="text"
                                    className="form-ctrl bg-light border border-0"
                                    id="firstName"
                                    placeholder="Enter FirstName"
                                    required
                                  />
                                </FormGroup>
                              </Col>
                              <Col sm={6}>
                                <FormGroup className="form-group-custom mb-3">
                                  <AvField
                                    name="lastName"
                                    type="text"
                                    className="form-ctrl bg-light border border-0"
                                    id="lastName"
                                    placeholder="Enter Last Name"
                                    required
                                  />
                                </FormGroup>
                              </Col>
                              <Col sm={12}>
                                <FormGroup className="form-group-custom mb-3">
                                  <AvField
                                    name="phone"
                                    type="text"
                                    className="form-ctrl bg-light border border-0"
                                    id="phone"
                                    placeholder="Contact Phone No"
                                    required
                                  />
                                </FormGroup>
                              </Col>
                              <Col sm={12}>
                                <FormGroup className="form-group-custom mb-3">
                                  <AvField
                                    name="address.houseNoAddress"
                                    type="text"
                                    className="form-ctrl bg-light border border-0"
                                    id="houseNoAddress"
                                    placeholder="Address"
                                    required
                                  />
                                </FormGroup>
                              </Col>
                              <Col sm={6}>
                                <FormGroup className="form-group-custom mb-3">
                                  <AvField
                                    type="select"
                                    name="address.country"
                                    required
                                    className="form-ctrl bg-light border border-0"
                                  >
                                    <option value="">Select country...</option>
                                    {countries?.map((country) => (
                                      <option key={country.id}>
                                        {country.name}
                                      </option>
                                    ))}
                                  </AvField>
                                </FormGroup>
                              </Col>
                              <Col sm={6}>
                                <FormGroup className="form-group-custom mb-3">
                                  <AvField
                                    name="address.state"
                                    type="select"
                                    className="form-ctrl bg-light border border-0"
                                    id="state"
                                    required
                                  >
                                    <option value="">Select state...</option>
                                    {states?.map((state) => (
                                      <option key={state.id}>
                                        {state.name}
                                      </option>
                                    ))}
                                  </AvField>
                                </FormGroup>
                              </Col>
                              <Col sm={6}>
                                <FormGroup className="form-group-custom mb-3">
                                  <AvField
                                    name="email"
                                    type="email"
                                    className="form-ctrl bg-light border border-0"
                                    id="email"
                                    required
                                    placeholder="Email"
                                  />
                                </FormGroup>
                              </Col>
                              <Col sm={6}>
                                <FormGroup className="form-group-custom mb-3">
                                  <AvField
                                    name="password"
                                    type="password"
                                    className="form-ctrl bg-light border border-0"
                                    id="password"
                                    placeholder="Password"
                                  />
                                </FormGroup>
                              </Col>
                            </Row>

                            <div className="mt-4 text-center">
                              <Button
                                color="success"
                                className="w-100 waves-effect waves-light"
                                type="submit"
                              >
                                {loading ? "Loading..." : "Sign Up"}
                              </Button>
                            </div>
                          </AvForm>
                        </div>
                      </div>
                      <div className="terms">
                        <p>
                          By signing up, I agree to the{" "}
                          <Link to="#" onClick={showModal}>
                            Privacy
                          </Link>{" "}
                          and{" "}
                          <Link to="#" onClick={showTOSModal}>
                            Terms of Service
                          </Link>
                        </p>
                      </div>
                      <Modal size="lg" isOpen={show} toggle={hideModal}>
                        <ModalHeader toggle={hideModal}>Privacy</ModalHeader>
                        <ModalBody>
                          <div>
                            <b> About Us and This Policy</b>
                            <br />
                            <br />
                            LAST UPDATED: August 12, 2021
                            <br />
                            <br />
                            Welcome, and thank you for visiting our website or
                            using our services! When you visit our websites or
                            use our services, you provide and entrust us with
                            personal information that can be used to identify
                            you (which we refer to herein as “your
                            information”).
                            <br />
                            <br />
                            We understand that your information is important to
                            you, and we take your privacy and data protection
                            concerns seriously. As such, we have created
                            policies that govern and guide our use and
                            protection of your information. Such policies are
                            summarized in this Privacy Policy (this “Policy”).
                            <br />
                            <br />
                            This Policy describes, among other things, what
                            information we collect from you, how we use and
                            disclose your information, and your rights regarding
                            your information. This Policy is applicable to all
                            of our websites and services that link to it.
                            <br />
                            <br />
                            We update this Policy from time to time. We will
                            indicate the date the last changes were made above.
                            If we determine, in our discretion, changes are
                            significant, we will provide a more detailed notice
                            and may also notify you of such changes via email.
                            <br />
                            <br />
                            When this Policy mentions “PM,” “we,” “us,” or “our”
                            it refers to Fairship Limited, our product Property
                            Manager or Fairship limited wholly owned subsidiary
                            that is responsible for your information under this
                            Policy.
                            <br />
                            <br />
                            We hope this Policy answers all of your questions
                            about our treatment and protection of your
                            information, but to the extent you have further
                            questions regarding this Policy, we invite you to
                            email us anytime at privacy@fairshiplimited.com or
                            otherwise contact us as provided for herein.
                            <br />
                            <br />
                            <b>Information We Collect</b>
                            <br />
                            <br />
                            We create and sell industry-specific, cloud based
                            business software solutions, services and data
                            analytics. As such, we collect many different types
                            of information in connection with your use of our
                            websites and services, including the following:
                            <br />
                            <br />
                            <b>A. Information You Provide Us</b>
                            <br />
                            <br />
                            • Information for use of our services: When you
                            create an account or profile in one of our services,
                            or otherwise use certain services, you may provide
                            personal identifiers, such as your first name, last
                            name, email address, date of birth, phone number,
                            picture, login password, job title and function,
                            address or geographical location, and other similar
                            personal information.
                            <br />
                            <br />
                            • Information for identity verification In
                            connection with (a) creating and maintaining the
                            security of our services, (b) providing background
                            and screening services, (c) fulfilling “know your
                            customer” processes, required for certain payment
                            services, (d) enabling you to make and receive
                            payments, and (e) complying with other various
                            regulatory requirements, you may be required to
                            provide us with information that can be used to
                            verify your identity, such as your National Identity
                            number, tax identification number, images of your
                            driver's license, government issued ID, passport,
                            national ID card, birthdate, and other
                            authentication information.
                            <br />
                            <br />
                            • Information for purposes of payment services To
                            use certain of our payment services, or to make
                            payments to us, you may be required to provide us
                            with financial information, such as your bank
                            account number, online bank account login, and
                            credit card information. We may also capture
                            additional information when you make payments, such
                            as card type, transaction type, and payee
                            information.
                            <br />
                            <br />
                            • Information revealed in our communities When you
                            participate in our communities (help centers, blogs,
                            forums, etc.), you may choose to disclose and
                            provide many different types of personal information
                            that can be used to identify you, your location,
                            your job function, and more.
                            <br />
                            <br />
                            • Information Provided when you otherwise interact
                            with us You may provide us with personal information
                            when you fill in forms, respond to surveys,
                            participate in promotions or research opportunities,
                            communicate with our customer service teams, or use
                            other features of our services.
                            <br />
                            <br />
                            • Your business data While it may not constitute
                            personal information, if you use our services, we
                            likely host data you provide us related to your
                            business and obtain other information related to
                            your business, such as your bank account balance and
                            transaction history (“Business Data”). We understand
                            your Business Data is sensitive (and in some
                            instances confidential). As such, we do not access,
                            use or disclose your Business Data except as set
                            forth in Sections 3 and 4 of this Policy.
                            <br />
                            <br />
                            <b>
                              B. Information collected when using our websites
                              and services
                            </b>
                            <br />
                            <br />
                            • Device information When you access our websites or
                            services we collect device information that can be
                            used to identify you or your device. These
                            identifiers may include IP address, hardware and
                            software information, browser type, device event
                            information, crash data, cookie data, and the pages
                            you have viewed or engaged with before or after
                            accessing our websites or services.
                            <br />
                            <br />
                            • Activity information We may collect details about
                            how you use our website or services, such as content
                            accessed, time viewed, and links clicked.
                            <br />
                            <br />
                            • Geo-location information When you use certain of
                            our services, we may collect information about your
                            precise or approximate location as determined
                            through your IP address, GPS, or nearby devices
                            (Wi-Fi access points, cell towers, etc.).
                            <br />
                            <br />
                            • Cookies and similar technologies When you visit
                            our websites or services, we use common technology
                            tools to collect and store information, such as web
                            beacons, cookies, pixel tags, local storage (such as
                            browser web storage or application data caches,
                            databases, and server logs). Section9 of this Policy
                            provides more information on how we use cookies and
                            similar technology and certain opt-out options.
                            <br />
                            <br />
                            <b>C. Information collected from third parties</b>
                            <br />
                            <br />
                            • Background information We may receive information
                            about you, such as demographic data and criminal and
                            credit history, from our trusted background
                            screening and fraud prevention partners. We collect
                            this information only in accordance with applicable
                            law and, when required, with your consent.
                            <br />
                            <br />
                            • Public information We may collect information
                            about you from publicly accessible sources, such as
                            information posted about you on the internet, news
                            stories, and information available from governmental
                            entities.
                            <br />
                            <br />
                            • Marketing information We may collect information
                            about you from our trusted marketing partners who
                            provide us with information about potential
                            customers and partners. Information we receive from
                            third parties is often combined with information we
                            collect ourselves for the purposes set forth in
                            Section 3 of this Policy.
                            <br />
                            <br />
                            <b>D. Anonymous usage information</b>
                            We collect certain information provided by different
                            constituencies (you, your customers, your vendors)
                            that interact with our services on an anonymous and
                            aggregated basis. We use industry best practices and
                            state-of-the-art techniques to anonymize and
                            aggregate data.
                            <br />
                            <br />
                            <b>E. Information of children</b>
                            Individuals under the age of 18 are not permitted to
                            use our services and we do not intentionally collect
                            information on individuals under 18 years of age,
                            regardless of their residency. Incidental exposure
                            to this information may be possible if, for example,
                            our customers upload this information to one of our
                            services or it is inadvertently captured by our
                            marketing organization.
                            <br />
                            <br />
                            <br />
                            <b>How We Use Your Information</b>
                            <br />
                            <br />
                            We do not use or reference your information or
                            Business Data except to provide, improve, develop,
                            and market our services. Some specific examples of
                            how we use your information follow.
                            <br />
                            <br />
                            <b>A. Providing our services</b>
                            <br />
                            <br />
                            Our services perform many functions and provide our
                            customers with many tools. Use of your information
                            and Business Data is essential for these functions.
                            For example, we require the use of your information
                            to validate login credentials, process payments, and
                            conduct checks against databases. We may also use
                            your information to provide customer service. For
                            example, we may send you service or support
                            messages, updates, and account notifications or we
                            may let you know about upcoming changes or
                            improvements to our services. To protect you and
                            comply with our legal obligations, we use your
                            information to detect and prevent fraud, abuse,
                            security incidents, and other harmful activity,
                            verify bank account balances and account ownership,
                            resolve disputes, enforce our terms of service and
                            agreements with third parties, and conduct security
                            investigations and risk assessments.
                            <br />
                            <br />
                            <b>B. Improving our services</b>
                            <br />
                            <br />
                            We are constantly improving our services to better
                            serve you. Your information and Business Data is
                            used in connection with such efforts. For example,
                            we may use your information for data analytics and
                            measurement to determine how individuals interact
                            with our services and where we can provide improved
                            or better functionality. We may use your information
                            to assess the capabilities of third party partners.
                            We may also use your information to engage in
                            research either directly with you or with your
                            customers or other business partners.
                            <br />
                            <br />
                            <b>C.Developing new services</b>
                            <br />
                            <br />
                            We are always looking for new ways to serve you by
                            offering new products and services. Your information
                            and Business Data helps us identify and build these
                            products and services in various ways. For example,
                            understanding how some of our customers use Property
                            Manager (PM) in connection with managing their
                            portfolios.
                            <br />
                            <br />
                            <b>D. Marketing our services</b>
                            <br />
                            <br />
                            We may also use your information and Business Data
                            to inform you, your users and your clients of
                            available services we offer, to send you marketing,
                            advertising and other information that we think may
                            be of interest to you.
                            <br />
                            <br />
                            <b>Who We Share Your Information With</b>
                            <br />
                            <br />
                            We do not share your information or Business Data
                            with anyone except as is necessary to provide our
                            services. We do not and will not sell your
                            information or Business Data. Some examples of when
                            and why we share your information or Business Data
                            follow.
                            <br />
                            <br />
                            <br />
                            <b>A. Service providers</b>
                            <br />
                            <br />
                            We use a variety of third-party service providers to
                            help us provide our services, and these third
                            parties may require your information or Business
                            Data for such purposes. For example, service
                            providers may help us:
                            <br />
                            <br />
                            i. verify your identity or authenticate your
                            identification documents,
                            <br />
                            <br />
                            ii. check information against public databases,
                            <br />
                            <br />
                            iii. conduct background checks, fraud prevention,
                            and risk assessment,
                            <br />
                            <br />
                            iv. perform product development, maintenance and
                            debugging, or
                            <br />
                            <br />
                            v. provide customer service, payments, or insurance
                            services.
                            <br />
                            <br />
                            We have written agreements with all such third
                            parties and they are not permitted to use your
                            information or Business Data for any purpose other
                            than to deliver the relevant services in a
                            professional manner, and consistent with their
                            legal, regulatory and other obligations. For
                            clarity, we do not and will not share any personally
                            identifiable or sensitive business information with
                            third parties for unknown reasons.
                            <br />
                            <br />
                            <br />
                            <b>B. Legal and regulatory disclosures</b>
                            <br />
                            <br />
                            We may disclose your information or Business Data to
                            courts, law enforcement, governmental authorities,
                            tax authorities, or third parties, if and to the
                            extent we are required or permitted to do so by law
                            or if such disclosure is reasonably necessary:
                            <br />
                            <br />
                            i. to comply with our legal obligations,
                            <br />
                            <br />
                            ii.to comply with a valid legal request or to
                            respond to claims asserted against us,
                            <br />
                            <br />
                            iii. to respond to a valid legal request relating to
                            a criminal investigation or alleged or suspected
                            illegal activity or any other activity that may
                            expose us, you, or any other of our users to legal
                            liability, or
                            <br />
                            <br />
                            iv. to enforce and administer our Terms of Service
                            or other agreements with users. Such disclosures may
                            be necessary to comply with our legal obligations,
                            for the protection of your or another person's
                            interests or for the purposes of keeping our
                            services secure, preventing harm or crime, enforcing
                            or defending legal rights, or facilitating the
                            collection of taxes.
                            <br />
                            <br />
                            <br />
                            <b>C. Sharing with your consent</b>
                            <br />
                            <br />
                            Where you expressly consent or request, we share
                            your information and Business Data when you
                            authorize a third party service or website to access
                            your account with us.
                            <br />
                            <br />
                            <br />
                            <b>D. Sharing between users</b>
                            <br />
                            <br />
                            To help facilitate the use of our services among
                            your users, we may need to share certain information
                            with other users that you authorize to access and
                            use your account. For example, Tenant personal
                            information such as name, and phone number and other
                            personal information may be visible by vendor’s for
                            purposes of confirming account permissions and
                            carrying out their services.
                            <br />
                            <br />
                            <b>E. Public information</b>
                            <br />
                            <br />
                            Some of our services let you publish information
                            that is visible or available to the public. For
                            example, if you use our website services, you may
                            elect to include certain of your information or
                            Business Data on websites available to the public at
                            large. Similarly, if you use our premium leads
                            product you post your listings, which include your
                            information, to numerous free and paid listings
                            sites.
                            <br />
                            <br />
                            <br />
                            <b>F. Corporate affiliates</b>
                            <br />
                            <br />
                            To enable or support us in providing you services,
                            we may share your information and Business Data
                            within our corporate family of companies, which
                            includes Property Manager and its wholly owned
                            subsidiaries.
                            <br />
                            <br />
                            <br />
                            <b>G. Business transfers</b>
                            <br />
                            <br />
                            If we are involved in any merger, acquisition,
                            reorganization, sale of assets, bankruptcy, or
                            insolvency event, then we may sell, transfer or
                            share some or all of our assets, including your
                            information and Business Data in connection with
                            such transaction or in contemplation of such
                            transaction.
                            <br />
                            <br />
                            <br />
                            <b>H. Anonymized data</b>
                            <br />
                            <br />
                            We aggregate and anonymize certain of your
                            information and Business Data to create industry and
                            scholarly reports, trends, and studies (once again,
                            we use industry best practices and state-of-the-art
                            techniques to anonymize and aggregate data). These
                            reports, trends, and studies may be made available
                            or provided to the public.
                            <br />
                            <br />
                            <br />
                            <b>Security</b>
                            <br />
                            <br />
                            We are continuously implementing and updating
                            administrative, technical, and physical security
                            measures to help protect your information against
                            unauthorized access, loss, destruction, or
                            alteration. Sensitive data is encrypted and website
                            connections are protected using strong transport
                            layer security. Our websites are hosted in a secure
                            server environment that uses multi-layer perimeter
                            security, including firewalls and other advanced
                            technology to prevent interference or access from
                            outside intruders.
                            <br />
                            <br />
                            <br />
                            <b>Communication Matters</b>
                            <br />
                            <br />
                            <b>A.Special offers, Updates and Research</b>
                            <br />
                            <br />
                            We may occasionally send you information regarding
                            our services and our newsletter. We also may
                            occasionally contact you, your customers or other
                            third parties related to you to inquire how you or
                            such individuals use our services and how we might
                            improve our services. We typically use names, email
                            addresses and telephone numbers to send these
                            communications and make these contacts.
                            <br />
                            <br />
                            Out of respect for your privacy, if you no longer
                            wish to receive our newsletter and promotional
                            communications, or if you do not wish for us to
                            contact you, your customers or related third parties
                            for our own internal research purposes, you may
                            opt-out of receiving such communications by
                            following the instructions included in each
                            newsletter or communication, or by emailing us at
                            privacy@fairshiplimited.com. You may also contact us
                            by postal mail at: Fairship Mansion, Block x, 12th
                            street, Osborne Foreshore Estate, Ikoyi-Lagos. Note
                            that there are certain email communications that you
                            cannot opt-out of as a user of our services, as
                            these notices are required for the continued optimal
                            functionality of our services.
                            <br />
                            <br />
                            <br />
                            <b>B. Public Forums</b>
                            <br />
                            <br />
                            We may provide public forums such as bulletin
                            boards, blogs, or chat rooms on our websites or
                            within our services subject to certain terms of use.
                            These forums are provided as a service to you and
                            other users to help exchange ideas, tips,
                            information and techniques related to our services.
                            As discussed above, we may collect your information
                            revealed in these forums; however, any information
                            you choose to submit may also be read, collected, or
                            used by others and may be used to send you
                            unsolicited messages. We are not responsible for the
                            personal information you choose to submit in these
                            forums.
                            <br />
                            <br />
                            <br />
                            <b>External Links</b>
                            <br />
                            <br />
                            Our websites and services may contain links to third
                            party websites. These third party websites maintain
                            their own policies regarding the collection and use
                            of your information. We assume no responsibility or
                            liability for the actions of such third parties with
                            respect to their collection or use of your
                            information. We encourage you to read the privacy
                            policies of every website that you visit, including
                            those you may reach through a link on our websites
                            or in our services. We encourage you to be aware
                            when you leave our websites or services and to read
                            the privacy statements of each and every website you
                            visit that collects your information.
                            <br />
                            <br />
                            <br />
                            <b>Jurisdictional Specific Privacy Regulations</b>
                            <br />
                            <br />
                            If user’s in Nigeria would like to know more or
                            submit a request, please email us at
                            privacy@fairshiplimited.com. Be aware that we must
                            verify your identity before responding to certain of
                            your requests. In connection with such verification
                            efforts, you may be required to provide us with
                            certain pieces of your information (which we will
                            match against what we have in our records) and/or
                            provide us a form of government issued
                            identification.
                            <br />
                            <br />
                            Nigerianusers will not be charged or otherwise
                            discriminated against for exercising their rights
                            under this Section. As discussed above, we do not
                            and will not sell your information. As such, we do
                            not provide a process to opt-out of the sale of your
                            information.
                            <br />
                            <br />
                            <br />
                            <b>Cookie Policy</b>
                            <br />
                            <br />
                            <br />
                            <b>A.What Are Cookies?</b>
                            <br />
                            <br />
                            Cookies are text files that are downloaded to your
                            device when you visit a website. Cookies perform
                            many different functions. We may use them for the
                            following reasons: efficient webpage navigation,
                            storing user preferences, collection of information
                            related to how you may interact with a website,
                            collection of browsing history to help us and our
                            third party partners provide more relevant and
                            targeted advertisements.
                            <br />
                            <br />
                            <b>B. Cookie syncing</b>
                            <br />
                            <br />
                            We may send and receive cookies, or online
                            identifiers, on our websites to associate cookies
                            with certain third party partners. This practice
                            involves allowing our third party partners to use
                            cookies and assign online identifiers to increase
                            performance of ad campaigns.
                            <br />
                            <br />
                            <b>C. Opt out</b>
                            <br />
                            <br />
                            You may opt out of certain cookies, including
                            interest based ads and ad personalization. Please
                            note that this opt out does not apply to account
                            based personalization.
                            <br />
                            <br />
                            <b>D. Managing cookie preferences</b>
                            <br />
                            <br />
                            You can manage your cookie preferences through your
                            web browser settings. Certain browsers allow you to
                            whitelist sites from which you accept cookies.
                            Please see documentation related to your particular
                            browser for more information.
                            <br />
                            <br />
                            <b>E. “Do Not Track” signals</b>
                            <br />
                            <br />
                            We are occasionally asked whether we respect “do not
                            track” signals. We do not respond to such signals,
                            as there is no comprehensive “do not track” standard
                            for companies like us to adhere to.
                            <br />
                            <br />
                            <br />
                            <b>Miscellaneous Items</b>
                            <br />
                            <br />
                            <b>A. Information we host on behalf of our users</b>
                            <br />
                            <br />
                            We host on behalf of our customers and enable our
                            customers to store various types of data. Such data
                            may include personal information that is collected
                            by our customers. We generally do not control or
                            actively monitor how our customers store or use the
                            data they upload to our services. Any requests or
                            questions related to data collected by our customers
                            should be directed to the applicable party.
                            <br />
                            <br />
                            <b>
                              Contact the Property Manager data privacy team
                            </b>
                            <br />
                            If you have any questions or suggestions regarding
                            this Policy or your personal information, or you
                            would like to correct and/or update any such
                            personal information, please contact the AppFolio
                            Data Privacy Team at privacy@fairshiplimited.com, or
                            send a letter to:
                            <br />
                            <br />
                            Fairship Limited,
                            <br />
                            Fairship Tower,
                            <br />
                            Block X, 12th Street,
                            <br />
                            Osborne Foreshore Estate,
                            <br />
                            Ikoyi – Lagos.
                            <br />
                            Attn: Data Privacy.
                          </div>
                        </ModalBody>
                      </Modal>
                      <Modal size="lg" isOpen={showTOS} toggle={hideTOSModal}>
                        <ModalHeader toggle={hideTOSModal}>
                          Terms of Service
                        </ModalHeader>
                        <ModalBody>
                          <div>
                            <b>Welcome to Property Manager.</b>
                            <br />
                            <br />
                            Thanks for using our Services.
                            <br />
                            <br />
                            Property Manager provides a cloud-based property
                            management software solution to Businesses and is
                            accessible via any internet connected device. We
                            also provide an Android and iOS application.
                            <br />
                            <br />
                            If You browse any of our Websites or use any of our
                            Services You agree to comply with and be bound by
                            these Terms. These Terms are binding on any use of
                            the Service and apply to You from the time that
                            Property Manager provides You with access to the
                            Service.
                            <br />
                            <br />
                            These Terms are not intended to answer every
                            question or address every issue raised by the use of
                            the Service. It is Your obligation to ensure that
                            You have read, understood and agree to the most
                            recent Terms.
                            <br />
                            <br />
                            By registering to use the Service you acknowledge
                            that You have read and understood these Terms and
                            have the authority to act on behalf of any person
                            for whom You are using the Service. You are deemed
                            to have agreed to these Terms on behalf of any
                            entity for whom you use the Service.
                            <br />
                            <br />
                            Property Manager reserves the right to change these
                            Terms at any time and you are bound by such changes.
                            <br />
                            <br />
                            Definitions
                            <br />
                            <br />
                            <strong>“Business”</strong>
                            <br />
                            <br />
                            means a business defined as an organization or
                            enterprising entity engaged in commercial,
                            industrial, or professional activities.
                            <br />
                            <br />
                            <b>“Data”</b>
                            <br />
                            <br />
                            means any data input or imported by You or with Your
                            authority into the Website.
                            <br />
                            <br />
                            <b>“Intellectual Property Rights”</b>
                            <br />
                            <br />
                            means any registered or unregistered design rights,
                            patents, copyright, database rights, data protection
                            rights, trademarks, service marks, moral rights,
                            know-how and any other intellectual or industrial
                            property rights, anywhere in the world.
                            <br />
                            <br />
                            <b>“Invited User”</b>
                            <br />
                            <br />
                            means any person or entity, other than the
                            Subscriber, that uses the Service with the
                            authorisation of the Subscriber from time to time.
                            <br />
                            <br />
                            <b>“Service”</b>
                            <br />
                            <br />
                            means the online business software services made
                            available (as may be changed or updated from time to
                            time by Property Manager) via the Website or the
                            apps.
                            <br />
                            <br />
                            <b>“Subscriber”</b>
                            means the person who registers to use the Service,
                            and, where the context permits, includes any entity
                            on whose behalf that person registers to use the
                            Service.
                            <br />
                            <br />
                            <b>“Subscription Fee”</b>
                            <br />
                            <br />
                            means the monthly or annual subscription fee
                            (excluding any taxes and duties) payable by You in
                            accordance with the pricing set out on the Website
                            (which Property Manager may change from time to
                            time).
                            <br />
                            <br />
                            <b>“Terms”</b>
                            <br />
                            <br />
                            means the Terms and Conditions of Use herein.
                            <br />
                            <br />
                            <b>“Website”</b>
                            <br />
                            <br />
                            means any of the images, written material,
                            databases, software or other material available at
                            any website owned or operated by Property Manager.
                            This includes any apps available on the Apple App
                            Store, Google Play Store or Windows Phone
                            Marketplace which is owned or operated by Property
                            Manager.
                            <br />
                            <br />
                            <b>“You”</b>
                            <br />
                            <br />
                            means the Subscriber, and where the context permits,
                            an Invited User. “Your” has a corresponding meaning.
                            <br />
                            <br />
                            <b>1. Privacy Policy and Data Security</b>
                            <br />
                            <br />
                            1.1 Your privacy is important to us. Our Privacy
                            Policy forms part of these Terms.
                            <br />
                            <br />
                            1.2 If You provide Property Manager with personal
                            information about someone else, you must ensure that
                            you are authorised to disclose that personal
                            information to Property Manager in accordance with
                            applicable data protection or privacy laws. You will
                            provide all required disclosures to and will obtain
                            and maintain all required consents to allow the
                            other person’s personal information to be processed
                            by Property Manager in accordance with our Privacy
                            Policy.
                            <br />
                            <br />
                            <b>2. Access Conditions</b>
                            <br />
                            <br />
                            2.1 Landlord Studio grants You the right to access
                            and use the Website and Services with the user roles
                            according to your Subscription. This right is
                            non-exclusive and non-transferable and is limited by
                            and subject to this agreement. You must only use the
                            Website and Services for your own lawful internal
                            business purposes.
                            <br />
                            <br />
                            2.2 You will ensure that all usernames and passwords
                            required to access the Website are kept secure and
                            confidential. You will immediately notify Property
                            Manager of any unauthorised use of your passwords or
                            any other breach of security and Property Manager
                            will reset your password.
                            <br />
                            <br />
                            2.3 When accessing and using the Website You must:
                            <br />
                            <br />
                            a) not attempt to undermine the security or
                            integrity of Property Manager computing systems or
                            networks or the Website;
                            <br />
                            <br />
                            b) not use, or misuse, the Website in any way which
                            may impair the functionality of the Website or
                            Services, or impair the ability of any other user to
                            use the Website or Services;
                            <br />
                            <br />
                            c) not attempt to gain unauthorized access to the
                            computer system on which the Website is hosted or to
                            any materials other than those to which you have
                            been given express permission to access;
                            <br />
                            <br />
                            d) not transmit or input into the Website any files
                            that may damage any other person’s computing devices
                            or software; content that may be offensive; or
                            material or Data in violation of any law (including
                            Data or other material protected by copyright or
                            trade secrets which you do not have the right to
                            use);
                            <br />
                            <br />
                            e) not modify, copy, adapt, reproduce, disassemble,
                            decompile or reverse engineer the Services, Website
                            or any software applications included in the
                            Website, as part of the Website, and for the
                            purposes made available on the Website only;
                            <br />
                            <br />
                            f) only access the Website manually. The use of
                            automated agents, robots, or automated software,
                            other than search engine spiders, to view the site
                            is forbidden;
                            <br />
                            <br />
                            g) not attempt to build a copy of our data.
                            <br />
                            <br />
                            2.4 You must be over the age of 18 years old when
                            signing up to our services
                            <br />
                            <br />
                            <b>3. Intellectual Property Rights</b>
                            <br />
                            <br />
                            3.1 All Intellectual Property Rights in all the
                            material which comprises the Website including, but
                            not limited to, design, structure, layouts,
                            graphical images and underlying source code belongs
                            to Property Manager. All rights are reserved.
                            <br />
                            <br />
                            3.2 You acknowledge that, except as otherwise agreed
                            between the parties in writing, all Intellectual
                            Property Rights of Property Manager and the Website
                            shall remain with Property Manager.
                            <br />
                            <br />
                            3.3 If you submit any content to any public area of
                            Property Manager, including blogs, message boards,
                            and forums, you must ensure that such material is
                            not defamatory or offensive, untrue, racially
                            offensive or an incitement to racial hatred or
                            otherwise in breach of an individual’s right to
                            privacy or human rights or actionable in law in any
                            jurisdiction. In the event that you do submit such
                            material to the Website, Property Manager reserves
                            the right to remove it without reference to you and
                            co-operate with any investigation by the authorities
                            or court order relating to it, any and all
                            consequences that may directly or indirectly follow
                            will be entirely your responsibility not the
                            responsibility of Property Manager. You agree to
                            indemnify and hold Property Manager harmless from
                            any action or consequences that may arise in such
                            circumstances, including any claims by third
                            parties.
                            <br />
                            <br />
                            3.4 By submitting content to any public area of
                            Property Manager, including blogs, message boards,
                            and forums, You grant Property Manager a
                            royalty-free, perpetual, irrevocable, non-exclusive
                            right and license to use, reproduce, modify, adapt,
                            publish, translate, create derivative works from,
                            distribute, communicate to the public, perform and
                            display the content (in whole or in part) worldwide
                            and to incorporate it in other works in any form,
                            media, or technology now known or later developed,
                            for the full term of any rights that may exist in
                            such content. You also permit any subscriber to
                            access, display, view, store and reproduce such
                            content for personal use.
                            <br />
                            <br />
                            3.5 By submitting content You warrant that You are
                            entitled to and have all necessary Intellectual
                            Property Rights over that content.
                            <br />
                            <br />
                            <br />
                            <br />
                            <b>4. Trademark Notice</b>
                            <br />
                            <br />
                            4.1 The Property manager portal, PM and the Property
                            Manager logo are trademarks of Fairship Limited.
                            <br />
                            <br />
                            <b>5. Third Party Websites, Goods and Services</b>
                            <br />
                            <br />
                            5.1 Property Manager provides content from and links
                            to third party websites that are not affiliated with
                            or endorsed by Property Manager (although Property
                            Manager branding, advertisements or links may appear
                            on these websites) and Property Manager may send
                            e-mail messages to You containing advertisements or
                            promotions including links to third parties.
                            Property Manager has no responsibility for the
                            content of a linked website and makes no
                            representation as to the quality, suitability,
                            functionality or legality of any third-party
                            websites which we link to, or to any goods and
                            services available from such websites.
                            <br />
                            <br />
                            5.2 All matters concerning goods and services that
                            you purchase from a third-party website including
                            all contract terms are solely between You and the
                            owner of that website. Property Manager will not be
                            liable for any costs or damages to You or any third
                            party arising directly or indirectly out of any
                            third-party website. You hereby waive any claim You
                            might have against Property Manager with respect to
                            any such websites.
                            <br />
                            <br />
                            <b>6. Disclaimer of Warranties</b>
                            <br />
                            <br />
                            6.1 You acknowledge that:
                            <br />
                            <br />
                            a) You are authorised to access and use the Website;
                            <br />
                            <br />
                            b) If You are using the Website on behalf of or for
                            the benefit of any organisation then Property
                            Manager will assume that You have the right to do
                            so. The organisation will be liable for your actions
                            including any breach of these Terms;
                            <br />
                            <br />
                            c) You warrant that where You have registered to use
                            the Website on behalf of another person You have the
                            authority to agree to these terms on behalf of that
                            person and agree that by registering to use the
                            Website You bind the person on whose behalf you act
                            to the performance of any and all obligations that
                            You become subject to by virtue of these terms
                            without limiting your own personal obligations under
                            these terms.
                            <br />
                            <br />
                            d) The provision of, access to, and use of, the
                            Website is on an “as is, where is” basis and at your
                            own risk;
                            <br />
                            <br />
                            e) Landlord Studio does not guarantee the
                            availability of the Website or services offered on
                            the Website and does not warrant that the use of the
                            Website will be uninterrupted or error free. Among
                            other things, the operation and availability of the
                            systems used for accessing the Website, including
                            public telephone services, computer networks and the
                            Internet, can be unpredictable and may from time to
                            time interfere with or prevent access to the
                            Website. Property Manager is not in any way
                            responsible for any such interference that prevents
                            your access or use of the Website.
                            <br />
                            <br />
                            f) Property Manager is not your accountant or legal
                            adviser and use of the Website should not substitute
                            professional accounting or legal advice. If you have
                            any accounting or legal questions, contact an
                            accountant or a lawyer.
                            <br />
                            <br />
                            g) It is your sole responsibility to determine that
                            the Website meets the needs of your business.
                            <br />
                            <br />
                            h) You remain solely responsible for complying with
                            all applicable accounting, tax and other laws. It is
                            your responsibility to check that storage of and
                            access to your Data via the Software and the Website
                            will comply with laws applicable to you (including
                            any laws requiring you to retain records).
                            <br />
                            <br />
                            i) Property Manager reserves the right to revise,
                            change, modify, delete or suspend the content of any
                            part of the Website and/or any of the services it
                            provides on the Website without notice at any time
                            in its sole discretion.
                            <br />
                            <br />
                            6.2 Property Manager gives no warranty about the
                            Website or applications (Android and iOS) including
                            as to its accuracy, adequacy or completeness.
                            Without limiting the foregoing, Property Manager
                            does not warrant that the Website or applications
                            will meet your requirements or that it will be
                            suitable for your purposes. To avoid doubt, all
                            implied conditions or warranties are excluded in so
                            far as is permitted by law including, without
                            limitation, warranties of merchantability, fitness
                            for purpose, title and non-infringement.
                            <br />
                            <br />
                            6.3 You warrant and represent that You are acquiring
                            the right to access and use the Website and
                            applications and agreeing to these Terms for the
                            purposes of a business and that, to the maximum
                            extent permitted by law, any statutory consumer
                            guarantees or legislation intended to protect
                            non-business consumers in any jurisdiction does not
                            apply to the supply of the Website or these Terms.
                            <br />
                            <br />
                            <b>7. Application Performance</b>
                            <br />
                            <br />
                            7.1 Property Manager denies all liability for the
                            timely operation of the Website when used within an
                            Internet environment, where You or a third party is
                            providing the computer equipment upon which the
                            product is to reside or depend upon for any part of
                            its functionality.
                            <br />
                            <br />
                            7.2 By accepting these Terms You confirm your
                            understanding that the timely operation of the
                            Internet and the World Wide Web is governed by
                            constraints beyond the control of Property Manager.
                            You accept that Property Manager is not liable for
                            the perceived slow operation of the Website.
                            <br />
                            <br />
                            <b>8. Subscriptions</b>
                            <br />
                            <br />
                            8.1 Property Manager may offer a free trial which
                            will allow You to assess if the Website is
                            satisfactory for your purpose.
                            <br />
                            <br />
                            8.2 Subscription Fees may automatically recur either
                            monthly or annually depending on your subscription
                            package. Subscription Fees begin on your first
                            payment date and are payable in advance of each
                            subscription period. Different Subscription Fees may
                            include access to different Services.
                            <br />
                            <br />
                            8.3 Your subscription is activated by providing the
                            information required on the subscription page. You
                            will pay Property Manager or Property Manager’s
                            distributor (as directed by Property Manager) the
                            charge for the Subscription Fees at the time of
                            order.
                            <br />
                            <br />
                            8.4 No refund will be given for the cancellation or
                            termination of a subscription.
                            <br />
                            <br />
                            8.5 A subscription can be cancelled at any time by
                            terminating your Service. When a subscription is
                            cancelled no further payment will be taken by
                            Property Manager.
                            <br />
                            <br />
                            8.6 If a subscription is cancelled for any reason
                            and Subscription Fees prior to the cancellations
                            date remain unpaid, you will be liable to pay all
                            outstanding Subscription Fees to Property Manager.
                            <br />
                            <br />
                            8.7 You must cancel Your Service. This is to ensure
                            against fraudulent requests to terminate Services.
                            <br />
                            <br />
                            8.8. Pricing of Services is advertised on the
                            pricing and subscription pages of each Service
                            Website.
                            <br />
                            <br />
                            <b>9. Termination & Remedies</b>
                            <br />
                            <br />
                            9.1 Property Manager is entitled to restrict,
                            suspend or terminate your subscription or deny You
                            access to the Website without notice in its sole
                            discretion.
                            <br />
                            <br />
                            9.2 Property Manager shall be entitled to disclose
                            your user identity and details if required or
                            requested by the courts or other law enforcement
                            authorities and/or agencies or in such other
                            circumstances as Property Manager in its sole
                            discretion considers reasonably necessary or
                            appropriate.
                            <br />
                            <br />
                            <b>10. Indemnity</b>
                            <br />
                            <br />
                            10.1 You indemnify Landlord Studio against all
                            claims, costs, damage and loss arising from your
                            breach of any of these Terms or any obligation You
                            may have to Property Manager, including but not
                            limited to any costs relating to the recovery of any
                            Subscription Fee that have not been paid by You.
                            <br />
                            <br />
                            10.2 Your use of any information or materials on
                            this Website is entirely at your own risk, for which
                            Property Manager shall not be liable. It shall be
                            your responsibility to ensure that the Website, its
                            products, services and information, meet your
                            specific requirements.
                            <br />
                            <br />
                            <b>11. Partners</b>
                            <br />
                            <br />
                            11.1 Property Manager regularly partners with
                            accountants, bookkeepers, brokers, financial
                            institutions, insurance companies and resellers
                            among other professional service providers. Partners
                            may offer their services to you through the Service,
                            however any such services are not endorsed or
                            approved by Property Manager. Property Manager is
                            not responsible for the quality of their service. It
                            is Your responsibility to vet Partners for the
                            service you require from them.
                            <br />
                            <br />
                            11.2 You agree that Landlord Studio may share your
                            Data with Partners for the purposes of enabling our
                            Partners to analyse whether You may be interested in
                            a product or service that they offer.
                            <br />
                            <br />
                            <b>12. Online Rent Collection</b>
                            <br />
                            <br />
                            12.1 Our payment functionality makes use of the
                            “paystack platform” which is governed by its Terms
                            of Service and Privacy Policy. You authorize us to
                            collect and share with Paystack your personal
                            information including full name, date of birth, Bank
                            Verification number, physical address, email address
                            and financial information, and you are responsible
                            for the accuracy and completeness of that data. We
                            will provide customer support for your paystack
                            enquiries and can be reached at
                            support@fairshiplimited.com
                            <br />
                            <br />
                            12.2 Any payment that you receive may be reversed
                            if: (a) the tenant requests a reversal of the
                            payment, (b) the tenant’s bank or credit union
                            requests a reversal of the payment, or (c) Property
                            Manager decides a Dispute against you (each a
                            “Reversal”). You are liable to our Financial
                            Institution Partner for the full amount of any
                            payment that you receive that is subject to a
                            Reversal and the Reversal Fee, if applied.
                            <br />
                            <br />
                            12.3 You authorize Property Manager to recover any
                            Reversal amounts due to our Financial Institution
                            Partner by debiting your bank or credit union
                            account(s) linked to your Account and/or the credit
                            card we hold on file for you. We reserve the right
                            to suspend your account until the full amount has
                            been recovered.
                            <br />
                            <br />
                            PROPERTY MANAGER IS NOT A COLLECTION COMPANY AND IN
                            NO WAY GUARANTEES PAYMENTS BY TENANT NOR DOES IT
                            INHERIT THE RISK ASSUMED BY ANY PARTY IN RELATION TO
                            ANY TRANSACTION PERFORMED THROUGH THE SERVICE.
                            <br />
                            <br />
                            <b>13. Data Ownership</b>
                            <br />
                            <br />
                            13.1 Ownership of the Data belongs to the
                            Subscriber.
                            <br />
                            <br />
                            13.2. You will indemnify Property Manager against
                            any claims or loss relating to:
                            <br />
                            <br />
                            i. Property Manager’s refusal to provide any person
                            access to Your information or Data in accordance to
                            these Terms,
                            <br />
                            <br />
                            ii. Property Manager making available information or
                            Data to any person with your authorisation
                            <br />
                            <br />
                            13.3 Access to the Data is contingent on full
                            payment of the Subscription Fee when due. You grant
                            Property Manager a license to use, copy, transmit,
                            store and back up Data for the purposes of enabling
                            You to access and use the Website and for any other
                            purpose related to the provision of any services to
                            You.
                            <br />
                            <br />
                            13.4 You must maintain copies of all Data inputted
                            into the Website. Property Manager adheres to its
                            best practice, policies and procedures to prevent
                            data loss, including a daily system data back-up
                            regime but does not make any guarantees that there
                            will be no loss of Data. Property Manager expressly
                            excludes liability for any loss of Data no matter
                            how caused.
                            <br />
                            <br />
                            13.5 If You enable third-party applications for use
                            in conjunction with the Website, You acknowledge
                            that Property Manager may allow the providers of
                            those third-party applications to access Your Data
                            as required for the interoperation of such
                            third-party applications with the Website. Property
                            Manager shall not be responsible for any disclosure,
                            modification or deletion of Your Data resulting from
                            any such access by third-party application
                            providers.
                            <br />
                            <br />
                            <b>14. Limitation of Liability</b>
                            <br />
                            <br />
                            14.1. To the maximum extent permitted by law,
                            Property Manager excludes all liability and
                            responsibility to You (or any other person) in
                            contract, tort (including negligence), or otherwise,
                            for any loss (including loss, but not limited to, of
                            information, Data, profits, savings, business or
                            business opportunities, or goodwill) or damage
                            resulting, directly or indirectly, from any use of,
                            or reliance on, the Service or Website even if
                            Property Manager is advised of the possibility of
                            such loss or damage.
                            <br />
                            <br />
                            14.2. If You suffer loss or damage as a result of
                            Property Manager’ negligence or failure to comply
                            with these Terms that is not excluded by clause
                            14.1, any claim by You will be limited in respect of
                            any one incident, or series of connected incidents,
                            to the Subscription Fee paid by You in the previous
                            12 months.
                            <br />
                            <br />
                            14.3. If any loss is caused by You or by a third
                            party given a right of access to the Website by You,
                            Property Manager shall have no liability for that
                            loss.
                            <br />
                            <br />
                            14.4. If You are not satisfied with the Service,
                            your sole and exclusive remedy is to terminate these
                            Terms.
                            <br />
                            <br />
                            <b>15. Support</b>
                            <br />
                            <br />
                            15.1 Property Manager aims to respond to all
                            software support queries within 48 hours of them
                            being raised but does not warrant that this will be
                            the case.
                            <br />
                            <br />
                            15.2 Support is not intended to deal with any
                            questions relating to accountancy, taxation or
                            company law. Our support agents will only help You
                            learn how to use our Services.
                            <br />
                            <br />
                            15.3 The support service is intended to provide
                            timely, informal help and as such any reliance
                            placed upon it is at Your risk. Any opinions or
                            statements made by a support agent should be checked
                            with a relevant professional. To the fullest extent
                            permissible by law Property Manager does not accept
                            any responsibility for the opinions or statements
                            expressed by its support agents. Without this
                            limitation of liability we would not be able to
                            provide this service.
                            <br />
                            <br />
                            15.4 You agree that Property Manager employees will
                            from time to time be required to access Your Data
                            for legitimate business purposes, such as to assist
                            You with a support query or to investigate or
                            resolve an issue raised by You.
                            <br />
                            <br />
                            15.5 Property Manager reserves the right to withdraw
                            support from You if You send malicious, offensive or
                            illegal support requests, or Your usage of the
                            support service is excessive. The meaning of the
                            terms “malicious”, “offensive” and “excessive” is to
                            be determined at Property Manager’ sole discretion.
                            <br />
                            <br />
                            <b>16. Force Majeure</b>
                            <br />
                            <br />
                            16.1 Neither party is liable for delay in meeting
                            its obligations due to any cause outside its
                            reasonable control including acts of god, riot, war,
                            malicious acts of damage, fires, electricity supply
                            failure, Government authority.
                            <br />
                            <br />
                            <b>17. Survival</b>
                            <br />
                            <br />
                            17.1 Should any provision of these Terms be held to
                            be void, invalid, unenforceable or illegal by a
                            court, the validity and enforceability of the other
                            provisions shall not be affected thereby. If any
                            provision is determined to be unenforceable, You
                            agree to a modification of such provision to provide
                            for enforcement of the provision’s intent, to the
                            extent permitted by applicable law.
                            <br />
                            <br />
                            <b>18. Absence of Waiver</b>
                            <br />
                            <br />
                            18.1 Any failure or delay by Property Manager to
                            enforce any of the Terms or to exercise any right
                            under the Terms will not be construed as a waiver to
                            any extent of its rights.
                            <br />
                            <br />
                            <b>19. Right to Assign</b>
                            <br />
                            <br />
                            19.1 Property Manager may assign its rights and
                            obligations under these Terms and upon such
                            assignment Property Manager shall be relieved of any
                            further obligation under these Terms. You may not
                            assign or transfer any rights or obligations to any
                            other person without Property Manager’ prior written
                            consent.
                            <br />
                            <br />
                            <b>20. Entire Agreement</b>
                            <br />
                            <br />
                            20.1 These Terms and the Privacy Policy supersede
                            and extinguish all prior agreements, representations
                            (whether oral or written), and understandings and
                            constitute the entire agreement between You and
                            Property Manager.
                            <br />
                            <br />
                            <b>21. Confidentiality</b>
                            <br />
                            <br />
                            21.1 Unless the relevant party has the prior written
                            consent of the other or unless required to do so by
                            law each party will preserve the confidentiality of
                            all confidential information of the other obtained
                            in connection with these Terms. Neither party will,
                            without prior consent of the other, disclose or make
                            any confidential information available to any
                            person, or use the same for its own benefit, other
                            than as contemplated by these Terms.
                            <br />
                            <br />
                            <b>22. Rights of Third Parties</b>
                            <br />
                            <br />
                            22.1 A person who is not a party to these Terms has
                            no right to benefit under or to enforce any term of
                            these Terms.
                            <br />
                            <br />
                            <b>23. Notices</b>
                            <br />
                            <br />
                            23.1 Any notice given under these Terms by either
                            party to the other must be by email and will be
                            deemed to have been given on transmission. Notices
                            to Property Manager must be sent to
                            support@fairshiplimited.com or to any other email
                            address notified by email to You by Property
                            Manager. Notices to You will be sent to the email
                            address which You provided when setting up Your
                            access to the Service.
                            <br />
                            <br />
                            <b>24. Governing Law and Jurisdiction</b>
                            <br />
                            <br />
                            24.1 The laws of Nigeria govern these Terms. By
                            accessing the Website or mobile apps you consent to
                            these Terms and to the exclusive jurisdiction of the
                            Nigerian courts in all disputes arising out of such
                            access.
                            <br />
                            <br />
                            <b>25. Contact Us</b>
                            <br />
                            <br />
                            You can contact us via our support email at
                            support@fairshiplimited.com or via our apps after
                            logging in by going to More - Contact Us.
                            <br />
                            <br />
                          </div>
                        </ModalBody>
                      </Modal>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

const mapStatetoProps = (state) => {
  const { registrationError, message, loading } = state.Account;
  const { countries, states } = state.Location;
  return { registrationError, message, loading, countries, states };
};

export default withRouter(
  connect(mapStatetoProps, {
    registerUser,
    apiError,
    registerUserFailed,
    fetchCountry,
    fetchState,
  })(Register)
);
