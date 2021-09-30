
// import React, { useState } from "react";
// import SimpleBar from 'simplebar-react';
// import { useLocation } from "react-router-dom";
// import { CSSTransition } from 'react-transition-group';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faBook, faBoxOpen, faChartPie, faCog, faFileAlt, faHandHoldingUsd, faSignOutAlt, faTable, faTimes, faCalendarAlt, faMapPin, faInbox, faRocket } from "@fortawesome/free-solid-svg-icons";
// import { Nav, Badge, Image, Button, Dropdown, Accordion, Navbar } from '@themesberg/react-bootstrap';
// import { Link } from 'react-router-dom';

// // import ThemesbergLogo from "../assets/img/themesberg.svg";
// // import ReactHero from "../assets/img/technologies/react-hero-logo.svg";
// // import ProfilePicture from "../assets/img/team/profile-picture-3.jpg";

// export default (props = {}) => {
//   const location = useLocation();
//   const { pathname } = location;
//   const [show, setShow] = useState(false);
//   const showclassName = show ? "show" : "";

//   const onCollapse = () => setShow(!show);

//   const CollapsableNavItem = (props) => {
//     const { eventKey, title, icon, children = null } = props;
//     const defaultKey = pathname.indexOf(eventKey) !== -1 ? eventKey : "";

//     return (
//       <Accordion as={Nav.Item} defaultActiveKey={defaultKey}>
//         <Accordion.Item eventKey={eventKey}>
//           <Accordion.Button as={Nav.Link} classNameName="d-flex justify-content-between align-items-center">
//             <span>
//               <span classNameName="sidebar-icon"> </span>
//               <span classNameName="sidebar-text">{title}</span>
//             </span>
//           </Accordion.Button>
//           <Accordion.Body classNameName="multi-level">
//             <Nav classNameName="flex-column">
//               {children}
//             </Nav>
//           </Accordion.Body>
//         </Accordion.Item>
//       </Accordion>
//     );
//   };

//   const NavItem = (props) => {
//     const { title, link, external, target, icon, image, badgeText, badgeBg = "secondary", badgeColor = "primary" } = props;
//     const classNameNames = badgeText ? "d-flex justify-content-start align-items-center justify-content-between" : "";
//     const navItemclassNameName = link === pathname ? "active" : "";
//     const linkProps = external ? { href: link } : { as: Link, to: link };

//     return (
//       <Nav.Item classNameName={navItemclassNameName} onClick={() => setShow(false)}>
//         <Nav.Link {...linkProps} target={target} classNameName={classNameNames}>
//           <span>
//             {icon ? <span classNameName="sidebar-icon"> </span> : null}
//             {image ? <Image src={image} width={20} height={20} classNameName="sidebar-icon svg-icon" /> : null}

//             <span classNameName="sidebar-text">{title}</span>
//           </span>
//           {badgeText ? (
//             <Badge pill bg={badgeBg} text={badgeColor} classNameName="badge-md notification-count ms-2">{badgeText}</Badge>
//           ) : null}
//         </Nav.Link>
//       </Nav.Item>
//     );
//   };

//   return (
//     <>
//       <Navbar expand={false} collapseOnSelect variant="dark" classNameName="navbar-theme-primary px-4 d-md-none">
//         <Navbar.Brand classNameName="me-lg-5" as={Link}>
//           <Image classNameName="navbar-brand-light" />
//         </Navbar.Brand>
//         <Navbar.Toggle as={Button} aria-controls="main-navbar" onClick={onCollapse}>
//           <span classNameName="navbar-toggler-icon" />
//         </Navbar.Toggle>
//       </Navbar>
//       <CSSTransition timeout={300} in={show} classNameNames="sidebar-transition">
//         <SimpleBar classNameName={`collapse ${showclassName} sidebar d-md-block bg-primary text-white`}>
//           <div classNameName="sidebar-inner px-4 pt-3">
//             <div classNameName="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
//               <div classNameName="d-flex align-items-center">
//                 <div classNameName="user-avatar lg-avatar me-4">
//                   {/* <Image src={ProfilePicture} classNameName="card-img-top rounded-circle border-white" /> */}
//                 </div>
//                 <div classNameName="d-block">
//                   <h6>Hi, Jane</h6>
//                   <Button as={Link} variant="secondary" size="xs" classNameName="text-dark">
//                      Sign Out
//                   </Button>
//                 </div>
//               </div>
//               <Nav.Link classNameName="collapse-close d-md-none" onClick={onCollapse}>
                
//               </Nav.Link>
//             </div>
//             <Nav classNameName="flex-column pt-3 pt-md-0">
//               {/* <NavItem title="Volt React" image={ReactHero} /> */}

//               <NavItem title="Overview"/>
//               <NavItem external title="Messages" link="https://demo.themesberg.com/volt-pro-react/#/messages" target="_blank" badgeText="Pro" />
//               <NavItem title="Transactions"   />
//               <NavItem title="Settings"  />
//               <NavItem external title="Calendar" link="https://demo.themesberg.com/volt-pro-react/#/calendar" target="_blank" badgeText="Pro"  />
//               <NavItem external title="Map" link="https://demo.themesberg.com/volt-pro-react/#/map" target="_blank" badgeText="Pro" />

//               <CollapsableNavItem eventKey="tables/" title="Tables" >
//                 <NavItem title="Bootstrap Table"  />
//               </CollapsableNavItem>

//               <CollapsableNavItem eventKey="examples/" title="Page Examples" >
//                 <NavItem title="Sign In"  />
//                 <NavItem title="Sign Up" />
//                 <NavItem title="Forgot password"/>
//                 <NavItem title="Reset password" />
//                 <NavItem title="Lock" />
//                 <NavItem title="404 Not Found"  />
//                 <NavItem title="500 Server Error" />
//               </CollapsableNavItem>

//               <NavItem external title="Plugins" link="https://demo.themesberg.com/volt-pro-react/#/plugins/datatable" target="_blank" badgeText="Pro"  />

//               <Dropdown.Divider classNameName="my-3 border-indigo" />

//               <CollapsableNavItem eventKey="documentation/" title="Getting Started" >
//                 <NavItem title="Overview"  />
//                 <NavItem title="Download"  />
//                 <NavItem title="Quick Start"  />
//                 <NavItem title="License" />
//                 <NavItem title="Folder Structure"  />
//                 <NavItem title="Build Tools" />
//                 <NavItem title="Changelog"  />
//               </CollapsableNavItem>
//               <CollapsableNavItem eventKey="components/" title="Components" >
//                 <NavItem title="Accordion" />
//                 <NavItem title="Alerts" />
//                 <NavItem title="Badges"  />
//                 <NavItem external title="Widgets" link="https://demo.themesberg.com/volt-pro-react/#/components/widgets" target="_blank" badgeText="Pro" />
//                 <NavItem title="Breadcrumbs"  />
//                 <NavItem title="Buttons" />
//                 <NavItem title="Forms" />
//                 <NavItem title="Modals"  />
//                 <NavItem title="Navbars"  />
//                 <NavItem title="Navs" />
//                 <NavItem title="Pagination"  />
//                 <NavItem title="Popovers" />
//                 <NavItem title="Progress" />
//                 <NavItem title="Tables"  />
//                 <NavItem title="Tabs"  />
//                 <NavItem title="Toasts"  />
//                 <NavItem title="Tooltips"  />
//               </CollapsableNavItem>
//               <NavItem external title="Themesberg" link="https://themesberg.com" target="_blank"  />
//               <Button as={Link}  variant="secondary" classNameName="upgrade-to-pro"> Upgrade to Pro</Button>
//             </Nav>
//           </div>
//         </SimpleBar>
//       </CSSTransition>
//     </>
//   );
// };


import React, { useState, useEffect } from "react";
import { TezosToolkit } from "@taquito/taquito";
import { InMemorySigner } from '@taquito/signer';
// import "./App.css";
import ConnectButton from "./ConnectWallet";
import DisconnectButton from "./DisconnectWallet";
import qrcode from "qrcode-generator";
import UpdateContract from "./UpdateContract";
import Transfers from "./Transfers";

import logo from '../assets/logo.svg';

import { Navbar, Container, Nav, Button } from 'react-bootstrap';

import useScript from './useScript';

import '../vendor/sweetalert2/dist/sweetalert2.min.css'
import '../vendor/notyf/notyf.min.css'
import '../vendor/volt.css'

import { SECRET_KEY } from '../dapp/default';

const InteractAdd = () => {


  const Tezos = new TezosToolkit('https://granadanet.api.tez.ie');

  InMemorySigner.fromSecretKey(SECRET_KEY)
    .then((signer) => {
      Tezos.setProvider({ signer: signer });
      return Tezos.signer.publicKeyHash();
    }).then((publicKeyHash) => {
      console.log(`The public key hash associated is: ${publicKeyHash}.`);
    }).catch((error) => 
      console.log(`Error: ${error} ${JSON.stringify(error, null, 2)}`)
    );

  const [formData, setFormData] = useState({amount: ""})

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value})
    console.log(formData)

  }

  const addAmount = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    var addAmount = formData['amount'];

    Tezos.wallet
      .at('KT1HVaSGGszQnwLmC5ehQrTF6pUtHE3zTZnF')
      .then((contract) => {
        return contract.methods.add(addAmount).send()
      }).then((contract) => {
        return contract.confirmation()
      }).then((hash) => 
        console.log(`Operation injected: https://granada.tzstats.com/${hash}`)
      ).catch((error) => 
        console.log(`Error: ${JSON.stringify(error, null, 2)}`)
      );


    //   InMemorySigner.fromSecretKey('edskRtMMtCfvMjDETSeykhzVwQpf2DWSdRg2rSXEf6u8gtKEPBzLSqS5i8jGP2i5kmxqyTSgUkJHDhCnXhXDE2b4A14gpkXqDp')
    // .then((theSigner) => {
    //   Tezos.setProvider({ signer: theSigner });
    //   //We can access the public key hash
    //   return Tezos.signer.publicKeyHash();
    // })
    // .then((publicKeyHash) => {
    //   console.log(`The public key hash associated is: ${publicKeyHash}.`);
    // })
    // .catch((error) => console.log(`Error: ${error} ${JSON.stringify(error, null, 2)}`));

    // var address = 'tz1Lc7edHa33fKkCEw153ibmjVej4ZHQ6e4u';
    //     var resetDays = 23;
    //     var secretphrase = 'ed963f814c6d7a8aece8cf4e1aedca603e56e308325d8c7871b42a30ab401a32';

    
  

    console.log('Sent call to contract, waiting for response...');
  }


  useScript("../vendor/@popperjs/core/dist/umd/popper.min.js");
  useScript("../vendor/bootstrap/dist/js/bootstrap.min.js");
  useScript("../vendor/onscreen/dist/on-screen.umd.min.js");
  useScript("../vendor/nouislider/distribute/nouislider.min.js");
  useScript("../vendor/smooth-scroll/dist/smooth-scroll.polyfills.min.js");
  useScript("../vendor/chartist/dist/chartist.min.js");
  useScript("../vendor/chartist-plugin-tooltips/dist/chartist-plugin-tooltip.min.js");
  useScript("../vendor/vanillajs-datepicker/dist/js/datepicker.min.js");
  useScript("../vendor/sweetalert2/dist/sweetalert2.all.min.js");
  useScript("https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js");
  useScript("../vendor/vanillajs-datepicker/dist/js/datepicker.min.js");
  useScript("../vendor/notyf/notyf.min.js");
  useScript("../vendor/simplebar/dist/simplebar.min.js");
  useScript("https://buttons.github.io/buttons.js");
  useScript("../vendor/volt.js");


    return (
        <div>
        <nav id="sidebarMenu" className="sidebar d-lg-block bg-red text-white collapse" data-simplebar>
  <div className="sidebar-inner px-4 pt-3">
   
    <ul className="nav flex-column pt-3 pt-md-0">
      <li className="nav-item">
        <a href="../index.html" className="nav-link d-flex align-items-center">
          {/* <span className="sidebar-icon">
            <img src={logo} height="20" width="20" alt="Volt Logo" />
          </span> */}
          <span className="mt-1 ms-1 sidebar-text">Interact</span>
        </a>
      </li>
      <li className="nav-item active">
        <a href="/interact/add" className="nav-link">
          <span className="sidebar-icon">
            <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
          </span> 
          <span className="sidebar-text">Add funds</span>
        </a>
      </li>
      <li className="nav-item">
        <a href="/interact/withdraw" className="nav-link d-flex justify-content-between">
          <span>
            <span className="sidebar-icon">
              <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
            </span>
            <span className="sidebar-text">Withdraw funds</span>
          </span>
        </a>
      </li>
      <li className="nav-item ">
        <a href="/interact/updatedays" className="nav-link">
          <span className="sidebar-icon">
            <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path><path fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd"></path></svg>
          </span>
          <span className="sidebar-text">Update No of Days</span>
        </a>
      </li>
      <li className="nav-item">
        <a href="/interact/updatesecret" className="nav-link">
          <span className="sidebar-icon">
            <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
          </span>
          <span className="sidebar-text">Update Secret Key</span>
        </a>
      </li>
      <li className="nav-item">
        <a href="/interact/updatereceiver" className="nav-link d-flex justify-content-between">
          <span>
            <span className="sidebar-icon">
              <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clip-rule="evenodd"></path></svg>
            </span>
            <span className="sidebar-text">Update Receiver</span>
          </span>
        </a>
      </li>
      <li role="separator" className="dropdown-divider mt-4 mb-3 border-white"></li>
      <li className="nav-item">
        <a href="/" className="nav-link d-flex align-items-center">
          <span className="sidebar-icon">
            <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
          </span>
          {/* <span className="sidebar-text">Home <span className="badge badge-sm bg-secondary ms-1 text-gray-800">v1.4</span></span> */}
          <span className="sidebar-text">Home</span>
        </a>
      </li>
    </ul>
  </div>
</nav>
    
<main className="content">

            

<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
    

</div>
<div className="row">
    <div className="col-12 col-xl-8"> 
        <div className="card card-body border-0 shadow mb-4">
            <h2 className="h5 mb-4">Add Funds to Contract</h2>
            <form onSubmit={addAmount}>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <div>
                            <label htmlFor="first_name">amount</label>
                            <input name="amount" className="form-control" id="first_name" type="text" placeholder="Amount" required onChange={handleFormChange} />
                        </div>
                    </div>
                    
                </div>
                <div className="mt-3">
                    <button className="btn btn-danger mt-2 animate-up-2" type="submit">Execute</button>
                </div>
            </form>
        </div>
    </div>
    <div className="col-12 col-xl-4">
        <div className="row">

            <div className="col-12">
                <div className="card card-body border-0 shadow mb-4">
                    <h2 className="h5 mb-4">Parameters</h2>
                    <div className="d-flex align-items-left">
                        <p>parameter unit</p>                              
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</div>



</main>





        </div>
    );
};

export default InteractAdd;



