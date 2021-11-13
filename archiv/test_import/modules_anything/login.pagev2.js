// const Page = require('./page.js');
import  Page from './page_v2.js';


class LoginPage extends Page {
    multiTwo(number){
        return number * 2;
    }

}
// const asd = 'asd'
export default new LoginPage();