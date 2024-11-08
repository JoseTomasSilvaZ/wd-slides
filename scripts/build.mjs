import { $, cd, fs, glob, echo, chalk } from "zx";

const { yellowBright: yellow, greenBright: green } = chalk;

$.env.FORCE_COLOR = "1";

// Get all presentation directories
const slideDirs = await glob("presentations/*", {
    onlyDirectories: true,
});

// Clear previous build artifacts
echo("");
echo`[slides] ${green(`Clear last building files`)}`;
await $`rm -rf dist presentations/*/dist`;

// Log found slide directories
echo("");
echo`[build] ${green(`found slides`)} ${yellow(`[
  ${slideDirs.join(",\n  ")}
]`)}`;

// Build the main index slide
echo("");
fs.mkdirSync("dist");
fs.copyFileSync("index.html", "dist/index.html");

// Build each individual slide
for (let dir of slideDirs) {
    const slide = dir.replace("presentations/", "");

    echo("");
    echo`[build] ${green(`Building slide ${yellow(slide)}`)}`;

    // Change to the directory and run the build command
    await cd(dir);
    try {
        await $`rm -rf dist index.html`;
        await $`slidev build --base /presentations/${slide}/ index.md`;
    } catch (error) {
        console.error(`Failed to build slides in ${dir}:`, error);
        process.exit(1); // Exits the script if the build fails
    }

    // Change back to the project root directory
    await cd("../../");
}

// Compose slide pages by copying them to the .site directory
echo("");
echo`[build] ${green(`Composing slides pages`)}`;
for (let dir of slideDirs) {
    const destDir = `dist/${dir}/`;
    const srcDir = `${dir}/dist/`;

    // Log file operation
    echo`Copying ${srcDir} to ${destDir}`;
    try {
        // Check if source directory exists and log contents
        const files = await fs.readdir(srcDir);
        console.log(`Files in ${srcDir}:`, files);

        // Copy files to destination
        await fs.copy(srcDir, destDir);
    } catch (error) {
        console.error(`Error copying files from ${srcDir} to ${destDir}:`, error);
        process.exit(1); // Exits the script if copying fails
    }
}

// Build completed
echo("");
echo`[build] Build completed`;
