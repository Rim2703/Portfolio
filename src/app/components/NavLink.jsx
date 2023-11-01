import { Link } from 'react-scroll';

const NavLink = ({ href, title }) => {
    return (
        <Link
            activeClass="active"
            to={href.replace("#", "")}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white cursor-pointer"
            activeStyle={{ color: 'white' }}
        >
            {title}
        </Link>
    );
};

export default NavLink;
