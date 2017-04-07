# Club-manager by Koji Nakagawa

#### Javascript 4th Week Independent Project for Epicodus, 4.07.2017

## Description
* This website is the fourth independent project for Epicodus "Javascript" class.
* This website offers club manager acount page.


## Prerequisites
You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Angular CLI](https://cli.angular.io/)


## Installation
* `git clone this repository`
* `cd club-manager`
* `npm install`
* `bower install`
* `ng s` to start a dev server. Navigate to `http://localhost:4200/`.


## Technologies Used
  * HTML
  * CSS
  * Bootstrap
  * Javascript
  * Typescript
  * Angular
  * Node.js
  * npm
  * bower
  * Firebase

  ## Planning

  1. Configuration/dependencies
    * angular CLI
    * bootstrap
    * Firebase

  2. Specs

  |Behavior|Input|Output|
  |--------|-----|------|
  | Retrieve member list from firebase and Show Detail | - | Show Team Members |
  | Search User by Category   | Forward  | List of Forward Members Show up |
  | Add, Edit, Delete Member | Click Add or Edit or Delete button  | the list changes based on the user action |

  3. Integration

    Component
    * app (template page)

    * index
        -- list out all members

    * member-detail
        -- see member detail info

    * about
        -- about the site

    * edit-member
        -- edit or delete member

    * admin
        -- add member, access to edit

    Model
    * member class (name, picUrl, position, description)

    Service
    * member service

    Pipe
    * position-filter
    * name-filter

    Routing
    * app.routing 

  4. UX/UI
    * Include bootstrap
    * Develop custom style

    * firebase (not completed)

##### This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0.

## License
  _Copyright (c) 2017 **Koji Nakagawa**_

  _Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:_

  _The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software._

  _THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE._
