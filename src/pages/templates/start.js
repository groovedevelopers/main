import { html, LitElement, property } from 'lit-element';
import { routerSubject$ } from '../../util/page-router';
import { SubSink } from 'subsink';
// import { gethome } from '../util/firebase.config';
import { switchMap, tap, map, filter } from 'rxjs/operators';
import { BehaviorSubject, combineLatest } from 'rxjs';
// import {  getBlogCategoriesFromFirebase, getAllBlog } from '../util/firebase.config';

import 'elix/define/SlidingPages.js';
class Start extends LitElement {
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
              <a class="navbar-brand logo_h" href="home"
                ><img src="img/logo2.png" alt=""
              /></a>

              <!-- Collect the nav links, forms, and other content for toggling -->

              <div class="">
                <ul>
                  <li>
                    <a
                      href="#"
                      class="sign_up"
                      style="color:black; background:transparent;"
                    >
                      I'm just browsing
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
          style="margin:0 auto; width: 50%;
  padding: 10px;"
        >
          <elix-sliding-pages id="searchSlide">
            <div>
              <div class="">
                <h1>What's your site about?</h1>
                <p>
                  This will help us find you some starting ideas and examples.
                </p>
              </div>
              <div class="radio-toolbar">
                <input
                  type="radio"
                  id="radioAnimals"
                  name="radioFilter"
                  value="animals"
                  checked
                />
                <label for="radioAnimals">Animals</label>

                <input
                  type="radio"
                  id="radioBeauty"
                  name="radioFilter"
                  value="beauty"
                />
                <label for="radioBeauty">Beauty &amp;spa</label>

                <input
                  type="radio"
                  id="radioOrange"
                  name="radioFilter"
                  value="orange"
                />
                <label for="radioOrange">Orange</label>

                <input
                  type="radio"
                  id="radioOrange"
                  name="radioFilter"
                  value="orange"
                />
                <label for="radioOrange">Orange</label>

                <input
                  type="radio"
                  id="radioOrange"
                  name="radioFilter"
                  value="orange"
                />
                <label for="radioOrange">Orange</label>

                <input
                  type="radio"
                  id="radioOrange"
                  name="radioFilter"
                  value="orange"
                />
                <label for="radioOrange">Orange</label>

                <input
                  type="radio"
                  id="radioOrange"
                  name="radioFilter"
                  value="orange"
                />
                <label for="radioOrange">Orange</label>

                <input
                  type="radio"
                  id="radioOrange"
                  name="radioFilter"
                  value="orange"
                />
                <label for="radioOrange">Orange</label>

                <input
                  type="radio"
                  id="radioOrange"
                  name="radioFilter"
                  value="orange"
                />
                <label for="radioOrange">Orange</label>

                <input
                  type="radio"
                  id="radioOrange"
                  name="radioFilter"
                  value="orange"
                />
                <label for="radioOrange">Orange</label>

                <input
                  type="radio"
                  id="radioOrange"
                  name="radioFilter"
                  value="orange"
                />
                <label for="radioOrange">Orange</label>

                <input
                  type="radio"
                  id="radioOrange"
                  name="radioFilter"
                  value="orange"
                />
                <label for="radioOrange">Orange</label>

                <input
                  type="radio"
                  id="radioOrange"
                  name="radioFilter"
                  value="orange"
                />
                <label for="radioOrange">Orange</label>

                <input
                  type="radio"
                  id="radioOrange"
                  name="radioFilter"
                  value="orange"
                />
                <label for="radioOrange">Orange</label>

                <input
                  type="radio"
                  id="radioOrange"
                  name="radioFilter"
                  value="orange"
                />
                <label for="radioOrange">Orange</label>

                <input
                  type="radio"
                  id="radioOrange"
                  name="radioFilter"
                  value="orange"
                />
                <label for="radioOrange">Orange</label>

                <input
                  type="radio"
                  id="radioOrange"
                  name="radioFilter"
                  value="orange"
                />
                <label for="radioOrange">Orange</label>

                <input
                  type="radio"
                  id="radioOrange"
                  name="radioFilter"
                  value="orange"
                />
                <label for="radioOrange">Orange</label>

                <input
                  type="radio"
                  id="radioOrange"
                  name="radioFilter"
                  value="orange"
                />
                <label for="radioOrange">Orange</label>

                <input
                  type="radio"
                  id="radioOrange"
                  name="radioFilter"
                  value="orange"
                />
                <label for="radioOrange">Orange</label>

                <input
                  type="radio"
                  id="radioOrange"
                  name="radioFilter"
                  value="orange"
                />
                <label for="radioOrange">Orange</label>
              </div>
              <p>&nbsp;</p>
            </div>

            <div>
              <h1>What are your top goals?</h1>
              <p>
                Select all that apply. If something interests you but isn't a
                top priority, no worries. You can add all our features to any
                template.
              </p>
              <div class="radio-toolbar">
                <div style="display: inline-block;">
                  <label class="container"
                    >One
                    <input type="checkbox" checked="checked" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div style="display: inline-block;">
                  <label class="container"
                    >Two
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div style="display: inline-block;">
                  <label class="container"
                    >Three
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div style="display: inline-block;">
                  <label class="container"
                    >Four
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>

            <div>
              <div class="">
                <h1>Where are you in your process?</h1>
                <p>Let us know what stage you're at.</p>
              </div>

              <div class="radio-toolbar">
                <input
                  type="radio"
                  id="radioOne"
                  name="idea"
                  value="one"
                  checked
                />
                <label for="radioOne">one</label>

                <input
                  type="radio"
                  id="radioTwo"
                  name="idea"
                  value="two"
                  checked
                />
                <label for="radioTwo">two</label>
              </div>
            </div>

            
          </elix-sliding-pages>

          <br />

            <button
            @click=${() => document.getElementById('searchSlide').goPrevious()}
            class="btn"
          >
            Back
          </button>
          <div style="float: right">
          <button 
            @click=${() => document.getElementById('searchSlide').goNext()}
            class="btn btn-outline-default"
          >
            Next
          </button>
          <a href="templates">
          <button
            class="btn " 
            style="background:#1f2338; color:#fff"
          >
            Finish
          </button>
          </a>
          </div>

         

          
        </div>
      </section>

      <!--================Header Menu Area =================-->

      <style>
        .radio-toolbar {
          margin: 10px;
        }

        .radio-toolbar input[type='radio'] {
          opacity: 0;
          position: fixed;
          width: 0;
        }

        .radio-toolbar label {
          display: inline-block;
          /* background-color: #ddd; */
          padding: 10px 20px;
          font-family: sans-serif, Arial;
          font-size: 16px;
          border: 2px solid #444;
          border-radius: 4px;
        }

        .radio-toolbar label:hover {
          background-color: #dfd;
        }

        .radio-toolbar input[type='radio']:focus + label {
          border: 2px dashed #444;
        }

        .radio-toolbar input[type='radio']:checked + label {
          background-color: #bfb;
          border-color: #4c4;
        }
      </style>
    `;
  }
}

customElements.define('start-page', Start);
