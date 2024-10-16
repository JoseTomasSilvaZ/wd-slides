import { $, cd, argv, echo } from "zx";

$.env.FORCE_COLOR = "1";

const [slide] = argv._;

if (slide) {
    echo`Opening presentation: ${slide}`;
    await cd(`presentations/${slide}`);
} else {
    echo`Opening indexation of slides`;
}
await $`slidev index.md --log info --open`;
