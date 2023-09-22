
<a name="readme-top"></a>

<div align="center">
<a href="https://www.npmjs.com/package/ael-modal"><img alt="npm" src="https://img.shields.io/npm/dw/ael-modal"></a>
<b

<a href="https://www.npmjs.com/package/ael-modal"><img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/ael-modal"></a>

<a href="https://www.npmjs.com/package/ael-modal">

<img alt="Maintenance Status" src="https://img.shields.io/badge/maintenance-active-green.svg" />

</a>

</div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
  </a>

  <h3 align="center">AEL-MODAL</h3>

  <p align="center">
first package npm  For openclassRoom Project 
    <br />
    <br />
    <br />
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

HRNet project which aims to be able to add new employees to a sortable table.

### Built With

[![React][React.js]][React-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   npm install ael-modal
   ```
2. Install NPM packages
   ```sh
   npm install sass
   ```


## Example

```js
import React, { useState } from "react"; // Assurez-vous d'importer React également
import Modal from "ael-modal";

const Example = () => {
  const [modalIsDisplayed, setModalIsDisplayed] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setModalIsDisplayed(true);
  };

  const onCloseModal = () => {
    setModalIsDisplayed(false);
  };

  return (
    <section className="container">
      <h1 className="title">Modal Exemple</h1>
      <form onSubmit={handleSubmit}>
        <button type="submit">Click me</button>

      </form>
      <Modal
        isDisplayed={modalIsDisplayed}
        onCloseModal={onCloseModal}
        content={
          <div className="modal">
            <p>Message de la modal</p> 
            {/* <div onClick={onCloseModal} className="custom-modal-btn-close">
              Fermer
            </div> */}
          </div>
        }
      />
    </section>
  );
};

export default Example;
```

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- CONTACT -->

## LINK

Project Link: [https://www.npmjs.com/package/ael-modal)

<!-- MARKDOWN LINKS & IMAGES -->

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
