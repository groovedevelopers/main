import { html, LitElement, property } from 'lit-element';
import {routerSubject$} from '../util/page-router';
import { SubSink } from 'subsink';
import { getsettings } from '../util/firebase.config';
import { switchMap, tap, map,filter } from 'rxjs/operators';

class Footer extends LitElement {
  createRenderRoot() {
    return this;
  }

  subs = new SubSink();

  settings$ = getsettings().pipe(
    tap((settings) => (this.settings = settings)),
  );

  @property()
  settings;

  connectedCallback() {
    super.connectedCallback();
    this.subs.sink = this.settings$.subscribe();
    routerSubject$.next(false)
  }

  disconnectedCallback() {
    this.subs.unsubscribe();
    super.disconnectedCallback();
  }
  render() {
    return html`
<!-- Footer Start -->
		
 <!-- ================ start footer Area ================= -->
 <footer class="footer-area">
        <div class="container">
            <div class="row">

                <div class="col-lg-3 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
                    <h4>About Us</h4>
                    <p>${this.settings?.about}</p>
                    <div class="footer-logo">
                        <img src="img/logo.png" alt="">
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
                    <h4>Contact Info</h4>
                    <div class="footer-address">
                        <p>Address : ${this.settings?.address}</p>
                        <span>Phone : ${this.settings?.phone}</span>
                        <span>Email : ${this.settings?.email}</span>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
                    <h4>Important Link</h4>
                    <ul>
                        <li><a href="#">Templates</a></li>
                        <li><a href="#">Search Domain</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Privacy &amp; Policy</a></li>
                    </ul>
                </div>

                <div class="col-lg-3 col-md-8 mb-4 mb-xl-0 single-footer-widget">
                    <h4>Newsletter</h4>
                    <p>Get informed first of our offers and newly added templates</p>

                    <div class="form-wrap" id="mc_embed_signup">
                        <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                        method="get">
                        <div class="input-group">
                            <input type="email" class="form-control" name="EMAIL" placeholder="Your Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your Email Address '">
                            <div class="input-group-append">
                                <button class="btn click-btn" type="submit">
                                    <i class="fab fa-telegram-plane"></i>
                                </button>
                            </div>
                        </div>
                        <div style="position: absolute; left: -5000px;">
                            <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value="" type="text">
                        </div>

                        <div class="info"></div>
                    </form>
                </div>

            </div>
        </div>
        <div class="footer-bottom row align-items-center text-center text-lg-left no-gutters">
            <p class="footer-text m-0 col-lg-8 col-md-12"><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved Groove Developers Inc</p>
            <div class="col-lg-4 col-md-12 text-center text-lg-right footer-social">
                <a href="${this.settings?.facebook}" target="_blank"><i class="ti-facebook"></i></a>
                <a href="${this.settings?.twitter}" target="_blank"><i class="ti-twitter-alt"></i></a>
                <a href="${this.settings?.instagram}" target="_blank"><i class="ti-instagram"></i></a>
                <a href="${this.settings?.linkedin}" target="_blank"><i class="ti-linkedin"></i></a>
            </div>
        </div>
    </div>
</footer>
<!-- ================ End footer Area ================= -->


`
}
}


customElements.define('footer-component', Footer)