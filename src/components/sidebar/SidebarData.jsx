import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: "",
  },
  {
    title: "About Us",

    icon: "",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "our story",
        path: "/about",
        icon: "",
      },
      {
        title: "Team",
        path: "/team",
        icon: "",
      },
    ],
  },
  {
    title: "Tribunals",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Commercial Tribunals",
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
          {
            title: "Capital Markets",
            path:"CapitalMarkets"
          },
          {
            title: "Competition Tribunal",
            path:"CompetitionTribunal"
          },
          {
            title: "Cooperative Tribunal",
            path:"CooperativeTribunal"
          },
          {
            title: "Financial Center Tribunal",
            path:"FinancialCenterTribunal"
          },
          {
            title: "Micro and Small Enterprises Tribunal",
            path:"MicroandSmallEnterprisesTribunal"
          },
          {
            title: "National Civil Aviation Administrative Review Tribunal",
            path:"NationalCivilAviationAdministrativeReviewTribunal"
          },
          {
            title: "Standards Tribunal",
            path:"StandardsTribunal"
          },
          {
            title: "Tax Appeals Tribunal",
            path:"TaxAppealsTribunal"
          },
          {
            title: "Transport Licensing Appeals Tribunal",
            path:"TransportLicensingAppealsTribunal"
          },
          {
            title: "Public-Private Partnership Committee",
            path:"Public-PrivatePartnershipCommittee"
          },
        ],
      },
      {
        title: "Civil and Human Rights Tribunals",
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
          {
            title: "Education Appeals Tribunal",
            path:"EducationAppealsTribunal"
          },
          {
            title: "Hiv and Aids Tribunal",
            path:"HivandAidsTribunal"
          },
          {
            title: "Legal Education Appeals Tribunal",
            path:"LegalEducationAppealsTribunal"
          },
          {
            title: "National Examinations Appeals Tribunal",
            path:"NationalExaminationsAppealsTribunal"
          },
          {
            title: "Political Parties Disputes Tribunal",
            path:"PoliticalPartiesDisputesTribunal"
          },
          {
            title: "Sports Dispute Tribunals",
            path:"SportsDisputeTribunals"
          },
          {
            title: "Communication and Multi-Media Appeals Tribunal",
            path:"CommunicationandMulti-MediaAppealsTribunal"
          },
        ],
      },
     
      {
        title: "Environment and Land Tribunals",
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
          {
            title: "Business Premises Rent Tribunal",
            path:"BusinessPremisesRentTribunal"
          },
          {
            title: "Energy and Petroleum Tribunal",
            path:"EnergyandPetroleumTribunal"
          },
          {
            title: "Land Acquisition Tribunal",
            path:"LandAppealsTribunal"
          },
          {
            title: "National Environment Tribunal",
            path:"NationalEnvironmentTribunal"
          },
          {
            title: "Rent Restrictions Tribunal",
            path:"RentRestrictionsTribunal"
          },
          {
            title: "Water Tribunal",
            path:"WaterTribunal"
          },
        ],
      },
      {
        title: "Intellectual Property Tribunals",
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
       
          {
            title: "Copyright Tribunal",
            path:"CopyrightTribunal"
          },
          {
            title: "Industrial Property Tribunal",
            path:"IndustrialPropertyTribunal"
          },
        ],
      },
    ],
  },
  {
    title: "Media",
    icon: "",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Events",
        path: "/events",
        icon: "",
      },
      {
        title: "Gallery",
        path: "/gallery",
        icon: "",
      },
    ],
  },
  {
    title: "Resources",
    path: "/resources",
    icon: "",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: "",
  },

];
