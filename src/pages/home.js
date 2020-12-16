import { html, LitElement, property } from 'lit-element';
import { routerSubject$ } from '../util/page-router';
import { SubSink } from 'subsink';
// import { gethome } from '../util/firebase.config';
import { switchMap, tap, map, filter } from 'rxjs/operators';
import { BehaviorSubject, combineLatest } from 'rxjs';
// import {  getBlogCategoriesFromFirebase, getAllBlog } from '../util/firebase.config';

// import { classMap } from 'lit-html/directives/class-map';

// const carouselClassesActive = {
//  "carousel-item": true, active: true
// }

// const carouselClassesNonActive =  {

//  "carousel-item": true, active: false
// }

import 'elix/define/SlidingPages.js';
class Home extends LitElement {
  createRenderRoot() {
    return this;
  }

  subs = new SubSink();

  //   home$ = gethome().pipe(
  //     tap((home) => (this.home = home)),
  //   );

  //   blogsubject$ = new BehaviorSubject([]);
  //   // categoryName$ = queryString$.pipe(queryParamMapper('blogCategory'));

  //   // fetch categories from firebase
  //   blogCategories$ = getBlogCategoriesFromFirebase().pipe(tap((blogCat) => this.blogCategories = blogCat))

  //   // fetch all blogs from firebase, but customizse date first
  //   blogs$ = getAllBlog().pipe( map(items => {

  // // for evervy item in a blog, change the dat
  //     items.forEach(item => {
  //       // firebase timestap returns a date object. from that object, call the tostring medthod.
  //       // The tostring method create a date.
  //       // but we want to the date to be in a local so we put it in a new date object and call the
  //       // localedatestring methos

  //       const firebaseTimesate = item.date.toDate()
  //       item.date = new Date(firebaseTimesate).toLocaleDateString()
  //     })
  //     return items
  //   }),  tap((theBlogs) => this.blogs = theBlogs))

  //   @property()
  //   blogs = [];
  //   @property()
  //   blogCategories = []

  //   @property()
  //   home;

  connectedCallback() {
    super.connectedCallback();
    // this.subs.sink = this.home$.subscribe();
    // this.subs.sink = this.blogCategories$.subscribe();
    // this.subs.sink = this.blogs$.subscribe();
    routerSubject$.next(false);
  }

  disconnectedCallback() {
    this.subs.unsubscribe();
    super.disconnectedCallback();
  }

  render() {
    return html`
      

              <!-- <button
                @click=${() =>
                document.getElementById('searchSlide').goPrevious()}
              >
                backwrat
              </button>
              <button
                @click=${() => document.getElementById('searchSlide').goNext()}
              >
                forward
              </button> -->
              <!-- <elix-sliding-pages id="searchSlide" >
                <div>slide 1</div>

                <div>slice 2 1</div>
              </elix-sliding-pages> -->


              <!--================Home Banner Area =================-->
    <section class="home_banner_area">
        <div class="banner_inner d-flex align-items-center">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 offset-lg-6 col-xl-5 offset-xl-7">
                        <div class="banner_content">
                            <h3>Get your business <br/>online & faster</h3>
                            <p>Choose from our collection of 3937 pre designed templates for business, industry and personal website needs. Launch your website today.</p>
                            <a class="banner_btn" href="start">Get Started Now<i class="ti-arrow-right"></i></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <!--================End Home Banner Area =================-->



    <!--================About  Area =================-->
    <section class="statics-area area-padding">
        <div class="container">
            <div class="row">

                <div class="col-lg-5">
                    <div class="image-box">
                        <img src="img/banner/about3.png" alt="">
                    </div>
                </div>

                <div class="offset-lg-1 col-lg-6">
                    <div class="area-heading">
                        <h4>See how it works. </h4>
                        <h6>Choose your website template</h6>

                        <p>Select from any of our industry-leading website templates to fit your personal and professional needs</p>
                    </div>
                    <div class="single-data">
                        <i class="ti-paint-bucket"></i>
                        <p>An easy to use administrator dashboard</p>
                    </div>
                    <div class="single-data">
                        <i class="ti-check-box"></i>
                        <p>Add more features to your website</p>
                    </div>
                    <div class="single-data">
                        <i class="ti-ruler-pencil"></i>
                        <p>Reach out to your audience, with our marketing tools</p>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <!--================About Area End =================-->


    <!--================About  Area =================-->
    <section class="statics-area area-padding">
        <div class="container">
            <div class="row">

                

                <div class="offset-lg-1 col-lg-6">
                    <div class="area-heading">
                        <h4>Form Female From<br>Cattle Evening. </h4>
                        <h6>And appear great open bearing evening dominion vodi </h6>

                        <p>There earth face earth behold. She'd stars made void two given do and also. Our own grass days.  Greater male Shall There faced earth behold She star</p>
                    </div>
                    <div class="single-data">
                        <i class="ti-paint-bucket"></i>
                        <p>Set dry signs spirit a kind First shall them.</p>
                    </div>
                    <div class="single-data">
                        <i class="ti-check-box"></i>
                        <p>He two face one moved dominion man you're likeness</p>
                    </div>
                    <div class="single-data">
                        <i class="ti-ruler-pencil"></i>
                        <p>Sea forth fill have divide be dominion from life</p>
                    </div>

                </div>

                <div class="col-lg-5">
                    <div class="image-box">
                        <img src="img/banner/about3.png" alt="">
                    </div>
                </div>


            </div>

        </div>
    </section>
    <!--================About Area End =================-->



    <!--================ Start Brands Area =================-->
    <section class="brands-area area-padding-bottom">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="owl-carousel brand-carousel">
                        <!-- single-brand -->
                        <div class="single-brand-item d-table">
                            <div class="d-table-cell">
                                <img src="https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.1.0/bbc_news_logo.png" alt="">
                            </div>
                        </div>
                        <!-- single-brand -->
                        <div class="single-brand-item d-table">
                            <div class="d-table-cell">
                                <img src="img/logo/2.png" alt="">
                            </div>
                        </div>
                        <!-- single-brand -->
                        <div class="single-brand-item d-table">
                            <div class="d-table-cell">
                                <img src="img/logo/3.png" alt="">
                            </div>
                        </div>
                        <!-- single-brand -->
                        <div class="single-brand-item d-table">
                            <div class="d-table-cell">
                                <img src="img/logo/4.png" alt="">
                            </div>
                        </div>
                        <!-- single-brand -->
                        <div class="single-brand-item d-table">
                            <div class="d-table-cell">
                                <img src="img/logo/5.png" alt="">
                            </div>
                        </div>
                        <!-- single-brand -->
                        <div class="single-brand-item d-table">
                            <div class="d-table-cell">
                                <img src="img/logo/3.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--================ End Brands Area =================-->









  

    `;
  }
}

customElements.define('home-page', Home);
