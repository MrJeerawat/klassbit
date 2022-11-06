import React from 'react'
import ContactFacebook from '../nav/contact/ContactFacebook'
import ContactLine from '../nav/contact/ContactLine'
import ContactNo from '../nav/contact/ContactNo'
import Contacts from '../nav/Contacts'
import Logo from '../nav/Logo'
import MenuBar from '../nav/MenuBar'
import MenuItem from '../nav/MenuItem'
import TitleBar from '../nav/TitleBar'
import BackgroundKlass from './BackgroundKlass'
import CardContents from './CardContents'
import Content from './Content'
import './klass.css'
const Klass = () => {
    const items = ['Home', 'About Us', 'Courses', 'Testimonial', 'Contact Us']
    return (
        <>
            <div className='container-klass'>
                <BackgroundKlass>
                    <TitleBar>
                        <Logo />
                        <MenuBar>
                            {items.map((item, index) => {
                                return (
                                    <MenuItem key={index} title={item} />
                                )
                            })}
                        </MenuBar>
                        <Contacts>
                            <ContactLine />
                            <ContactFacebook />
                            <ContactNo />
                        </Contacts>
                    </TitleBar>
                    <Content />
                </BackgroundKlass>
            </div>
            <div className='container-klass-sec'></div>
            <CardContents />
        </>
    )
}

export default Klass