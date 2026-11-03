import React from "react";
import Seo from "../components/Seo";

export default function TermsOfUse() {
    return (
        <div style={{ padding: "2rem" }}>
            <Seo
                title="Terms of Use | MSuperAudit"
                description="Terms of use for the MSuperAudit application."
                path="/terms-of-use-msuperaudit"
            />
            <h1>Terms of Use</h1>
            <p>
                By using the MSuperAudit application, you agree to use it solely for
                internal inspection purposes provided by Quality Assurance.
            </p>
            <p>
                Any misuse or unauthorized access to application data is strictly prohibited.
            </p>
        </div>
    );
}
