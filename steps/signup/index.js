import DefaultSteps from '../default';
import page from '../../pages/signup';

class SignupSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	waitForForm() {
		this.page.waitForContainer();
	}
}

export default new SignupSteps();
