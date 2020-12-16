import { html, LitElement, property } from 'lit-element';
import { routerSubject$ } from '../../util/page-router';
import { SubSink } from 'subsink';
// import { gethome } from '../util/firebase.config';
import { switchMap, tap, map, filter } from 'rxjs/operators';
import { BehaviorSubject, combineLatest } from 'rxjs';
// import {  getBlogCategoriesFromFirebase, getAllBlog } from '../util/firebase.config';

// import 'elix/define/SlidingPages.js';
class Templates extends LitElement {
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
      <!--================Hero Banner Area Start =================-->
      <section class="hero-banner d-flex align-items-center">
        <div class="container text-center">
          <h2>Templates</h2>
        </div>
      </section>
      <!--================Hero Banner Area End =================-->

      <!--================Template Area =================-->
      <section class="blog_area area-padding">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-6">
              <div class="content">
                <img
                  src="https://cdn.pixabay.com/photo/2020/12/09/09/27/women-5816861_1280.jpg"
                  alt="Avatar"
                  class="image"
                  style="width:100%"
                />
                <div class="middle">
                  <span>
                    <a href="register"> <button class="btn btn-default">Start with</button></a>
                    <a href="$1" target="_blank"> <button class="btn btn-secondary">Preview</button></a>
                  </span>
                </div>
                <br>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="content">
                <img
                  src="https://cdn.pixabay.com/photo/2020/12/09/09/27/women-5816861_1280.jpg"
                  alt="Avatar"
                  class="image"
                  style="width:100%"
                />
                <div class="middle">
                  <span>
                  <a href="$1"> <button class="btn btn-default">Start with</button></a>
                    <a href="$1"> <button class="btn btn-secondary">Preview</button></a>
                  </span>
                </div>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="content">
                <img
                  src="https://cdn.pixabay.com/photo/2020/12/09/09/27/women-5816861_1280.jpg"
                  alt="Avatar"
                  class="image"
                  style="width:100%"
                />
                <div class="middle">
                  <span>
                  <a href="$1"> <button class="btn btn-default">Start with</button></a>
                    <a href="$1"> <button class="btn btn-secondary">Preview</button></a>
                  </span>
                </div>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="content">
                <img
                  src="https://cdn.pixabay.com/photo/2020/12/09/09/27/women-5816861_1280.jpg"
                  alt="Avatar"
                  class="image"
                  style="max-width:100%; max-height:100%"
                />
                <div class="middle">
                  <span>
                  <a href="$1"> <button class="btn btn-default">Start with</button></a>
                    <a href="$1"> <button class="btn btn-secondary">Preview</button></a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--================Template Area =================-->

      <style>
        .content {
          position: relative;
          width: 100%;
        }

        .image {
          opacity: 1;
          display: block;
          width: 100%;
          height: auto;
          transition: 0.5s ease;
          backface-visibility: hidden;
        }

        .middle {
          transition: 0.5s ease;
          opacity: 0;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          text-align: center;
        }

        .content:hover .image {
          opacity: 0.3;
        }

        .content:hover .middle {
          opacity: 1;
        }

        .text {
          background-color: #4caf50;
          color: white;
          font-size: 16px;
          padding: 16px 32px;
        }
      </style>
    `;
  }
}

customElements.define('template-page', Templates);
