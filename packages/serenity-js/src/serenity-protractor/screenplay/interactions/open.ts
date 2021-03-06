import { Interaction, UsesAbilities } from '../../../serenity/screenplay';
import { BrowseTheWeb } from '../abilities/browse_the_web';

export class Open implements Interaction {

    static browserOn = (website: string) => new Open(website);

    performAs(actor: UsesAbilities): PromiseLike<void> {
        return BrowseTheWeb.as(actor).get(this.targetWebsite);
    }

    constructor(private targetWebsite: string) { }

    toString = () => `{0} opens the browser at "${this.targetWebsite}"`;
}
