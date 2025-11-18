import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync, mkdirSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');
const publicDir = join(rootDir, 'public');

// Ensure public directory exists
if (!existsSync(publicDir)) {
  mkdirSync(publicDir, { recursive: true });
}

const logoPath = join(publicDir, 'logo.png');

async function generateIconWithBlackBackground(size, outputPath) {
  try {
    // Check if logo exists
    if (!existsSync(logoPath)) {
      console.error(`Logo not found at ${logoPath}`);
      return;
    }

    // Create a black background
    const blackBackground = sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 1 }
      }
    })
      .png();

    // Load and resize the logo
    const logoSize = Math.round(size * 0.8);
    const logo = await sharp(logoPath)
      .resize(logoSize, logoSize, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .toBuffer();

    // Composite the logo on the black background (centered)
    const offset = Math.round(size * 0.1);
    await blackBackground
      .composite([
        {
          input: logo,
          top: offset,
          left: offset
        }
      ])
      .toFile(outputPath);

    console.log(`✓ Generated ${outputPath} (${size}x${size})`);
  } catch (error) {
    console.error(`Error generating ${outputPath}:`, error.message);
  }
}

async function generateIcons() {
  console.log('Generating icons with black backgrounds...\n');

  // Generate PWA icons
  await generateIconWithBlackBackground(192, join(publicDir, 'icon-192.png'));
  await generateIconWithBlackBackground(512, join(publicDir, 'icon-512.png'));

  // Generate favicon (32x32 is common, but we'll make it 64x64 for better quality)
  await generateIconWithBlackBackground(64, join(publicDir, 'favicon.png'));

  // Also create a version for apple-touch-icon (180x180)
  await generateIconWithBlackBackground(180, join(publicDir, 'apple-touch-icon.png'));

  console.log('\n✓ All icons generated successfully!');
}

generateIcons().catch(console.error);

