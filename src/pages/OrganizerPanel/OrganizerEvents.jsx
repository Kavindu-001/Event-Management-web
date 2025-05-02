import React, { useEffect, useState } from 'react';
import OrganizerSidebar from '../../components/OrganizerSidebar';
import DashboardHeader from '../../components/DashboardHeader';
import SharedCalendar from '../../components/SharedCalendar';
import { Card, CardContent } from '@mui/material';
import '../../styles/OrganizerPanel/OrganizerEvents.css';

const OrganizerEvents = () => {
  const [artistBookingRequests, setArtistBookingRequests] = useState([]);
  const [bandBookingRequests, setBandBookingRequests] = useState([]);
  const [lightingTeamBookingRequests, setLightingTeamBookingRequests] = useState([]);
  const [soundTeamBookingRequests, setSoundTeamBookingRequests] = useState([]);
  const [stageTeamBookingRequests, setStageTeamBookingRequests] = useState([]);
  const [securityTeamBookingRequests, setSecurityTeamBookingRequests] = useState([]);
  const [sponsorBookingRequests, setSponsorBookingRequests] = useState([]);
  const [designerBookingRequests, setDesignerBookingRequests] = useState([]);

  useEffect(() => {
    document.body.classList.add('organizer-events-page');
    return () => {
      document.body.classList.remove('organizer-events-page');
    };
  }, []);

  useEffect(() => {
    // Simulate fetching artist booking requests from the backend
    const fetchArtistBookingRequests = async () => {
      const requests = [
        { eventId: 'E001', artistId: 'A001', eventName: 'Music Festival', artistName: 'John Doe', eventDate: '2025-05-01', status: 'Pending' },
        { eventId: 'E002', artistId: 'A002', eventName: 'DJ Madness', artistName: 'Jane Smith', eventDate: '2025-04-15', status: 'Approved' },
        { eventId: 'E003', artistId: 'A003', eventName: 'Rock the Night', artistName: 'Alice Johnson', eventDate: '2025-04-10', status: 'Declined' },
        { eventId: 'E004', artistId: 'A004', eventName: 'Summer Beats Festival', artistName: 'Ella Stone', eventDate: '2025-04-05', status: 'Pending' },
        { eventId: 'E005', artistId: 'A005', eventName: 'Acoustic Evenings', artistName: 'Jayden Cross', eventDate: '2025-05-01', status: 'Approved' },
        { eventId: 'E006', artistId: 'A006', eventName: 'Jazz Nights', artistName: 'Maya Rivers', eventDate: '2025-04-15', status: 'Declined' },
      ];
      setArtistBookingRequests(requests);
    };

    // Simulate fetching band booking requests from the backend
    const fetchBandBookingRequests = async () => {
      const requests = [
        { eventId: 'E001', bandId: 'B001', eventName: 'Music Festival', bandName: 'Silver Echo', eventDate: '2025-05-01', status: 'Pending' }, 
        { eventId: 'E002', bandId: 'B002', eventName: 'DJ Madness', bandName: 'Neon Horizon', eventDate: '2025-04-15', status: 'Approved' },
        { eventId: 'E003', bandId: 'B003', eventName: 'Rock the Night', bandName: 'Velvet Vibes', eventDate: '2025-04-10', status: 'Declined' },
        { eventId: 'E004', bandId: 'B004', eventName: 'Summer Beats Festival', bandName: 'The Rockers', eventDate: '2025-04-05', status: 'Pending' },
        { eventId: 'E005', bandId: 'B005', eventName: 'Acoustic Evenings', bandName: 'The Acoustics', eventDate: '2025-05-01', status: 'Approved' },
        { eventId: 'E006', bandId: 'B006', eventName: 'Jazz Nights', bandName: 'Jazz Masters', eventDate: '2025-04-15', status: 'Declined' },
      ];
      setBandBookingRequests(requests);
    };

    const fetchLightingTeamBookingRequests = async () => {
      const requests = [
        { eventId: 'E001', lightingId: 'L001', eventName: 'Music Festival', lightingName: 'Bright Lights Co.', eventDate: '2025-05-01', status: 'Pending' },
        { eventId: 'E002', lightingId: 'L002', eventName: 'DJ Madness', lightingName: 'Neon Glow', eventDate: '2025-04-15', status: 'Approved' },
        { eventId: 'E003', lightingId: 'L003', eventName: 'Rock the Night', lightingName: 'Stage Beamers', eventDate: '2025-04-10', status: 'Declined' },
        { eventId: 'E004', lightingId: 'L004', eventName: 'Summer Beats Festival', lightingName: 'Event Illumination', eventDate: '2025-04-05', status: 'Pending' },
        { eventId: 'E005', lightingId: 'L005', eventName: 'Acoustic Evenings', lightingName: 'Soft Glow Lighting', eventDate: '2025-05-01', status: 'Approved' },
        { eventId: 'E006', lightingId: 'L006', eventName: 'Jazz Nights', lightingName: 'Ambient Lights', eventDate: '2025-04-15', status: 'Declined' },
      ];
      setLightingTeamBookingRequests(requests);
    };

    const fetchSoundTeamBookingRequests = async () => {
      const requests = [
        { eventId: 'E001', soundId: 'S001', eventName: 'Music Festival', soundName: 'Echo Sound Systems', eventDate: '2025-05-01', status: 'Pending' },
        { eventId: 'E002', soundId: 'S002', eventName: 'DJ Madness', soundName: 'Bass Boost Audio', eventDate: '2025-04-15', status: 'Approved' },
        { eventId: 'E003', soundId: 'S003', eventName: 'Rock the Night', soundName: 'Rock Sound Crew', eventDate: '2025-04-10', status: 'Declined' },
        { eventId: 'E004', soundId: 'S004', eventName: 'Summer Beats Festival', soundName: 'Wave Audio Systems', eventDate: '2025-04-05', status: 'Pending' },
        { eventId: 'E005', soundId: 'S005', eventName: 'Acoustic Evenings', soundName: 'Harmony Sound', eventDate: '2025-05-01', status: 'Approved' },
        { eventId: 'E006', soundId: 'S006', eventName: 'Jazz Nights', soundName: 'Smooth Sound Co.', eventDate: '2025-04-15', status: 'Declined' },
      ];
      setSoundTeamBookingRequests(requests);
    };

    const fetchStageTeamBookingRequests = async () => {
      const requests = [
        { eventId: 'E001', stageId: 'ST001', eventName: 'Music Festival', stageName: 'Grand Stage Co.', eventDate: '2025-05-01', status: 'Pending' },
        { eventId: 'E002', stageId: 'ST002', eventName: 'DJ Madness', stageName: 'Neon Stage Setup', eventDate: '2025-04-15', status: 'Approved' },
        { eventId: 'E003', stageId: 'ST003', eventName: 'Rock the Night', stageName: 'Rock Arena', eventDate: '2025-04-10', status: 'Declined' },
        { eventId: 'E004', stageId: 'ST004', eventName: 'Summer Beats Festival', stageName: 'Beach Stage Creations', eventDate: '2025-04-05', status: 'Pending' },
        { eventId: 'E005', stageId: 'ST005', eventName: 'Acoustic Evenings', stageName: 'Harmony Stage', eventDate: '2025-05-01', status: 'Approved' },
        { eventId: 'E006', stageId: 'ST006', eventName: 'Jazz Nights', stageName: 'Smooth Stage Co.', eventDate: '2025-04-15', status: 'Declined' },
      ];
      setStageTeamBookingRequests(requests);
    };

    const fetchSecurityTeamBookingRequests = async () => {
      const requests = [
        { eventId: 'E001', securityId: 'SEC001', eventName: 'Music Festival', securityName: 'SafeGuard Security', eventDate: '2025-05-01', status: 'Pending' },
        { eventId: 'E002', securityId: 'SEC002', eventName: 'DJ Madness', securityName: 'Elite Security Services', eventDate: '2025-04-15', status: 'Approved' },
        { eventId: 'E003', securityId: 'SEC003', eventName: 'Rock the Night', securityName: 'Rock Solid Security', eventDate: '2025-04-10', status: 'Declined' },
        { eventId: 'E004', securityId: 'SEC004', eventName: 'Summer Beats Festival', securityName: 'Beach Security Co.', eventDate: '2025-04-05', status: 'Pending' },
        { eventId: 'E005', securityId: 'SEC005', eventName: 'Acoustic Evenings', securityName: 'Harmony Security', eventDate: '2025-05-01', status: 'Approved' },
        { eventId: 'E006', securityId: 'SEC006', eventName: 'Jazz Nights', securityName: 'Smooth Security Services', eventDate: '2025-04-15', status: 'Declined' },
      ];
      setSecurityTeamBookingRequests(requests);
    };

    const fetchSponsorBookingRequests = async () => {
      const requests = [
        { eventId: 'E001', sponsorId: 'SP001', eventName: 'Music Festival', sponsorName: 'Global Music Inc.', eventDate: '2025-05-01', status: 'Pending' },
        { eventId: 'E002', sponsorId: 'SP002', eventName: 'DJ Madness', sponsorName: 'Neon Sponsors', eventDate: '2025-04-15', status: 'Approved' },
        { eventId: 'E003', sponsorId: 'SP003', eventName: 'Rock the Night', sponsorName: 'Rock Solid Sponsors', eventDate: '2025-04-10', status: 'Declined' },
        { eventId: 'E004', sponsorId: 'SP004', eventName: 'Summer Beats Festival', sponsorName: 'Beachside Sponsors', eventDate: '2025-04-05', status: 'Pending' },
        { eventId: 'E005', sponsorId: 'SP005', eventName: 'Acoustic Evenings', sponsorName: 'Harmony Sponsors', eventDate: '2025-05-01', status: 'Approved' },
        { eventId: 'E006', sponsorId: 'SP006', eventName: 'Jazz Nights', sponsorName: 'Smooth Jazz Sponsors', eventDate: '2025-04-15', status: 'Declined' },
      ];
      setSponsorBookingRequests(requests);
    };

    const fetchDesignerBookingRequests = async () => {
      const requests = [
        { eventId: 'E001', designerId: 'D001', eventName: 'Music Festival', designerName: 'Creative Designs Co.', eventDate: '2025-05-01', status: 'Pending' },
        { eventId: 'E002', designerId: 'D002', eventName: 'DJ Madness', designerName: 'Neon Design Studio', eventDate: '2025-04-15', status: 'Approved' },
        { eventId: 'E003', designerId: 'D003', eventName: 'Rock the Night', designerName: 'Rock Art Designs', eventDate: '2025-04-10', status: 'Declined' },
        { eventId: 'E004', designerId: 'D004', eventName: 'Summer Beats Festival', designerName: 'Beachside Creatives', eventDate: '2025-04-05', status: 'Pending' },
        { eventId: 'E005', designerId: 'D005', eventName: 'Acoustic Evenings', designerName: 'Harmony Design Studio', eventDate: '2025-05-01', status: 'Approved' },
        { eventId: 'E006', designerId: 'D006', eventName: 'Jazz Nights', designerName: 'Smooth Jazz Designs', eventDate: '2025-04-15', status: 'Declined' },
      ];
      setDesignerBookingRequests(requests);
    };

    fetchArtistBookingRequests();
    fetchBandBookingRequests();
    fetchLightingTeamBookingRequests();
    fetchSoundTeamBookingRequests();
    fetchStageTeamBookingRequests();
    fetchSecurityTeamBookingRequests();
    fetchSponsorBookingRequests();
    fetchDesignerBookingRequests();
  }, []);

  return (
    <div>
      <OrganizerSidebar />
      <DashboardHeader />

      <div className= "content-of-the-page">
        <Card className="card-calendar">
          <CardContent className="card-content">
            <h2>Event Calendar</h2>
            <div className="calendar-container">
            <SharedCalendar />
            </div>
          </CardContent>
        </Card>

        <div className="organizer-booking-request-table">
          <h2>Booking Requests</h2>

          {/* Artist Bookings Table */}
          <table className="booking-request-table">
            <thead>
              <h3>Artist Bookings</h3>
              <tr>
                <th>Event ID</th>
                <th>Artist Booking ID</th>
                <th>Event Name</th>
                <th>Artist Name</th>
                <th>Event Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {artistBookingRequests.map((request) => (
                <tr key={request.artistId}>
                  <td>{request.eventId}</td>
                  <td>{request.artistId}</td>
                  <td>{request.eventName}</td>
                  <td>{request.artistName}</td>
                  <td>{request.eventDate}</td>
                  <td>
                    <span className={`status ${request.status.toLowerCase()}`}>
                      {request.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Bands Bookings Table */}
          <table className="booking-request-table">
            <thead>
              <h3>Bands Bookings</h3>
              <tr>
                <th>Event ID</th>
                <th>Band Booking ID</th>
                <th>Event Name</th>
                <th>Band Name</th>
                <th>Event Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {bandBookingRequests.map((request) => (
                <tr key={request.bandId}>
                  <td>{request.eventId}</td>
                  <td>{request.bandId}</td>
                  <td>{request.eventName}</td>
                  <td>{request.bandName}</td>
                  <td>{request.eventDate}</td>
                  <td>
                    <span className={`status ${request.status.toLowerCase()}`}>
                      {request.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Lighting Bookings Table */}
          <table className="booking-request-table">
            <thead>
              <h3>Lighting Teams Bookings</h3>
              <tr>
                <th>Event ID</th>
                <th>Lighting Team <br/> Booking ID</th>
                <th>Event Name</th>
                <th>Lighting Team <br/> Name</th>
                <th>Event Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {lightingTeamBookingRequests.map((request) => (
                <tr key={request.lightingId}>
                  <td>{request.eventId}</td>
                  <td>{request.lightingId}</td>
                  <td>{request.eventName}</td>
                  <td>{request.lightingName}</td>
                  <td>{request.eventDate}</td>
                  <td>
                    <span className={`status ${request.status.toLowerCase()}`}>
                      {request.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Sound Bookings Table */}
          <table className="booking-request-table">
            <thead>
              <h3>Sound Teams Bookings</h3>
              <tr>
                <th>Event ID</th>
                <th>Sound Team <br/> Booking ID</th>
                <th>Event Name</th>
                <th>Sound Team <br/> Name</th>
                <th>Event Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {soundTeamBookingRequests.map((request) => (
                <tr key={request.soundId}>
                  <td>{request.eventId}</td>
                  <td>{request.soundId}</td>
                  <td>{request.eventName}</td>
                  <td>{request.soundName}</td>
                  <td>{request.eventDate}</td>
                  <td>
                    <span className={`status ${request.status.toLowerCase()}`}>
                      {request.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Stage Bookings Table */}
          <table className="booking-request-table">
            <thead>
              <h3>Stage Teams Bookings</h3>
                <tr>
                  <th>Event ID</th>
                  <th>Stage Team Booking ID</th>
                  <th>Event Name</th>
                  <th>Stage Team Name</th>
                  <th>Event Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {stageTeamBookingRequests.map((request) => (
                  <tr key={request.stageId}>
                    <td>{request.eventId}</td>
                    <td>{request.stageId}</td>
                    <td>{request.eventName}</td>
                    <td>{request.stageName}</td>
                    <td>{request.eventDate}</td>
                    <td>
                      <span className={`status ${request.status.toLowerCase()}`}>
                        {request.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          {/* Security Bookings Table */}
          <table className="booking-request-table">
            <thead>
              <h3>Security Teams Bookings</h3>
              <tr>
                <th>Event ID</th>
                <th>Security Team Booking ID</th>
                <th>Event Name</th>
                <th>Security Team Name</th>
                <th>Event Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {securityTeamBookingRequests.map((request) => (
                <tr key={request.securityId}>
                  <td>{request.eventId}</td>
                  <td>{request.securityId}</td>
                  <td>{request.eventName}</td>
                  <td>{request.securityName}</td>
                  <td>{request.eventDate}</td>
                  <td>
                    <span className={`status ${request.status.toLowerCase()}`}>
                      {request.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Sponsor Bookings Table */}
          <table className="booking-request-table">
            <thead>
              <h3>Sponsors Bookings</h3>
              <tr>
                <th>Event ID</th>
                <th>Sponsor Booking ID</th>
                <th>Event Name</th>
                <th>Sponsor Name</th>
                <th>Event Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {sponsorBookingRequests.map((request) => (
                <tr key={request.sponsorId}>
                  <td>{request.eventId}</td>
                  <td>{request.sponsorId}</td>
                  <td>{request.eventName}</td>
                  <td>{request.sponsorName}</td>
                  <td>{request.eventDate}</td>
                  <td>
                    <span className={`status ${request.status.toLowerCase()}`}>
                      {request.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Designer Bookings Table */}
          <table className="booking-request-table">
            <thead>
              <h3>Designers Bookings</h3>
              <tr>
                <th>Event ID</th>
                <th>Designer Booking ID</th>
                <th>Event Name</th>
                <th>Designer Name</th>
                <th>Event Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {designerBookingRequests.map((request) => (
                <tr key={request.designerId}>
                  <td>{request.eventId}</td>
                  <td>{request.designerId}</td>
                  <td>{request.eventName}</td>
                  <td>{request.designerName}</td>
                  <td>{request.eventDate}</td>
                  <td>
                    <span className={`status ${request.status.toLowerCase()}`}>
                      {request.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
};

export default OrganizerEvents;