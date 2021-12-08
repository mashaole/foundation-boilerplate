import React from 'react'
import Footer from '../components/Footer'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Title>About Us</Footer.Title>
                        <Footer.Link href="#">Story</Footer.Link>
                        <Footer.Link href="#">Clients</Footer.Link>
                        <Footer.Link href="#">Testimonials</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Services</Footer.Title>
                        <Footer.Link href="#">Marketings</Footer.Link>
                        <Footer.Link href="#">Design</Footer.Link>
                        <Footer.Link href="#">Development</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Contact Us</Footer.Title>
                        <Footer.Link href="#">South Africa</Footer.Link>
                        <Footer.Link href="#">Nigeria</Footer.Link>
                        <Footer.Link href="#">Lesotho</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Socials</Footer.Title>
                        <Footer.Link href="#">Facebook</Footer.Link>
                        <Footer.Link href="#">Twitter</Footer.Link>
                        <Footer.Link href="#">Youtube</Footer.Link>
                        <Footer.Link href="#">TikTok</Footer.Link>
                    </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}