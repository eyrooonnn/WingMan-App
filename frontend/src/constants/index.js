import { MdDashboard, MdShoppingCart, MdOutlineAccessTimeFilled, MdError } from "react-icons/md";
import { AiFillQuestionCircle } from "react-icons/ai";
import { IoMegaphoneSharp } from "react-icons/io5";

export const signinInputs = [
    {
        id: 1,
        name: "email",
        type: "text",
        placeholder: "Enter your CvSU Email",
        title: "Email should have \"@cvsu.edu.ph\" on it."
    },
    {
        id: 2,
        name: "password",
        type: "password",
        placeholder: "Password",
        title: "Password must be a minimum of 8 characters."
    }
]

export const joinusInputs = [
    {
        id: 0,
        name: "fName",
        type: "text",
        placeholder: "First Name",
        maxLength: 25,
        title: "Your first name. Ex. Juan"
    },
    {
        id: 1,
        name: "lName",
        type: "text",
        placeholder: "Last Name",
        maxLength: 25,
        title: "Your last name. Ex. Dela Cruz"
    },
    {
        id: 2,
        name: "studentNum",
        type: "text",
        placeholder: "Student Number",
        maxLength: 9,
        title: "Student number must be exactly 9 digits only."
    },
    {
        id: 3,
        name: "email",
        type: "text",
        placeholder: "CvSU Email",
        maxLength: 255,
        title: "Email should have \"@cvsu.edu.ph\" on it."
    },
    {
        id: 4,
        name: "password",
        type: "password",
        placeholder: "Password",
        maxLength: 255,
        title: "Password must be a minimum of 8 characters."
    },
    {
        id: 5,
        name: "confPassword",
        type: "password",
        placeholder: "Confirm Password",
        maxLength: 255,
        title: "Must be the same as above."
    },
    {
        id: 6,
        name: "username",
        type: "text",
        placeholder: "Username",
        maxLength: 255,
        title: "Username must be a minimum of 8 characters."
    }
]

export const navIcons = [
    <MdDashboard />,
    <MdShoppingCart />,
    <MdOutlineAccessTimeFilled />,
    <IoMegaphoneSharp />,
    <MdError />,
    <AiFillQuestionCircle />,
]

export const navLinks = [
    {
        id: 0,
        name: "Dashboard",
        link: "/dashboard"
    },
    {
        id: 1,
        name: "Marketplace",
        link: "/marketplace"
    },
    {
        id: 2,
        name: "News & Announcements",
        link: "/news-and-announcements"
    },
    {
        id: 3,
        name: "FAQs",
        link: "/faqs"
    },
    {
        id: 4,
        name: "Appointments",
        link: "/appointments"
    },
    {
        id: 5,
        name: "Complaint System",
        link: "/complaint-system"
    },
]


export const navHeader = [
    {
        id: 0,
        name: 'Good day, ',
        link: "/dashboard"
    },
    {
        id: 1,
        name: "Marketplace",
        link: "/marketplace"
    },
    {
        id: 2,
        name: "Appointments",
        link: "/appointments"
    },
    {
        id: 3,
        name: "News & Announcements",
        link: "/news-and-announcements"
    },
    {
        id: 4,
        name: "Complaint System",
        link: "/complaint-system"
    },
    {
        id: 5,
        name: "FAQs",
        link: "/faqs"
    },
]

export const navMenu = [
    {
        id: 0,
        name: "Your Profile",
        link: "/profile"
    },
    {
        id: 1,
        name: "Your Cart",
        link: "/cart"
    },
    {
        id: 2,
        name: "Your Appointments",
        link: "/appointments-user"
    },
    {
        id: 3,
        name: "Your Questions",
        link: "/faq-user"
    },
    {
        id: 4,
        name: "Your Complaints",
        link: "/complaints-user"
    }
]