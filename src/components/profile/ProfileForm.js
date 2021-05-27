import styles from "../../css/ProfileForm.module.css";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";

const ProfileForm = () => {
  // Import variable from UserContext here ...
  const user = {
    firstName: "Lorem",
    lastName: "Ipsum",
    phoneNumber: "0700000000",
    email: "admin@mail.com",
    password: "123456789",
  }; // Dummy data

  const [firstName, setFirstName] = useState(user.firstName); // Placeholder data
  const [lastName, setLastName] = useState(user.lastName); // Placeholder data
  const [phone, setPhone] = useState(user.phoneNumber); // Placeholder data
  const [email, setEmail] = useState(user.email); // Placeholder data
  const [password, setPassword] = useState(user.password); // Placeholder data

  const [firstNameDisabled, setFirstNameDisabled] = useState(true);
  const [lastNameDisabled, setLastNameDisabled] = useState(true);
  const [phoneDisabled, setPhoneDisabled] = useState(true);
  const [emailDisabled, setEmailDisabled] = useState(true);
  const [passwordDisabled, setPasswordDisabled] = useState(true);

  const handlePhone = (e) => {
    // Only allows numbers - input
    const checkNumber = /^[0-9]*$/g;

    if (checkNumber.test(e.target.value)) {
      setPhone(e.target.value);
    }
  };

  // Handlers - edit
  const handleFirstNameEdit = () => {
    setFirstNameDisabled(true);
  };

  const handleLastNameEdit = () => {
    setLastNameDisabled(true);
  };

  const handlePhoneEdit = () => {
    setPhoneDisabled(true);
  };

  const handlePasswordEdit = () => {
    setPasswordDisabled(true);
  };

  const handleEmailEdit = () => {
    setEmailDisabled(true);
  };

  return (
    <form className={styles.form}>
      <Row noGutters>
        <Col xs={11} sm={11} md={10} lg={11}>
          <div className="form-group">
            <label className="pl-2" htmlFor="firstname">
              Förnamn:
            </label>

            <input
              style={{ opacity: firstNameDisabled && "0.45" }}
              disabled={firstNameDisabled}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              autoComplete="off"
              required
              className={`${styles.input} form-control`}
              type="text"
              id="firstname"
            />
          </div>
        </Col>
        <Col
          className="d-flex align-items-center justify-content-center"
          xs={1}
          sm={1}
          md={2}
          lg={1}
        >
          {firstNameDisabled ? (
            <i
              onClick={(e) => setFirstNameDisabled(false)}
              className={`${styles.icon} fas fa-edit`}
            />
          ) : (
            <i
              onClick={handleFirstNameEdit}
              className={`${styles.icon} fas fa-check`}
            ></i>
          )}
        </Col>
      </Row>

      <Row noGutters>
        <Col xs={11} sm={11} md={10} lg={11}>
          <div className="form-group">
            <label className="pl-2" htmlFor="lastname">
              Efternamn:
            </label>

            <input
              style={{ opacity: lastNameDisabled && "0.45" }}
              disabled={lastNameDisabled}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              autoComplete="off"
              required
              className={`${styles.input} form-control`}
              type="text"
              id="lastname"
            />
          </div>
        </Col>
        <Col
          className="d-flex align-items-center justify-content-center"
          xs={1}
          sm={1}
          md={2}
          lg={1}
        >
          {lastNameDisabled ? (
            <i
              onClick={(e) => setLastNameDisabled(false)}
              className={`${styles.icon} fas fa-edit`}
            />
          ) : (
            <i
              onClick={handleLastNameEdit}
              className={`${styles.icon} fas fa-check`}
            ></i>
          )}
        </Col>
      </Row>

      <Row noGutters>
        <Col xs={11} sm={11} md={10} lg={11}>
          <div className="form-group">
            <label className="pl-2" htmlFor="phone">
              Telefonnummer:
            </label>

            <input
              style={{ opacity: phoneDisabled && "0.45" }}
              disabled={phoneDisabled}
              value={phone}
              onChange={(e) => handlePhone(e)}
              autoComplete="off"
              required
              className={`${styles.input} form-control`}
              type="tel"
              id="phone"
            />
          </div>
        </Col>
        <Col
          className="d-flex align-items-center justify-content-center"
          xs={1}
          sm={1}
          md={2}
          lg={1}
        >
          {phoneDisabled ? (
            <i
              onClick={(e) => setPhoneDisabled(false)}
              className={`${styles.icon} fas fa-edit`}
            />
          ) : (
            <i
              onClick={handlePhoneEdit}
              className={`${styles.icon} fas fa-check`}
            ></i>
          )}
        </Col>
      </Row>

      <Row noGutters>
        <Col xs={11} sm={11} md={10} lg={11}>
          <div className="form-group">
            <label className="pl-2" htmlFor="email">
              E-post:
            </label>

            <input
              style={{ opacity: emailDisabled && "0.45" }}
              disabled={emailDisabled}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
              required
              className={`${styles.input} form-control`}
              type="email"
              id="email"
            />
          </div>
        </Col>
        <Col
          className="d-flex align-items-center justify-content-center"
          xs={1}
          sm={1}
          md={2}
          lg={1}
        >
          {emailDisabled ? (
            <i
              onClick={(e) => setEmailDisabled(false)}
              className={`${styles.icon} fas fa-edit`}
            />
          ) : (
            <i
              onClick={handleEmailEdit}
              className={`${styles.icon} fas fa-check`}
            ></i>
          )}
        </Col>
      </Row>

      <Row noGutters>
        <Col xs={11} sm={11} md={10} lg={11}>
          <div className="form-group">
            <label className="pl-2" htmlFor="password">
              Lösenord:
            </label>

            <input
              style={{ opacity: passwordDisabled && "0.45" }}
              disabled={passwordDisabled}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
              required
              className={`${styles.input} form-control`}
              type="password"
              id="password"
            />
          </div>
        </Col>
        <Col
          className="d-flex align-items-center justify-content-center"
          xs={1}
          sm={1}
          md={2}
          lg={1}
        >
          {passwordDisabled ? (
            <i
              onClick={(e) => setPasswordDisabled(false)}
              className={`${styles.icon} fas fa-edit`}
            />
          ) : (
            <i
              onClick={handlePasswordEdit}
              className={`${styles.icon} fas fa-check`}
            ></i>
          )}
        </Col>
      </Row>
    </form>
  );
};

export default ProfileForm;