

const Page = require('./page_old');
// import  {Page} from './page.mjs';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert() {
        return $('#flash');
    }
}

module.exports = new SecurePage();
