import { html, LitElement } from 'lit-element';


class Header extends LitElement {
  createRenderRoot() {
    return this;
  }

  connectedCallback(){
    super.connectedCallback()
    
  }
  render() {
    return html`


 <!--================Header Menu Area =================-->
 <header class="header_area">	
        <div class="main_menu">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container" >
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <a class="navbar-brand logo_h" href="home"><img src="img/logo.png" alt=""></a>
                    <button class="navbar-toggler"  type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse offset" id="navbarSupportedContent" style="background:transparent;">
                        <ul class="nav navbar-nav menu_nav ml-auto">
                            <li class="nav-item"><a class="nav-link" href="templates">Templates</a></li> 
                            <li class="nav-item submenu dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Products</a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item"><a class="nav-link" href="search">Find a Domain</a></li> 
                                    <li class="nav-item"><a class="nav-link" href="marketing">Digital Marketing</a></li>
                                    <li class="nav-item"><a class="nav-link" href="hire">Hire an expert</a></li>
                                </ul>
                            </li>
                           
                            <li class="nav-item"><a class="nav-link" href="blog">Blog</a></li>
                        </ul>
                    </div>
                    <div class="right-button">
                        <ul>
                            <li>
                              <a href="login" class="sign_up" style="color:white; background:transparent;">Login</a>
                            <a class="sign_up" href="start">Get Started</a>
                          </li>
                        </ul>
                    </div> 
                </div>
            </nav>
        </div>
    </header>
    <!--================Header Menu Area =================-->




`;
  }
}

customElements.define('header-component', Header);
