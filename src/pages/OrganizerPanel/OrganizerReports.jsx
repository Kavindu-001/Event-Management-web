import React, {useEffect} from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "../../styles/OrganizerPanel/OrganizerReport.css";
import OrganizerSidebar from "../../components/OrganizerSidebar";
import DashboardHeader from "../../components/DashboardHeader";

const OrganizerReport = () => {
  const generatePDF = () => {
    const report = document.getElementById("report-content");
    html2canvas(report).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("event_organizer_report.pdf");
    });
  };

  useEffect(() => {
      document.body.classList.add('organizer-reports-page');
      return () => {
        document.body.classList.remove('organizer-reports-page');
      };
    }, []);

  return (
    <div className='organizer-reports'>
      <OrganizerSidebar />
      <div className="header-container">
      <DashboardHeader />
      </div>
  
      <div className="report-container" id="report-content">
        <h1 className="report-title">Event Organizer Report</h1>
        <div className="report-section">
          <h2>Overview</h2>
          <p>Total Events: 12</p>
          <p>Upcoming Events: 5</p>
          <p>Completed Bookings: 20</p>
          <p>Active Users: 8</p>
        </div>

        <div className="report-section">
          <h2>Recent Bookings</h2>
          <table className="report-table">
            <thead>
              <tr>
                <th>Event</th>
                <th>User</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Summer Beats</td>
                <td>Jane Doe</td>
                <td>2025-05-01</td>
                <td>Confirmed</td>
              </tr>
              <tr>
                <td>Night Vibe</td>
                <td>John Smith</td>
                <td>2025-05-03</td>
                <td>Pending</td>
              </tr>
              <tr>
                <td>Glow Fest</td>
                <td>Emily Clark</td>
                <td>2025-05-05</td>
                <td>Confirmed</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="report-footer">
          <button className="generate-button" onClick={generatePDF}>
            Generate Full Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrganizerReport;
