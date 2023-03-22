import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import socialMedia from "assets/images/Social Media.svg";

export const Contact = () => {
    const formInitialDetails = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    };

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState("send");
    const [status, setStatus] = useState({ success: null, message: "" });

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        let result = await response.json();
        setFormDetails(formInitialDetails);

        if (result.code === 204 || result.code === 200) {
            setStatus({ success: true, message: "Message sent successfully!" });
        } else {
            setStatus({
                success: false,
                message: "Something went wrong, please try again",
            });
        }
    };

    useEffect(() => {
        if (Object.keys(status).length > 0) {
            const timeoutId = setTimeout(() => {
                setStatus({});
            }, 3500);
            return () => clearTimeout(timeoutId);
        }
    }, [status]);

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className=" align-items-center">
                    <Col size={12} md={6}>
                        <img src={socialMedia} alt="Contact Me" />
                    </Col>
                    <Col size={12} md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col size={12} sm={6} className="px-1">
                                    <input
                                        type="text"
                                        required
                                        value={formDetails.firstName}
                                        placeholder="First Name"
                                        onChange={(e) =>
                                            onFormUpdate(
                                                "firstName",
                                                e.target.value
                                            )
                                        }
                                    />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input
                                        type="text"
                                        value={formDetails.lastName}
                                        placeholder="Last Name"
                                        onChange={(e) =>
                                            onFormUpdate(
                                                "lastName",
                                                e.target.value
                                            )
                                        }
                                    />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input
                                        type="email"
                                        required
                                        value={formDetails.email}
                                        placeholder="Email Address"
                                        onChange={(e) =>
                                            onFormUpdate(
                                                "email",
                                                e.target.value
                                            )
                                        }
                                    />
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                    <input
                                        type="tel"
                                        required
                                        value={formDetails.phone}
                                        placeholder="Phone Number"
                                        onChange={(e) =>
                                            onFormUpdate(
                                                "phone",
                                                e.target.value
                                            )
                                        }
                                    />
                                </Col>
                                <Col size={12} className="px-1">
                                    <textarea
                                        rows="6"
                                        value={formDetails.message}
                                        placeholder="Message"
                                        onChange={(e) =>
                                            onFormUpdate(
                                                "message",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <button type="submit">
                                        <span>{buttonText}</span>
                                    </button>
                                    {status.success !== null && (
                                        <Col>
                                            <p
                                                className={`status-message ${
                                                    status.success
                                                        ? "success"
                                                        : "error"
                                                } ${
                                                    Object.keys(status)
                                                        .length === 0
                                                        ? "hide"
                                                        : ""
                                                }`}
                                            >
                                                {status.message}
                                            </p>
                                        </Col>
                                    )}
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
