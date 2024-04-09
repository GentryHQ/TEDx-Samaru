<script setup>
// import MarqueeComp from "../components/MarqueeComp.vue";
import ButtonComp from "../components/ButtonComp.vue";
</script>
<template>
 <div class="footer">
    <div class="faq_footer">
        <div class="img">
            <img class="first-icon" src="../assets/images/Avatar2.png" alt="Avatar2">
            <img class="middle-icon" src="../assets/images/Avatar1.png" alt="Avatar1">
            <img class="last-icon" src="../assets/images/Avatar3.png" alt="Avatar3">
        </div>

        <h5>Still have questions?</h5>
        <p>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
        <router-link :to="{name: 'home'}" class="btn" >GET IN TOUCH</router-link>
    </div>
    <div class="endNote">
      <div class="container">
        <h2>Will you be there?</h2>
        <p>We are looking forward to Reserving a seat for you</p>
        <ButtonComp class="btn">I will be there</ButtonComp>
      </div>
    </div>
    <div class="main-footer">
        <div class="newsletter">
            <div class="newsletter-left">
                <h1>Join our newsletter</h1>
                <p>We’ll send you a nice letter once per week. No spam.</p>
            </div>
            <div class="newsletter-right">
                <input type="email" id="email" name="email" placeholder="Enter your email address" required>
                <ButtonComp class="plain-red">Subscribe</ButtonComp>
            </div>
        </div>
        <hr class="footer-line"/>
        <div class="footer-2">
            <img class="logo" src="../assets/images/footer/footer_logo.png" alt="TedX Logo">
            <div class="footer-2-section">
                <a href="">ABOUT</a>
                <a href="">SPEAKERS</a>
                <a href="">FAQ</a>
            </div>
            <div class="footer-2-section">
                <a href="">JOIN THE COMMUNITY</a>
                <a href="">SPONSORS AND PARTNERS</a>
            </div>
            <div class="footer-2-section">
                <a href="">PRIVACY POLICY</a>
                <a href="">CONTACT US</a>
                <div class="socials">
                    <p>Follow us on</p>
                    <div class="social-links">
                        <a href="https://twitter.com/tedxsamaru" target="_blank"><img src="../assets/images/footer/TwitterLogo.png" alt="X" /></a>
                        <a href="https://www.instagram.com/tedxsamaru" target="_blank"><img src="../assets/images/footer/InstagramLogo.png" alt="Instagram" /></a>
                        <a href="https://www.linkedin.com/company/tedxsamaru" target="_blank"><img src="../assets/images/footer/LinkedInLogo.png" alt="Linkedin" /></a>
                        <a href="tedxsamaru@gmail.com" target="_blank"><img src="../assets/images/footer/Email.png" alt="Gmail" /></a>
                        <a href="" target="_blank"><img src="../assets/images/footer/youtubeLogo.png" alt="youtube" /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
@use '../assets/css/variables' as v;
@use '../assets/css/mixin' as m;
.footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.main-footer {
    display: flex;
    width: 100%;
    padding: 79px 80px;
    flex-direction: column;
    align-items: flex-start;
    gap: 64px;
    background: #000;
    padding: 100px;

    .footer-line {
    height: 1px;
    width: 100%;
    background: #080707;
    }
}

.footer-2 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
    .logo {
        width: 176px;
        height: 42px;
    }

    .footer-2-section {
        display: flex;
        flex-direction: column;
        gap: 28px;

        .socials {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 12px;
            width: 100%;

            p {
                color: v.$White;
                font-family: Inter;
                font-size: 18px;
                font-style: normal;
                font-weight: 400;
                line-height: 22px;
            }

            .social-links {
                display: flex;
                flex-direction: row;
                gap: 12px;
                a img {
                width: 24px;
                height: 24px;
                }
            }
        }
    }

    a {
        text-decoration: underline;
        color: v.$White;
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration-line: underline;
        text-transform: uppercase;
    }

    a:hover{
        color: v.$red;
    }
}

.newsletter {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    .newsletter-left {
        margin-bottom: 20px;
        h1 {
            color: v.$White;
            font-family: Inter;
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            line-height: 30px;
        }
        
        p {
            color: v.$White;
            font-family: Inter;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px; 
        }
    }

    .newsletter-right {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        gap: 16px;
        input {
            display: flex;
            height: 44px;
            flex-direction: column;
            align-items: flex-start;
            flex: 1 0 0;
            border-radius: 5px;
            width: 300px;
            padding-left: 10px;
        }
    }
}

.faq_footer {
    margin-block-start: 3rem;
    background-color: v.$black;
    padding: 2.625rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: v.$White;
    // border-radius: 24px;
    width: 90%;

    h5 {
        font-size: 1.25rem;
        font-weight: v.$fw5;
        margin-block-end: 0.5rem;
        text-align: center;
    }

    p {
        font-size: 1.125rem;
        margin-block-end: 1.25rem;
        margin-bottom: 40px;
        text-align: center;
    }

    .img {
        position: relative;
        display: flex;
        flex-direction: column;
        margin-bottom: 24px;
        width: 120px;
        height: 56px;
        align-items: center;

        .first-icon {
            position: absolute;
            flex-direction: column;
            justify-content: center;
            flex-shrink: 0;
            right: 1px;
        }
        .middle-icon {
            position: absolute;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
            z-index: 3;
            width: 60px;
            height: 60px;
        }
        .last-icon {
            display: flex;
            position: absolute;
            flex-direction: column;
            justify-content: center;
            flex-shrink: 0;
            left: 3px;
        }
    }

    .btn {
        background-color: v.$White;
        color: v.$red;
        padding: 20px 32px;
        text-decoration-line: underline;
        text-align: center;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        text-underline-offset: 3px;
        // text-decoration-skip-ink: none; 
        font-weight: 700;
        line-height: 24px; 
    }

    .btn:hover {
        color: v.$White;
        background-color: v.$red;
    }
}

.endNote {
  background-color: v.$primary-50;
  padding-block: 5rem;
  text-align: center;
  width: 100%;
  margin-top: 80px;

  p {
    margin-block: 20px 48px;
  }

  a {
    text-transform: uppercase;
  }
}

// Media Query

@media screen and (max-width: 768px) {
    .newsletter,
    .newsletter-right,
    .footer-2 {
        flex-direction: column;
    }

    .footer-2-section {
        margin-bottom: 44px;
        a {
            font-size: 18px;
        }
    }
    
    .newsletter-right {
        width: 100%;
        input {
            width: 80%;
        }
    }

    .newsletter-left {
        h1 {
            font-size: 20px;
        }
    }

    .main-footer {
        padding: 50px 20px;
    }

    .footer-line {
        display: none;
    }

    .logo {
       margin: 0;
       padding: 0;
       margin-left: -10px; 
       margin-bottom: 32px;
    }

    .faq_footer {
        border-radius: 16px;
        .btn {
            font-size: 16px;
        }
    }
    .btn {
        font-size: 16px;
    }
}
</style>