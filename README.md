# **Assumptions:**

Lets assume that Username: user and Password: 321@pass are valid credentials

After successfull login, the user is redirected to the page with url that contains "/dashboard"

Also, there is no account with Username: wrongUser and Password: 321@wrong

# Project Structure

• Test data is stored in the ```cypress/fixtures``` folder.

• Base URL can be updated in ```cypress.config.js```.

• Test cases are stored in ```cypress/e2e``` folder.

•Page Objects are stored in ```cypress/pages``` folder.

# How to run

## 📌 Prerequisites
Before running the tests, ensure you have:
- **Node.js** (v16 or higher) installed → [Download Node.js](https://nodejs.org/)
- **Git** installed → [Download Git](https://git-scm.com/)
- A package manager (**npm** or **yarn**)

## 🚀 Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/YOUR_USERNAME/medikeeper-cypress.git
cd medikeeper-cypress
npm install
```

## Running Cypress Tests
### Run Tests in Cypress UI Mode

```bash
npx cypress open
```
• Select your browser and click on a test file to run.

### Run Tests in Terminal(without opening the browser)
```bash
npx cypress run
```
