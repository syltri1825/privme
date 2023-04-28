import React, { useEffect, useState } from 'react';
import Logo from '@/Components/Logo';
import { useForm, usePage } from '@inertiajs/inertia-react';
import Input from '@/Components/Input';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from '@/Components/Dropdown';
import { Inertia } from '@inertiajs/inertia';
import Button from '@/Components/Button';
import SearchList from '@/Pages/LayoutsComponent/SearchList';
import LinkBack from '@/Components/LinkBack';


export default function SimpleLayouts({ auth, header, children,
    activeDash, activePro, activeSet, activeHel, activeRep, activeNew, nameLogo,
    lengthNew
}) {

    const [navigationMobile, setNavigationMobile] = useState(false);
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const [search, setSearch] = useState("");
    const { errors } = usePage().props;
    const [event, setEvent] = useState({
        listen: '',
        status: false,
        style: {
            'color': 'black',
            'backgroundColor': 'white'
        }
    });
    const [timeOutId, setTimeOutId] = useState(null);
    const [infoNew,setInfoNew] = useState(null)

    useEffect(() => {
        let lenMsg = localStorage.getItem("message")
        if(lenMsg){
            setInfoNew(lenMsg)
        }
    },[])

    const newConsultation = () => {
        localStorage.removeItem("message")
    }

    const handleChange = (e) => {
        setSearch(e.target.value);
        setEvent({
            ...event,
            listen: e.target.value,
            status: true,
            style: {
                'color': 'black',
                'backgroundColor': 'white'
            }
        });
    }

    function handleRightBlur() {
        setTimeOutId(() => setTimeout(() => {
            setEvent((prev) => ({
                ...prev,
                status: false,
                style: {
                    'color': 'black',
                    'backgroundColor': 'white'
                }
            }));
        }))
    }

    function handleWrongFocus() {
        clearTimeout(timeOutId);
    }

    const handleSubSearch = (e) => {
        e.preventDefault();
        Inertia.get(`/form/search/${search}`);
    }


    return (
        <section className="container-fluide text--white">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-3 border--style fixed--position--one pad--one">
                        <div className="col-md-12">
                            <div className="row">
                                <div className='col-md-10'>
                                    <div className="col-md-12">
                                        <div className="new-flex">
                                            <div className='new-flex-child1'>
                                                <LinkBack href="/">
                                                    <Logo nameLogo={nameLogo} />
                                                </LinkBack>
                                            </div>
                                            <div className="new-flex-child2">
                                                <h4 className='text--white'>Artificielle IT JM (Point Client)</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">

                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 shibat--d12">
                            <div className="col-md-12 mt-3">
                                <h1 className='text--white'>
                                    {header && (
                                        <span>{header}</span>
                                    )}
                                </h1>
                                <span>
                                    <div className="py-2">
                                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                                            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                                <div
                                                    className="p-6 text-black btn--color border-b 
                                                    border-gray-200"
                                                >
                                                    You're logged in!
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </div>
                            <div className="col-md-12 mt-3" onBlur={handleRightBlur}
                                onFocus={handleWrongFocus}
                            >
                                <form action="" method="post" onSubmit={handleSubSearch}>
                                    <div className="mt-3">
                                        <label htmlFor="text">Search by category</label>
                                        <Input
                                            type="search"
                                            name="search"
                                            value={search}
                                            id="text"
                                            className='border--sea'
                                            handleChange={(e) => handleChange(e)}
                                        />
                                        <button
                                            type="submit"
                                            className='button--bg mt-1 btn btn-light'
                                        >
                                            Search
                                        </button>

                                    </div>
                                </form>
                                <hr />
                                {/* {
                                event.status &&
                                <SearchList list={event.listen} style={event.style}></SearchList>
                                } */}
                            </div>

                            <div className="col-md-12">

                            </div>
                        </div>
                    </div>
                    <div className="col-md-9 position">
                        <div className="col-md-12 mb-5 fixed--position--two">
                            <Navbar collapseOnSelect expand="lg" variant="dark" className='bg-purple'>
                                <Container className=''>
                                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                    <Navbar.Collapse id="responsive-navbar-nav">
                                        <Nav className="mb-auto">
                                            <LinkBack href={route('dashboard')} active={activeDash} className="form--bi">
                                                Dashboard
                                            </LinkBack>
                                            <LinkBack href={route('reporting')} active={activeRep} className='form--bi'>Reporting</LinkBack>
                                            <LinkBack href={route('smartphone')} className='form--bi'>Smartphone</LinkBack>
                                            <LinkBack href={route('computer')} className='form--bi'>Computer</LinkBack>
                                            <LinkBack href={route('smarttv')} className='form--bi'>Smart Tv</LinkBack>
                                            <LinkBack href={route('tutoriel')} className='form--bi'>Tutorial</LinkBack>
                                            <LinkBack href={route('produit')} className='form--bi'>Other Product</LinkBack>
                                            <LinkBack href={route('mail')} className='form--bi'>Email Adress</LinkBack>
                                            {/* <NavDropdown title="More" id="collasible-nav-dropdown" className='form--bi'>
                                        <NavDropdown.Item active={activeSet} className='form--bi tw'><LinkBack href={route('setting')}>setting</LinkBack></NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item className='form--bi'>
                                            <LinkBack active={activePro} href={route('profile')}>Profile</LinkBack>
                                        </NavDropdown.Item>
                                        </NavDropdown> */}
                                            &nbsp;&nbsp;
                                            <LinkBack active={activeNew} href={route('news')}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-chat-fill" viewBox="0 0 16 16">
                                                    <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
                                                </svg>
                                            </LinkBack>&nbsp;&nbsp;
                                            <span style={{display:"block",position:"fixed",top:"0px",right:"21%",}}></span>
                                            <LinkBack active={activeHel} href={route('help')}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-patch-question-fill form--bi" viewBox="0 0 16 16">
                                                    <path d="M5.933.87a2.89 2.89 0 0 1 4.134 0l.622.638.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636zM7.002 11a1 1 0 1 0 2 0 1 1 0 0 0-2 0zm1.602-2.027c.04-.534.198-.815.846-1.26.674-.475 1.05-1.09 1.05-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745.336 0 .504-.24.554-.627z" />
                                                </svg>
                                            </LinkBack>
                                        </Nav>

                                        <Nav>

                                        </Nav>
                                        <Nav className='hidden sm:flex sm:items-center sm:ml-6'>
                                            <Dropdown className="relative">
                                                <Dropdown.Trigger>
                                                    <span className="inline-flex rounded-md">
                                                        <button
                                                            type="button"
                                                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-light hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                                                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                                            </svg>&nbsp;
                                                            {auth.user.name}
                                                        </button>
                                                    </span>
                                                </Dropdown.Trigger>

                                                <Dropdown.Content>
                                                    {/* <Dropdown.Link href={route('profile')} as="button">
                                                    Profile
                                                </Dropdown.Link>
                                                <Dropdown.Link href={route('news')} as="button">
                                                    Order
                                                </Dropdown.Link> */}
                                                    <Dropdown.Link href={route('logout')} method="post" as="button">
                                                        Log Out
                                                    </Dropdown.Link>
                                                </Dropdown.Content>
                                            </Dropdown>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </div>
                        <div className="col-sm-12 bg-purple-one">
                            <hr />
                            <main>{children}</main>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}























// import React, { useState } from 'react';
// import PortLogo from '@/Components/PortLogo';
// import AppMenuMobile from '@/Components/ShibatCompDash/AppMenuMobile';
// import Dropdown from '@/Components/Dropdown';
// import NavLinkBack from '@/Components/NavLinkBack';
// import ResponsiveNavLinkBack from '@/Components/ResponsiveNavLinkBack';
// import { LinkBack } from '@inertiajs/inertia-react';

// export default function Authenticated({ auth, header, children }) {
//     const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

//     return (
//         <div className="min-h-screen bg-gray-100">
            // <nav className="bg-white border-b border-gray-100">
            //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            //         <div className="flex justify-between h-16">
            //             <div className="flex">
            //                 <div className="shrink-0 flex items-center">
            //                     <AppMenuMobile className="block h-9 w-auto text-gray-500"/>
            //                 </div>
            //                 <div className="shrink-0 flex items-center">
            //                     <LinkBack href="/">
            //                         <PortLogo className="block h-9 w-auto text-gray-500" />
            //                     </LinkBack>
            //                     <h4>SHIBATHEL</h4>
            //                 </div>

            //                 <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
            //                     <NavLinkBack href={route('dashboard')} active={route().current('dashboard')}>
            //                         Dashboard
            //                     </NavLinkBack>
            //                 </div>
            //             </div>

            //             <div className="hidden sm:flex sm:items-center sm:ml-6">
            //                 <div className="ml-3 relative">
                                // <Dropdown>
                                //     <Dropdown.Trigger>
                                //         <span className="inline-flex rounded-md">
                                //             <button
                                //                 type="button"
                                //                 className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                //             >
                                //                 {auth.user.name}

                                //                 <svg
                                //                     className="ml-2 -mr-0.5 h-4 w-4"
                                //                     xmlns="http://www.w3.org/2000/svg"
                                //                     viewBox="0 0 20 20"
                                //                     fill="currentColor"
                                //                 >
                                //                     <path
                                //                         fillRule="evenodd"
                                //                         d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                //                         clipRule="evenodd"
                                //                     />
                                //                 </svg>
                                //             </button>
                                //         </span>
                                //     </Dropdown.Trigger>

                                //     <Dropdown.Content>
                                //         <Dropdown.LinkBack href={route('logout')} method="post" as="button">
                                //             Log Out
                                //         </Dropdown.LinkBack>
                                //     </Dropdown.Content>
                                // </Dropdown>
            //                 </div>
            //             </div>

            //             <div className="-mr-2 flex items-center sm:hidden">
            //                 <button
            //                     onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
            //                     className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            //                 >
            //                     <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            //                         <path
            //                             className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
            //                             strokeLinecap="round"
            //                             strokeLinejoin="round"
            //                             strokeWidth="2"
            //                             d="M4 6h16M4 12h16M4 18h16"
            //                         />
            //                         <path
            //                             className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
            //                             strokeLinecap="round"
            //                             strokeLinejoin="round"
            //                             strokeWidth="2"
            //                             d="M6 18L18 6M6 6l12 12"
            //                         />
            //                     </svg>
            //                 </button>
            //             </div>
            //         </div>
            //     </div>

            //     <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
            //         <div className="pt-2 pb-3 space-y-1">
            //             <ResponsiveNavLinkBack href={route('dashboard')} active={route().current('dashboard')}>
            //                 Dashboard
            //             </ResponsiveNavLinkBack>
            //         </div>

            //         <div className="pt-4 pb-1 border-t border-gray-200">
            //             <div className="px-4">
            //                 <div className="font-medium text-base text-gray-800">{auth.user.name}</div>
            //                 <div className="font-medium text-sm text-gray-500">{auth.user.email}</div>
            //             </div>

            //             <div className="mt-3 space-y-1">
            //                 <ResponsiveNavLinkBack method="post" href={route('logout')} as="button">
            //                     Log Out
            //                 </ResponsiveNavLinkBack>
            //             </div>
            //         </div>
            //     </div>
            // </nav>

//             {header && (
//                 <header className="bg-white shadow">
//                     <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
//                 </header>
//             )}

//             <main>{children}</main>
//         </div>
//     );
// }
