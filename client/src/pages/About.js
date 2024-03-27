import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
    return (
        <Layout title={"About us"}>
            <div className="row contactus ">
                <div className="col-md-6 ">
                    <img
                        src="/images/about.jpeg"
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-4">
                    <p className="text-justify mt-2">
                        Welcome to Good Reads, where the magic of storytelling unfolds on every shelf. At Good Reads, our curated collection spans genres and authors, ensuring there's something for every reader. Committed to sustainability, we embrace eco - friendly practices to preserve both stories and the environment.
                        Join us at Good Reads, where every book is a doorway to a new adventure, and each visit is a celebration of the written word. Thank you for being part of our literary tapestry. Happy reading!
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default About;