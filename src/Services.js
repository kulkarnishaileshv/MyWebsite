import React from "react";

function Services() {
  return (
    <div className="services-section">

      <div className="container">

        <h2 className="services-title">Services</h2>
        <p className="services-subtitle">
          Automation, Cloud and Analytics solutions for modern businesses
        </p>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="service-card">

              <div className="service-icon">⚙</div>

              <h4>Business Process Automation</h4>

              <ul>
                <li>Workflow automation</li>
                <li>ERP automation</li>
                <li>Enterprise system integration</li>
                <li>Operational efficiency improvement</li>
              </ul>

            </div>
          </div>

          <div className="col-md-4">
            <div className="service-card">

              <div className="service-icon">☁</div>

              <h4>Cloud & DevOps</h4>

              <ul>
                <li>Azure / AWS solutions</li>
                <li>Azure DevOps CI/CD pipelines</li>
                <li>Docker containerization</li>
                <li>Kubernetes orchestration</li>
              </ul>

            </div>
          </div>

          <div className="col-md-4">
            <div className="service-card">

              <div className="service-icon">📊</div>

              <h4>Business Analytics</h4>

              <ul>
                <li>Custom reporting tools</li>
                <li>Executive dashboards</li>
                <li>Data analytics solutions</li>
                <li>Decision support systems</li>
              </ul>

            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Services;