import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div
      style={{
        padding: "2rem",
        fontFamily: "Inter, sans-serif",
        lineHeight: 1.6,
        color: "#1a1a1a",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Privacy Policy</h1>

      <p>
        <strong>Last updated:</strong> 27 August 2025
      </p>
      <p>
        <strong>Website:</strong>{" "}
        <a
          href="https://www.muhyettinozer.com/privacy-policy-msuperaudit"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#007aff" }}
        >
          https://www.muhyettinozer.com/privacy-policy-msuperaudit
        </a>
      </p>
      <p>
        <strong>Contact email:</strong>{" "}
        <a href="mailto:muhyettinozer@gmail.com" style={{ color: "#007aff" }}>
          muhyettinozer@gmail.com
        </a>
      </p>
      <p>
        <strong>Developer:</strong> Muhyettin Özer
      </p>

      <section>
        <h2>1. About the App</h2>
        <p>
          <strong>MSuperAudit</strong> is a professional audit and reporting
          application designed to help teams manage inspection processes more
          efficiently. The app enables users to fill in checklists, attach
          photos, and generate professional PDF reports instantly.
        </p>
      </section>

      <section>
        <h2>2. Data Collection</h2>
        <p>
          MSuperAudit <strong>does not collect</strong> or share any personal
          data with third parties. All information entered in the forms,
          including photos or notes, remains on the user’s device until the user
          manually exports it.
        </p>
        <p>
          Data transmission occurs only when the user chooses to send a report
          via email. No information is automatically uploaded or analyzed.
        </p>
      </section>

      <section>
        <h2>3. Photos and Device Permissions</h2>
        <p>
          The application may request permission to use the camera for photo
          capture or access the photo library. These permissions are used solely
          for audit documentation and are only triggered with the user’s
          consent.
        </p>
        <p>
          Photos are stored locally on the device and are included in reports
          only if the user chooses to share them via email.
        </p>
      </section>

      <section>
        <h2>4. Children’s Privacy</h2>
        <p>
          MSuperAudit is <strong>not intended for children under 13 years
          old</strong> and does not knowingly collect information from minors.
        </p>
      </section>

      <section>
        <h2>5. Third-Party Services</h2>
        <p>
          The app does not contain ads, analytics tools, or integrations with
          external data providers. All app operations occur locally on the
          device.
        </p>
      </section>

      <section>
        <h2>6. Contact</h2>
        <p>
          For any questions or concerns regarding this privacy policy, please
          contact the developer at:
        </p>
        <p>
          📧 <strong>muhyettinozer@gmail.com</strong>
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
