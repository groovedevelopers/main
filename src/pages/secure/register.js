import { html, LitElement, property } from 'lit-element';
import { routerSubject$ } from '../../util/page-router';
import { SubSink } from 'subsink';
// import { gethome } from '../util/firebase.config';
import { switchMap, tap, map, filter } from 'rxjs/operators';
import { BehaviorSubject, combineLatest } from 'rxjs';
// import {  getBlogCategoriesFromFirebase, getAllBlog } from '../util/firebase.config';

// import 'elix/define/SlidingPages.js';
class Register extends LitElement {
  createRenderRoot() {
    return this;
  }

  subs = new SubSink();

  connectedCallback() {
    super.connectedCallback();
    routerSubject$.next(false);
  }

  disconnectedCallback() {
    this.subs.unsubscribe();
    super.disconnectedCallback();
  }

  render() {
    return html`
      <header class="header_area">
        <div class="main_menu">
          <nav
            class="navbar navbar-expand-lg navbar-light"
            style="background:white !important; "
          >
            <div class="container" style="display:flex; ">
              <!-- Brand and toggle get grouped for better mobile display -->
              <a class="navbar-brand logo_h" href="home" style="color: black">
                < Back
              </a>

              <!-- Collect the nav links, forms, and other content for toggling -->

              <div class="">
                <ul>
                  <li>
                    <a
                      href="login"
                      class="sign_up"
                      style="color:black; background:transparent;"
                    >
                      Login to your account
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <!--================Header Menu Area =================-->

      <!--================Hero Banner Area Start =================-->
      <!-- <section class="hero-banner d-flex align-items-center">
        <div class="container text-center"></div>
      </section> -->
      <!--================Hero Banner Area End =================-->

      <section class="blog_area area-padding">
        <div
          style="margin:0 auto; width: 40%;
            padding: 10px;"
        >
          <div style="margin:0 auto; width: 50%;">
            <a class="navbar-brand logo_h" href="home"
              ><img src="img/logo2.png" alt=""
            /></a>
          </div>
          <p style="margin:0 auto; width: 60%;">Register To Groove Developers</p>

          <br />

          <div class="container">
            <div class="row">
              <div class="col-sm-5">
                <form action="/action_page.php">
                  <div class="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" class="form-control" id="email" />
                  </div>
                  <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" id="pwd" />
                  </div>
                  <div class="form-group">
                    <label for="pwd">Confirm Password:</label>
                    <input type="password" class="form-control" id="pwd" />
                  </div>
                  <div class="checkbox">
                    <label><input type="checkbox" /> Remember me</label>
                  </div>
                  <button type="submit" class="btn btn-default">Submit</button>
                </form>
              </div>

              <span>
                <div class="vl"></div>
                <br />

                <p>OR</p>

                <div class="vl"></div>
              </span>

              <div class="col-sm-4">
                <button class="btn text-right">
                  <i class="fab fa-google"> </i>
                  &nbsp; Continue with Google
                </button>

                &nbsp;&nbsp;&nbsp;

                <button class="btn text-right">
                  <i class="fab fa-facebook"> </i>
                  &nbsp; Continue with Facebook
                </button>

                &nbsp;&nbsp;&nbsp;

                <button class="btn text-right">
                  <i class="fab fa-apple"> </i>
                  &nbsp; Continue with Apple
                </button>
              </div>

              <!-- <div style="margin:0 auto; width: 30%;">
                &nbsp;&nbsp;&nbsp;
                <br />
                <a href="home"> Can't login ? </a>
              </div> -->
            </div>
          </div>
        </div>
      </section>

      <!--================Header Menu Area =================-->

      <style>
        .vl {
          border-left: 1px solid black;
          height: 90px;
        }
      </style>
    `;
  }
}

customElements.define('register-page', Register);
