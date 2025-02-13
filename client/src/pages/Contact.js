import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
    return (
        <Layout title={"Contact us"}>
            <div className="row contactus ">
                <div className="col-md-6 ">
                    <img
                        src="/images/contactus.jpeg"
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-4">
                    <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
                    <p className="text-justify mt-2">
                        For further queries and information, reach out to us at:
                    </p>
                    <p className="mt-3">
                        <BiMailSend /> : goodreadsbtm@gmail.com
                    </p>
                    <p className="mt-3">
                        <BiPhoneCall /> : +91 9343224608
                    </p>
                    <p className="mt-3">
                        <BiSupport /> : 080 - 2604 9844 (toll free)
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;