import {step} from '../../screenplay/recording/annotations';
import { PerformsTasks, UsesAbilities } from '../../serenity/screenplay/actor';
import {Action} from '../../serenity/screenplay/performables';
import { BrowseTheWeb } from '../abilities/browse_the_web';

export class Enter implements Action {

    private locator: webdriver.Locator;
    private key: string;

    static theValue(value: string): Enter {
        return new Enter(value);
    }

    into(field: webdriver.Locator): Enter {
        this.locator = field;

        return this;
    }

    thenHit(key: string) {
        this.key = key;

        return this;
    }

    @step("{0} enters '#value' into #locator")
    performAs(actor: PerformsTasks & UsesAbilities) {
        BrowseTheWeb.as(actor).findElement(this.locator).sendKeys(this.value, this.key);
    }

    constructor(private value: string) { }
}