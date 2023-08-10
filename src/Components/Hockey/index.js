import React, { useEffect, useState } from "react";
import "./styles.css";
import { MdMenu } from "react-icons/md";
import TopNavBar from "../TopNavBar";
import { isMobile } from "react-device-detect";
import HambergerMenu from "../HamburgerMenu";
import islandersPic from "../../Assets/is.jpg";
import advantagePic from "../../Assets/advantage.jpeg";
import valenciaPic from "../../Assets/Valencia.jpeg";
import tahoePic from "../../Assets/tahoe.jpeg";
import riptidePic from "../../Assets/riptide.png";
import lakersPic from "../../Assets/lakeshow.jpg";
import lakersSchedule from "../../Assets/lakeshowschedule.jpg";
import { InlineWidget } from "react-calendly";
const Hockey = () => {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  return (
    <>
      {isMobile ? (
        <div id="hamburger-container">
          <div
            onClick={() => {
              setHamburgerMenuOpen(!hamburgerMenuOpen);
              console.log(hamburgerMenuOpen);
            }}
            id="hamburger-menu-icon-holder"
          >
            <MdMenu size={45} />
          </div>
          <div
            className={`${
              hamburgerMenuOpen ? "hamburger-menu" : "hamburger-hidden"
            }`}
          >
            <HambergerMenu />
          </div>
        </div>
      ) : (
        <div className="top-nav-landing-holder">
          <TopNavBar />
        </div>
      )}
      <div className="hockey-zone">
        <div id="video-holder">
          <iframe
            allow="autoplay; fullscreen"
            type="text/html"
            src="https://www.youtube.com/embed/zVOrQwfCj5Q?version=3&amp;enablejsapi=1&amp;html5=1&amp;hd=1&amp;wmode=opaque&amp;showinfo=0&amp;rel=0&amp;origin=https://laketahoelakers.com;&amp;controls=0&amp;playsinline=1&amp;autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=zVOrQwfCj5Q"
            allowfullscreen=""
            width="100%"
            height="100%"
            class="intrinsic-ignore"
            id="video"
            title="Ellis O'Dowd Highlights"
          ></iframe>
          <div id="video-touch-blocker" />
          {/* <h2 id="hockey-title">Ellis O'Dowd Private Coaching</h2> */}
        </div>
      </div>
      <div className="hockey-header-holder table-title">Where I've been</div>
      <div id="hockey-info-zone">
        <div id="timeline">
          <div className="hockey-team-years">
            <div className="hockey-year-holder">
              <div className="hockey-year">2023</div>
            </div>
            <div className="hockey-year-holder">
              <div className="hockey-year">2022</div>
            </div>
            <div className="hockey-year-holder">
              <div className="hockey-year">2021</div>
            </div>
            <div className="hockey-year-holder">
              <div className="hockey-year">2018</div>
            </div>
            <div className="hockey-year-holder">
              <div className="hockey-year">2016</div>
            </div>
            <div className="hockey-year-holder">
              <div className="hockey-year">2011</div>
            </div>
          </div>
          <div id="vertical-line-connector" />
          <div className="hockey-experience-subdivision">
            <div id="experience-timeline">
              <div className="timeline-item">
                <div className="horizontal-line" />
                <div className="hockey-image-container">
                  <img id="lakers" src={lakersPic} />
                </div>
                <div className="team-info">
                  <a
                    href="https://www.laketahoelakers.com"
                    className="team-title"
                  >
                    Lake Tahoe Lakers
                  </a>
                  <div className="team-extra underline">USPHL Premier</div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="horizontal-line" />
                <div className="hockey-image-container">
                  <img id="islanders" src={islandersPic} />
                </div>
                <div className="team-info">
                  <a
                    className="team-title"
                    href="https://pal-ice-hockey.kreezee-sports.com/jr-islanders"
                  >
                    New York Jr. Islanders
                  </a>
                  <div className="team-extra underline">USPHL Premier</div>
                  <div className="team-extra ">Alternate captain</div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="horizontal-line" />
                <div className="hockey-image-container">
                  <img id="advantage" src={advantagePic} />
                </div>
                <div className="team-info">
                  <a
                    href="https://www.bostonadvantagehockey.com/"
                    className="team-title"
                  >
                    Boston Advantage
                  </a>
                  <div className="team-extra underline">USPHL Premier</div>
                  <div className="team-extra">Rookie season</div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="horizontal-line" />
                <div className="hockey-image-container">
                  <img id="tahoe" src={tahoePic} />
                </div>
                <div className="team-info">
                  <div className="team-title">Tahoe Prep Academy</div>
                  <div className="team-extra underline">ECEL/NAPHL 18AAA</div>
                  <div className="team-extra">Championship</div>
                  <div className="team-extra">Captain</div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="horizontal-line" />
                <div className="hockey-image-container">
                  <img id="valencia" src={valenciaPic} />
                </div>
                <div className="team-info">
                  <div className="team-title">Valencia Jr. Flyers</div>
                  <div className="team-extra underline">SCAHA 14AA</div>
                  <div className="team-extra">Alternate captain</div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="horizontal-line" />
                <div className="hockey-image-container">
                  <img id="riptide" src={riptidePic} />
                </div>
                <div className="team-info">
                  <div className="team-title">CI Riptide</div>
                  <div className="team-extra">First travel season</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lesson-section">
          <table>
            <caption className="table-title">Lesson times</caption>
            <tr>
              <th>Day</th>
              <th>Times</th>
            </tr>
            <tr>
              <td className="day">Mon</td>
              <td className="times">6:00, 6:45, 7:30, 8:15, 9:00</td>
            </tr>
            <tr>
              <td>Tue</td>
              <td className="times">8:15, 9:00</td>
            </tr>
            <tr>
              <td>Wed</td>
              <td className="times">6:30, 8:30, 9:15</td>
            </tr>
            <tr>
              <td>Thu</td>
              <td className="times">8:15, 9:00</td>
            </tr>
            <tr>
              <td>Fri</td>
              <td className="times">8:15, 9:00</td>
            </tr>
          </table>{" "}
          <div className="team-extra">*All lessons are in the AM</div>
          <div className="team-extra">
            Check the google calendar below, <br />
            or Text me at <span className="underline">(805)722-2603</span> for
            availibilty
          </div>
          <table id="rate-table">
            <caption className="table-title">Rates</caption>
            <tr>
              <th>Players</th>
              <th>Price</th>
            </tr>
            <tr>
              <td>1</td>
              <td>$80</td>
            </tr>
            <tr>
              <td>2</td>
              <td>$50</td>
            </tr>
            <tr>
              <td>3+</td>
              <td>$40</td>
            </tr>
          </table>
        </div>
      </div>
      <div id="hockey-game-schedule">
        <div className="game-text-holder">
          <div>
            <h3>Want to catch a game?</h3>
            <a
              href="https://goo.gl/maps/7dvQvXt2hg6CAhhQ9"
              className="location-text underline"
            >
              South Lake Tahoe Ice Arena 📍
            </a>
          </div>
          <img id="lakers-schedule" src={lakersSchedule} />
        </div>
        <div id="calendar-section">
          <h3 id="lesson-booking-header">Book a lesson!</h3>
          <InlineWidget
            id="cal"
            pageSettings={{
              backgroundColor: "171717",
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: "00a2ff",
              textColor: "DDDDDD",
            }}
            url="https://calendly.com/ellisodowd/private-hockey-lesson"
          />
        </div>
      </div>
    </>
  );
};

export default Hockey;

//this works
{
  /* <iframe
            allow="autoplay; fullscreen"
            type="text/html"
            // src="https://www.youtube.com/embed/ccduckgqFmk?version=3&amp;enablejsapi=1&amp;html5=1&amp;hd=1&amp;wmode=opaque&amp;showinfo=0&amp;rel=0&amp;origin=https://laketahoelakers.com;&amp;controls=0&amp;playsinline=1&amp;autoplay=1&amp;mute=1"
            src="https://www.youtube.com/embed/ccduckgqFmk?version=3&amp;enablejsapi=1&amp;html5=1&amp;hd=1&amp;wmode=opaque&amp;showinfo=0&amp;rel=0&amp;origin=https://laketahoelakers.com;&amp;controls=0&amp;playsinline=1&amp;autoplay=1&amp;mute=1"
            // src="https://www.youtube-nocookie.com/embed/jRN5PC3ZeXc?version=3&amp;enablejsapi=1&amp;html5=1&amp;hd=1&amp;wmode=opaque&amp;showinfo=0&amp;rel=0&amp;origin=https://laketahoelakers.com;&amp;controls=0&amp;playsinline=1"
            allowfullscreen=""
            width="100%"
            height="100%"
            class="intrinsic-ignore"
            style={{
              opacity: 1,
              visibility: "visible",
              width: "100%",
              height: "210%",
              // height: "355.556%",
              maxHeight: "none",
              maxWidth: "none",
              position: "absolute",
              left: 0,
              top: "-127.778%",
              display: "block",
            }}
            id="iframe7258"
            title="Ellis O'Dowd Highlights"
          ></iframe> */
}
