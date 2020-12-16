import {  LitElement, html, property } from 'lit-element';
import './components/footer';
import './components/header';

import page from 'page';
import { queryString$, lazyLoad, routerSubject$ } from './util/page-router';
// import { cond } from 'lodash';



export class AppRoot extends LitElement {

  constructor(){
    super()
    this.installRoute();
  }
  createRenderRoot() {
    return this;
  }

  // 'home'|'products' |'view-product'
 
  
  @property()
  routes = '';

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback(){
    super.disconnectedCallback()
  }
 

  installRoute() {
    page.redirect('', '/home');
    page('/home', (context)=> {this.changeRoute(context)});
    // page('/about', (context)=> {this.changeRoute(context)});
    page('/blog', (context)=> {this.changeRoute(context)});
    page('/view-blog', (context)=> {this.changeRoute(context)});
    page('/contact', (context)=> {this.changeRoute(context)});
    page('/start', (context)=> {this.changeRoute(context)});
    page('/login', (context)=> {this.changeRoute(context)});
    page('/register', (context)=> {this.changeRoute(context)});
    page('/templates', (context)=> {this.changeRoute(context)});
    page('*', (context)=> {this.changeRoute(context)});
    page()

    

  }

  changeRoute(context) {
    window.scrollTo(0,0)
    queryString$.next(context.querystring)
    routerSubject$.next(true)
    this.routes = context.pathname
    this.requestUpdate();
   
  }

  currentView() {
    switch (this.routes) {
      case '/home':
        
        return lazyLoad(import('./pages/home'),html`<home-page></home-page>`);
      // case '/about':
      //   return lazyLoad(import('./pages/about'),html`<about-page></about-page>`);
      case '/blog':
        return lazyLoad(import('./pages/blog'),html`<blog-page></blog-page>`);
      case '/view-blog':
        return lazyLoad(import('./pages/view-blog'),html`<view-blog-page></view-blog-page>`);
      case '/contact':
        return lazyLoad(import('./pages/contact'),html`<contact-page></contact-page>`);
      case '/start':
        return lazyLoad(import('./pages/templates/start'),html`<start-page></start-page>`);
      case '/login':
        return lazyLoad(import('./pages/secure/login'),html`<login-page></login-page>`);
      case '/register':
        return lazyLoad(import('./pages/secure/register'),html`<register-page></register-page>`);
      case '/templates':
        return lazyLoad(import('./pages/templates/index'),html`<template-page></template-page>`);
    }
  }
  render() {
    return html`

<div id="at-wrapper" class="at-wrapper at-haslayout">
  ${this.routes !== '/start'? html `<header-component></header-component>`: ''}
      
      ${this.currentView()}
      
      <footer-component></footer-component>
</div>
    `;
  }
}

customElements.define('app-root', AppRoot);
