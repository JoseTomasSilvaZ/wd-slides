import { $, cd, argv, echo } from "zx";

$.env.FORCE_COLOR = "1";

const [slide] = argv._;
echo`Changing directory to presentations/${slide}`;
try {
    await cd(`presentations/${slide}`);
} catch (error) {
    echo`Error changing directory: ${error}`;
}

echo`Running slidev export command`;
try {
    await $`slidev export --format pdf`;
    echo`Export completed successfully`;
} catch (error) {
    echo`Error during export: ${error}`;
}
