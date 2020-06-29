import pikachu from '../../img/pokemon/pikachu-2.svg';
import eevee from '../../img/pokemon/eevee.svg';
export const ListFeatures = [
  {
    key: 1,
    name: 'Perfected Throw',
    text: `Guarantees excellent throws, Pokémon doesn't attack, move or fly. Also if you're bad enough, any missed ball returns to your hand.`,
    donor: false,
  },
  {
    key: 2,
    name: 'Instant Catch',
    text: `Immediatly exits encounters after successfully catching a Pokémon.`,
    donor: false,
  },
  {
    key: 3,
    name: 'Show Encounter IV',
    text: `Shows the IV of a Pokémon during an encounter in a toast or notification.`,
    donor: false,
  },
  {
    key: 4,
    name: 'Quick Flee',
    text: `Keeps the "Exit Encounter" icon enabled all the time.`,
    donor: false,
  },
  {
    key: 5,
    name: 'Replace names with IV in inventory',
    text: `Replaces Pokémon names with their IV in your Pokémon list.`,
    donor: false,
  },
  {
    key: 6,
    name: 'Show stats on Encounter nameplates',
    text: `During encounters the Pokémon name is replaced with IV%, LVL and Stats.`,
    donor: false,
  },
  {
    key: 7,
    name: 'Skip Encounter Intro',
    text: `Immediately loads up Pokémon encounters ready to catch.`,
    donor: false,
  },
  {
    key: 8,
    name: 'Mass Transfer any Pokémon',
    text: `Allows mass transferring of any kind of pokémon at once, regardless of type.`,
    donor: false,
  },
  {
    key: 9,
    name: 'Quick Evolve',
    text: `Immediatly evolves the pokémon, completely skipping the animation.
    Particularly useful for time-efficient mass evolving.`,
    donor: true,
  },
  {
    key: 10,
    name: 'Skip Non-Shiny Encounters',
    text: `Skips encounters with any pokemon that's not shiny, extremely useful in community days.`,
    donor: true,
  },
  {
    key: 11,
    name: 'Fast Stop',
    text: `Spins pokestops immediatly with a single tap directly from the world view in less than a forth of a second.`,
    donor: true,
  },
];
export const ModalBody = [
  {
    type: 'download',
    title: 'Show your support!',
    text: `Guarantees excellent throws, Pokémon doesn't attack, move or fly. Also if you're bad enough, any missed ball returns to your hand.`,
    donor: false,
  },
];
export const MemberCard = [
  {
    title: 'Coffee Addict',
    icon: eevee,
    about: `Show your support and help keeping Pokémod growing and alive!
    You'll get a well deserved role on Discord, access to a channel exclusive for supporters and will be able to use any emojies that your heart desires.`,
    benefits: {
      title: 'You will get:',
      items: [
        'A special role in our Discord Server',
        'Ability to use external emojies',
        'Access a restrict chatroom where you can discuss the future development of Pokémod',
      ],
    },
    price: 2,
    link: 'https://www.patreon.com/join/pokemod/checkout?rid=5061017',
  },
  {
    title: 'Explorer',
    icon: pikachu,
    about: `Do you want to show your support and help improving and testing Pokémod as well?
    You'll have access to pre-releases versions of Pokémod Espresso, allowing you to experiment with and give feedback on new modules being tested!`,
    benefits: {
      title: 'You will get:',
      items: [
        'The exclusive Beta Tester role',
        'Access to the latest bleeding-edge/beta APKs being cooked at the moment',
        'Lets you participate in the Testers private chatroom',
      ],
    },
    price: 7,
    link: 'https://www.patreon.com/join/pokemod/checkout?rid=5061018',
  },
];
export default { ModalBody, ListFeatures, MemberCard };
