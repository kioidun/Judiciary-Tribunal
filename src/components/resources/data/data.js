import { MdOutlineLeaderboard } from "react-icons/md";

const BusinessTribunal = require("../../../imagestwo/businesskenya.jpg");
const CopyrightTribunal = require("../../../imagestwo/copyrighttribunal.jpg");
const COMMUNICATIONSANDMULTIMEDIAAPPEALSTRIBUNAL = require("../../../imagestwo/camattwo.jpg");
const COMPETITIONTRIBUNAL = require("../../../imagestwo/competition.jpg");
const COOPERATIVETRIBUNAL = require("../../../imagestwo/cooperativeimage.jpg");
const EDUCATIONAPPEALSTRIBUNAL = require("../../../imagestwo/educationappeals.jpg");
const ENERGYANDPETROLEUMTRIBUNAL = require("../../../imagestwo/energy.png");
const HIVANDAIDSTRIBUNAL = require("../../../imagestwo/hivandaidstwo.jpg");
const INDUSTRIALPROPERTYTRIBUNAL = require("../../../imagestwo/iptmanufacturing.jpg");
const LEGALEDUCATIONAPPEALSTRIBUNAL = require("../../../imagestwo/legalandeducation.jpg");
const MICROANDSMALLENTERPRISESTRIBUNAL = require("../../../imagestwo/mamamboga.jpg");
const NATIONALCIVILAVIATIONADMINISTRATIVEREVIEWTRIBUNAL = require("../../../imagestwo/nationalcivilaviation.jpg");
const NATIONALENVIRONMENTTRIBUNAL = require("../../../imagestwo/netpicture.jpg");
const POLITICALPARTIESDISPUTESTRIBUNAL = require("../../../imagestwo/parliamentkenya.jpg");
const PUBLICPRIVATEPARTNERSHIPPETITIONCOMMITTEE = require("../../../imagestwo/pppcone.png");
const RENTRESTRICTIONTRIBUNAL = require("../../../imagestwo/housestwo.jpg");
const SPORTSDISPUTESTRIBUNAL = require("../../../imagestwo/kenyansporttwo.jpg");
const STANDARDSTRIBUNAL = require("../../../imagestwo/standardcounterfittwo.jpeg");
const TRANSPORTLICENSINGAPPEALSBOARD = require("../../../imagestwo/matatu.jpg");
const TAXAPPEALSTRIBUNAL = require("../../../imagestwo/kra.jpg");
const WATERTRIBUNAL = require("../../../imagestwo/watertap.jpg");
const NATIONALEXAMINATIONAPPEALSTRIBUNAL = require("../../../imagestwo/nationalexamination.jpg");
const LANDACQUISITIONTRIBUNAL = require("../../../imagestwo/landacquisition.jpg");
const FINANCIALCENTRETRIBUNAL = require("../../../imagestwo/financialcenter.jpg");
const CAPITALMARKETSTRIBUNAL = require("../../../imagestwo/capitalexchange.jpg");

const asugah = require("../../resources/images/asugahseven.jpg");
const gracedr = require("../../resources/images/gracedrthree.jpeg");
const lydiadr = require("../../resources/images/lydiasix.jpg");
const sammie = require("../../resources/images/zakeemmiano.JPG");
const njerutwo = require("../../resources/images/njerusix.jpg");
const diramu = require("../../resources/images/diramuthree.jpg");
const charles = require("../../resources/images/charles.jpg");
const nyambura = require("../../resources/images/zakeemnyambura.jpg");

const energy = require("../../resources/images/energyswearing.jpeg");
const chairpersons = require("../../resources/images/chairpersons-crj.jpeg");
const news = require("../../resources/images/sierra-leone.jpeg");
const azerbaijan = require("../../resources/images/azerbaijan.jpeg");
const zambia = require("../../resources/images/zambia.jpeg");
const kisumu = require("../../resources/images/kisumu.jpeg");

const pdf = require("../../resources/images/pdfimage.jpg");
const tribunalsmanual = require("../../files/tribunals_manual.pdf");
const knowyourtribunals = require("../../files/know your tribunalss.pdf");
const constitution = require("../../files/The_Constitution_of_Kenya_2010.pdf");
const fees = require("../../files/fees.pdf");
const standardfees = require("../../files/Standard Tribunal Fees.pdf")
const industrialfees = require("../../files/Industrial Property Fees.pdf")
const capitalmarketfees = require("../../files/Capital Markets Tribunal Fees.pdf")
const retirementbenefitsfees = require("../../files/Retirement Benefits Tribunal Fees.pdf")
const rentrestrictionfees = require("../../files/Rent Restriction Fees.pdf")
const cooperativetribunal = require("../../files/Cooperative Tribunal Fees.pdf")
const frequently = require("../../files/Faqs.pdf");

// data used in faqs component
export const faqs = [
  {
    id: 1,
    question: "WHAT ARE TRIBUNALS?",
    answer:
      "Tribunals are quasi-judicial bodies established by various Acts of Parliament and mandated to hear and determine disputes arising from their areas of specialization.",
  },
  {
    id: 2,
    question: "HOW MANY TRIBUNALS ARE THERE IN KENYA?",
    answer: "Currently there are 41 Tribunals in Kenya. Of the 41 Tribunals 27 have transited to the Judiciary. For a list of the Transited Tribunals. ",
    url: "/tribunals",
  },
  {
    id: 3,
    question: "WHERE ARE TRIBUNALS LOCATED?",
    answer:
      "Majority of Tribunals are located at Keny-Re Towers. For more info. ",
    url: "/contact",
  },
  {
    id: 4,
    question: "HOW ARE TRIBUNALS MANAGED?",
    answer:
      "The Judicial Service Commission has oversight of all Tribunals. The Chief Justice, as the head of the Judiciary, is in charge of all Courts and Tribunals. For the day-to-day operations of Tribunals, the responsibility of managing them lies with the Registrar of Tribunals, located at Kenya-Re Towers, 10th floor. Contact: Email: ort@court.go.ke Phone: 0730181895",
  },
  {
    id: 5,
    question: "HOW DO I FILE A MATTER IN A TRIBUNAL?",
    answer: "Step 1: Log onto the Efiling portal.",
    url: "https://efiling.court.go.ke/",
  },
  {
    id: 6,
    question: "DO WE PAY FEES TO FILE CASES IN TRIBUNALS?",
    answer:
      "Yes, there are minimal fees prescribed in the Kenya Gazette and in some Tribunals it is prescribed by the establishing statutes. For Tribunals Fees. ",
    url: "/fees",
  },
  {
    id: 7,
    question: "ARE DECISIONS OF TRIBUNALS BINDING?",
    answer:
      "The decisions of Tribunals are binding just as decisions from Courts. Disobedience of tribunal orders may lead to penal sanctions.",
  },
  {
    id: 8,
    question: "HOW ARE TRIBUNALS ESTABLISHED?",
    answer:
      "Tribunals are established through Acts of Parliament to address disputes in specialized sectors in the society. Kindly download our more comprehensive FAQ document for more information.",
  },
  {
    id: 9,
    question: "HOW ARE TRIBUNALS DIFFERENT THAN COURTS?",
    answer:
      "Tribunals are specialized multi-membered Courts, meaning they sit in panels of 3 or 5, they are faster and cheaper. They also have procedures that are more flexible than Courts.",
  },
];

//data used in the teaminfo component
export const teaminfo = [
  {
    id: 1,
    image: asugah,
    position: "Registrar",
    name: "Hon. Ann Asugah",
    description: `The Registrar Tribunals is appointed by the Judicial Service Commission under Article 161 (3) of the Constitution and is responsible to the Chief Registrar in the performance of the duties of that office. The Registrar oversights the Tribunal Secretariat to ensure it efficiently and effectively supports Tribunals in the dispensation of justice by mainstreaming judiciary best practices and programs in Tribunals. Currently, ORT oversees 25 Tribunals that have transited to the Judiciary by facilitating human, infrastructural, financial and supply chain related activities to ensure optimal performance by Tribunals.`,
  },
  {
    id: 2,
    image: lydiadr,
    position: "Deputy Registrar",
    name: "Hon. Lydia Mbacho",
    description: `HON. LYDIAH MBACHO is a Senior Resident Magistrate/Deputy Registrar based at the Office of the Registrar Tribunals. She Joined the Judiciary in November, 2017 as a Resident Magistrate. L Before joining the Office of the Registrar Tribunals, Hon Mbacho was working as a Deputy Registrar , High Court Civil Division. As a Deputy Registrar, she assists the Registrar in execution of her duties. She is deployed on shared services basis where she supervises Tribunals' Registries Operations in conjunction with the Court Administrators, signs tribunal orders and other court documents, tax bill of costs, certify proceedings, judgments and rulings, ensure Tribunal files and records of appeal are submitted to the High Court upon request amongst other duties.`,
  },
  {
    id: 3,
    image: sammie,
    position: "Assistant Director Finance",
    name: "CPA Samuel Miano",
    description: `He is the Assistant Director for Finance in the Office of Registrar Tribunals and currently in charge of Expenditure Management. He has experience in finance management which he has acquired in the last 22 years in the public service. He joined Judiciary in 2013 He holds a Master’s Degree in Business Administration, finance option and is a Certified Public Accountant registered with Institute of Certified Accountants of Kenya.`,
  },
  {
    id: 4,
    image: njerutwo,
    position: "Assistant Director Finance",
    name: "CPA Emmanuel Njeru",
    description: `CPA Emmanuel Njeru is a Certified Public Accountant of Kenya and a member of the institute of Certified Public Accountants of Kenya(ICPAK). He holds a Master's degree in Business Administration Finance Option.
        He has over 22 years of extensive experience in leadership. Financial Accounting and Management, Budget Management, Audit, and Project management gained from both the public and private sector.
        He joined the Judiciary in 2013 as an Assistant Director Finance and he is in charge of revenue and deposits management at the Office Of The Registrar Tribunals.`,
  },
  {
    id: 5,
    image: nyambura,
    position: "Office Administrator",
    name: "Grace Nyambura",
    description: `Grace is an Office Administrator based at the Office of the Registrar Tribunals. She has a substantial background in administrative roles, having joined the Judiciary as a Clerical Officer in 2001 and then advancing to an Office Administrator position in 2008. She holds a Bachelor’s Degree in Project Planning and Management and she adeptly handles various responsibilities, including managing daily operations, overseeing office inventory, scheduling meetings, and supervising administrative staff at the Office of the Registrar Tribunals.`,
  },
];

// data used in the events component
export const events = [
  {
    id: 1,
    image: zambia,
    title: "Visit by the Energy Appeals Tribunal of Zambia",
    description: `Capacity Building & Benchmarking visit by the Energy Appeals Tribunal of Zambia to the Energy and Petroleum Tribunal of Kenya. The visit focused on sharing best practices in energy regulation and dispute resolution, enhancing regional cooperation in the energy sector.`,
  },
  {
    id: 2,
    image: azerbaijan,
    title:
      "Visit by Hon. Justice Inam Karimov, Chairperson of the Supreme Court of the Republic of Azerbaijan",
    description: `The visit underscored the importance of innovation in modern governance,proving that the pursuit of justice isn't just about laws and rulings but also about how effectively institutions serve the people`,
  },
  {
    id: 3,
    image: kisumu,
    title:
      "Tribunal Shared Services Launch – Kisumu",
    description: `The launch of Tribunal Shared Services in Kisumu marks a significant milestone in enhancing the efficiency and accessibility of tribunal services in the region. This initiative aims to streamline operations, improve service delivery, and provide a centralized platform for various Tribunals to better serve the community.`,
  },
  {
    id: 4,
    image: chairpersons,
    title: "Interacting with the CRJ",
    description: `The CRJ underscored the need to implement the appellate mechanism for Tribunals to preserve timelines of hearing appeals from Tribunals.`,
  },
  {
    id: 5,
    image: energy,
    title: "Swearing-in",
    description: `The Hon Chief Registrar of the Judiciary,presided over her inaugural swearing in of Hon. Doris Mwirigi as a Member of the Energy & Petroleum Tribunal.`,
  },
  {
    id: 6,
    image: news,
    title: "Delegation from Sierra Leone",
    description: `A delegation from Sierra Leone’s Parliament and Judiciary was hosted by the HIV and AIDS Tribunal and it’s partners We’re pleased to share our knowledge and experiences, helping to identify and address existing gaps and strengthen our collective response to HIV&AIDS.`,
  },
];

export const frequentlyasked = [
  {
    id: 1,
    image: pdf,
    heading: "Frequently Asked Questions",
    date: "18.08.2025",
    download: frequently,
  },
];

// data used in the downloads component
export const downloads = [
  {
    id: 1,
    image: pdf,
    heading: "The Constitution of Kenya 2010",
    date: "11.03.2025",
    download: constitution,
  },
  {
    id: 2,
    image: pdf,
    heading: "Tribunals Registry Manual",
    date: "11.03.2025",
    download: tribunalsmanual,
  },
  {
    id: 3,
    image: pdf,
    heading: "Know Your Tribunals",
    date: "11.03.2025",
    download: knowyourtribunals,
  },
  {
    id: 4,
    image: pdf,
    heading: "Hiv & Aids Complain Form",
    date: "11.03.2025",
    download: knowyourtribunals,
  },
  {
    id: 5,
    image: pdf,
    heading: "Court Fees",
    date: "11.03.2025",
    download: fees,
  },
];

export const courtfees = [
     {
    id: 1,
    image: pdf,
    heading: "Court Fees",
    date: "11.03.2025",
    download: fees,
  },
   {
    id: 2,
    image: pdf,
    heading: "Capital Markets Tribunal Fees",
    date: "11.03.2025",
    download: capitalmarketfees,
  },
   {
    id: 3,
    image: pdf,
    heading: "Cooperative Tribunal Fees",
    date: "11.03.2025",
    download: cooperativetribunal,
  },
    {
    id: 4,
    image: pdf,
    heading: "Industrial Property Tribunal Fees",
    date: "11.03.2025",
    download: industrialfees,
  },
  {
    id: 5,
    image: pdf,
    heading: "Retirement Benefits Authority Tribunal Fees",
    date: "11.03.2025",
    download: retirementbenefitsfees,
  },
   {
    id: 6,
    image: pdf,
    heading: "Rent Restriction Tribunal Fees",
    date: "11.03.2025",
    download: rentrestrictionfees,
  },
    {
    id: 7,
    image: pdf,
    heading: "Standard Tribunal Fees",
    date: "11.03.2025",
    download: standardfees,
  },
 
];

export const mainheader = [
  {
    id: 1,
    article: 1,
    title: "article 1",
  },
  {
    id: 2,
    article: 159,
    title: "article 159",
  },
  {
    id: 3,
    article: 169,
    title: "Article 169",
  },
];

export const departments = [
  {
    id: 1,
    icon: <MdOutlineLeaderboard />,
    title: "Registry Department",
    desc: "Set and manage the day-to-day operations of the office, including scheduling meetings and appointments, organizing files and handling correspondence within the Tribunals",
  },
  {
    id: 2,
    icon: <MdOutlineLeaderboard />,
    title: "Finance Department",
    desc: `Manage all financial processes and decisions controlling expenditure to ensure effective running of the Tribunals`,
  },
  {
    id: 3,
    icon: <MdOutlineLeaderboard />,
    title: "Supply chain Department",
    desc: `Responsible for assessing products, services, suppliers and negotiate contracts suitable for effective running of the Tribunals`,
  },
  {
    id: 4,
    icon: <MdOutlineLeaderboard />,
    title: "Administration Department",
    desc: "Manage IT resources, develop and implement IT strategies, support end users, conduct system checks and maintenance updates and ensure data security within the Tribunals",
  },
];

export const values = [
  {
    id: 1,
    icon: <MdOutlineLeaderboard />,
    title: "Vision",
    desc: "An independent institution of excellence in the delivery of justice to all",
  },
  {
    id: 2,
    icon: <MdOutlineLeaderboard />,
    title: "Judiciary Mission",
    desc: `To administer justice in a fair, timely, accountable and accessible manner,
    uphold the rule of law, advance indigenous jurisprudence and protect the Constitution`,
  },
  {
    id: 3,
    icon: <MdOutlineLeaderboard />,
    title: "Secretariat Mission",
    desc: `To efficiently coordinate Tribunals for an effective and responsive justice system`,
  },
  {
    id: 4,
    icon: <MdOutlineLeaderboard />,
    title: "Core values",
    desc: "The Judiciary is guided by the following core values: Professionalism, Integrity, Diligence, Team work, Courage, Humility",
  },
];

// data used in the contacts component
export const contactsall = [
  {
    id: 1,
    // image: BusinessTribunal,
    name: "Business Premises Rent Tribunal",
    telephone: "0769730632",
    address: "NAAIROBI",
    location: " Kenya Re towers, Upper Hill Ground Floor, Nairobi",
    email: "bprttr@court.go.ke",
  },
  {
    id: 2,
    // image:CAPITALMARKETSTRIBUNAL,
    name: "Capital Markets Tribunal",
    telephone: "0795516894",
    address: "Nairobi",
    location: `Kenya Re towers, Upper Hill Ground Floor, Nairobi`,
    email: `cmt@court.go.ke`,
  },
  {
    id: 3,
    // image:CopyrightTribunal,
    name: "Copyright Tribunal",
    telephone: "0769729869",
    address: "Nairobi",
    location: "Kenya Re towers, Upper Hill Ground Floor, Nairobi",
    email: "copyright@court.go.ke",
  },
  {
    id: 4,
    // image:COMMUNICATIONSANDMULTIMEDIAAPPEALSTRIBUNAL,
    name: "Communication And MultiMedia Appeals Tribunal",
    telephone: "0769730512",
    address: "Nairobi",
    location: "Kenya Re towers, Upper Hill Ground Floor, Nairobi",
    email: "camat@court.go.ke",
  },
  {
    id: 5,
    // image:COOPERATIVETRIBUNAL,
    name: "Cooperative Tribunal",
    telephone: "0769887317",
    address: "Nairobi",
    location: "Re-insurance Plaza, Taifa Road-Nairobi CBD, 11th & 12th Floor ",
    email: "coptr@court.go.ke",
  },
  {
    id: 6,
    // image:EDUCATIONAPPEALSTRIBUNAL,
    name: "Educations Appeals Tribunal",
    telephone: "0769730719",
    address: "Nairobi",
    location: "Kenya Re towers, Upper Hill Ground Floor, Nairobi ",
    email: "edutr@court.go.ke",
  },
  {
    id: 7,
    // image:ENERGYANDPETROLEUMTRIBUNAL,
    name: "Energy And Petroleum Tribunal",
    telephone: "0769730952",
    address: "Nairobi",
    location: "Kenya Re towers, Upper Hill Ground Floor, Nairobi,",
    email: "energytr@court.go.ke",
  },
  {
    id: 8,
    // image:FINANCIALCENTRETRIBUNAL,
    name: "Financial Center Tribunal",
    telephone: "0795516827",
    address: "Nairobi",
    location: `Kenya Re towers, Upper Hill Ground Floor, Nairobi, `,
    email: `fct@court.go.ke`,
  },
  {
    id: 9,
    // image:HIVANDAIDSTRIBUNAL,
    name: "Hiv And Aids Tribunal",
    telephone: "0769729572",
    address: "Nairobi",
    location: "Re-insurance Plaza, 12th Floor, Nairobi.",
    email: "hivtr@court.go.ke",
  },
  {
    id: 10,
    // image:INDUSTRIALPROPERTYTRIBUNAL,
    name: "Industrial Property Tribunal",
    telephone: "0769731276",
    address: "Nairobi",
    location: "Weights & Measures Building, South C",
    email: "ipttr@court.go.ke",
  },
  {
    id: 11,
    // image:LANDACQUISITIONTRIBUNAL,
    name: "Land Acquisition Tribunal",
    telephone: "0795516951",
    address: "Nairobi",
    location: `Kenya Re towers, Upper Hill Ground Floor, Nairobi, `,
    email: `lat@court.go.ke`,
  },
  {
    id: 12,
    // image:LEGALEDUCATIONAPPEALSTRIBUNAL,
    name: "Legal Education Appeals Tribunal",
    telephone: "0795516534",
    address: "Nairobi",
    location: "Kenya Re Towers Upper Hill, 10th Floor, Nairobi,",
    email: "leat@court.go.ke",
  },
  {
    id: 13,
    // image:MICROANDSMALLENTERPRISESTRIBUNAL,
    name: "Micro and Small Enterprises Tribunal",
    telephone: "0795516894",
    address: "Nairobi",
    location: "Kenya Re towers, Upper Hill Ground Floor, Nairobi,",
    email: "msetr@court.go.ke",
  },
  {
    id: 14,
    // image:NATIONALCIVILAVIATIONADMINISTRATIVEREVIEWTRIBUNAL,
    name: "National Civil Aviation Administrative Review Tribunal",
    telephone: "0769730305",
    address: "Nairobi",
    location: "Transcom House, 3rd Floor, Ngong Road",
    email: "ncaartr@court.go.ke",
  },
  {
    id: 15,
    // image:NATIONALENVIRONMENTTRIBUNAL,
    name: "National Environment Tribunal",
    telephone: "0769729869",
    address: "Nairobi",
    location: `Ministry of Environment South C. `,
    email: "nettr@court.go.ke",
  },
  {
    id: 16,
    // image:NATIONALEXAMINATIONAPPEALSTRIBUNAL,
    name: "National Examination Appeals Tribunal",
    telephone: "0769731389",
    address: "Nairobi",
    location: `
    "Kenya Re towers, Upper Hill Ground Floor, Nairobi"`,
    email: `neat@court.go.ke`,
  },
  {
    id: 17,
    // image:POLITICALPARTIESDISPUTESTRIBUNAL,
    name: "Political Parties Disputes Tribunal",
    telephone: "0769730761",
    address: "Nairobi",
    location: `Milimani Law Courts, ground Floor, Chamber 31`,
    email: "ppdttr@court.go.ke",
  },
  {
    id: 18,
    // image:PUBLICPRIVATEPARTNERSHIPPETITIONCOMMITTEE,
    name: "Public Private Partnership Petition Committee",
    telephone: "0795516931",
    address: "Nairobi",
    location: `Kenya Re towers, Upper Hill - Ground Floor, Nairobi, `,
    email: "ppppctr@court.go.ke",
  },
  {
    id: 19,
    // image:RENTRESTRICTIONTRIBUNAL,
    name: "Rent Restriction Tribunal",
    telephone: "0769731281",
    address: "Nairobi",
    location: `Crescent House,Moktar Daddah Street `,
    email: `rrttr@court.go.ke`,
  },
  {
    id: 20,
    // image:RENTRESTRICTIONTRIBUNAL,
    name: "Retirements Benefits Appeals Tribunal",
    telephone: "0769729869",
    address: "Nairobi",
    location: `Kenya Re towers, Upper Hill Ground Floor, Nairobi`,
    email: `rbat@court.go.ke`,
  },
  {
    id: 21,
    // image:SPORTSDISPUTESTRIBUNAL,
    name: "Sports Disputes Tribunal",
    telephone: "0769887787",
    address: "Nairobi",
    location: `Kenya Re towers, Upper Hill Ground Floor, Nairobi`,
    email: `sportstribunal@court.go.ke`,
  },
  {
    id: 22,
    // image:STANDARDSTRIBUNAL,
    name: "Standards Tribunal",
    telephone: "0769729983",
    address: "Nairobi",
    location: `KIRDI Block ‘D’, door ‘10’ South C`,
    email: `standardstr@court.go.ke`,
  },
  {
    id: 23,
    // image:TRANSPORTLICENSINGAPPEALSBOARD,
    name: "Transport Licencing Appeals Board Tribunal",
    telephone: "0799000584",
    address: "Nairobi",
    location: `Transcom House, 2nd Floor, Room 227, Nairobi`,
    email: `ceo.tlab@gmail.com, tlabtr@court.go.ke`,
  },
  {
    id: 24,
    // image:TAXAPPEALSTRIBUNAL,
    name: "Tax Appeals Tribunal",
    telephone: "0769729869",
    address: "Nairobi",
    location: `Kenya Re towers, Upper Hill Ground Floor, Nairobi`,
    email: `taxappealstr@court.go.ke or taxtribunalcbc@gmail.com`,
  },
  {
    id: 25,
    // image:WATERTRIBUNAL,
    name: "Water Tribunal",
    telephone: "0769730952",
    address: "Nairobi",
    location: `Kenya Re towers, Upper Hill Ground Floor, Nairobi,`,
    email: `watertr@court.go.ke`,
  },
];

// data used in the know all your tribunals component
export const tribunalsInfo = [
  {
    id: 1,
    image: BusinessTribunal,
    tribunalNmae: "Business Tribunal",
    description: `Business Premises Rent Tribunal is established under section 11 of
    the Landlord and Tenants (Shops, Hotels & Catering Establishments)
    Act, Cap.301 Laws of Kenya.`,
    membersNo:
      "a Chairperson, and not less than fifteen (15) but not more than twenty (20) other members with not less than five (5) and not more than nine (9) shall be the Advocates of the high Court.",
    chairman: "Hon. Cyprian Mugambi Ngutari",
    members: [
      {
        id: 1,
        memberName: "Hon. Joyce W. Murigi",
      },
      {
        id: 2,
        memberName: "Hon. Patricia May Mugambi",
      },
      {
        id: 3,
        memberName: "Hon. Andrew Muma",
      },
      {
        id: 4,
        memberName: "Hon. Chege Charles Gakuhi",
      },
      {
        id: 5,
        memberName: "Hon. Jackson Rop",
      },
      {
        id: 6,
        memberName: "Hon. Mike M. Makori",
      },
      {
        id: 7,
        memberName: "Hon. Joyce Akinyi Osodo",
      },
      {
        id: 8,
        memberName: "Hon. James Wahome Ndegwa",
      },
      {
        id: 9,
        memberName: "Hon. Patrick Kiprotich Kitur",
      },
    ],
    jurisdiction: [
      {
        id: 1,
        jurisdictionName:
          "To protect the Tenant from arbitrary eviction and exploitation",
      },
      {
        id: 2,
        jurisdictionName:
          "To ensure that the Landlord gets returns from his investments",
      },
      {
        id: 3,
        jurisdictionName:
          "Timely hearing and determination of tenancy disputes in controlled tenancies",
      },
      {
        id: 4,
        jurisdictionName:
          "To create a conducive environment for business to thrive",
      },
      {
        id: 5,
        jurisdictionName:
          "To handle termination of tenancies in business premises under controlled tenancies.",
      },
      {
        id: 6,
        jurisdictionName:
          "to issue orders for levying distress in business premises under controlled tenancies.",
      },
    ],
    location: " Kenya Re towers, Upper Hill Ground Floor, Nairobi",
    email: "Email:-bprttr@court.go.ke",
  },
  {
    id: 2,
    image: CopyrightTribunal,
    tribunalNmae: "Copyright Tribunal",
    description: `The Copyright Tribunal is established under section 48 of
the Copyright Act, Cap 130, Laws of Kenya`,
    membersNo: "not less than three and not more than five persons.",
    chairman: "Hon. Elizabeth Mkamboi Lenjo-©",
    members: [
      {
        id: 1,
        memberName: "Hon. Helen Kiende Mungania",
      },
      {
        id: 2,
        memberName: "Hon. Wilfred Ogot Lusi",
      },
      {
        id: 3,
        memberName: "Hon. Caroline Apiyo Omaya",
      },
      {
        id: 4,
        memberName: "Hon. Joseph Ndungu Kihanya",
      },
    ],
    jurisdiction: [
      {
        id: 1,
        jurisdictionName: "dispute over registration of copyright.",
      },
      {
        id: 2,
        jurisdictionName:
          "appeals from any person aggrieved by a decision of the Kenya Copyright Board (the Board”) regarding;",
      },
    ],
    location: "Kenya Re towers, Upper Hill Ground Floor, Nairobi",
    email: "Email:-copyright@court.go.ke",
  },
  {
    id: 3,
    image: COMMUNICATIONSANDMULTIMEDIAAPPEALSTRIBUNAL,
    tribunalNmae: "Communication And Multimedia Appeals Tribunal",
    description: `The Tribunal is established under Section 102 of the Kenya
    Information and communication Act No. 2 of 1998, Laws of Kenya`,
    membersNo: `the Tribunal shall consist of not more than seven
    members inclusive of the Chairperson`,
    chairman: "Hon. Rosemary Wacera Kuria",
    members: [
      {
        id: 1,
        memberName: "Ruth Adhiambo Okowa",
      },
      {
        id: 2,
        memberName: "Patience Nyange",
      },
      {
        id: 3,
        memberName: "Timothy Tororey",
      },
      {
        id: 4,
        memberName: "Vivienne Atieno",
      },
      {
        id: 5,
        memberName: "Dr. Solomon Wambua Kitonyi",
      },
      {
        id: 6,
        memberName: "Tiberius Nyangau Manyura",
      },
    ],
    jurisdiction: [
      {
        id: 1,
        jurisdictionName: `Complaints from an aggrieved person against any publications
        or conduct of a journalist or media enterprise;`,
      },
      {
        id: 2,
        jurisdictionName: `Appeals from an aggrieved person against decisions and/or
        actions of the Media council or the Communications Authority
        of Kenya (‘the Authority);`,
      },
      {
        id: 3,
        jurisdictionName: `Complaints by any citizen who is aggrieved by an action or
        decision of licensees who are telecommunications service
        providers under the Kenya Information and Communications
        Act.`,
      },
    ],
    // qrcode:camataqr,
    location: "Kenya Re towers, Upper Hill Ground Floor, Nairobi",
    email: "Email:-camat@court.go.ke",
  },
  {
    id: 4,
    image: COMPETITIONTRIBUNAL,
    tribunalNmae: "Competition Tribunal",
    description: `The Tribunal is established under Section 71 of the Competition Act
    No. 12 of 2010, Cap 504, Laws of Kenya. `,
    membersNo: `it is composed of a Chairperson and not less than two
    members and not more than four other members.`,
    chairman: "Hon. Daniel Ochieng Ogola",
    members: [
      {
        id: 1,
        memberName: "Hon. Valentine Mwende",
      },
      {
        id: 2,
        memberName: "Hon. Odongo Mark Okeyo",
      },
      {
        id: 3,
        memberName: "Hon. Hillary Marrimoi",
      },
      {
        id: 4,
        memberName: "Hon. Raymond Nyamweya",
      },
    ],
    jurisdiction: [
      {
        id: 1,
        jurisdictionName: `Matters referred to it for review of the Competition Authority’s
        decision on mergers and acquisition under the Act;`,
      },
      {
        id: 2,
        jurisdictionName: `Appeals from the decisions of the Authority;`,
      },
      {
        id: 3,
        jurisdictionName: `Any other matter arising under the Act; and`,
      },
      {
        id: 4,
        jurisdictionName: `Any other matter referred to it by a competent court of law`,
      },
    ],
    location: "Kenya Re-Towers, 10th Floor, Upper Hill ",
    email: "Email:-cttr@court.go.ke",
  },
  {
    id: 5,
    image: COOPERATIVETRIBUNAL,
    tribunalNmae: "Co-operative Tribunal",
    description: `This Tribunal is established under Section 77 of the Cooperative
    Societies Act No. 490 (Revised in 2012), Laws of Kenya. `,
    membersNo: ` of the members of the Tribunal
    • it is composed of seven members inclusive of a
    Chairperson and a Deputy Chairperson.`,
    chairman: "Hon. Beatrice Kimemia-©",
    members: [
      {
        id: 1,
        memberName: "Hon. Mwatsama Janet Mjeni-(vc)",
      },
      {
        id: 2,
        memberName: "Hon. Paul Otieno Aol",
      },
      {
        id: 3,
        memberName: "Hon. Michael Chesikaw",
      },
      {
        id: 4,
        memberName: "Hon. Fridah Lotuiya",
      },
      {
        id: 5,
        memberName: "Hon. Beatrice Sawe",
      },
    ],
    jurisdiction: [
      {
        id: 1,
        jurisdictionName: `The tribunal shall have unlimited geographical and pecuniary
        jurisdiction in matters of co-operative disputes among members,
        past members and persons claiming through members, past
        members and deceased members; or between members, past
        members or deceased members, and the society, its committee
        or any officer of the society, or between the society and any other
        co-operative society.`,
      },
    ],
    location: "Re-insurance Plaza, Taifa Road-Nairobi CBD, 11th & 12th Floor ",
    email: "Email:-coptr@court.go.ke",
  },
  {
    id: 6,
    image: EDUCATIONAPPEALSTRIBUNAL,
    tribunalNmae: "Education Appeals Tribunal",
    description: `The Tribunal is established under Section 93 of Basic Education
    Act No. 14 of 2013 (Revised 2017), Laws of Kenya. `,
    membersNo: 7,
    chairman: "",
    members: [
      {
        id: 1,
        memberName: "",
      },
      {
        id: 2,
        memberName: "",
      },
      {
        id: 3,
        memberName: "",
      },
      {
        id: 4,
        memberName: "",
      },
      {
        id: 5,
        memberName: "",
      },
      {
        id: 6,
        memberName: "",
      },
    ],
    jurisdiction: [
      {
        id: 1,
        jurisdictionName: `
         discrimination in relation to colour, gender, age, tribe,
        disability and religion among others;`,
      },
      {
        id: 2,
        jurisdictionName: `denial of examinations/examination certificates;`,
      },
      {
        id: 3,
        jurisdictionName: `over charging of school fees;`,
      },
      {
        id: 4,
        jurisdictionName: `denial of admission to school;`,
      },
      {
        id: 5,
        jurisdictionName: `hindrances to learning (unfair exclusion of learners);`,
      },
      {
        id: 6,
        jurisdictionName: `examination malpractices.`,
      },
      {
        id: 7,
        jurisdictionName: `deregistration of school;`,
      },
      {
        id: 8,
        jurisdictionName: `corporal punishment;`,
      },
      {
        id: 9,
        jurisdictionName: `gender based violence (bulling);`,
      },
      {
        id: 10,
        jurisdictionName: `encroaching, grabbing and settling in school land; `,
      },
    ],
    location: "Kenya Re towers, Upper Hill Ground Floor, Nairobi ",
    email: "Email:-edutr@court.go.ke",
  },
  {
    id: 7,
    image: ENERGYANDPETROLEUMTRIBUNAL,
    tribunalNmae: "Energy And Petroleum Tribunal",
    description: `The Energy and Petroleum Tribunal is established under Section 25
    of the Energy Act, No. 1 of 2019, Laws of Kenya. `,
    membersNo: ` of members of the Tribunal
    • it is composed of seven (7) members, inclusive of the
    Chairperson.`,
    chairman: "Hon. Kioko Kilukumi",
    members: [
      {
        id: 1,
        memberName: "Hon. Doris Kinya Mwirigi-(vc)",
      },
      {
        id: 2,
        memberName: "Hon. Buge Hatibu Wasioya",
      },
      {
        id: 3,
        memberName: "Hon. Feisal Shariff Ibrahim",
      },
    ],
    jurisdiction: [
      {
        id: 1,
        jurisdictionName: `
        disputes between a licensee and a third party;`,
      },
      {
        id: 2,
        jurisdictionName: `disputes between licensees;`,
      },
      {
        id: 3,
        jurisdictionName: `appeals against decisions of Energy and Petroleum
        Regulatory Authority (‘the Authority’) and any licensing
        authority; and`,
      },
      {
        id: 4,
        jurisdictionName: `any matter referred to it relating to the energy and
        petroleum sector arising under the Act.`,
      },
    ],
    // qrcode:energy,
    location: "Kenya Re towers, Upper Hill Ground Floor, Nairobi,",
    email: "Email:-energytr@court.go.ke",
  },
  {
    id: 8,
    image: HIVANDAIDSTRIBUNAL,
    tribunalNmae: "HIV AND AIDS TRIBUNAL",
    description: `The Tribunal is established under Section 25 of the HIV and AIDS
    Prevention and Control Act No 14 of 2006 [Rev. 2012] Laws of Kenya. `,
    membersNo: ` The Chairperson and four other members`,
    chairman: "Hon. Carolyne Mboku-©",
    members: [
      {
        id: 1,
        memberName: "Hon. Nelson Wanyonyi Osiemo",
      },
      {
        id: 2,
        memberName: "Hon. Brian Ouko Yogo",
      },
      {
        id: 3,
        memberName: "Hon. Irene Njahira Mukui (Dr.)",
      },
      {
        id: 4,
        memberName: "Hon. Walter Godfrey Jaoko (prof.)",
      },
      {
        id: 5,
        memberName: "Hon. Solomon Musani (Dr.)",
      },
      {
        id: 6,
        memberName: "Hon. Jane Ngoiri Nganda",
      },
    ],
    jurisdiction: [
      {
        id: 1,
        jurisdictionName: `
        complaints arising out of any breach of the provisions of the
Act;`,
      },
      {
        id: 2,
        jurisdictionName: `complaints from discrimination on account of one’s HIV
        status including discrimination in employment, workplace, schools and educational institutions;`,
      },
      {
        id: 3,
        jurisdictionName: `restriction on in country travels including entry and exit,
        abode and lodging based on HIV status; `,
      },
      {
        id: 4,
        jurisdictionName: `isolation and quarantine based on HIV status;`,
      },
      {
        id: 5,
        jurisdictionName: `denial, related inhibition or exclusion from elective position
        based on HIV status;`,
      },
      {
        id: 6,
        jurisdictionName: `denial of access to credit;`,
      },
      {
        id: 7,
        jurisdictionName: `mandatory testing;`,
      },
      {
        id: 8,
        jurisdictionName: `Denial of accident, medical and life insurance`,
      },
    ],
    location: "Re-insurance Plaza, 12th Floor, Nairobi.",
    email: "Email:-hivtr@court.go.ke",
  },
  {
    id: 9,
    image: INDUSTRIALPROPERTYTRIBUNAL,
    tribunalNmae: "INDUSTRIAL PROPERTY TRIBUNAL",
    description: `The Tribunal is established under Section 113 of the Industrial
    Property Act, 2001, Laws of Kenya.`,
    membersNo: 7,
    chairman: "Hon. Brown Murungi Kairaria-©",
    members: [
      {
        id: 1,
        memberName: "Hon. Pauline Mudesh",
      },
      {
        id: 2,
        memberName: "Hon. Betty Chepngetich Bii",
      },
      {
        id: 3,
        memberName: "Hon. Michael Muchemi Ndegwa",
      },
    ],
    jurisdiction: [
      {
        id: 1,
        jurisdictionName: `
        The Tribunal has appellate jurisdiction which involves hearing
appeals from the decisions of the Managing Director of the Kenya
Industrial Property Institute (KIPI) regarding different areas of
intellectual property namely patents, industrial designs, utility
models, technovations and semiconductor technologies.`,
      },
    ],
    location:
      "Weights & Measures Building, Popo road, off Mombasa Road, South C",
    email: "Email:-ipttr@court.go.ke",
  },
  {
    id: 10,
    image: LEGALEDUCATIONAPPEALSTRIBUNAL,
    tribunalNmae: "LEGAL EDUCATION APPEALS TRIBUNAL",
    description: `The Tribunal is established under Section 29(1) of the Legal
    Education Act No.27 of 2012, [ Rev. 2015] Laws of Kenya. `,
    membersNo: ` it is composed of;
    • a Chairperson,one person who shall be an Advocate of the High Court of
    Kenya of at least seven years standing,three persons who demonstrate legal competence; and
    • a Registrar who shall be an advocate of the High Court
    with at least five years’ experience.`,
    chairman: "Hon. Rose W.N Mbanya-©",
    members: [
      {
        id: 1,
        memberName: "Hon. Stephen Gitonga",
      },
      {
        id: 2,
        memberName: "Hon. Raphael Kigamwa",
      },

      {
        id: 3,
        memberName: "Hon. Eunice Arwa",
      },
    ],
    jurisdiction: [
      {
        id: 1,
        jurisdictionName: `
        The Tribunal hears appeals made to it by any aggrieved person
against the decisions of the Council of Legal Education or any
committee or officer of the Council or any matter relating to the
Legal Education Act. Appeals from a decision of the Council to;`,
      },
      {
        id: 2,
        jurisdictionName: `Refuse to grant a license;`,
      },
      {
        id: 3,
        jurisdictionName: `Impose conditions; `,
      },
      {
        id: 4,
        jurisdictionName: `isolation and quarantine based on HIV status;`,
      },
      {
        id: 5,
        jurisdictionName: `Suspend or revoke a license`,
      },
    ],
    location: "Kenya Re Towers Upper Hill, 10th Floor, Nairobi,",
    email: "Email:-leat@court.go.ke",
  },
  {
    id: 11,
    image: MICROANDSMALLENTERPRISESTRIBUNAL,
    tribunalNmae: "MICRO AND SMALL ENTERPRISES TRIBUNAL",
    description: `The Tribunal is established under Section 54 of the Micro and Small
    Enterprises Act, 2012, Laws of Kenya. `,
    membersNo: ` it is composed of;
     a Chairperson and a Vice-Chairperson,
     an Advocate of the High Court of Kenya, with experience of
    not less than seven years,
     two Advocates with expertise in micro and small enterprises
    matters; and,
    two persons who have demonstrated exemplary competence
    in the field of micro and small enterprises management.`,
    chairman: "Hon. Dr. Bett Jackson Kiprotich-©",
    members: [
      {
        id: 1,
        memberName: "Hon. Robert Katina-(vc)",
      },
      {
        id: 2,
        memberName: "Hon. Joseph Maloba Were",
      },
      {
        id: 3,
        memberName: "Hon. Annete Gikuya",
      },
      {
        id: 4,
        memberName: "Hon. Alvin Kibet Kirui",
      },
      {
        id: 5,
        memberName: "Hon. Joseph Korir Biwott",
      },
    ],
    jurisdiction: [
      {
        id: 1,
        jurisdictionName: `
        Dispute involving micro and small enterprises;`,
      },
      {
        id: 2,
        jurisdictionName: `Commercial disputes involving micro and small
        enterprises;`,
      },
      {
        id: 3,
        jurisdictionName: `Failure to comply with the terms and conditions
        of allocation of worksites; `,
      },
      {
        id: 4,
        jurisdictionName: `Election and management of associations;`,
      },
      {
        id: 5,
        jurisdictionName: `Failure to comply with the constitution or rules
        of a micro and small enterprise association or
        umbrella organisation;`,
      },
      {
        id: 6,
        jurisdictionName: `Unprocedural and illegal allocation, subdivision,
        subletting of a micro and small enterprise
        worksite;`,
      },
      {
        id: 7,
        jurisdictionName: `Mismanagement and misappropriation of
        funds;`,
      },
      {
        id: 8,
        jurisdictionName: `Any other dispute acceptable by the Tribunal;`,
      },
      {
        id: 9,
        jurisdictionName: `Appeals from decisions made by the Micro and
        small Enterprises Authority`,
      },
      {
        id: 10,
        jurisdictionName: `Appeals arising from decisions by the Registrar
        and/or the CEO of the Authority.`,
      },
      {
        id: 11,
        jurisdictionName: `certifying documents;`,
      },
      {
        id: 12,
        jurisdictionName: `giving directions on point of law, or matters of unusual
        importance or complexity referred to it by the Micro and
        Small Enterprises Authority.`,
      },
    ],
    location: "Kenya Re towers, Upper Hill Ground Floor, Nairobi,",
    email: "Email:-msetr@court.go.ke",
  },
  {
    id: 12,
    image: NATIONALCIVILAVIATIONADMINISTRATIVEREVIEWTRIBUNAL,
    tribunalNmae: "NATIONAL CIVIL AVIATION ADMINISTRATIVE REVIEW TRIBUNAL",
    description: `The Tribunal is established under Section 66 of the Civil Aviation
    Act No. 21 of 2013 (Revised in 2014).`,
    membersNo: ` it is composed of;
     a Chairperson;
     a Deputy Registrar of the Judiciary; and
     Four other persons with management and technical
    experience of not less than ten years in the field of civil aviation.`,
    chairman: "Hon. Dr. Njaramba Gichuki-©",
    members: [
      {
        id: 1,
        memberName: "Hon. Valentine Khaminwa Vice Chair",
      },
      {
        id: 2,
        memberName: "Hon. Peter Muholi-Tribunal Deputy Registrar",
      },
      {
        id: 3,
        memberName: "Hon. Hassan Issack",
      },
      {
        id: 4,
        memberName: "Hon. John Kiplagat Kiili",
      },
      {
        id: 5,
        memberName: "Hon. John Ekale",
      },
    ],
    jurisdiction: [
      {
        id: 1,
        jurisdictionName: `
        grant variation, suspension, revocation, denial or imposition
        of limitation a license, a certificate or approval the Act or
        regulation;`,
      },
      {
        id: 2,
        jurisdictionName: `any fees to be paid under the Act or regulation;`,
      },
      {
        id: 3,
        jurisdictionName: `consumer protection: rights violation, deceptive practice,
        ticket refund, baggage liability, fight delay;  `,
      },
      {
        id: 4,
        jurisdictionName: `Enforcement actions including denial or delayed services`,
      },
    ],
    location: "Transcom House, 3rd Floor, Ngong Road",
    email: "Email:-ncaartr@court.go.ke",
  },
  {
    id: 13,
    image: NATIONALENVIRONMENTTRIBUNAL,
    tribunalNmae: "NATIONAL ENVIRONMENT TRIBUNAL",
    description: `The National Environment Tribunal is established under Section 125
    of the Environmental Management and Coordination Act (EMCA) of
    1999, Laws of Kenya.`,
    membersNo: ` it is composed of;
     a Chairperson;
    an Advocate of the High Court of Kenya;
     a Lawyer with professional qualification in environmental
    law; and
    three persons with demonstrated competence in
    environmental matters including but not limited to land, energy,
    mining, water, forestry, wildlife and maritime affairs.`,
    chairman: "Hon. Emmanuel Mumia-Ag. C",
    members: [
      {
        id: 1,
        memberName: "Hon. Ronald O. Allamano",
      },
      {
        id: 2,
        memberName: "Hon. Winnie Tsuma",
      },
      {
        id: 3,
        memberName: "Hon. Duncan Mwangi Kuria",
      },
    ],
    jurisdiction: [
      {
        id: 1,
        jurisdictionName: `
        Hearing appeals on environmental matters`,
      },
      {
        id: 2,
        jurisdictionName: `Giving NEMA directions on complex maters`,
      },
      {
        id: 3,
        jurisdictionName: `Power to appoint Environmental Assessors  `,
      },
      {
        id: 4,
        jurisdictionName: `Hearing and determination of appeals on forestry matters`,
      },
      {
        id: 5,
        jurisdictionName: `Hearing and determination of appeals on wildlife matters`,
      },
    ],
    location: `Ministry of Environment Department of Resource Surveys and
    Remote Sensing (DRSRS, Popo Road, South C (Belle Vue). `,
    email: "Email:-nettr@court.go.ke",
  },
  {
    id: 14,
    image: POLITICALPARTIESDISPUTESTRIBUNAL,
    tribunalNmae: "POLITICAL PARTIES DISPUTES TRIBUNAL",
    description: `The Political Parties Disputes Tribunal is established under Section
    39 of the Political Parties Act No. 11 of 2011, Laws of Kenya. `,
    membersNo: ` it is composed of;
     a Chairperson;
     six other persons, 3 (three) of whom shall be Advocates
    of the High Court of Kenya of seven years standing and 3
    (three) other professionals with outstanding governance,
    administrative, social, political, economic and other record;
     a Vice-Chairperson shall be appointed from among the
    three advocates as stated above.`,
    chairman: "Hon. Ms. Desma Atieno Nungo-©",
    members: [
      {
        id: 1,
        memberName: "Hon. Mutubwa Wilfred Akhonya",
      },
      {
        id: 2,
        memberName: "Hon. Kiragu Gad Gathu",
      },
      {
        id: 3,
        memberName: "Hon. Theresa Jepkemei Chepkwony",
      },
      {
        id: 4,
        memberName: "Hon. Musau Stephen",
      },
      {
        id: 5,
        memberName: "Hon. Muzna Mohamed Yusuf Jin",
      },
      {
        id: 6,
        memberName: "Hon. Abdirahman Adan Abdikadir",
      },
    ],
    jurisdiction: [
      {
        id: 1,
        jurisdictionName: `
        Members of a Political Party;`,
      },
      {
        id: 2,
        jurisdictionName: `A member of a political party and a political party;`,
      },
      {
        id: 3,
        jurisdictionName: `Political parties;  `,
      },
      {
        id: 4,
        jurisdictionName: `An independent candidate and a political party;`,
      },
      {
        id: 5,
        jurisdictionName: `Coalition partners;`,
      },
      {
        id: 6,
        jurisdictionName: `Appeals from the decisions of the Registrar of political
        parties under the Act;`,
      },
      {
        id: 7,
        jurisdictionName: `Disputes arising out of party primaries.`,
      },
    ],
    location: `Milimani Law Courts, ground Floor, Chamber 31, P.O.BOX 47382 `,
    email: "Email:-ppdttr@court.go.ke",
  },
  {
    id: 15,
    image: PUBLICPRIVATEPARTNERSHIPPETITIONCOMMITTEE,
    tribunalNmae: "PUBLIC PRIVATE PARTNERSHIP PETITION COMMITTEE",
    description: `It is established under Section 75 (1) of the Public Private
    Partnerships Act No. 14 of 2021. `,
    membersNo: ` it is composed of;
     a Chairperson;
     four other persons with such relevant knowledge and
    experience;
     two persons possessing relevant knowledge and
    experience;
     the Cabinet Secretary shall designate a public officer to
    serve as the Secretary to the Committee.`,

    chairman: "Hon. Prof. Githu Muigai (Prof)-©",
    members: [
      {
        id: 1,
        memberName: "Hon. Mohamed Abbey Mohamed",
      },
      {
        id: 2,
        memberName: "Hon. Eunice Lumallas",
      },
      {
        id: 3,
        memberName: "Hon. Sadick Mustapha Doufa",
      },
      {
        id: 4,
        memberName: "Hon. Irene Moraa Ogamba",
      },
      {
        id: 5,
        memberName: "Hon. Eunice Daritsu Fedha",
      },
      {
        id: 6,
        memberName: "Hon. Janice Kotut",
      },
    ],
    jurisdiction: [
      {
        id: 1,
        jurisdictionName: `
        The Tribunal is mandated to determine appeals from any aggrieved
        person against the decisions by the committee, Directorate or a
        contracting Authority under this Act.`,
      },
      {
        id: 2,
        jurisdictionName: `The Tribunal has the mandate to review the decisions from
        an aggrieved person against the Committee, Directorate or a
        Contracting Authority regarding a tender process or project
        management.`,
      },
    ],
    location: `Kenya Re towers, Upper Hill - Ground Floor, Nairobi, `,
    email: "Email:-ppppctr@court.go.ke",
  },
  {
    id: 16,
    image: RENTRESTRICTIONTRIBUNAL,
    tribunalNmae: "RENT RESTRICTION TRIBUNAL",
    description: `The Tribunal is established under Section 4 of the Rent Restriction
    Act Cap 296, Laws of Kenya.  `,
    membersNo: ` it is composed of the Chairperson and a Vice- chairperson
    and a panel of members distributed across 10 regions in
    Kenya.`,
    chairman: "Hon. Hillary K. Korir-©",
    members: [
      {
        id: 1,
        memberName: "Hon. Janice Kagendo Ikingi-(vc)",
      },
      {
        id: 2,
        memberName: "Hon. Lorna Lusina",
      },
      {
        id: 3,
        memberName: "Hon. Michael Sande Dallah",
      },
      {
        id: 4,
        memberName: "Hon. Yusuf Abdi Juma",
      },
      {
        id: 5,
        memberName: "Hon. Dorothy Nyaga",
      },
    ],
    jurisdiction: [
      {
        id: 1,
        jurisdictionName: `
        to determine disputes between Landlords and Tenants for
dwelling houses which have standard rent not exceeding
Kshs. 2,500;`,
      },
      {
        id: 2,
        jurisdictionName: `to make provisions for regulating the increase of rent,
        right of possession, the exaction of premiums and fixing of
        standard rents in relation to controlled residential premises
        and for other purposes incidental thereto or connected
        with the relationship of Landlord and Tenant of a dwelling
        house;`,
      },
      {
        id: 3,
        jurisdictionName: `to resolve disputes between landlords and tenants of
        controlled residential tenancies in relation to service
        charge, repairs of house, recovery or rent arrears, refund
        of deposits, eviction, recovery of possession;  `,
      },
      {
        id: 4,
        jurisdictionName: `assessment and determination of standard rents of
        residential premises; `,
      },
      {
        id: 5,
        jurisdictionName: `investigation of complaints where the provisions of the
        Rent Restriction Act have been flouted.`,
      },
    ],
    location: `Crescent
    House,
    Moktar
    Daddah
    Street `,
    email: `Email:-rrttr@
    court.go.ke`,
  },
  {
    id: 17,
    image: SPORTSDISPUTESTRIBUNAL,
    tribunalNmae: "SPORTS DISPUTES TRIBUNAL",
    description: `It is established under Section 55 of Sports Act No. 25 of 2013 and
    Section 31 of the Anti-Doping Act No. 5 of 2016   `,
    membersNo: ` it is composed of;
    a Chairperson;
     two members who must be Advocates of the High Court
    of Kenya with at least 7(seven) years standing and with
    experience in legal matters related to sports;
     at least 2(two) and not more than 6(six) other persons who
    have experience in sport in any capacity of at least 10(ten)
    years.`,
    chairman: "Hon. John Morris Ohaga-©",
    members: [
      {
        id: 1,
        memberName: "Hon. Elynah Wanyika Sifuna Shiveka",
      },
      {
        id: 2,
        memberName: "Hon. Jane Njeri Onyango",
      },
      {
        id: 3,
        memberName: "Hon. Ouko Gabriel John Ohanya",
      },
      {
        id: 4,
        memberName: "Hon. Peter Ochieng Anyango",
      },
      {
        id: 5,
        memberName: "Hon. Gichuru Edmond Kiplagat",
      },
      {
        id: 6,
        memberName: "Hon. Allan Mola Owinyi",
      },
      {
        id: 7,
        memberName: "Hon. Murunga Benard Wafula Munyefu",
      },
    ],
    jurisdiction: [
      {
        id: 1,
        jurisdictionName: `
        In sports related matters,`,
      },
      {
        id: 2,
        jurisdictionName: `In doping cases, the Tribunal hears and determines all
        cases on anti-doping rule violations on the part of athletes
        and athlete support personnel and matters of compliance
        of sports organisations as per the Anti- Doping Act.
        Tribunal shall not have jurisdiction over Appeals involving
        International Level athletes or arising from the participation
        in International Events or national crimes related to doping`,
      },
    ],
    // qrcode:sportsqr,
    location: `Kenya Re towers, Upper Hill Ground Floor, Nairobi`,
    email: `Email:-sportstribunal@court.go.ke`,
  },
  {
    id: 18,
    image: STANDARDSTRIBUNAL,
    tribunalNmae: "STANDARDS TRIBUNAL",
    description: `The Tribunal is established under Section 16A of the Standards Act
    Cap 496 Laws of Kenya.   `,
    membersNo: ` it is composed of five members inclusive of the
    Chairperson.
    • the Minister shall appoint a legal officer from the Attorney
    General’s chambers as the Secretary of the Tribunal.`,
    chairman: "Hon. Gladys Muthoni Mburu-©",
    members: [
      {
        id: 1,
        memberName: "Hon. Peter Mungai",
      },
      {
        id: 2,
        memberName: "Hon. Moses Sande Makhandia",
      },
      {
        id: 3,
        memberName: "Hon. Adrian Onginjo Opiyo",
      },
    ],
    jurisdiction: [
      {
        id: 1,
        jurisdictionName: `
        hear appeals from any person aggrieved by a decision of
the Kenya Bureau of Standards (KEBS) or the National Standard
Council including:`,
      },
      {
        id: 2,
        jurisdictionName: `act as a point of reference to the Managing Director of
        Kenya Bureau of Standards by giving directions to the Director on
        matters involving a point of law or matters of unusual importance
        or complexity upon reference to it by the Director.`,
      },
      {
        id: 3,
        jurisdictionName: `Hear appeals from any accredited conformity assessment
        body that is dissatisfied and aggrieved by any decisions made by
        the Kenya Accreditation Service (KENAS).`,
      },
    ],
    location: `KIRDI Block ‘D’, door ‘10’
    Popo Road, Belle Vue, Off Mombasa Road, South C, Nairobi`,
    email: `Email:-standardstr@court.go.ke`,
  },
  {
    id: 19,
    image: TRANSPORTLICENSINGAPPEALSBOARD,
    tribunalNmae: "TRANSPORT LICENSING APPEALS BOARD",
    description: `This Tribunal is established under Section 38 and 39 of the National
    Transport and Safety Authority Act No. 33 of 2012 (Revised on 2014),
    Laws of Kenya.  `,
    membersNo: ` The Appeals Board shall consist of a chairperson and four
    other members appointed by the Cabinet Secretary.`,
    chairman: "Hon. Adrian Kamotho Njenga-©",
    members: [
      {
        id: 1,
        memberName: "Hon. Joseph Mcdonald Oduor",
      },
      {
        id: 2,
        memberName: "Hon. Maryan Hajir Abdikadir",
      },
      {
        id: 3,
        memberName: "Hon. Lilian Waithira Muiruri",
      },
      {
        id: 4,
        memberName: "Hon. James Nthiooi Ngomeli",
      },
    ],
    jurisdiction: [
      {
        id: 1,
        jurisdictionName: `
        To hear appeals against decisions of the National Transport and
Safety Authority (NTSA) relating to:
issuance of a license;
 revoking a license; and
suspending a license`,
      },
    ],
    location: `Transcom House, 2nd Floor, Room 227, Nairobi`,
    email: `Email:-ceo.tlab@gmail.com, tlabtr@court.go.ke`,
  },
  {
    id: 20,
    image: TAXAPPEALSTRIBUNAL,
    tribunalNmae: "TAX APPEALS TRIBUNAL",
    description: `This Tribunal is established under Section 3 of the Tax Appeals
    Tribunal Act No. 40 of 2013, Laws of Kenya. `,
    membersNo: ` A Chairperson, and not less than fifteen (15) but not more than
    twenty (20) other members with not less than five (5) and not more
    than nine (9) who shall be Advocates of the High Court of Kenya.`,
    chairman: "Hon. Eric Nyongesa Wafula-©",
    members: [
      {
        id: 1,
        memberName: "Hon. Oluoch Rodney Odhiambo",
      },
      {
        id: 2,
        memberName: "Hon. Mutuma Robert Mugambi",
      },
      {
        id: 3,
        memberName: "Hon. Mukuha Grace Gathoni",
      },
      {
        id: 4,
        memberName: "Hon. Delilah Kadzo Ngala",
      },
      {
        id: 5,
        memberName: "Hon. Jephthah Njagi Karingo",
      },

      {
        id: 6,
        memberName: "Hon. Mayaka Cynthia Boundi",
      },

      {
        id: 7,
        memberName: "Hon. Kiprotich Kibet Abraham",
      },

      {
        id: 8,
        memberName: "Hon. Elisha Njeru",
      },

      {
        id: 9,
        memberName: "Hon. Bernadette Muthira Gitari",
      },

      {
        id: 10,
        memberName: "Hon. Ogaga Gloria Awuor",
      },

      {
        id: 11,
        memberName: "Hon. Ongeti Walter Juma",
      },

      {
        id: 12,
        memberName: "Hon. Ololchike Sankale Spenser",
      },

      {
        id: 13,
        memberName: "Hon. Diriye Abdullahi Mohamed",
      },

      {
        id: 14,
        memberName: "Hon. Terer Boniface Kibiy",
      },

      {
        id: 15,
        memberName: "Hon. Vikiru Timothy Bunyali",
      },

      {
        id: 16,
        memberName: "Hon. Dr. Komolo Erick Onyango",
      },

      {
        id: 17,
        memberName: "Hon. Makau Martin Mutiso James",
      },

      {
        id: 18,
        memberName: "HON. Kashindi George Ashiono",
      },

      {
        id: 19,
        memberName: "Hon. Ng’ang’a Eunice Njeri",
      },

      {
        id: 20,
        memberName: "Hon. Muga Christine Anyango",
      },
    ],
    jurisdiction: [
      {
        id: 1,
        jurisdictionName: `
        The Tribunal hears and determines appeals from a person who
disputes the decision(s) of the Commissioner (Kenya Revenue
Authority) on a tax matter(s) arising under the tax laws.`,
      },
    ],
    location: `Kenya Re towers, Upper Hill Ground Floor, Nairobi,`,
    email: `Email:-taxappealstr@court.go.ke or taxtribunalcbc@gmail.com`,
  },
  {
    id: 21,
    image: WATERTRIBUNAL,
    tribunalNmae: "WATER TRIBUNAL",
    description: `the Tribunal is established under Section 55 and 119 of the Water
    Act Cap 372, Laws of Kenya. `,
    membersNo: ` it is composed of only the Chairperson.`,
    chairman: "Hon. Bernard Ochoi-©",
    members: [],
    jurisdiction: [
      {
        id: 1,
        jurisdictionName: `
        appeals from any person or institution against decisions
or orders of the Cabinet Secretary, Water Resource Authority (the
Authority) and Regulatory Board`,
      },
      {
        id: 2,
        jurisdictionName: `any dispute concerning water resources or water services
        where there is a business contract.`,
      },
    ],
    location: `Kenya Re towers, Upper Hill Ground Floor, Nairobi,`,
    email: `Email:-watertr@court.go.ke`,
  },
  {
    id: 22,
    image: NATIONALEXAMINATIONAPPEALSTRIBUNAL,
    tribunalNmae: "NATIONAL EXAMINATION APPEALS TRIBUNAL",
    description: `The Tribunal is established under Section 40B of the Kenya National
    Examination Council Act No. 29 of 2012, Laws of Kenya. `,
    membersNo: ` it is composed of five members inclusive of the
    Chairperson.`,
    chairman: "Hon. Mutuma Wyne Kenneth,PhD-©",
    members: [
      {
        id: 1,
        memberName: "Hon. Fred Nyambane Oanda",
      },
      {
        id: 2,
        memberName: "Hon. Johnson Nzioka",
      },
      {
        id: 3,
        memberName: "Hon. Virginia Wahome",
      },
    ],
    jurisdiction: [
      {
        id: 1,
        jurisdictionName: `
        The Tribunal hears and determines appeals against a decision of the Council to withhold, nullify or cancel examinations
        prepared and administered by the Council.`,
      },
    ],
    location: `Kenya Re towers, Upper Hill Ground Floor, Nairobi,`,
    email: `Email:-neat@court.go.ke`,
  },
  {
    id: 23,
    image: LANDACQUISITIONTRIBUNAL,
    tribunalNmae: "LAND ACQUISITION TRIBUNAL",
    description: `The Tribunal is established under Section 133A of the Land Act
    2012, Laws of Kenya.`,
    membersNo: `it is composed of three members inclusive of the
    Chairperson.`,
    chairman: "Hon. Mr. Orina Nabil Mokaya, PhD-©",
    members: [
      {
        id: 1,
        memberName: "Hon. George Kuseyo Supeyo",
      },
    ],
    jurisdiction: [
      {
        id: 1,
        jurisdictionName: `
        the Tribunal hears and determines appeals against
decisions of the National Land Commission(commission) in
matters relating to the process of compulsory acquisition.`,
      },
    ],
    location: `Kenya Re towers, Upper Hill Ground Floor, Nairobi, `,
    email: `Email:-lat@court.go.ke`,
  },
  {
    id: 24,
    image: FINANCIALCENTRETRIBUNAL,
    tribunalNmae: "FINANCIAL CENTER TRIBUNAL",
    description: `The Tribunal is established under Section 35 of the Nairobi
    International Financial Centre Act No. 25 of 2017, Laws of Kenya.`,
    membersNo: `it is composed of five members inclusive of the
    Chairperson.`,
    chairman: "Hon. Obonyo Moses Buyuka",
    members: [
      {
        id: 1,
        memberName: "Hon. Michoma Beth Kemunto",
      },
      {
        id: 2,
        memberName: "Hon. Debra Ajwang",
      },
      {
        id: 3,
        memberName: "Hon. Kithinji Sylvia",
      },
      {
        id: 4,
        memberName: "Hon. Karumba Kinyua",
      },
    ],
    jurisdiction: [
      {
        id: 1,
        jurisdictionName: `
        The Tribunal hears and determines appeals against any decisions
        or orders of the Nairobi International Financial Centre Authority
        (Authority).`,
      },
    ],
    location: `Kenya Re towers, Upper Hill Ground Floor, Nairobi, `,
    email: `Email:-fct@court.go.ke`,
  },
  {
    id: 25,
    image: CAPITALMARKETSTRIBUNAL,
    tribunalNmae: "CAPITAL MARKETS TRIBUNAL",
    description: `The Capital Markets Tribunal is established under Section 35A of
    the Capital Market Act No. 17 of 1989, Laws of Kenya.`,
    membersNo: `The Tribunal is composed of six members inclusive of the
    Chairperson`,
    chairman: "Hon. Paul Lilan-©",
    members: [
      {
        id: 1,
        memberName: "Hon. Constance Gikonyo",
      },
      {
        id: 2,
        memberName: "Hon. Godwin Wangongu",
      },
      {
        id: 3,
        memberName: "Hon. Paul Wanga",
      },
      {
        id: 4,
        memberName: "Hon. Josephine A. Eboko",
      },
    ],
    jurisdiction: [
      {
        id: 1,
        jurisdictionName: `
        The Tribunal hears and determines appeals from any person
aggrieved by any directions or decisions given by the authority or
by the Investor Compensation Fund Board relating to;`,
      },
      {
        id: 2,
        jurisdictionName: `
        • refusing to grant a license;`,
      },
      {
        id: 3,
        jurisdictionName: `
        • imposing limitations or restrictions on a licence;`,
      },
      {
        id: 4,
        jurisdictionName: `
        • suspending or revoking a licence;`,
      },
      {
        id: 5,
        jurisdictionName: `
        refusing to approve a public offer to securities;`,
      },
      {
        id: 6,
        jurisdictionName: `
        • refusing to admit a security to the official list of a securities
exchange;`,
      },
      {
        id: 7,
        jurisdictionName: `
        •  suspending trading of a security on a securities exchange;`,
      },
      {
        id: 8,
        jurisdictionName: `
        •  requiring the removal of a security from the official list of a
        securities exchange;`,
      },
      {
        id: 9,
        jurisdictionName: `
        •  refuse to grant compensation to an investor who has
        suffered pecuniary loss resulting from failure of a licenced
        stock broker or dealer;`,
      },
    ],
    location: `
    Embankment Plaza, 3rd Floor
    Longonot Road, Upper Hill `,
    email: `Email:-`,
  },
];

export const tribunals = [
  {
    id: 1,
    name: "Business Premises Tribunal",
    cname: "dropdown-link",
    url: "/BusinessPremisesRentTribunal"
  },
    {
    id: 2,
    name: "Capital Markets Tribunal",
    cname: "dropdown-link",
    url: "/CapitalMarkets",
  },
  {
    id: 3,
    name: "Copyright Tribunal",
    cname: "dropdown-link",
    url: "/CopyrightTribunal",
  },
  {
    id: 4,
    name: "Communications and Multi Media Appeals Tribunal (CAMAT)",
    cname: "dropdown-link",
    url: "/CommunicationandMulti-MediaAppealsTribunal",
  },
  {
    id: 5,
    name: "Competition Tribunal",
    cname: "dropdown-link",
    url: "/CompetitionTribunal",
  },
  {
    id: 6,
    name: "Co-operative Tribunal",
    cname: "dropdown-link",
    url: "/CooperativeTribunal",
  },
  {
    id: 7,
    name: "Education Appeals Tribunal",
    cname: "dropdown-link",
    url: "/EducationAppealsTribunal",
  },
  {
    id: 8,
    name: "Energy and Petroleum Tribunal",
    cname: "dropdown-link",
    url: "/EnergyandPetroleumTribunal",
  },
    {
    id: 9,
    name: "Financial Centre Tribunal",
    cname: "dropdown-link",
    url: "/FinancialCenterTribunal",
  },
  {
    id: 10,
    name: "HIV and AIDS Tribunal",
    cname: "dropdown-link",
    url: "/HivandAidsTribunal",
  },
  {
    id: 11,
    name: "Industrial Property Tribunal",
    cname: "dropdown-link",
    url: "/IndustrialPropertyTribunal",
  },
    {
    id: 12,
    name: "Land Acqusition Tribunal",
    cname: "dropdown-link",
    url: "/LandAppealsTribunal",
  },
  {
    id: 13,
    name: "Legal Education Appeals Tribunal",
    cname: "dropdown-link",
    url: "/LegalEducationAppealsTribunal",
  },
  {
    id: 14,
    name: "Micro and Small Enterprises Tribunal",
    cname: "dropdown-link",
    url: "/MicroandSmallEnterprisesTribunal",
  },
  {
    id: 15,
    name: "National Civil Aviation Administrative Review Tribunal (NCAART)",
    cname: "dropdown-link",
    url: "/NationalCivilAviationAdministrativeReviewTribunal",
  },
  {
    id: 16,
    name: "National Environment Tribunal",
    cname: "dropdown-link",
    url: "/NationalEnvironmentTribunal",
  },
    {
    id: 17,
    name: "National Examinations Appeals Tribunal",
    cname: "dropdown-link",
    url: "/NationalExaminationsAppealsTribunal",
  },
  {
    id: 18,
    name: "Political Parties Disputes Tribunal",
    cname: "dropdown-link",
    url: "/PoliticalPartiesDisputesTribunal",
  },
//   {
//     id: 19,
//     name: "Public-Private Partnership Committee (PPPPC)",
//     cname: "dropdown-link",
//   },
  {
    id: 19,
    name: "Rent Restriction Tribunal",
    cname: "dropdown-link",
    url: "/RentRestrictionsTribunal",
  },
    {
    id: 20,
    name: "Retirement Benefits Appeals Tribunal",
    cname: "dropdown-link",
    url: "/RetirementsBenefitsAppealsTribunal",
  },
  {
    id: 21,
    name: "State Corporations Appeals Tribunal (SCAT)",
    cname: "dropdown-link",
  },
    {
    id: 22,
    name: "Standards Tribunal",
    cname: "dropdown-link",
    url: "/StandardsTribunal",
  },
   {
    id: 23,
    name: "Sports Disputes Tribunal",
    cname: "dropdown-link",
    url: "/SportsDisputeTribunals",
  },
  
  {
    id: 24,
    name: "Transport Licensing Appeals Board",
    cname: "dropdown-link",
    url: "/contact",
  },
  {
    id: 25,
    name: "Tax Appeals Tribunal",
    cname: "dropdown-link",
    url: "/TaxAppealsTribunal",
  },
 
  {
    id: 26,
    name: "Water Tribunal",
    cname: "dropdown-link",
    url: "/WaterTribunal",
  },
 

//   {
//     id: 24,
//     name: "Seeds and Plants Tribunal",
//     cname: "dropdown-link",
//   },
//   {
//     id: 25,
//     name: "Tourism Tribunal",
//     cname: "dropdown-link",
//   },
//   {
//     id: 26,
//     name: "Refugee Status Appeals Committee",
//     cname: "dropdown-link",
//   },
//   {
//     id: 27,
//     name: "Privatization Appeals Tribunal",
//     cname: "dropdown-link",
//   },
//   {
//     id: 28,
//     name: "Public Benefits Organizations Disputes Tribunal",
//     cname: "dropdown-link",
//   },

//   {
//     id: 30,
//     name: "Parliamentary Pension Appeals Tribunal",
//     cname: "dropdown-link",
//   },
//   {
//     id: 31,
//     name: "Insurance Appeals Tribunal",
//     cname: "dropdown-link",
//   },
//   {
//     id: 32,
//     name: "Kenya Citizenship and Immigration Service Appeal Tribunal",
//     cname: "dropdown-link",
//   },


//   {
//     id: 35,
//     name: "Accreditation Appeals Tribunal",
//     cname: "dropdown-link",
//   },
//   {
//     id: 36,
//     name: "National Construction Appeals Board",
//     cname: "dropdown-link",
//   },
//   {
//     id: 37,
//     name: "Biosafety Appeals Board",
//     cname: "dropdown-link",
//   },

];
