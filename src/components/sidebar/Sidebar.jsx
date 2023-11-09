import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './sidebar.scss';
import { useSelector } from 'react-redux';
const sidebarNavItems = [
    {
        display: 'Profil',
        icon: <i className='bx bx-user'></i>,
        to: '/layout/user',
        section: 'user'
    }
]

const Sidebar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();
    const navigate = useNavigate();
    const user = useSelector(state => state.user)
    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    useEffect(() => {
        const curPath = window.location.pathname.split('/')[0];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return <div className='sidebar'>
        <div className="sidebar__logo" onClick={() => { navigate("/layout") }}>
            Code Wiz Chat
        </div>
        <div className='sidebar__lastRecent scroll'>
            Geçmiş Sohbetler
            {Object.values(user.chats).map((key) => (
                <div key={key.chatName} className='container mb-2' style={{ cursor: 'pointer' }}>
                    <div className='card border-2'>
                        <div className='card-body d-flex justify-content-between align-items-center'>
                            <i className='bx bxs-message'></i>
                            <div className="text-center">
                                <h5 className="card-title">{key.chatName}</h5>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div ref={sidebarRef} className="sidebar__menu">
            <div
                ref={indicatorRef}
                className="sidebar__menu__indicator"
                style={{
                    transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                }}
            ></div>
            {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="sidebar__menu__item__icon">
                                {item.icon}
                            </div>
                            <div className="sidebar__menu__item__text">
                                {`${user.userName}`}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>;
};

export default Sidebar;
