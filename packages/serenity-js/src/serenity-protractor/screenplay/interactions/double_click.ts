import { Interaction, UsesAbilities } from '../../../serenity/screenplay';
import { BrowseTheWeb } from '../abilities/browse_the_web';
import { Target } from '../ui/target';

export class DoubleClick implements Interaction {

    static on = (target: Target): DoubleClick => new DoubleClick(target);

    performAs(actor: UsesAbilities): PromiseLike<void> {
        const
            browse  = BrowseTheWeb.as(actor),
            el: any = browse.locate(this.target);

        return browse.actions().doubleClick(el).perform();
    }

    constructor(private target: Target) { }

    toString = () => `{0} double-clicks on ${this.target}`;
}
